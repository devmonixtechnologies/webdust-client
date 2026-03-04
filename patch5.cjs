const fs = require('fs');
const file = 'app/routes/projects.smart-sparrow/smart-sparrow.jsx';
let content = fs.readFileSync(file, 'utf8');

// Replace the image block for the storyboarder image
content = content.replace(
  /<Image\n\s*raised\n\s*key=\{theme\}\n\s*srcSet=\{\n\s*isDark\n\s*\?\s*\`\$\{imageSprStoryboarderDark\} 1280w, \$\{imageSprStoryboarderDarkLarge\} 2560w\`\n\s*:\s*\`\$\{imageSprStoryboarderLight\} 1280w, \$\{imageSprStoryboarderLightLarge\} 2560w\`\n\s*\}\n\s*width=\{1280\}\n\s*height=\{800\}\n\s*placeholder=\{\n\s*isDark\n\s*\?\s*imageSprStoryboarderDarkPlaceholder\n\s*:\s*imageSprStoryboarderLightPlaceholder\n\s*\}\n\s*alt="A drag and drop storyboard style editor for creating an adaptive lesson."/gm,
  `<Image
              raised
              key={theme}
              src="https://res.cloudinary.com/osperbian/image/upload/v1770630522/fahad-digital/haya3_wwxhcs.png"
              width={1280}
              height={800}
              placeholder="https://res.cloudinary.com/osperbian/image/upload/c_scale,w_20/v1770630522/fahad-digital/haya3_wwxhcs.png"
              alt="Haya Diamonds storytelling and learning map"`
);

fs.writeFileSync(file, content);
