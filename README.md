# Muzammil's Professional Portfolio

A modern, responsive portfolio website built with React.js featuring animations, dark/light theme toggle, and professional design.

## 🚀 Features

- **Modern Design**: Clean and professional layout with beautiful animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Theme**: Toggle between dark and light themes
- **Smooth Animations**: Powered by Framer Motion for smooth transitions
- **Interactive Elements**: Hover effects, scroll animations, and interactive components
- **Contact Form**: Functional contact form with Gmail integration
- **Performance Optimized**: Fast loading and optimized for performance

## 🛠️ Built With

- **Frontend**: React.js, HTML5, CSS3
- **Animations**: Framer Motion, AOS (Animate On Scroll)
- **Icons**: React Icons
- **Styling**: CSS3 with custom properties and responsive design
- **Form Handling**: Gmail integration
- **Deployment**: Ready for deployment on Vercel, Netlify, or GitHub Pages

## 📱 Sections

1. **Hero Section**: Eye-catching introduction with animated typing effect
2. **About Me**: Personal introduction and statistics
3. **Skills**: Technical skills with animated progress bars
4. **Experience**: Work experience and education timeline
5. **Projects**: Portfolio of projects with detailed modals
6. **Contact**: Contact form and social media links

## 🎨 Theme Features

- **Light Theme**: Clean and bright design
- **Dark Theme**: Modern dark mode with proper contrast
- **Smooth Transitions**: Theme switching with smooth animations
- **Persistent Preference**: Remembers user's theme choice

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/muzammil/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

### Build for Production

```bash
npm run build
```

## 📧 Contact Form Setup

To enable the contact form:

1. Sign up for [EmailJS](https://emailjs.com)
2. Create a new service and template
3. Update the EmailJS configuration in `src/components/Contact/Contact.js`:
   - Replace `your_service_id` with your EmailJS service ID
   - Replace `your_template_id` with your EmailJS template ID
   - Replace `your_public_key` with your EmailJS public key

## 🎯 Customization

### Personal Information
Update your personal information in:
- `src/components/Hero/Hero.js` - Name and introduction
- `src/components/About/About.js` - About section content
- `src/components/Experience/Experience.js` - Work experience and education
- `src/components/Projects/Projects.js` - Your projects
- `src/components/Contact/Contact.js` - Contact information

### Styling
- Modify CSS custom properties in `src/App.css` to change colors and themes
- Update component-specific styles in their respective CSS files

### Images
- Replace `public/MY_pic.jpg` with your profile picture
- Update project images in the Projects component

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎭 Animations

- **Page Load Animations**: Smooth entrance animations for all sections
- **Scroll Animations**: Elements animate as they come into view
- **Hover Effects**: Interactive hover states for buttons and cards
- **Theme Transitions**: Smooth color transitions when switching themes
- **Typing Animation**: Animated typing effect in the hero section

## 📦 Dependencies

- React 18.2.0
- Framer Motion 7.6.2
- React Router DOM 6.3.0
- React Icons 4.4.0
- Typed.js 2.0.12
- React Intersection Observer 9.4.0
- AOS 2.3.4
- EmailJS 3.2.0

## 🌟 Performance

- Optimized images and assets
- Lazy loading for better performance
- Minimal bundle size
- Fast loading times
- SEO friendly

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/muzammil/portfolio/issues).

## 👨‍💻 Author

**Muzammil**
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]
- Email: muzammil@example.com

---

⭐ Star this repo if you found it helpful!
