/**
 * ScreenshotsSection - Componentes de galería  
 * PARTE 3/3: Grids responsivos para móvil, tablet y desktop
 */

import { motion } from 'framer-motion';
import ScreenshotCard from './ScreenshotCard';
import { screenshots, Screenshot } from './ScreenshotData';
import { 
  rowAnimationConfig, 
  cardHoverConfig, 
  calculateRows, 
  getRowItems 
} from './ScreenshotsSection_part2';

/**
 * Props para componentes de galería
 */
interface GalleryComponentProps {
  openModal: (screenshot: Screenshot) => void;
}

/**
 * Galería para móviles - 1 columna
 */
export function MobileGallery({ openModal }: GalleryComponentProps) {
  return (
    <div className={`grid ${rowAnimationConfig.mobile.grid} ${rowAnimationConfig.mobile.gap} ${rowAnimationConfig.mobile.className}`}>
      {screenshots.map((screenshot, index) => {
        const IconComponent = screenshot.icon;
        return (
          <motion.div
            key={screenshot.id}
            className="group cursor-pointer"
            initial={rowAnimationConfig.mobile.animation.initial}
            whileInView={{ 
              ...rowAnimationConfig.mobile.animation.whileInView,
              transition: { duration: 0.6, delay: index * rowAnimationConfig.mobile.animation.itemDelay }
            }}
            exit={rowAnimationConfig.mobile.animation.exit}
            viewport={rowAnimationConfig.mobile.animation.viewport}
            {...cardHoverConfig}
            onClick={() => openModal(screenshot)}
          >
            <ScreenshotCard screenshot={screenshot} IconComponent={IconComponent} />
          </motion.div>
        );
      })}
    </div>
  );
}

/**
 * Galería para tablets - 2 columnas
 */
export function TabletGallery({ openModal }: GalleryComponentProps) {
  return (
    <div className={`${rowAnimationConfig.tablet.className} ${rowAnimationConfig.tablet.grid} ${rowAnimationConfig.tablet.gap}`}>
      {Array.from({ length: calculateRows(screenshots.length, rowAnimationConfig.tablet.itemsPerRow) }).map((_, rowIndex) => (
        <motion.div
          key={`row-md-${rowIndex}`}
          className={`col-span-2 grid ${rowAnimationConfig.tablet.grid} ${rowAnimationConfig.tablet.gap}`}
          initial={rowAnimationConfig.tablet.animation.initial}
          whileInView={{ 
            ...rowAnimationConfig.tablet.animation.whileInView,
            transition: { duration: 0.6, delay: rowIndex * rowAnimationConfig.tablet.animation.rowDelay }
          }}
          exit={rowAnimationConfig.tablet.animation.exit}
          viewport={rowAnimationConfig.tablet.animation.viewport}
        >
          {getRowItems(screenshots, rowIndex, rowAnimationConfig.tablet.itemsPerRow).map((screenshot) => {
            const IconComponent = screenshot.icon;
            return (
              <motion.div
                key={screenshot.id}
                className="group cursor-pointer"
                {...cardHoverConfig}
                onClick={() => openModal(screenshot)}
              >
                <ScreenshotCard screenshot={screenshot} IconComponent={IconComponent} />
              </motion.div>
            );
          })}
        </motion.div>
      ))}
    </div>
  );
}

/**
 * Galería para desktop - 3 columnas
 */
export function DesktopGallery({ openModal }: GalleryComponentProps) {
  return (
    <div className={`${rowAnimationConfig.desktop.className} ${rowAnimationConfig.desktop.grid} ${rowAnimationConfig.desktop.gap}`}>
      {Array.from({ length: calculateRows(screenshots.length, rowAnimationConfig.desktop.itemsPerRow) }).map((_, rowIndex) => (
        <motion.div
          key={`row-lg-${rowIndex}`}
          className={`col-span-3 grid ${rowAnimationConfig.desktop.grid} ${rowAnimationConfig.desktop.gap}`}
          initial={rowAnimationConfig.desktop.animation.initial}
          whileInView={{ 
            ...rowAnimationConfig.desktop.animation.whileInView,
            transition: { duration: 0.6, delay: rowIndex * rowAnimationConfig.desktop.animation.rowDelay }
          }}
          exit={rowAnimationConfig.desktop.animation.exit}
          viewport={rowAnimationConfig.desktop.animation.viewport}
        >
          {getRowItems(screenshots, rowIndex, rowAnimationConfig.desktop.itemsPerRow).map((screenshot) => {
            const IconComponent = screenshot.icon;
            return (
              <motion.div
                key={screenshot.id}
                className="group cursor-pointer"
                {...cardHoverConfig}
                onClick={() => openModal(screenshot)}
              >
                <ScreenshotCard screenshot={screenshot} IconComponent={IconComponent} />
              </motion.div>
            );
          })}
        </motion.div>
      ))}
    </div>
  );
}