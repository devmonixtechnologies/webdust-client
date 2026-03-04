const fs = require('fs');
const file = 'app/routes/home/home.jsx';
let content = fs.readFileSync(file, 'utf8');

// The Home page uses sliceTexture and sliceTextureLarge for the third project
// Let's modify the texture props to use the provided URLs directly
content = content.replace(
  /textures:\s*\[\s*\{\s*srcSet:\s*`\$\{sliceTexture\} 800w, \$\{sliceTextureLarge\} 1920w`,\s*placeholder:\s*sliceTexturePlaceholder,\s*\},\s*\],/s,
  `textures: [
            {
              srcSet: "https://res.cloudinary.com/osperbian/image/upload/v1772271151/fahad-digital/brandidentity_fwukm6.webp 800w, https://res.cloudinary.com/osperbian/image/upload/v1772271151/fahad-digital/brandidentity_fwukm6.webp 1920w",
              placeholder: "https://res.cloudinary.com/osperbian/image/upload/c_scale,w_20/v1772271151/fahad-digital/brandidentity_fwukm6.webp",
            },
          ],`
);

fs.writeFileSync(file, content);
