# Cardboard Dreams - Trading Card Collection Manager

A modern web application for managing trading card collections and tracking prices via third-party marketplaces like eBay. Built with Next.js, Prisma, and MySQL.

## Features

- 🃏 **Card Collection Management** - Organize cards by collections with detailed condition tracking
- 💰 **Price Tracking** - Monitor market values with eBay API integration
- 🔍 **Card Database** - Comprehensive card search and management
- 📊 **Collection Analytics** - Track collection value and performance
- 🎨 **Modern UI** - Clean, responsive interface built with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MySQL with Prisma ORM
- **Deployment**: Dreamhost Shared Hosting with Node.js support

## Local Development Setup

### Prerequisites

- Node.js 18+ and npm
- MySQL database (local or remote)

### Installation

1. **Clone and install dependencies:**
   ```bash
   git clone <your-repo-url>
   cd cardboard-dreamz
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` with your database credentials:
   ```
   DATABASE_URL="mysql://username:password@localhost:3306/cardboard_dreamz"
   ```

3. **Set up the database:**
   ```bash
   # Generate Prisma client
   npm run db:generate

   # Push schema to database
   npm run db:push

   # (Optional) Open Prisma Studio
   npm run db:studio
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application.

## Dreamhost Deployment

### Prerequisites

- Dreamhost shared hosting account with Node.js support
- MySQL database on Dreamhost
- SSH access to your Dreamhost account

### Step 1: Prepare Your Dreamhost Environment

1. **Create a MySQL database** in your Dreamhost panel:
   - Go to `Goodies` → `MySQL Databases`
   - Create a new database (e.g., `cardboard_dreamz`)
   - Note the database name, username, and password

2. **Enable Node.js support** (if not already enabled):
   - Contact Dreamhost support or check your hosting plan
   - Ensure Node.js is available on your domain

### Step 2: Deploy the Application

1. **Upload files to Dreamhost:**
   ```bash
   # From your local machine
   scp -r ./* yourusername@yourdomain.com:~/cardboard-dreamz/
   ```

2. **SSH into your Dreamhost account:**
   ```bash
   ssh yourusername@yourdomain.com
   ```

3. **Navigate to your project and install dependencies:**
   ```bash
   cd ~/cardboard-dreamz
   npm install --production
   ```

4. **Configure environment variables:**
   ```bash
   # Create .env file with your Dreamhost database credentials
   nano .env
   ```

   Add your database connection:
   ```
   DATABASE_URL="mysql://db_username:db_password@mysql.yourdomain.com:3306/db_name"
   ```

5. **Build the application:**
   ```bash
   npm run build
   ```

6. **Set up the database:**
   ```bash
   npm run db:push
   ```

### Step 3: Configure Passenger (Dreamhost's Node.js runner)

1. **Create a `passenger_wsgi.py` file** in your domain root:
   ```python
   import sys
   import os

   # Add your project directory to the Python path
   sys.path.insert(0, '/home/yourusername/cardboard-dreamz')

   # Set the application
   from src.app import app as application
   ```

2. **Create/update `.htaccess` file** in your domain root:
   ```
   PassengerAppRoot /home/yourusername/cardboard-dreamz
   PassengerAppType wsgi
   PassengerPython /usr/bin/python3
   PassengerStartupFile passenger_wsgi.py
   ```

### Step 4: Configure Domain/Routing

1. **Set up domain routing** in Dreamhost panel:
   - Point your domain to the `/home/yourusername/cardboard-dreamz` directory
   - Ensure the domain uses Passenger

2. **Test the deployment:**
   - Visit your domain
   - Check the database connection at `/api/test-db`

### Step 5: Production Optimizations

1. **Enable SSL** in Dreamhost panel for HTTPS

2. **Set up log rotation** for Node.js logs

3. **Configure backup** for your MySQL database

4. **Set up monitoring** if needed

## Database Schema

The application uses the following main models:

- **User** - User accounts
- **Collection** - Card collections
- **Card** - Individual trading cards
- **CardInstance** - Specific card copies with condition/purchase data
- **PriceHistory** - Historical price tracking

## API Endpoints

- `GET /api/test-db` - Test database connection
- `GET /api/cards` - List cards
- `GET /api/collections` - List collections
- `POST /api/cards` - Add new card
- `POST /api/collections` - Create collection

## Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:migrate   # Run migrations
npm run db:studio    # Open Prisma Studio
```

## Environment Variables

```env
DATABASE_URL="mysql://username:password@host:port/database"
EBAY_APP_ID="your-ebay-app-id"
EBAY_DEV_ID="your-ebay-dev-id"
EBAY_CERT_ID="your-ebay-cert-id"
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="https://yourdomain.com"
```

## 🚀 Deployment Options

Since Passenger is no longer available on Dreamhost, here are several excellent alternatives for deploying your Cardboard Dreams application:

### 🌟 Option 1: Vercel (Recommended - Free & Easy)

**Best for:** Quick deployment, excellent Next.js support, free tier available

1. **Install Vercel CLI:**
   ```bash
   npm install vercel --save-dev
   ```

2. **Deploy to Vercel:**
   ```bash
   npx vercel --prod
   ```

3. **Set up database:**
   - Use [PlanetScale](https://planetscale.com) (free tier available)
   - Or [Railway](https://railway.app) for PostgreSQL
   - Update your `.env` with the connection string

**Pros:** ⚡ Fast deployments, automatic HTTPS, global CDN, great Next.js support
**Free tier:** 100GB bandwidth, 1000 serverless function invocations/month

### ☁️ Option 2: Netlify

**Best for:** Static sites with serverless functions, generous free tier

1. **Install Netlify CLI:**
   ```bash
   npm install netlify-cli -g
   ```

2. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

3. **Connect to Git (recommended):**
   - Push to GitHub/GitLab
   - Connect repository to Netlify
   - Automatic deployments on push

**Pros:** 🎯 Great for static sites, form handling, generous free tier
**Free tier:** 100GB bandwidth/month, 125k serverless function invocations

### 🐙 Option 3: Railway

**Best for:** Full-stack applications, easy database setup

1. **Create Railway account** at [railway.app](https://railway.app)

2. **Connect GitHub repository** or deploy manually

3. **Add PostgreSQL database** (included in free tier)

4. **Deploy:**
   ```bash
   railway deploy
   ```

**Pros:** 🚀 Simple setup, managed databases, good free tier
**Free tier:** $5/month credit, PostgreSQL included

### 🐘 Option 4: Render

**Best for:** Reliable hosting with free tier, PostgreSQL support

1. **Create Render account** at [render.com](https://render.com)

2. **Connect GitHub repository**

3. **Create PostgreSQL database** (free tier available)

4. **Create Web Service** for your Next.js app

**Pros:** 🔒 Reliable, good free tier, managed PostgreSQL
**Free tier:** 750 hours/month, PostgreSQL with 1GB storage

### 🏠 Option 5: DigitalOcean App Platform

**Best for:** Cloud infrastructure, scalable applications

1. **Create DigitalOcean account**

2. **Use App Platform** for deployment

3. **Add managed PostgreSQL database**

4. **Deploy from GitHub**

**Pros:** 💪 Scalable, full control, good performance
**Free tier:** Limited, but good for testing

### 🐧 Option 6: Dreamhost VPS (If you prefer Dreamhost)

**Best for:** If you want to stick with Dreamhost

1. **Upgrade to Dreamhost VPS** ($10/month+)

2. **Get full server access** (no Passenger limitations)

3. **Install Node.js and run normally:**
   ```bash
   # On your VPS
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

4. **Deploy like any other VPS**

### 🗄️ Database Options for All Platforms

**Free Database Options:**
- **PlanetScale** (MySQL-compatible, great free tier)
- **Railway PostgreSQL** (included in free tier)
- **Supabase** (PostgreSQL, generous free tier)
- **Neon** (PostgreSQL serverless)

**For SQLite (simplest for testing):**
- Works locally, but not recommended for production multi-user apps

### 🚀 Quick Start Commands

```bash
# Vercel (recommended)
npm install vercel --save-dev
npx vercel --prod

# Netlify
npm install netlify-cli -g
netlify deploy --prod

# Railway
npm install -g @railway/cli
railway login
railway deploy
```

### 🔧 Environment Variables

For all platforms, set these environment variables:

```env
DATABASE_URL="your-database-connection-string"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="https://yourdomain.com"
```

### 📊 Platform Comparison

| Platform | Free Tier | Setup Time | Next.js Support | Database Included |
|----------|-----------|------------|-----------------|-------------------|
| **Vercel** | Excellent | 2 minutes | Native | No (use PlanetScale) |
| **Netlify** | Excellent | 5 minutes | Good | No (use Supabase) |
| **Railway** | Good | 3 minutes | Good | PostgreSQL included |
| **Render** | Good | 5 minutes | Good | PostgreSQL option |
| **Dreamhost VPS** | None | 30 minutes | Manual | No |

**🎯 Recommendation: Start with Vercel** - it's the fastest to deploy and has excellent Next.js support!

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For deployment issues, check:
- **Vercel:** [vercel.com/docs](https://vercel.com/docs)
- **Netlify:** [docs.netlify.com](https://docs.netlify.com)
- **Railway:** [docs.railway.app](https://docs.railway.app)
- **Render:** [docs.render.com](https://docs.render.com)
- **PlanetScale:** [planetscale.com/docs](https://planetscale.com/docs)

For application issues:
- This project's GitHub issues
- Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Prisma documentation: [prisma.io/docs](https://prisma.io/docs)
