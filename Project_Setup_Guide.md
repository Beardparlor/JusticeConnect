# JusticeConnect - Project Setup Guide

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Project Initialization](#project-initialization)
3. [Firebase Setup](#firebase-setup)
4. [Environment Configuration](#environment-configuration)
5. [Development Workflow](#development-workflow)
6. [Deployment Setup](#deployment-setup)
7. [Testing Setup](#testing-setup)
8. [Troubleshooting](#troubleshooting)

## Prerequisites

### 1.1 Required Software
- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** (v2.30.0 or higher)
- **Firebase CLI** (v12.0.0 or higher)
- **VS Code** (recommended) with extensions:
  - TypeScript and JavaScript Language Features
  - Tailwind CSS IntelliSense
  - Firebase Explorer
  - GitLens

### 1.2 System Requirements
- **RAM:** Minimum 8GB, Recommended 16GB
- **Storage:** At least 10GB free space
- **OS:** Windows 10/11, macOS 10.15+, or Ubuntu 18.04+

### 1.3 Account Setup
- **Google Account** (for Firebase)
- **GitHub Account** (for version control)
- **Google Cloud Platform** account (for OCR services)

## Project Initialization

### 2.1 Create Next.js Project
```bash
# Create new Next.js project with TypeScript
npx create-next-app@latest justiceconnect --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# Navigate to project directory
cd justiceconnect

# Install additional dependencies
npm install @headlessui/react @heroicons/react
npm install react-hook-form @hookform/resolvers zod
npm install zustand @tanstack/react-query
npm install firebase firebase-admin
npm install react-pdf react-dropzone
npm install chart.js react-chartjs-2
npm install date-fns react-calendar
npm install @sentry/nextjs
npm install twilio @sendgrid/mail
npm install cloudinary
npm install --save-dev @types/node
```

### 2.2 Project Structure
```
justiceconnect/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── (dashboard)/
│   │   │   ├── cases/
│   │   │   ├── documents/
│   │   │   ├── hearings/
│   │   │   └── reports/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   ├── cases/
│   │   │   ├── documents/
│   │   │   ├── hearings/
│   │   │   └── ocr/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   ├── forms/
│   │   ├── layout/
│   │   └── features/
│   ├── lib/
│   │   ├── firebase/
│   │   ├── auth/
│   │   ├── database/
│   │   └── utils/
│   ├── hooks/
│   ├── stores/
│   ├── types/
│   └── utils/
├── public/
├── firebase/
│   ├── functions/
│   └── firestore.rules
├── tests/
├── docs/
├── .env.local
├── .env.example
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

### 2.3 Initialize Git Repository
```bash
# Initialize git repository
git init

# Create .gitignore file
cat > .gitignore << EOF
# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/

# Next.js
.next/
out/

# Production
build/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Firebase
.firebase/
firebase-debug.log
firestore-debug.log
ui-debug.log

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/

# Dependency directories
node_modules/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Microbundle cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# next.js build output
.next

# nuxt.js build output
.nuxt

# vuepress build output
.vuepress/dist

# Serverless directories
.serverless/

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/

# TernJS port file
.tern-port
EOF

# Initial commit
git add .
git commit -m "Initial commit: JusticeConnect project setup"
```

## Firebase Setup

### 3.1 Firebase Project Creation
```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase project
firebase init

# Select the following options:
# - Hosting: Configure files for Firebase Hosting
# - Firestore: Configure security rules and indexes
# - Functions: Configure a Cloud Functions directory
# - Storage: Configure a security rules file for Cloud Storage
```

### 3.2 Firebase Configuration
```bash
# Create firebase.json
cat > firebase.json << EOF
{
  "firestore": {
    "rules": "firestore.rules",
    "indexes": "firestore.indexes.json"
  },
  "functions": {
    "source": "firebase/functions",
    "predeploy": [
      "npm --prefix \"\$RESOURCE_DIR\" run build"
    ]
  },
  "hosting": {
    "public": "out",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  },
  "storage": {
    "rules": "storage.rules"
  }
}
EOF
```

### 3.3 Firestore Security Rules
```bash
# Create firestore.rules
cat > firestore.rules << EOF
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only access their own profile
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Cases access based on user role and court
    match /cases/{caseId} {
      allow read: if request.auth != null && 
        (resource.data.courtId in get(/databases/\$(database)/documents/users/\$(request.auth.uid)).data.courts ||
         request.auth.token.role == 'admin');
      allow write: if request.auth != null && 
        (request.auth.token.role in ['admin', 'clerk', 'judge']);
    }
    
    // Documents with additional access control
    match /documents/{documentId} {
      allow read: if request.auth != null && 
        (resource.data.isPublic || 
         resource.data.caseId in get(/databases/\$(database)/documents/users/\$(request.auth.uid)).data.cases ||
         request.auth.token.role == 'admin');
    }
    
    // Hearings access
    match /hearings/{hearingId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
        (request.auth.token.role in ['admin', 'clerk', 'judge']);
    }
    
    // Courts access
    match /courts/{courtId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
        request.auth.token.role == 'admin';
    }
  }
}
EOF
```

### 3.4 Storage Rules
```bash
# Create storage.rules
cat > storage.rules << EOF
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Users can upload files to their own folder
    match /users/{userId}/{allPaths=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Documents access based on case permissions
    match /documents/{documentId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
        (request.auth.token.role in ['admin', 'clerk', 'judge']);
    }
  }
}
EOF
```

## Environment Configuration

### 4.1 Environment Variables
```bash
# Create .env.example
cat > .env.example << EOF
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Firebase Admin SDK (Server-side)
FIREBASE_ADMIN_PROJECT_ID=your_project_id
FIREBASE_ADMIN_PRIVATE_KEY=your_private_key
FIREBASE_ADMIN_CLIENT_EMAIL=your_client_email

# OCR Services
GOOGLE_CLOUD_VISION_API_KEY=your_vision_api_key
OCR_ENDPOINT=https://vision.googleapis.com/v1/images:annotate

# Notification Services
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number

SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_FROM_EMAIL=noreply@justiceconnect.bw

# Cloudinary (Image Optimization)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Application Settings
NEXT_PUBLIC_APP_NAME=JusticeConnect
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development

# Sentry (Error Tracking)
SENTRY_DSN=your_sentry_dsn
EOF

# Create .env.local (copy from .env.example and fill in real values)
cp .env.example .env.local
```

### 4.2 Firebase Configuration File
```typescript
// src/lib/firebase/config.ts
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
```

## Development Workflow

### 5.1 Development Scripts
```json
// package.json scripts
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "e2e": "playwright test",
    "e2e:ui": "playwright test --ui",
    "firebase:emulators": "firebase emulators:start",
    "firebase:deploy": "firebase deploy",
    "firebase:deploy:hosting": "firebase deploy --only hosting",
    "firebase:deploy:functions": "firebase deploy --only functions",
    "firebase:deploy:firestore": "firebase deploy --only firestore"
  }
}
```

### 5.2 Development Commands
```bash
# Start development server
npm run dev

# Run type checking
npm run type-check

# Run linting
npm run lint

# Start Firebase emulators
npm run firebase:emulators

# Run tests
npm run test

# Run E2E tests
npm run e2e
```

### 5.3 Code Quality Setup
```bash
# Install ESLint and Prettier
npm install --save-dev eslint-config-prettier prettier

# Create .prettierrc
cat > .prettierrc << EOF
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
EOF

# Create .eslintrc.json
cat > .eslintrc.json << EOF
{
  "extends": [
    "next/core-web-vitals",
    "prettier"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "warn"
  }
}
EOF
```

## Deployment Setup

### 6.1 Build Configuration
```typescript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['firebasestorage.googleapis.com', 'res.cloudinary.com'],
    formats: ['image/webp', 'image/avif'],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  async headers() {
    return [
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=300, stale-while-revalidate=600',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

### 6.2 Deployment Commands
```bash
# Build the application
npm run build

# Export static files
npm run export

# Deploy to Firebase Hosting
npm run firebase:deploy:hosting

# Deploy Firestore rules
npm run firebase:deploy:firestore

# Deploy all Firebase services
npm run firebase:deploy
```

### 6.3 CI/CD Setup (GitHub Actions)
```yaml
# .github/workflows/deploy.yml
name: Deploy to Firebase

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run test

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          projectId: your-project-id
          channelId: live
```

## Testing Setup

### 7.1 Jest Configuration
```javascript
// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
  ],
};

module.exports = createJestConfig(customJestConfig);
```

### 7.2 Playwright Configuration
```typescript
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
```

## Troubleshooting

### 8.1 Common Issues

#### Firebase Connection Issues
```bash
# Check Firebase CLI login
firebase login --reauth

# Clear Firebase cache
firebase logout
firebase login

# Reset Firebase project
firebase use --clear
firebase use your-project-id
```

#### Next.js Build Issues
```bash
# Clear Next.js cache
rm -rf .next
npm run build

# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### TypeScript Errors
```bash
# Check TypeScript configuration
npx tsc --noEmit

# Update TypeScript
npm install typescript@latest @types/node@latest
```

### 8.2 Performance Optimization
```bash
# Analyze bundle size
npm install --save-dev @next/bundle-analyzer

# Add to next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);

# Run bundle analysis
ANALYZE=true npm run build
```

### 8.3 Security Checklist
- [ ] Environment variables properly configured
- [ ] Firebase security rules implemented
- [ ] API routes protected with authentication
- [ ] Input validation implemented
- [ ] CORS configured properly
- [ ] Rate limiting implemented
- [ ] HTTPS enforced in production
- [ ] Regular security audits scheduled

This setup guide provides a comprehensive foundation for developing JusticeConnect with modern best practices, ensuring scalability, security, and maintainability throughout the development lifecycle. 