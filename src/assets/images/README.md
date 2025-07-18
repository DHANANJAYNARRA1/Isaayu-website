# Hero Carousel Images

This directory contains the images used in the hero carousel section.

## Current Images
- `hero-1.jpg` - Healthy Living Starts With Us
- `hero-2.jpg` - Experience the Joy of Growing Your Own Food  
- `hero-3.jpg` - Grown at Home! Grown with Love!!
- `hero-4.jpg` - Smart Monitoring & Control

## How to Add Your Own Images

1. **Download or prepare your images** - Make sure they are in JPG format and optimized for web (recommended size: 1920x1080px or similar aspect ratio)

2. **Replace the placeholder files** - Delete the current placeholder files and add your actual image files with the same names:
   - `hero-1.jpg`
   - `hero-2.jpg` 
   - `hero-3.jpg`
   - `hero-4.jpg`

3. **Image Requirements**:
   - Format: JPG/JPEG
   - Recommended resolution: 1920x1080px or 16:9 aspect ratio
   - File size: Keep under 500KB for optimal loading
   - Content: Should be related to smart farming, urban agriculture, or healthy living

4. **Alternative: Use different image names**
   If you want to use different image names, update the imports in `src/components/Hero.tsx`:
   ```typescript
   import yourImage1 from '../assets/images/your-image-1.jpg';
   import yourImage2 from '../assets/images/your-image-2.jpg';
   // ... and update the carouselImages array accordingly
   ```

## Image Sources
You can find free images from:
- Unsplash (unsplash.com)
- Pexels (pexels.com)
- Pixabay (pixabay.com)

Search for terms like:
- "smart farming"
- "urban gardening"
- "indoor plants"
- "sustainable agriculture"
- "green technology" 