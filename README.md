# Data Leak Detector

A simple DLP (Data Loss Prevention) testing site. Upload or POST sensitive test data to verify your DLP solution blocks it correctly.

## Features

- **HTTP/HTTPS POST Testing**: Submit sensitive data and verify DLP blocks the request
- **Sample Test Data**: Pre-generated fake SSN, credit card, and PII data
- **Instant Feedback**: See immediately if DLP blocked or allowed the transfer
- **Mobile Responsive**: Works on all devices

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy with Docker

Docker makes it easy to deploy Data Leak Detector anywhere - locally, on the internet, or behind a VPN/ZTNA solution.

### Build the Image

```bash
docker build -t dataleakdetector .
```

### Run Locally

```bash
docker run -p 3000:3000 dataleakdetector
```

Open [http://localhost:3000](http://localhost:3000)

### Deploy to a Cloud Provider

#### Azure Container Apps
```bash
# Login and create resources
az login
az group create --name dlp-rg --location eastus
az acr create --resource-group dlp-rg --name dlpregistry --sku Basic
az acr login --name dlpregistry

# Push image
docker tag dataleakdetector dlpregistry.azurecr.io/dataleakdetector:latest
docker push dlpregistry.azurecr.io/dataleakdetector:latest

# Deploy
az containerapp up --name dataleakdetector \
  --resource-group dlp-rg \
  --image dlpregistry.azurecr.io/dataleakdetector:latest \
  --target-port 3000 \
  --ingress external
```

#### AWS (ECS/Fargate)
```bash
# Push to ECR and deploy with ECS
aws ecr create-repository --repository-name dataleakdetector
aws ecr get-login-password | docker login --username AWS --password-stdin <account>.dkr.ecr.<region>.amazonaws.com
docker tag dataleakdetector <account>.dkr.ecr.<region>.amazonaws.com/dataleakdetector:latest
docker push <account>.dkr.ecr.<region>.amazonaws.com/dataleakdetector:latest
# Then create ECS service via console or CLI
```

#### Any Docker Host
```bash
# On your target server
docker run -d -p 80:3000 --restart unless-stopped dataleakdetector
```

### Testing Scenarios

| Scenario | How to Deploy |
|----------|---------------|
| **Internet** | Deploy to Azure, AWS, or any public cloud |
| **VPN/ZTNA** | Deploy to private network accessible via VPN |
| **Local** | Run on localhost for offline testing |

---

## Deploy to Vercel

### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/dlp-test-clone)

### Option 2: CLI Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 3: Git Push

1. Push this repo to GitHub
2. Import in Vercel dashboard
3. Vercel will auto-deploy on push

## How It Works

1. **User copies sample data** from `/sample-data`
2. **User submits data** via `/http-post` or `/https-post`
3. **If DLP is working**: The request is blocked before reaching this server
4. **If DLP failed**: Server receives data and shows a warning banner

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with DLP explanation |
| `/http-post` | HTTP POST test form |
| `/https-post` | HTTPS POST test form |
| `/sample-data` | Sample data index |
| `/sample-data/namessndob` | SSN test data |
| `/sample-data/nameccnzip` | Credit card test data |
| `/sample-data/namedobemail` | PII test data |
| `/contact` | Contact form |

## Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- Vanilla CSS (dark mode)

## License

MIT
