const fs = require('fs');
const file = 'app/routes/projects.smart-sparrow/smart-sparrow.jsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(
  /srcSet=\{\n\s*isDark\n\s*\?\s*\`\$\{imageSprLessonBuilderDark\}.*?\n\s*\:\s*\`\$\{imageSprLessonBuilderLight\}.*?\n\s*\}/s,
  `src="https://res.cloudinary.com/osperbian/image/upload/v1770628975/fahad-digital/haya-diamonds_pzazqx.png"`
);
content = content.replace(
  /placeholder=\{\n\s*isDark\n\s*\?\s*imageSprLessonBuilderDarkPlaceholder\n\s*\:\s*imageSprLessonBuilderLightPlaceholder\n\s*\}/s,
  `placeholder="https://res.cloudinary.com/osperbian/image/upload/c_scale,w_20/v1770628975/fahad-digital/haya-diamonds_pzazqx.png"`
);
fs.writeFileSync(file, content);
