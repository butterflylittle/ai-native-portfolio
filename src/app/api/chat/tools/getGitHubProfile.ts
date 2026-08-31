import { tool } from 'ai';
import { z } from 'zod';

const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'butterflylittle';
const GITHUB_API_VERSION = '2022-11-28';

interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  company: string | null;
  location: string | null;
  blog: string | null;
  followers: number;
  following: number;
  public_repos: number;
  created_at: string;
}

interface GitHubRepository {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  archived: boolean;
  topics?: string[];
  pushed_at: string;
}

function githubHeaders(): HeadersInit {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': GITHUB_API_VERSION,
    'User-Agent': 'ai-native-portfolio',
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  return headers;
}

async function fetchGitHub<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    headers: githubHeaders(),
    cache: 'no-store',
  });

  if (!response.ok) {
    const rateLimitRemaining = response.headers.get('x-ratelimit-remaining');
    const detail =
      response.status === 403 && rateLimitRemaining === '0'
        ? 'GitHub API rate limit reached. Configure GITHUB_TOKEN and try again.'
        : `GitHub API request failed with status ${response.status}.`;
    throw new Error(detail);
  }

  return response.json() as Promise<T>;
}

export const getGitHubProfile = tool({
  description:
    "Fetches Lucas Wu's current public GitHub profile, repository statistics, languages, and highlighted repositories. Use it whenever someone asks about my GitHub, repositories, open-source work, stars, or GitHub activity.",
  parameters: z.object({}),
  execute: async () => {
    const encodedUsername = encodeURIComponent(GITHUB_USERNAME);
    const [profile, repositories] = await Promise.all([
      fetchGitHub<GitHubUser>(
        `https://api.github.com/users/${encodedUsername}`
      ),
      fetchGitHub<GitHubRepository[]>(
        `https://api.github.com/users/${encodedUsername}/repos?per_page=100&sort=pushed&direction=desc`
      ),
    ]);

    const publicRepositories = repositories.filter(
      (repository) => !repository.fork && !repository.archived
    );
    const totalStars = publicRepositories.reduce(
      (total, repository) => total + repository.stargazers_count,
      0
    );
    const totalForks = publicRepositories.reduce(
      (total, repository) => total + repository.forks_count,
      0
    );
    const languageCounts = publicRepositories.reduce<Record<string, number>>(
      (counts, repository) => {
        if (repository.language) {
          counts[repository.language] = (counts[repository.language] || 0) + 1;
        }
        return counts;
      },
      {}
    );
    const topLanguages = Object.entries(languageCounts)
      .sort(([, countA], [, countB]) => countB - countA)
      .slice(0, 5)
      .map(([language]) => language);
    const highlightedRepositories = [...publicRepositories]
      .sort(
        (repositoryA, repositoryB) =>
          repositoryB.stargazers_count - repositoryA.stargazers_count ||
          Date.parse(repositoryB.pushed_at) - Date.parse(repositoryA.pushed_at)
      )
      .slice(0, 6)
      .map((repository) => ({
        name: repository.name,
        url: repository.html_url,
        description: repository.description,
        language: repository.language,
        stars: repository.stargazers_count,
        forks: repository.forks_count,
        topics: repository.topics || [],
        updatedAt: repository.pushed_at,
      }));

    return {
      profile: {
        username: profile.login,
        name: profile.name,
        avatarUrl: profile.avatar_url,
        url: profile.html_url,
        bio: profile.bio,
        company: profile.company,
        location: profile.location,
        blog: profile.blog,
        followers: profile.followers,
        following: profile.following,
        publicRepositories: profile.public_repos,
        joinedAt: profile.created_at,
      },
      stats: {
        totalStars,
        totalForks,
        topLanguages,
      },
      repositories: highlightedRepositories,
      fetchedAt: new Date().toISOString(),
    };
  },
});
