const fs = require('fs');
const file = 'app/routes/projects.smart-sparrow/smart-sparrow.jsx';
let content = fs.readFileSync(file, 'utf8');

// Replace the image block for the design system docs image
content = content.replace(
  /<Image\s*raised\s*key=\{theme\}\s*srcSet=\{\s*isDark\s*\?\s*`\$\{imageSprDesignSystemDark\} 1280w, \$\{imageSprDesignSystemDarkLarge\} 2560w`\s*:\s*`\$\{imageSprDesignSystemLight\} 1280w, \$\{imageSprDesignSystemLightLarge\} 2560w`\s*\}\s*width=\{1280\}\s*height=\{800\}\s*placeholder=\{\s*isDark\s*\?\s*imageSprDesignSystemDarkPlaceholder\s*:\s*imageSprDesignSystemLightPlaceholder\s*\}/gm,
  `<Image
              raised
              key={theme}
              src="https://res.cloudinary.com/osperbian/video/upload/v1770629548/fahad-digital/HAYA-AD-01-1_wbixfp.mp4"
              width={1280}
              height={800}
              placeholder="https://res.cloudinary.com/osperbian/video/upload/so_0/v1770629548/fahad-digital/HAYA-AD-01-1_wbixfp.jpg"`
);

fs.writeFileSync(file, content);
