import sharp from 'sharp';
await sharp('public/og-portfolio.svg').jpeg({ quality: 90 }).toFile('public/og-portfolio.jpg');
console.log('Generated public/og-portfolio.jpg from the editable SVG.');
