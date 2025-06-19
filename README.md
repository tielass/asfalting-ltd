# Asphalting Website

![Asphalting Website](https://img.shields.io/badge/React-Road%20Construction-orange)
![i18n](https://img.shields.io/badge/i18n-Multilingual-blue)
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-purple)
![License](https://img.shields.io/badge/License-MIT-green)

<div align="center">
  <p><em>Modern, responsive website for asphalt & road construction services</em></p>
</div>

## 🚀 Overview

A modern, responsive website built for asphalt and road construction companies. The site features a clean, professional design with comprehensive showcasing of construction services, projects, and company information. Built with React and Vite, it includes multilingual support (English, Bulgarian, German), responsive design, and interactive UI components.

## ✨ Features

- **📱 Fully Responsive Design**: Optimized for all device sizes
- **🌐 Multilingual Support**: English, Bulgarian, and German translations
- **🎨 Modern UI/UX**: Clean, professional design with interactive elements
- **🧩 Component-Based Architecture**: Modular React components for maintainability
- **🚀 Performance Optimized**: Built with Vite for fast loading and rendering
- **🔍 SEO Ready**: Structured for good search engine visibility
- **📞 Contact Integration**: Easy-to-use contact forms for inquiries
- **🔧 Easily Customizable**: Well-organized code structure for easy modifications

## 🔧 Technologies

- **React 19** - Modern UI library
- **Vite** - Next generation frontend tooling
- **Emotion** - CSS-in-JS styling
- **i18next** - Internationalization framework
- **Formik & Yup** - Form handling and validation
- **Lucide React** - SVG icon components

## 📂 Project Structure

```
asfalting-website/
├── public/             # Static files
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # Reusable UI components
│   │   ├── About/      # About section
│   │   ├── CTA/        # Call-to-action section
│   │   ├── Footer/     # Footer with contact info
│   │   ├── Header/     # Navigation header
│   │   ├── Hero/       # Hero banner section
│   │   ├── Layout/     # Layout components
│   │   ├── Modal/      # Modal components
│   │   ├── Projects/   # Projects showcase
│   │   ├── Services/   # Services section
│   │   └── Testimonials/ # Client testimonials
│   ├── i18n/           # Internationalization
│   │   ├── locales/
│   │   │   ├── en/     # English translations
│   │   │   ├── bg/     # Bulgarian translations
│   │   │   └── de/     # German translations
│   │   └── i18n.js     # i18n configuration
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Application entry point
├── index.html
├── package.json
└── vite.config.js
```

Each component folder contains:

- ComponentName.jsx - The React component
- ComponentName.styles.js - Emotion styled components

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/asfalting-website.git
   cd asfalting-website
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## 🛠️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run prettier` - Format code with Prettier

## 🌐 Internationalization

The website offers full multilingual support through i18next:

- 🇬🇧 English (default)
- 🇧🇬 Bulgarian
- 🇩🇪 German

Language detection is automatic based on browser settings, with the ability for users to manually select their preferred language from the navigation menu.

## 📱 Responsive Design

The website is fully responsive across all devices:

- Desktop
- Tablet
- Mobile phones
- Large screens

The layout adapts fluidly using:

- CSS Grid and Flexbox for layouts
- Media queries for device-specific adjustments
- Relative units for scalability

## 📋 Key Components

### Header

Modern navigation with language switcher, responsive mobile menu, and smooth scrolling to sections.

### Hero Section

Eye-catching introduction with a call-to-action button and dynamic background.

### Services Section

Comprehensive display of services with expandable content and visual icons.

### Projects Section

Portfolio of completed projects with filterable categories and image gallery.

### Testimonials

Client feedback carousel with ratings and testimonial text.

### Contact Section

Contact form with validation and interactive map integration.

## 🔌 Adding New Services

To add a new service to the website:

1. Add the new service details to the translation files in `src/i18n/locales/`
2. Import a suitable icon from Lucide React
3. Add the new service card to the `Services.jsx` component
4. Customize styling as needed in `Services.styles.js`

## 🎨 Customization

The website is designed for easy customization:

- **Colors**: Update theme colors in styled components
- **Fonts**: Modify font families in the global styles
- **Content**: Edit content through translation files
- **Images**: Replace images in the assets folder
- **Layout**: Adjust spacing and layouts in style files

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contact

For inquiries or customization services, please contact us at your-email@example.com.

---

<div align="center">
  <p>Built with ❤️ using React and Vite</p>
</div>
