const fs = require('fs');
const file = 'app/routes/projects.smart-sparrow/smart-sparrow.jsx';
let content = fs.readFileSync(file, 'utf8');

// Replace the image block for the motion design video
content = content.replace(
  /<Image\n\s*raised\n\s*className=\{styles.video\}\n\s*srcSet=\{\`\$\{videoSprMotion\} 1280w, \$\{videoSprMotionLarge\} 2560w\`\}\n\s*width=\{1280\}\n\s*height=\{800\}\n\s*placeholder=\{videoSprMotionPlaceholder\}\n\s*alt="A learning designer building and deploying an interactive lesson on volcanism using the app."/gm,
  `<Image
                raised
                className={styles.video}
                src="https://res.cloudinary.com/osperbian/video/upload/v1770006457/fahad-digital/Comp-1_5_i29btx.mp4"
                width={1280}
                height={800}
                placeholder="https://res.cloudinary.com/osperbian/video/upload/so_0/v1770006457/fahad-digital/Comp-1_5_i29btx.jpg"
                alt="A learning designer building and deploying an interactive lesson on volcanism using the app."`
);

fs.writeFileSync(file, content);
