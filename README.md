# Murney House B&B Website

A modern, responsive website for Murney House Bed & Breakfast featuring dark/light mode toggle and mobile-first design.

## Features

### ✅ Completed
- **Responsive Header & Navigation**
  - Fixed header with logo and main navigation
  - Mobile hamburger menu with smooth slide-in animation
  - Fully functional hamburger-to-X animation
  - Transparent mobile nav background for better visual appeal
- **Dark/Light Mode Toggle**
  - Seamless theme switching with system preference detection
  - Consistent styling across all components
- **Hero Section**
  - Full-screen hero with background image
  - Responsive text overlay with call-to-action
  - Smooth scroll-to-section functionality
- **Mobile Optimization**
  - Touch-friendly navigation
  - Optimized typography and spacing for mobile devices
  - Working mobile menu with proper z-index layering

### 🚧 In Progress
- Room showcase section
- Amenities section
- Local area information
- Booking integration
- Contact section

## Technical Implementation

### Mobile Navigation
- **Hamburger Animation**: Clean 3-line to X transformation using CSS transforms
- **Slide-in Menu**: Full-screen overlay that slides in from the left
- **Transparent Background**: Semi-transparent background with adjustable opacity
- **Touch Interactions**: Proper pointer events management for mobile devices

### Theme System
- CSS custom properties for consistent theming
- Automatic dark mode detection
- Manual toggle with state persistence

### Performance
- WebP image optimization
- CSS transitions for smooth interactions
- Semantic HTML structure

## File Structure
├── index.html              # Main HTML file
├── src/
│   ├── styles/
│   │   └── style.css      # Main stylesheet with mobile nav implementation
│   └── script.js          # JavaScript for interactions
├── public/
│   └── images/
│       └── assets/
│           └── PX/        # Optimized WebP images
└── README.md

Markdown
copy
Open in Browser

## Recent Updates
- ✅ Fixed mobile navigation hamburger animation
- ✅ Implemented transparent mobile nav background
- ✅ Added proper slide-in/out transitions
- ✅ Resolved z-index and layering issues
- ✅ Enhanced touch interaction handling

## Next Steps
1. Add room showcase cards with image galleries
2. Implement amenities section with icons
3. Create local area information section
4. Add booking form integration
5. Build contact section with map

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## Development Notes
- Mobile-first CSS approach
- CSS Grid and Flexbox for layouts
- Custom properties for theming consistency
- Semantic HTML for accessibility
