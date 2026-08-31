# 🚀 Portfolio Setup Instructions for @butterflylittle

## 📋 **Step 1: Install Dependencies**

Run this command in your terminal:

```bash
pnpm install
```

This will install the DeepSeek-compatible AI SDK and other dependencies.

## 🔐 **Step 2: Set Up Environment Variables**

Create a file called `.env.local` in your project root with this content:

```env
# DeepSeek AI API Configuration
DEEPSEEK_API_KEY=your_actual_deepseek_api_key_here

# GitHub API Configuration
GITHUB_TOKEN=your_github_token_here
GITHUB_USERNAME=butterflylittle

# Environment
NODE_ENV=development
```

**Replace `your_actual_deepseek_api_key_here` with your real DeepSeek API key.**

## 🎯 **Step 3: Test Locally**

Run the development server:

```bash
pnpm dev
```

Visit `http://localhost:3000` to test your portfolio.

## 🚀 **Step 4: Deploy to Vercel**

1. **Push to GitHub** (if not already done)
2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variable: `DEEPSEEK_API_KEY` with your API key
   - Add environment variables: `GITHUB_TOKEN` and `GITHUB_USERNAME`
3. **Deploy!**

## ✅ **What's Been Updated:**

- ✅ **GitHub Account**: Connected to [@butterflylittle](https://github.com/butterflylittle)
- ✅ **GitHub Profile Card**: Displays live public profile and repository data
- ✅ **AI Personality**: Can be customized with your background and experience
- ✅ **API Integration**: Uses DeepSeek AI through its OpenAI-compatible API
- ✅ **Repository Links**: Point to `butterflylittle/ai-native-portfolio`

## 🎨 **Next Steps:**

1. **Add your projects** (I'll help you with this)
2. **Customize colors** (if desired)
3. **Add your own logo** (when ready)
4. **Test the AI chat** functionality

## 🔧 **Troubleshooting:**

If you see linter errors about missing modules:

1. Make sure you ran `pnpm install`
2. Restart your development server
3. The errors should disappear after installation
