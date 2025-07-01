# US Commerce Credit, Corp. Website

A professional, mobile-optimized website for US Commerce Credit, Corp., a leading commercial finance, investment banking, and private lending institution based in Miami, FL.

## 🏢 About US Commerce Credit

**Tagline:** "We Collateralize Your Future"

US Commerce Credit, Corp. is a leading financial institution specializing in:
- Commercial Real Estate Loans
- Mergers & Acquisitions (Hotels/Resorts)
- Oil, Gas & Mineral Financing
- Land Acquisition
- Economic Development Projects

**Key Statistics:**
- $4.6B+ in closed financing deals
- $150B in managed collateral
- Established in 2007
- Headquarters: 999 Brickell Ave, Suite 820, Miami, FL 33131

## ✨ Features

### 🎨 Design & UX
- **Modern, Professional Design** - Clean, institutional aesthetic with navy blue, charcoal gray, and silver color scheme
- **Mobile-First Responsive** - Optimized for all device sizes
- **Dark/Light Mode Toggle** - User preference with localStorage persistence
- **Smooth Animations** - Subtle fade-ins, scroll reveals, and interactive elements
- **Miami Skyline Background** - Custom SVG background imagery

### 🚀 Technical Features
- **React 18** with modern hooks and context
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations
- **React Router** for client-side routing
- **Lucide React** for consistent iconography
- **SEO Optimized** with proper meta tags and Open Graph support
- **Performance Optimized** with code splitting and lazy loading

### 📱 Site Structure
1. **Homepage**
   - Hero section with animated tagline
   - Scroll-triggered stats counter
   - Company overview with key statistics
   - Trust badges and certifications
   - Call-to-action sections

2. **About Us**
   - Company mission and values
   - Interactive timeline of company history
   - Leadership team profiles
   - Miami headquarters information

3. **Services**
   - Detailed service descriptions for all offerings
   - Process workflow visualization
   - Benefits and features for each service
   - Call-to-action for consultations

4. **Contact**
   - Professional inquiry form with validation
   - Multiple contact methods
   - Google Maps integration
   - Real-time form submission feedback

## 🛠️ Technology Stack

- **Frontend Framework:** React 18
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Package Manager:** npm

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn

### 1. Clone the Repository
```bash
git clone <repository-url>
cd us-commerce-credit-website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation with mobile menu
│   └── Footer.jsx          # Site footer with links
├── pages/
│   ├── HomePage.jsx        # Landing page with hero & stats
│   ├── AboutPage.jsx       # Company information & history
│   ├── ServicesPage.jsx    # Service offerings & process
│   └── ContactPage.jsx     # Contact form & location
├── App.jsx                 # Main app with routing & dark mode
├── main.jsx               # React app entry point
├── index.css              # Tailwind imports & custom styles
└── ...
```

## 🎯 Key Components

### Dark Mode Context
- Global dark mode state management
- localStorage persistence
- Smooth transitions between themes

### Animated Counter
- Intersection Observer for scroll triggers
- Smooth number animations for statistics
- Configurable duration and formatting

### Contact Form
- Form validation and submission handling
- Real-time feedback and error states
- Professional styling with accessibility

### Responsive Navigation
- Mobile-first collapsible menu
- Smooth scrolling and active states
- Dark mode integration

## 🌐 SEO & Performance

### SEO Features
- Semantic HTML structure
- Meta tags and Open Graph data
- Proper heading hierarchy
- Alt text for images
- Clean URLs with React Router

### Performance Optimizations
- Component lazy loading
- Image optimization
- Minimal bundle size
- Efficient re-renders with React hooks
- CSS-in-JS with Tailwind for optimal styles

## 📧 Contact Integration

The contact form is set up with:
- **Email:** contact@uscommercecredit.com
- **Phone:** (305) 555-0123 (placeholder)
- **Address:** 999 Brickell Ave, Suite 820, Miami, FL 33131

For production deployment, integrate with:
- EmailJS for client-side form submissions
- Formspree for simple form handling
- Custom backend API for advanced features

## 🚀 Deployment

### Recommended Platforms
- **Vercel** - Automatic deployments with Git integration
- **Netlify** - Continuous deployment with form handling
- **AWS S3 + CloudFront** - Enterprise-grade hosting
- **GitHub Pages** - Free hosting for static sites

### Environment Variables
Create a `.env` file for production settings:
```env
VITE_CONTACT_EMAIL=contact@uscommercecredit.com
VITE_PHONE_NUMBER=+13055550123
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
```

## 🎨 Customization

### Brand Colors
The color scheme can be modified in `tailwind.config.js`:
```javascript
colors: {
  'navy': { 800: '#1e3a8a', 900: '#1e2761' },
  'charcoal': { 600: '#4b5563', 800: '#374151', 900: '#1f2937' },
  'silver': { 300: '#d1d5db', 400: '#9ca3af', 500: '#6b7280' }
}
```

### Typography
Font family can be updated in both `tailwind.config.js` and the Google Fonts link in `index.html`.

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is proprietary software developed for US Commerce Credit, Corp.

## 🤝 Contributing

This is a private project for US Commerce Credit, Corp. For internal development:

1. Create feature branches from `main`
2. Follow conventional commit messages
3. Ensure all tests pass
4. Request code review before merging

## 📞 Support

For technical support or questions about this website:
- **Development Team:** [Your Contact]
- **Business Contact:** contact@uscommercecredit.com
- **Emergency Support:** Available 24/7 for critical issues

---

**US Commerce Credit, Corp.** - "We Collateralize Your Future" 