# JusticeConnect

A modern digital platform designed specifically for the Botswana Justice Department to streamline court operations, improve efficiency, and enhance access to justice through cutting-edge technology.

## 🚀 Key Features

- **Case Management**: Digital case filing, tracking, and management with real-time updates
- **OCR Technology**: Convert handwritten documents to digital text with high accuracy
- **Court Scheduling**: Automated hearing management with conflict resolution
- **User Management**: Role-based access control with secure authentication
- **Security & Compliance**: Enterprise-grade security with full compliance
- **Analytics & Reporting**: Comprehensive analytics and reporting tools

## 🛠 Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Headless UI** - Accessible UI components
- **React Hook Form** - Form handling
- **Zustand** - State management
- **React Query** - Data fetching and caching

### Backend & Database
- **Supabase** - PostgreSQL database with real-time subscriptions
- **Supabase Auth** - Authentication and authorization
- **Supabase Storage** - File storage and management
- **Supabase Edge Functions** - Serverless functions

### Infrastructure
- **Vercel** - Deployment and hosting
- **Cloudinary** - Image optimization
- **Google Cloud Vision API** - OCR and handwriting recognition
- **Twilio** - SMS notifications
- **SendGrid** - Email notifications
- **Sentry** - Error tracking and monitoring

### Testing
- **Jest** - Unit testing
- **Playwright** - End-to-end testing

## 📚 Documentation

- [Product Requirements Document](./JusticeConnect_PRD.md) - Complete product specification
- [Technical Architecture](./Technical_Architecture.md) - System design and architecture
- [Project Setup Guide](./Project_Setup_Guide.md) - Development environment setup
- [Deployment Guide](./DEPLOYMENT_GUIDE.md) - Deployment instructions

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account
- Vercel account

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Beardparlor/JusticeConnect.git
   cd JusticeConnect
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   ```

4. **Set up Supabase database**
   - Create a new Supabase project
   - Run the SQL schema from `supabase-schema.sql` in your Supabase SQL editor
   - Configure authentication settings

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗 Project Structure

```
JusticeConnect/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # Reusable React components
│   ├── lib/
│   │   └── supabase/       # Supabase configuration
│   ├── hooks/              # Custom React hooks
│   ├── stores/             # Zustand state stores
│   ├── types/              # TypeScript type definitions
│   └── utils/              # Utility functions
├── public/                 # Static assets
├── supabase-schema.sql     # Database schema
├── env.example             # Environment variables template
└── README.md              # This file
```

## 🚀 Deployment

### Vercel Deployment

1. **Connect to Vercel**
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Configure environment variables in Vercel dashboard

2. **Set up Supabase**
   - Create a Supabase project
   - Run the database schema
   - Configure authentication
   - Set up storage buckets

3. **Deploy**
   - Vercel will automatically deploy on push to main branch
   - Your app will be live at your Vercel URL

### Environment Variables

Required environment variables for production:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# OCR Services
GOOGLE_CLOUD_VISION_API_KEY=your_vision_api_key

# Notifications
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
SENDGRID_API_KEY=your_sendgrid_api_key

# Image Optimization
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Application
NEXT_PUBLIC_APP_NAME=JusticeConnect
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app

# Error Tracking
SENTRY_DSN=your_sentry_dsn
```

## 🧪 Testing

### Run Tests
```bash
# Unit tests
npm test

# E2E tests
npm run e2e

# Test coverage
npm run test:coverage
```

## 🔒 Security

- **Row Level Security (RLS)** - Database-level security policies
- **Authentication** - Supabase Auth with role-based access
- **Authorization** - Role-based permissions system
- **Data Encryption** - End-to-end encryption
- **Audit Logging** - Complete audit trail
- **Compliance** - Botswana data protection regulations

## 📊 Performance

- **Optimized Images** - Cloudinary integration
- **Caching** - React Query for data caching
- **CDN** - Vercel Edge Network
- **Database Indexes** - Optimized queries
- **Lazy Loading** - Component and route optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 Roadmap

### Phase 1 (MVP) - ✅ Complete
- [x] Basic case management
- [x] User authentication
- [x] Document upload
- [x] Court scheduling

### Phase 2 (Enhancement) - 🚧 In Progress
- [ ] OCR integration
- [ ] Advanced reporting
- [ ] Mobile application
- [ ] API integrations

### Phase 3 (Advanced Features)
- [ ] AI-powered case analysis
- [ ] Advanced analytics
- [ ] Multi-language support
- [ ] Advanced security features

## 📞 Support

For support and questions:
- **Email**: support@justiceconnect.bw
- **Documentation**: [Project Setup Guide](./Project_Setup_Guide.md)
- **Issues**: [GitHub Issues](https://github.com/Beardparlor/JusticeConnect/issues)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Botswana Justice Department** - For the vision and requirements
- **Supabase** - For the excellent database platform
- **Vercel** - For seamless deployment
- **Next.js Team** - For the amazing framework

---

**Built with ❤️ for the people of Botswana** 🇧🇼⚖️ 