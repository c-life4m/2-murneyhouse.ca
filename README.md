# Murney House B&B Website

A modern, responsive website for Murney House Bed & Breakfast featuring bilingual support, dark/light theme toggle, and mobile-responsive design.

## Project Overview

This is a static website built with HTML5, CSS3, and JavaScript for a Bed & Breakfast business. The site features a clean, modern design with accessibility considerations and performance optimizations.

## Current Features

### ✅ Completed
- **Responsive Design**: Mobile-first approach with desktop enhancements
- **Theme Toggle**: Light/dark mode with CSS custom properties
- **Bilingual Support**: English/French content structure (data attributes ready)
- **Modern CSS**: Custom properties (CSS variables) for consistent theming
- **Accessibility**: ARIA labels, semantic HTML structure
- **Performance**: WebP image format support, optimized loading
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Social Media Integration**: Footer social links ready
- **Newsletter Signup**: Contact form structure in place

### 🚧 In Progress
- Content sections (rooms, amenities, local area)
- JavaScript functionality for theme toggle
- Mobile navigation interactions
- Form handling

### 📋 Planned
- Booking system integration
- Image gallery
- Guest reviews section
- Local attractions map
- Multi-language toggle functionality

## File Structure

2-murneyhouse.ca/
├── index.html              # Main homepage
├── src/
│   ├── styles/
│   │   └── style.css       # Main stylesheet with theme variables
│   └── script.js           # JavaScript functionality
├── public/
│   └── images/
│       └── assets/
│           └── PX/
│               └── hero-1920.webp  # Hero section image
└── README.md              # This file

Css
copy
Open in Browser

## CSS Architecture

### Custom Properties (CSS Variables)
The site uses a comprehensive CSS custom property system for theming:

```css
:root {
  /* Light mode colors */
  --light-background: #ffffff;
  --light-text: #333333;
  --light-primary: #2c5530;

  /* Dark mode colors */
  --dark-background: #1a1a1a;
  --dark-text: #e0e0e0;
  --dark-primary: #4a7c59;

  /* Spacing and transitions */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --transition-fast: 0.2s ease;
}
Recent Fixes
✅ Resolved logo hover underline issue
✅ Fixed duplicate CSS rules causing double underlines
✅ Cleaned up navigation hover states
Development Setup
Prerequisites
Modern web browser
Code editor (VS Code recommended)
Local web server (Live Server extension or similar)
Getting Started
Clone the repository
Open index.html in your browser or use a local server
Edit files in the src/ directory
Test responsive design using browser dev tools
Development Notes
Use mobile-first CSS approach
Test both light and dark themes
Validate HTML and CSS regularly
Optimize images (WebP format preferred)
Browser Support
Chrome/Edge: Latest 2 versions
Firefox: Latest 2 versions
Safari: Latest 2 versions
Mobile browsers: iOS Safari, Chrome Mobile
Accessibility Features
Semantic HTML structure
ARIA labels for interactive elements
Keyboard navigation support
High contrast mode compatibility
Screen reader friendly
Performance Optimizations
WebP image format for hero images
CSS custom properties for efficient theming
Minimal JavaScript footprint
Optimized CSS delivery
Contributing
Code Style
Use 2-space indentation
Follow BEM methodology for CSS classes where applicable
Comment complex CSS rules
Use semantic HTML elements
Testing Checklist
 Test on mobile devices
 Verify both theme modes
 Check navigation functionality
 Validate HTML/CSS
 Test form submissions
 Verify accessibility features
Next Development Session Priorities
JavaScript Implementation

Theme toggle functionality
Mobile navigation toggle
Smooth scrolling for anchor links
Content Sections

Rooms showcase
Amenities grid
Local area highlights
Interactive Features

Image galleries
Contact form validation
Newsletter signup handling
Known Issues
JavaScript functionality not yet implemented
Content sections are placeholder structure only
Form submissions need backend integration
