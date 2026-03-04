import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { cssProps, msToNum, numToMs } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './contact.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description:
      'Get in touch with Webdust for your design and development needs.',
  });
};

export const Contact = () => {
  const initDelay = tokens.base.durationS;

  return (
    <Section className={styles.contact}>
      <Transition unmount in={true} timeout={1600}>
        {({ status, nodeRef }) => (
          <div className={styles.form} ref={nodeRef}>
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="h1"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
              <DecoderText text="Contact Us" start={status !== 'exited'} delay={300} />
            </Heading>
            <Divider
              className={styles.divider}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
            />

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
            
            <div 
              className={styles.contactDetails}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.5)}
            >
              <Text size="l" as="p" className={styles.description}>
                Webdust is a digital agency focused on crafting beautiful, engaging, and robust digital experiences. We'd love to hear about your project and see how we can help.
              </Text>
              
              <div className={styles.detailRow}>
                <Icon icon="email" className={styles.detailIcon} />
                  <Text size="m" as="p">
                    <a href="mailto:info@webdust.in">info@webdust.in</a>
                  </Text>
                  <Text size="m" as="p">
                    <a href="mailto:dmwebdust@gmail.com">dmwebdust@gmail.com</a>
                  </Text>
              </div>
              
              <div className={styles.detailRow}>
                <Icon icon="link" className={styles.detailIcon} />
                <Text size="m" as="p">
                  <a href="tel:+919207060060">+91 920 706 0060</a>
                </Text>
              </div>

              <div className={styles.detailRow}>
                <Icon icon="menu" className={styles.detailIcon} />
                <Text size="m" as="p">
                  Webdust Digital Agency<br />
                  Kazhungil Plaza, Puthupparamb rd,<br />
                  Kottakkal, Kerala, India<br />
                  676501
                </Text>
              </div>
              <Button
                href="https://wa.me/919207060060"
                icon="whatsapp"
                className={styles.whatsappButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </Button>

              <div className={styles.mapContainer}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1692.1854750226232!2d75.98260939703566!3d10.998088236385096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b35ba40acaa9%3A0xa32d79e25bed8298!2sXXXM%2BJRF%2C%20Vengara%20-%20Puthuparamba%20-%20Changuvetty%20Rd%2C%20Kottakkal%2C%20Kerala%20676501!5e0!3m2!1sen!2sin!4v1772274637760!5m2!1sen!2sin" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0, borderRadius: '8px', filter: 'invert(90%) hue-rotate(180deg)' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Webdust Location"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </Transition>
      <Footer className={styles.footer} />
    </Section>
  );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
