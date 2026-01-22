const fs = require('fs');
const path = require('path');

const categories = [
    "Computers", "Laptops", "Monitors", "Printing & scanning", "Software", "Tablets",
    "Audio", "Graphics cards", "Keyboard and mice", "Networking", "Peripherals", "Storage"
];

const dir = 'assets/images';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

categories.forEach(cat => {
    const filename = cat.toLowerCase().replace(/ /g, "-").replace("&", "and") + ".svg";
    const filePath = path.join(dir, filename);

    const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#ecf0f1"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="#2c3e50">${cat}</text>
</svg>`;

    fs.writeFileSync(filePath, svgContent);
    console.log(`Generated ${filePath}`);
});

// Generate Logo
const logoContent = `<svg width="200" height="60" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#fff"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="24" fill="#0056b3">COMPUTER FORCE</text>
</svg>`;
fs.writeFileSync(path.join(dir, 'logo.svg'), logoContent);
console.log("Generated assets/images/logo.svg");
