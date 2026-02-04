# Remote Control Dashboard

Web-based dashboard for remote device management and monitoring.

## Description

A React-based dashboard application for monitoring and controlling remote devices. Built with modern web technologies for a responsive user experience.

## Prerequisites

- Node.js 18+
- npm or yarn

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/remote-control-dashboard.git
cd remote-control-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

## Configuration

### Environment Variables

Create a `.env` file:

```bash
VITE_API_URL=http://localhost:3000/api
VITE_WS_URL=ws://localhost:3000
```

## Usage

### Development

```bash
npm run dev
```

Access the dashboard at `http://localhost:5173`

### Production Build

```bash
npm run build
npm run preview
```

## Features

- Real-time device monitoring
- Remote command execution
- Status dashboard
- Responsive design

## Project Structure

```
remote-control-dashboard/
 src/
    components/     # React components
    hooks/          # Custom hooks
    services/       # API services
    App.tsx         # Main application
 public/             # Static assets
 package.json        # Dependencies
```

## Tech Stack

- React 18
- TypeScript
- Vite
- TailwindCSS

## License

MIT License - See LICENSE file for details.

---

**Security Note**: This dashboard is intended for authorized device management only. Ensure proper authentication and network security measures are in place.
