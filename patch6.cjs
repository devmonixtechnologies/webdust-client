const fs = require('fs');
const file = 'app/routes/home/home.jsx';
let content = fs.readFileSync(file, 'utf8');

// The Home page uses sprTexture, sprTextureLarge, sprTexturePlaceholder for the first project
// Let's modify the texture prop to use the provided URL directly
content = content.replace(
  /textures:\s*\[\s*\{\s*srcSet:\s*`\$\{sprTexture\} 1280w, \$\{sprTextureLarge\} 2560w`,\s*placeholder:\s*sprTexturePlaceholder,\s*\},\s*\],/s,
  `textures: [
            {
              src: "https://res.cloudinary.com/osperbian/image/upload/v1772268883/fahad-digital/hayalapt_jwvnqw.png",
              placeholder: "https://res.cloudinary.com/osperbian/image/upload/c_scale,w_20/v1772268883/fahad-digital/hayalapt_jwvnqw.png",
            },
          ],`
);

fs.writeFileSync(file, content);
