import {
  BookOpen,
  ExternalLink,
  GitFork,
  Github,
  MapPin,
  Star,
  Users,
} from 'lucide-react';

interface GitHubProfileResult {
  profile: {
    username: string;
    name: string | null;
    avatarUrl: string;
    url: string;
    bio: string | null;
    company: string | null;
    location: string | null;
    blog: string | null;
    followers: number;
    following: number;
    publicRepositories: number;
  };
  stats: {
    totalStars: number;
    totalForks: number;
    topLanguages: string[];
  };
  repositories: Array<{
    name: string;
    url: string;
    description: string | null;
    language: string | null;
    stars: number;
    forks: number;
  }>;
}

export default function GitHubProfileCard({
  data,
}: {
  data: GitHubProfileResult;
}) {
  if (!data?.profile) return null;

  const { profile, stats, repositories } = data;

  return (
    <section className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 text-zinc-50 shadow-2xl shadow-black/20">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-400 to-transparent opacity-70" />
      <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-2 font-mono text-[10px] tracking-[0.18em] text-zinc-500 uppercase">
        <span>Developer dossier</span>
        <span className="inline-flex items-center gap-2 text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#39d353]" />
          Live · GitHub API
        </span>
      </div>
      <div className="border-b border-zinc-800 bg-[radial-gradient(circle_at_top_right,rgba(57,211,83,0.1),transparent_38%)] p-5">
        <div className="flex items-start gap-4">
          <img
            src={profile.avatarUrl}
            alt={`${profile.username}'s GitHub avatar`}
            className="h-16 w-16 rounded-full border border-zinc-700 ring-4 ring-zinc-900"
          />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h2 className="truncate text-xl font-semibold">
                  {profile.name || profile.username}
                </h2>
                <p className="font-mono text-sm text-zinc-500">
                  @{profile.username}
                </p>
              </div>
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm font-medium transition-colors hover:border-emerald-400/60 hover:text-emerald-300"
              >
                <Github className="h-4 w-4" />
                GitHub
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
            {profile.bio && <p className="mt-3 text-sm">{profile.bio}</p>}
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-zinc-400">
              {profile.location && (
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" /> {profile.location}
                </span>
              )}
              <span className="inline-flex items-center gap-1">
                <Users className="h-3.5 w-3.5" /> {profile.followers} followers
              </span>
              <span>{profile.following} following</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 divide-x divide-zinc-800 border-b border-zinc-800 bg-zinc-900/40">
        <Stat
          icon={<BookOpen className="h-4 w-4" />}
          value={profile.publicRepositories}
          label="Repositories"
        />
        <Stat
          icon={<Star className="h-4 w-4" />}
          value={stats.totalStars}
          label="Stars"
        />
        <Stat
          icon={<GitFork className="h-4 w-4" />}
          value={stats.totalForks}
          label="Forks"
        />
      </div>

      <div className="p-5">
        {stats.topLanguages.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-2">
            {stats.topLanguages.map((language) => (
              <span
                key={language}
                className="rounded-full border border-emerald-400/20 bg-emerald-400/8 px-2.5 py-1 font-mono text-xs text-emerald-300"
              >
                {language}
              </span>
            ))}
          </div>
        )}

        <h3 className="mb-3 text-sm font-semibold">Highlighted repositories</h3>
        <div className="grid gap-3 md:grid-cols-2">
          {repositories.map((repository) => (
            <a
              key={repository.name}
              href={repository.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-zinc-800 bg-zinc-900/45 p-3 transition-all hover:-translate-y-0.5 hover:border-emerald-400/40 hover:bg-zinc-900"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="truncate text-sm font-medium">
                  {repository.name}
                </span>
                <ExternalLink className="h-3.5 w-3.5 shrink-0 text-zinc-600 transition-colors group-hover:text-emerald-400" />
              </div>
              {repository.description && (
                <p className="mt-1 line-clamp-2 text-xs text-zinc-400">
                  {repository.description}
                </p>
              )}
              <div className="mt-3 flex items-center gap-3 font-mono text-xs text-zinc-500">
                {repository.language && <span>{repository.language}</span>}
                <span className="inline-flex items-center gap-1">
                  <Star className="h-3 w-3" /> {repository.stars}
                </span>
                <span className="inline-flex items-center gap-1">
                  <GitFork className="h-3 w-3" /> {repository.forks}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: number;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1 px-2 py-4 text-center">
      <span className="inline-flex items-center gap-1.5 text-lg font-semibold">
        {icon} {value}
      </span>
      <span className="font-mono text-[10px] tracking-wider text-zinc-500 uppercase">
        {label}
      </span>
    </div>
  );
}
