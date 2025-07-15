const https = require('https');
const fs = require('fs');
const path = require('path');

// Plant image URLs (you can replace these with your preferred images)
const plantImages = {
  'spinach.jpg': 'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
  'amaranthus.jpg': 'https://images.pexels.com/photos/4750270/pexels-photo-4750270.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
  'coriander.jpg': 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
  'methi.jpg': 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
  'sorrel.jpg': 'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
  'mint.jpg': 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
  'basil.jpg': 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
  'thyme.jpg': 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
  'leafy-lettuce.jpg': 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
  'butterhead-lettuce.jpg': 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=400&h=400'
};

const plantsDir = path.join(__dirname, 'src', 'assets', 'images', 'plants');

// Create plants directory if it doesn't exist
if (!fs.existsSync(plantsDir)) {
  fs.mkdirSync(plantsDir, { recursive: true });
}

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(plantsDir, filename);
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

async function downloadAllPlantImages() {
  console.log('🌱 Starting plant image download...');
  console.log('📁 Images will be saved to:', plantsDir);
  
  const promises = Object.entries(plantImages).map(([filename, url]) => 
    downloadImage(url, filename)
  );
  
  try {
    await Promise.all(promises);
    console.log('\n🎉 All plant images downloaded successfully!');
    console.log('💡 You can now run "npm run dev" to see the plants with local images.');
  } catch (error) {
    console.error('\n❌ Some plant images failed to download. Please check your internet connection.');
  }
}

// Run the download
downloadAllPlantImages(); 