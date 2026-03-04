import { forwardRef } from 'react';
import { useTheme } from '~/components/theme-provider';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const { theme } = useTheme();

  return (
    <div
      className={classes(styles.monogram, className)}
      ref={ref}
      {...props}
      style={{ display: 'flex', alignItems: 'center', width: '48px', height: '29px' }}
    >
      <img 
        src="https://res.cloudinary.com/osperbian/image/upload/v1772597775/fahad-digital/wb_logo_blue_ICON_ONLY_g4dl9m.png" 
        alt="Logo" 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'contain',
          // Use brightness(0) to turn it black in light mode, keep original color in dark mode
          filter: theme === 'dark' ? 'none' : 'brightness(0)'
        }}
      />
    </div>
  );
});
