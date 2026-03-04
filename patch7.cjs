const fs = require('fs');
const file = 'app/routes/home/home.jsx';
let content = fs.readFileSync(file, 'utf8');

// Fix the texture in Home component to provide srcSet so it doesn't break resolveSrcFromSrcSet
content = content.replace(
  /textures:\s*\[\n\s*\{\n\s*src:\s*"https:\/\/res.cloudinary.com\/osperbian\/image\/upload\/v1772268883\/fahad-digital\/hayalapt_jwvnqw.png",\n\s*placeholder:\s*"https:\/\/res.cloudinary.com\/osperbian\/image\/upload\/c_scale,w_20\/v1772268883\/fahad-digital\/hayalapt_jwvnqw.png",\n\s*\},\n\s*\],/,
  `textures: [
            {
              srcSet: "https://res.cloudinary.com/osperbian/image/upload/v1772268883/fahad-digital/hayalapt_jwvnqw.png 1280w, https://res.cloudinary.com/osperbian/image/upload/v1772268883/fahad-digital/hayalapt_jwvnqw.png 2560w",
              placeholder: "https://res.cloudinary.com/osperbian/image/upload/c_scale,w_20/v1772268883/fahad-digital/hayalapt_jwvnqw.png",
            },
          ],`
);

fs.writeFileSync(file, content);
