import React from 'react';
import { Button } from '../Button/Button';
import clsx from 'clsx';

interface ICollapse {
  /** Опциональные классы */
  className?: string;
  /** Заголовок  панели */
  title: string;
  /** Содержимое панели */
  children: React.ReactNode;
}

/**
 * Компонент Collapse-панели
 *
 * Компонент исопльзует useLayoutEffect для динамического определения высоты содержимого
 * и onTransitionEnd для добавления необходимой (если понадобится в будущем) логики после завершения анимации
 *
 * @param title Заголовок панели
 * @param children Содержимое панели
 *
 * @returns React.FC
 */

export const Collapse: React.FC<ICollapse> = ({ className, title, children }) => {
  // Реф для блока с контентом
  const contentRef = React.useRef<HTMLDivElement>(null);
  // Стейт для хранения изначальной или динамически определеной высоты children
  const [contentHeight, setContentHeight] = React.useState(0);

  const [isCollapseOpen, setIsCollapseOpen] = React.useState<boolean>(false);

  // Хендлер для смены состояния открытости
  const handleToggle = (): void => {
    setIsCollapseOpen((prev) => !prev);
  };

  // Хендлер для отслеживания завершения анимации
  const handleTransitionEnd = (): void => {
    console.log('Анимация завершена!');
  };

  // Эффект для измерения высоты содержимого при значении флага isCollapseOpen === true
  React.useLayoutEffect(() => {
    if (isCollapseOpen && contentRef.current) {
      const newHeight = contentRef.current.scrollHeight;
      setContentHeight(newHeight);
    }
  }, [isCollapseOpen]);

  return (
    <div className={clsx('box', 'collapse', 'flex-column', className)}>
      <div className="flex-row align-items-start justify-content-between">
        <h3 className="margin-top-12">{title}</h3>
        <Button className="margin-left-32 flex-shrink-0" onClick={handleToggle}>
          {isCollapseOpen ? 'Закрыть' : 'Открыть'} Collapse-панель
        </Button>
      </div>
      <div
        ref={contentRef}
        className={clsx('collapse-content', isCollapseOpen && 'opened')}
        style={{ height: isCollapseOpen ? `${contentHeight}px` : 0 }}
        onTransitionEnd={handleTransitionEnd}
      >
        {children}
      </div>
    </div>
  );
};
