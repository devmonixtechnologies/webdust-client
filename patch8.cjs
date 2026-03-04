const fs = require('fs');
const file = 'app/routes/home/home.jsx';
let content = fs.readFileSync(file, 'utf8');

// The Home page uses gamestackTexture and gamestackTexture2 for the second project
// Let's modify the texture props to use the provided URLs directly
content = content.replace(
  /textures:\s*\[\s*\{\s*srcSet:\s*`\$\{gamestackTexture\} 375w, \$\{gamestackTextureLarge\} 750w`,\s*placeholder:\s*gamestackTexturePlaceholder,\s*\},\s*\{\s*srcSet:\s*`\$\{gamestackTexture2\} 375w, \$\{gamestackTexture2Large\} 750w`,\s*placeholder:\s*gamestackTexture2Placeholder,\s*\},\s*\],/s,
  `textures: [
            {
              srcSet: "https://res.cloudinary.com/osperbian/image/upload/v1772270509/fahad-digital/games-scr_glurem.png 375w, https://res.cloudinary.com/osperbian/image/upload/v1772270509/fahad-digital/games-scr_glurem.png 750w",
              placeholder: "https://res.cloudinary.com/osperbian/image/upload/c_scale,w_20/v1772270509/fahad-digital/games-scr_glurem.png",
            },
            {
              srcSet: "https://res.cloudinary.com/osperbian/image/upload/v1772270509/fahad-digital/gaminghub_uuhy7r.png 375w, https://res.cloudinary.com/osperbian/image/upload/v1772270509/fahad-digital/gaminghub_uuhy7r.png 750w",
              placeholder: "https://res.cloudinary.com/osperbian/image/upload/c_scale,w_20/v1772270509/fahad-digital/gaminghub_uuhy7r.png",
            },
          ],`
);

fs.writeFileSync(file, content);
