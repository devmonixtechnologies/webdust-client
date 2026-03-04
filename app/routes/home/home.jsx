import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Digital Marketing & Design Agency',
    description: `Webdust.in is a premier digital marketing and design agency offering website development, UI/UX design, brand identity, and custom web applications.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Storytelling for the Haya Diamonds"
        description="We worked as the design lead on a major iteration of Haya Diamond. We took the platform in a...... read more!"
        buttonText="View project"
        buttonLink="/projects/smart-sparrow"
        model={{
          type: 'laptop',
          alt: 'Haya Diamonds project preview',
          textures: [
            {
              srcSet: "https://res.cloudinary.com/osperbian/image/upload/v1772268883/fahad-digital/hayalapt_jwvnqw.png 1280w, https://res.cloudinary.com/osperbian/image/upload/v1772268883/fahad-digital/hayalapt_jwvnqw.png 2560w",
              placeholder: "https://res.cloudinary.com/osperbian/image/upload/c_scale,w_20/v1772268883/fahad-digital/hayalapt_jwvnqw.png",
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Website Design and Development"
        description="Create a stunning online presence with our web design and development services. We build responsive, user-friendly websites that not only captivate your audience but also enhance their overall user experience."
        model={{
          type: 'phone',
          alt: 'Website Design and Development preview',
          textures: [
            {
              srcSet: "https://res.cloudinary.com/osperbian/image/upload/v1772270509/fahad-digital/games-scr_glurem.png 375w, https://res.cloudinary.com/osperbian/image/upload/v1772270509/fahad-digital/games-scr_glurem.png 750w",
              placeholder: "https://res.cloudinary.com/osperbian/image/upload/c_scale,w_20/v1772270509/fahad-digital/games-scr_glurem.png",
            },
            {
              srcSet: "https://res.cloudinary.com/osperbian/image/upload/v1772270509/fahad-digital/gaminghub_uuhy7r.png 375w, https://res.cloudinary.com/osperbian/image/upload/v1772270509/fahad-digital/gaminghub_uuhy7r.png 750w",
              placeholder: "https://res.cloudinary.com/osperbian/image/upload/c_scale,w_20/v1772270509/fahad-digital/gaminghub_uuhy7r.png",
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Brand identity & logo design"
        description="Crafting premium marks, typography, and visual systems for luxury brands."
        model={{
          type: 'laptop',
          alt: 'Brand identity and logo design preview',
          textures: [
            {
              srcSet: "https://res.cloudinary.com/osperbian/image/upload/v1772271151/fahad-digital/brandidentity_fwukm6.webp 800w, https://res.cloudinary.com/osperbian/image/upload/v1772271151/fahad-digital/brandidentity_fwukm6.webp 1920w",
              placeholder: "https://res.cloudinary.com/osperbian/image/upload/c_scale,w_20/v1772271151/fahad-digital/brandidentity_fwukm6.webp",
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
