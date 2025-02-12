import React from 'react';
import { Button } from '../Button/Button';
import clsx from 'clsx';

interface ICollapse {
  /** Заголовок  панели */
  title: string;
  /** Содержимое панели */
  children: React.ReactNode;
  /** Флаг признак открытости */
  isOpen: boolean;
  /** Тогглер для открытия */
  toggleOpen: () => void;
}

/**
 * Компонент Collapse-панели
 *
 * Компонент исопльзует useLayoutEffect для динамического определения высоты содержимого
 * и onTransitionEnd для добавления необходимой (если понадобится в будущем) логики после завершения анимации
 *
 * @param title Заголовок панели
 * @param children Содержимое панели
 * @param isOpen Флаг признак открытости
 * @param toggleOpen Тогглер для открытия
 *
 * @returns React.FC
 */

export const Collapse: React.FC<ICollapse> = ({ title, children, isOpen = false, toggleOpen }) => {
  // Реф для блока с контентом
  const contentRef = React.useRef<HTMLDivElement>(null);
  // Стейт для хранения изначальной или динамически определеной высоты children
  const [contentHeight, setContentHeight] = React.useState(0);

  // Хендлер для смены состояния isOpen
  const handleToggle = (): void => {
    toggleOpen();
  };

  // Хендлер для отслеживания завершения анимации
  const handleTransitionEnd = (): void => {
    console.log('Анимация завершена!');
  };

  // Эффект для измерения высоты содержимого при  значения флага isOpen
  React.useLayoutEffect(() => {
    if (isOpen && contentRef.current) {
      const newHeight = contentRef.current.scrollHeight;
      setContentHeight(newHeight);
    }
  }, [isOpen]);

  return (
    <div className="box collapse flex-column margin-bottom-32">
      <div className="flex-row align-items-start justify-content-between">
        <h3 className="margin-top-12">{title}</h3>
        <Button className="margin-left-32 flex-shrink-0" onClick={handleToggle}>
          {isOpen ? 'Закрыть' : 'Открыть'} Collapse-панель
        </Button>
      </div>
      <div
        ref={contentRef}
        className={clsx('collapse-content', isOpen && 'opened')}
        style={{ height: isOpen ? `${contentHeight}px` : 0 }}
        onTransitionEnd={handleTransitionEnd}
      >
        {children}
      </div>
    </div>
  );
};
