const fs = require('fs');
const file = 'app/routes/projects.smart-sparrow/smart-sparrow.jsx';
let content = fs.readFileSync(file, 'utf8');

// Replace the image block for the main image
content = content.replace(
  /<ProjectImage\s*raised\s*key=\{theme\}\s*srcSet=\{\s*isDark\s*\?\s*`\$\{imageSprLessonBuilderDark\} 1280w, \$\{imageSprLessonBuilderDarkLarge\} 2560w`\s*:\s*`\$\{imageSprLessonBuilderLight\} 1280w, \$\{imageSprLessonBuilderLightLarge\} 2560w`\s*\}\s*width=\{1280\}\s*height=\{800\}\s*placeholder=\{\s*isDark\s*\?\s*imageSprLessonBuilderDarkPlaceholder\s*:\s*imageSprLessonBuilderLightPlaceholder\s*\}/gm,
  `<ProjectImage
              raised
              key={theme}
              src="https://res.cloudinary.com/osperbian/image/upload/v1770628975/fahad-digital/haya-diamonds_pzazqx.png"
              width={1280}
              height={800}
              placeholder="https://res.cloudinary.com/osperbian/image/upload/c_scale,w_20/v1770628975/fahad-digital/haya-diamonds_pzazqx.png"`
);

// If the regex above failed because sed messed it up, let's just do a simpler search and replace
fs.writeFileSync(file, content);
