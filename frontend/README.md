# PentaFreigh Frontend

A modern, responsive web application showcasing PentaFreigh's logistics solutions and services, with a dedicated section for PentaKuhl temperature-controlled transportation products.

## 🚀 About PentaFreigh

PentaFreigh is a global logistics and freight management company dedicated to providing comprehensive supply chain solutions. This frontend application serves as the digital gateway to our services, highlighting our achievements, network capabilities, and industry expertise.

### 🌟 Key Features

- **Multi-page Application**: Home, Industries, and PentaKuhl product showcase
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Global Network Visualization**: Interactive maps and network information
- **Product Showcase**: Detailed information about PentaKuhl solutions
- **Industry-Specific Solutions**: Tailored services for various sectors
- **Performance Optimized**: Fast loading with modern web technologies

## 🛠 Tech Stack

- **React 19** - Modern UI library for building interactive interfaces
- **Vite** - Next-generation frontend build tool for faster development
- **React Router** - Client-side routing for seamless navigation
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **React Icons** - Comprehensive icon library for UI elements

## 📋 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── common/         # Shared components (Footer, Buttons)
│   │   ├── sections/   # Page sections
│   │   └── smalls/     # Small UI components
│   ├── home/           # Home page components
│   ├── industries/     # Industry solutions components
│   ├── layout/         # Layout components (Navbar, UI controls)
│   └── pentakuhl/      # PentaKuhl product components
├── pages/              # Page components
│   ├── Home.jsx
│   ├── Industries.jsx
│   └── PentaKuhl.jsx
├── data/               # Static data and constants
├── styles/             # Global styles
└── assets/             # Images and videos
    ├── images/
    │   └── logos/
    └── videos/
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pentafreigh/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## 📝 Available Scripts

- **`npm run dev`** - Start the development server with hot module replacement
- **`npm run build`** - Build the project for production
- **`npm run lint`** - Run ESLint to check code quality
- **`npm run preview`** - Preview the production build locally

## 🎨 Component Overview

### Home Page Components
- **Hero** - Eye-catching landing section
- **Services** - Service offerings and capabilities
- **Achievements** - Company milestones and statistics
- **Awards** - Recognition and awards
- **Network** - Global presence and network information
- **GlobalNetworkMap** - Interactive world map visualization
- **Philosophy** - Company values and mission
- **Reviews** - Customer testimonials

### Industries Section
- **IndustryGrid** - Display of industry solutions
- **IndustryCard** - Individual industry cards with details
- **SectorInfo** - Detailed sector information

### PentaKuhl Product
- **KuhlHero** - Product introduction
- **KuhlAbout** - Product details and benefits
- **TempRanges** - Temperature control specifications
- **Packaging** - Packaging solutions
- **Compliance** - Regulatory compliance information

## 🎯 Development Guidelines

### Code Quality
- ESLint is configured to maintain code consistency
- Run `npm run lint` before committing changes

### Styling
- Tailwind CSS is used for all styling
- Prefer utility classes over custom CSS
- Follow responsive design patterns (mobile-first approach)

### Component Best Practices
- Keep components focused and single-responsibility
- Use functional components with hooks
- Implement proper error boundaries
- Optimize re-renders using React.memo when needed

## � Responsive Design

The application is fully responsive with breakpoints optimized for:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)

## 🚀 Build & Deployment

### Production Build
```bash
npm run build
```
This creates an optimized build in the `dist` directory.

### Preview Production Build
```bash
npm run preview
```
Test the production build locally before deployment.

## 📦 Dependencies

### Main Dependencies
- **react** - UI library
- **react-dom** - React rendering engine
- **react-router-dom** - Routing solution
- **tailwindcss** - Styling framework
- **react-icons** - Icon library

### Dev Dependencies
- **vite** - Build tool
- **eslint** - Code quality tool
- **@vitejs/plugin-react** - Vite React plugin

## 🤝 Contributing

When contributing to this project:

1. Follow the existing code structure and naming conventions
2. Ensure all code passes ESLint checks
3. Write meaningful commit messages
4. Test components thoroughly before submission
5. Maintain responsive design across all screen sizes

---

**Happy Coding! 🎉**
