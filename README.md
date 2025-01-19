# Two Wheels - Vehicle Rental Web App

**Tech Stack:** Next.js 15, Shadcn UI, Tailwind CSS, PostgreSQL (Azure), Drizzle

## Table of Contents

- [Two Wheels - Vehicle Rental Web App](#two-wheels---vehicle-rental-web-app)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)

---

## Introduction

Welcome to **Two Wheels**—a vehicle rental web application located in Kavos, Corfu, Greece. This platform allows users to browse available vehicles, make reservations, and manage their rentals online. Built on modern web technologies, **Two Wheels** provides a seamless and efficient rental experience for both customers and administrators.

## Features

- **Vehicle Listings**: Browse available motorcycles, scooters, and more.
- **Online Reservations**: Reserve vehicles for specific dates and times.
- **User Authentication**: Secure sign-up and sign-in functionality.
- **Admin Dashboard**: Manage vehicle inventory, track bookings, and handle customer inquiries.
- **Responsive Design**: Optimized for mobile, tablet, and desktop views.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) – React-based framework for server-side rendering and static site generation.
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) – A component library built with Radix Primitives and Tailwind CSS.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development.
- **Database**: [PostgreSQL](https://www.postgresql.org/) hosted on [Azure](https://azure.microsoft.com/).
- **ORM / Migration Tool**: [Drizzle](https://orm.drizzle.team/) – TypeScript ORM for managing database schemas and migrations.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- A package manager like [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), [pnpm](https://pnpm.io/), or [bun](https://bun.sh/)
- A running PostgreSQL instance (on Azure or local)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/apandis/two-wheels-gr-web-app.git
   ```

2. **Navigate into the project directory**:

   ```bash
   cd two-wheels-gr-web-app
   ```

3. **Install dependencies** (choose one):

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

4. **Environment Variables**: Create a `.env.local` file in the root of your project and add necessary environment variables (e.g., database credentials). For example:
   ```bash
   DATABASE_URL="postgresql://username:password@host:port/database?sslmode=require"
   ```
   Adjust the variables as needed for your Azure PostgreSQL setup.

### Running the App

1. **Development server** (choose one):

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

2. **Open your browser** and visit:
   ```
   http://localhost:3000
   ```
   The page will auto-refresh as you make changes in your codebase.

---

## Project Structure

A quick overview of the key directories and files:

```
.
├── app/
│   ├── page.tsx            # Main landing page
│   ├── layout.tsx          # Global layout configuration
│   └── ...                 # Additional routes
├── components/             # Reusable UI components
├── styles/                 # Tailwind and global styles
├── drizzle/                # Drizzle ORM configuration and migrations
├── .env.local              # Local environment variables
├── README.md               # Project documentation
├── package.json            # Dependencies and scripts
└── ...                     # Other configuration files (tsconfig, etc.)
```

---

## Deployment

### Deploy on Azure Static Web Apps

To deploy your Next.js application on [Azure Static Web Apps](https://azure.microsoft.com/en-us/products/app-service/static/), follow these steps:

1. **Create a GitHub Repository**
   Push your code to a GitHub repository if you haven’t already.

2. **Create a New Static Web App in Azure**
   - Go to the [Azure Portal](https://portal.azure.com/).
   - Search for **Static Web Apps** and select **Create**.
   - Choose **GitHub** as your deployment source and connect your repository.
   - Select the main branch (or the branch you want to deploy from).

3. **Configure Build Settings**
   In the **Build Details** section:
   - **App Location**: Typically the root folder (`/`) if your `package.json` is in the project root.
   - **Api Location**: If you have API routes, specify the folder for your serverless functions (e.g., `api`); otherwise, leave this blank.
   - **Output Location**: For static export, use `out` or another folder if you are using `next export`. If you are using Next.js without static export, configure an **Azure Functions** backend or [refer to the official docs](https://learn.microsoft.com/en-us/azure/static-web-apps/apps-nextjs) for SSR support.

4. **Build and Deploy**
   - Azure will trigger a GitHub Action workflow automatically.
   - The workflow installs dependencies, builds your Next.js app, and deploys it to Azure.

5. **Verify Your Deployment**
   - After the build process completes, Azure will provide a public URL for your site.
   - Visit the URL to confirm your Next.js application is live.

For more information on configuring Next.js with Azure Static Web Apps, see the [Azure Static Web Apps documentation](https://learn.microsoft.com/azure/static-web-apps/).

---

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Drizzle ORM Documentation](https://orm.drizzle.team/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

---

## License

This project is licensed under the [MIT License](LICENSE). See the `LICENSE` file for details.

---

**Happy coding with Two Wheels!** If you have any questions or suggestions, feel free to open an issue or submit a pull request.


