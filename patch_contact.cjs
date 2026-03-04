const fs = require('fs');
const file = 'app/routes/contact/contact.jsx';
let content = fs.readFileSync(file, 'utf8');

// Insert the video between the map and the description
const videoHtml = `
              <div className={styles.videoContainer}>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className={styles.contactVideo}
                >
                  <source src="https://res.cloudinary.com/osperbian/video/upload/v1772273108/fahad-digital/Final_comp_1_online-video-cutter.com_r6vcxw.mp4" type="video/mp4" />
                </video>
              </div>
`;

content = content.replace(
  /<div className=\{styles\.mapContainer\}>/s,
  `${videoHtml}              <div className={styles.mapContainer}>`
);

fs.writeFileSync(file, content);
