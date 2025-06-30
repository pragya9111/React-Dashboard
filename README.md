# AnalyticsHub – React Dashboard

A modern analytics dashboard built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. This project demonstrates a modular, scalable approach to business intelligence dashboards, featuring interactive charts, tables, dark mode, and real-time data fetching.

## Features

- **Interactive Charts**: Line, Area, Bar, Pie, and Donut charts powered by [Highcharts](https://www.highcharts.com/).
- **Data Tables**: Responsive tables for business data.
- **Dark Mode**: Toggle between light and dark themes (with system preference and persistence).
- **API Integration**: Data fetching via [axios](https://axios-http.com/) and [@tanstack/react-query](https://tanstack.com/query/latest).
- **Responsive Design**: Mobile-friendly, adaptive grid layout.
- **Modern Tooling**: Fast development with Vite, TypeScript, and Tailwind CSS.
- **ESLint**: Strict linting with recommended and type-aware rules.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (utility-first styling)
- **Highcharts** + **highcharts-react-official** (charts)
- **@tanstack/react-query** (data fetching/caching)
- **axios** (HTTP client)
- **ESLint** (linting)

## Folder Structure

```
.
├── public/
│   └── vite.svg
├── src/
│   ├── api/
│   │   ├── apiClient.ts        # Axios instance
│   │   └── endPoints.ts        # Mock API/data fetchers
│   ├── assets/                 # Static assets (e.g., react.svg)
│   ├── components/
│   │   ├── charts/             # Chart components (LineChart, AreaChart, etc.)
│   │   ├── common/             # Shared UI (ThemeToggle, LoadingSpinner, ErrorMessage)
│   │   ├── layout/             # Layout (Header, Footer, DashboardGrid, GridItem)
│   │   └── tables/             # DataTable component
│   ├── context/
│   │   └── DarkModeContext.tsx # Dark mode context/provider
│   ├── pages/
│   │   └── Dashboard.tsx       # Main dashboard page
│   ├── types/
│   │   └── index.ts            # TypeScript types/interfaces
│   ├── App.tsx                 # App root, providers
│   ├── main.tsx                # Entry point
│   ├── App.css
│   ├── index.css               # Tailwind & global styles
│   ├── tailwind.config.js
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── eslint.config.js
└── README.md
```

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   ```

## Live Preview

Check out the live version of the project! [View Live Demo](https://react-dashboard-sigma-seven.vercel.app/).

## Main Functionalities

- **Dashboard Page**: Displays a grid of analytics widgets (charts and tables) with real-time data and refresh controls.
- **Dark Mode**: User can toggle dark/light mode; preference is saved and respects system settings.
- **Charts**: Each chart type is a reusable component, styled for both themes.
- **Data Fetching**: Uses mock data via async functions, easily replaceable with real API endpoints.
- **Error & Loading States**: Each widget handles loading and error states gracefully.

## Credits

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Highcharts](https://www.highcharts.com/)
- [TanStack Query](https://tanstack.com/query/latest)
