const https = require('https');
const fs = require('fs');
const path = require('path');

// Sample image URLs (you can replace these with your preferred images)
const imageUrls = {
  'hero-1.jpg': 'https://images.pexels.com/photos/4505157/pexels-photo-4505157.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
  'hero-2.jpg': 'https://images.pexels.com/photos/4505152/pexels-photo-4505152.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
  'hero-3.jpg': 'https://images.pexels.com/photos/4505148/pexels-photo-4505148.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
  'hero-4.jpg': 'https://images.pexels.com/photos/4505155/pexels-photo-4505155.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080'
};

const imagesDir = path.join(__dirname, 'src', 'assets', 'images');

// Create images directory if it doesn't exist
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(imagesDir, filename);
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); // Delete the file if download failed
      console.error(`❌ Error downloading ${filename}:`, err.message);
      reject(err);
    });
  });
}

async function downloadAllImages() {
  console.log('🚀 Starting image download...');
  console.log('📁 Images will be saved to:', imagesDir);
  
  const promises = Object.entries(imageUrls).map(([filename, url]) => 
    downloadImage(url, filename)
  );
  
  try {
    await Promise.all(promises);
    console.log('\n🎉 All images downloaded successfully!');
    console.log('💡 You can now run "npm run dev" to see the carousel with local images.');
  } catch (error) {
    console.error('\n❌ Some images failed to download. Please check your internet connection.');
  }
}

// Run the download
downloadAllImages(); 