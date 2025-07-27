# JusticeConnect - GitHub to Vercel Deployment Guide

This guide will help you deploy JusticeConnect to GitHub and then to Vercel's free plan for immediate live viewing.

## 🚀 Quick Start (5 minutes to live)

### Step 1: Initialize Git Repository
```bash
# Initialize git repository
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: JusticeConnect landing page"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/justiceconnect.git

# Push to GitHub
git push -u origin main
```

### Step 2: Deploy to Vercel
1. **Go to [Vercel](https://vercel.com)**
2. **Sign up/Login** with your GitHub account
3. **Click "New Project"**
4. **Import your GitHub repository**
5. **Configure project settings:**
   - Framework Preset: `Next.js`
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

6. **Add Environment Variables** (from `env.example`):
   ```
   NEXT_PUBLIC_APP_NAME=JusticeConnect
   NEXT_PUBLIC_APP_URL=https://your-project.vercel.app
   NODE_ENV=production
   ```

7. **Click "Deploy"**

Your app will be live in 2-3 minutes at `https://your-project.vercel.app`

## 📋 Prerequisites

### Required Accounts
- **GitHub Account** - For code repository
- **Vercel Account** - For hosting (free plan)
- **Firebase Account** - For backend services (optional for initial deployment)

### Required Software
- **Git** - Version control
- **Node.js** (v18+) - Development environment
- **npm** or **yarn** - Package manager

## 🔧 Detailed Setup

### 1. GitHub Repository Setup

#### Create GitHub Repository
1. Go to [GitHub](https://github.com)
2. Click "New repository"
3. Name it `justiceconnect`
4. Make it **Public** (for Vercel free plan)
5. Don't initialize with README (we already have one)
6. Click "Create repository"

#### Push Code to GitHub
```bash
# Clone the repository (if you haven't already)
git clone https://github.com/YOUR_USERNAME/justiceconnect.git
cd justiceconnect

# Copy all project files to this directory
# Then commit and push
git add .
git commit -m "Initial commit: JusticeConnect app"
git push origin main
```

### 2. Vercel Deployment

#### Automatic Deployment
1. **Connect GitHub to Vercel:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

2. **Configure Build Settings:**
   ```
   Framework Preset: Next.js
   Root Directory: ./
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```

3. **Environment Variables:**
   Add these in Vercel dashboard:
   ```
   NEXT_PUBLIC_APP_NAME=JusticeConnect
   NEXT_PUBLIC_APP_URL=https://your-project.vercel.app
   NODE_ENV=production
   ```

4. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your app is live! 🎉

#### Manual Deployment (Alternative)
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: justiceconnect
# - Directory: ./
# - Override settings? No
```

### 3. Firebase Setup (Optional for MVP)

#### Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Add project"
3. Name: `justiceconnect`
4. Enable Google Analytics (optional)
5. Click "Create project"

#### Get Firebase Config
1. In Firebase Console, click "Project settings"
2. Scroll to "Your apps" section
3. Click "Add app" → Web app
4. Register app with name "JusticeConnect"
5. Copy the config object

#### Add Firebase Environment Variables
In Vercel dashboard, add these environment variables:
```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## 🔄 Continuous Deployment

### Automatic Deployments
Once connected, Vercel will automatically deploy:
- **Every push to `main` branch** → Production deployment
- **Every pull request** → Preview deployment
- **Every push to other branches** → Preview deployment

### Manual Deployments
```bash
# Deploy to production
vercel --prod

# Deploy preview
vercel
```

## 🛠 Development Workflow

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Making Changes
```bash
# Make your changes
# Test locally
npm run dev

# Commit and push
git add .
git commit -m "Add new feature"
git push origin main

# Vercel automatically deploys! 🚀
```

## 📊 Monitoring & Analytics

### Vercel Analytics
- **Performance monitoring** - Built into Vercel
- **Real-time analytics** - Page views, performance
- **Error tracking** - Automatic error reporting

### Custom Analytics
Add to your app:
```typescript
// In your layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## 🔧 Custom Domain (Optional)

### Add Custom Domain
1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain: `justiceconnect.bw`
4. Follow DNS configuration instructions
5. Wait for DNS propagation (up to 24 hours)

## 🚨 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Check build logs in Vercel dashboard
# Common fixes:
npm install --legacy-peer-deps
# or
yarn install
```

#### Environment Variables
- Ensure all `NEXT_PUBLIC_` variables are set in Vercel
- Check for typos in variable names
- Redeploy after adding new variables

#### Firebase Issues
```bash
# If Firebase not working:
# 1. Check environment variables
# 2. Verify Firebase project settings
# 3. Check Firebase console for errors
```

#### Performance Issues
```bash
# Optimize images
# Use Next.js Image component
# Enable compression in next.config.js
```

### Debug Commands
```bash
# Check build locally
npm run build

# Check TypeScript errors
npm run type-check

# Check linting
npm run lint

# Test locally
npm run dev
```

## 📈 Scaling Considerations

### Vercel Free Plan Limits
- **100GB bandwidth/month**
- **100GB storage**
- **100GB function execution time**
- **Unlimited personal projects**

### When to Upgrade
- **High traffic** → Pro plan ($20/month)
- **Custom domains** → Pro plan
- **Team collaboration** → Pro plan
- **Advanced analytics** → Pro plan

## 🔒 Security Best Practices

### Environment Variables
- ✅ Use `NEXT_PUBLIC_` prefix for client-side variables
- ✅ Keep sensitive data server-side only
- ✅ Use Vercel's environment variable encryption

### Security Headers
Already configured in `vercel.json`:
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection

### Firebase Security
```javascript
// In firestore.rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## 📞 Support

### Getting Help
- **Vercel Documentation** - [vercel.com/docs](https://vercel.com/docs)
- **Next.js Documentation** - [nextjs.org/docs](https://nextjs.org/docs)
- **Firebase Documentation** - [firebase.google.com/docs](https://firebase.google.com/docs)

### Community
- **Vercel Community** - [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)
- **Next.js Community** - [github.com/vercel/next.js/discussions](https://github.com/vercel/next.js/discussions)

---

## 🎉 Success Checklist

- [ ] GitHub repository created and pushed
- [ ] Vercel project connected to GitHub
- [ ] Environment variables configured
- [ ] First deployment successful
- [ ] Custom domain configured (optional)
- [ ] Firebase project set up (optional)
- [ ] Analytics enabled (optional)

**Your JusticeConnect app is now live and ready for development! 🚀**

Visit your live URL and start building the future of Botswana's justice system. 