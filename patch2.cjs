const fs = require('fs');
const file = 'app/routes/projects.smart-sparrow/smart-sparrow.jsx';
let content = fs.readFileSync(file, 'utf8');

// Replace the image block for the components image
content = content.replace(
  /<Image\s*key=\{theme\}\s*srcSet=\{\s*isDark\s*\?\s*`\$\{imageSprComponentsDark\} 1024w, \$\{imageSprComponentsDarkLarge\} 2048w`\s*:\s*`\$\{imageSprComponentsLight\} 1024w, \$\{imageSprComponentsLightLarge\} 2048w`\s*\}\s*width=\{1024\}\s*hright=\{800\}\s*placeholder=\{\s*isDark\s*\?\s*imageSprComponentsDarkPlaceholder\s*:\s*imageSprComponentsLightPlaceholder\s*\}/gm,
  `<Image
              key={theme}
              src="https://res.cloudinary.com/osperbian/image/upload/v1770629314/fahad-digital/haya2_b3ao3k.png"
              width={1024}
              hright={800}
              placeholder="https://res.cloudinary.com/osperbian/image/upload/c_scale,w_20/v1770629314/fahad-digital/haya2_b3ao3k.png"`
);

fs.writeFileSync(file, content);
