import React from 'react';
import { clsx } from 'clsx';

// Тип для размеров бокса
type Size = { width: number; height: number };

// Интерефейс компонента
interface IResizer {
  /** Опциональные классы */
  className?: string;
  /** Начальная ширина || 539px */
  initialWidth?: number;
  /** Начальная высота || 40px */
  initialHeight?: number;
  /** Содержимое компонента */
  children: React.ReactNode;
}

// Минимальные размеры компонента
const minResizerWidth = 539;
const minResizerHeight = 40;

export const Resizer: React.FC<IResizer> = ({
  className,
  children,
  initialWidth = minResizerWidth,
  initialHeight = minResizerHeight,
}) => {
  // Реф родительского элемента
  const resizerRef = React.useRef<HTMLDivElement>();
  // Стейт размеров компонента
  const [boxSize, setBoxSize] = React.useState({
    width: initialWidth < minResizerWidth ? minResizerWidth : initialWidth,
    height: initialHeight < minResizerHeight ? minResizerHeight : initialHeight,
  });

  // Константа для новых размеров
  const newSizes = React.useRef(boxSize);
  newSizes.current = boxSize;

  // Хенддлер для операции ресайза
  // Хук useMemo гарантирует, что внутренние функции будут пересчитываться один раз
  const { onResizeHandler } = React.useMemo(() => {
    // Переменная с изначальными "координатами" компонента
    let startBlock = { x: 0, y: 0, width: minResizerWidth, height: minResizerHeight };

    // Функция записи width и height в boxSize, с проверкой на "минимальность" размеров.
    // В качестве аргментов объект Size
    const setSizes = (size: Size) => {
      setBoxSize({
        width: size.width < minResizerWidth ? minResizerWidth : Math.round(size.width),
        height: size.height < minResizerHeight ? minResizerHeight : Math.round(size.height),
      });
    };

    // Функция пересчета размеров при перетасивания точки-ресайзера
    const moveHandler = (ev: MouseEvent) => {
      ev.preventDefault();

      const rect = resizerRef.current.getBoundingClientRect();
      const x = startBlock.x - (ev.clientX - rect.x);
      const y = startBlock.y - (ev.clientY - rect.y);

      setSizes({ width: startBlock.width - x, height: startBlock.height - y });
    };

    // Удаляем листенеры, после завершения перемещения точки-ресайзера
    const upMouseBtnHandler = () => {
      window.removeEventListener('mousemove', moveHandler);
      window.removeEventListener('mouseup', upMouseBtnHandler);
    };

    return {
      onResizeHandler: (ev: React.MouseEvent) => {
        ev.stopPropagation();

        const rect = resizerRef.current.getBoundingClientRect();
        startBlock = {
          x: ev.clientX - rect.x,
          y: ev.clientY - rect.y,
          width: newSizes.current.width,
          height: newSizes.current.height,
        };

        window.addEventListener('mousemove', moveHandler);
        window.addEventListener('mouseup', upMouseBtnHandler);
      },
    };
  }, []);

  return (
    <div
      ref={resizerRef}
      className={clsx('box', 'resize', className)}
      style={{ width: boxSize.width, height: boxSize.height }}
    >
      {children}
      <button type="button" className="resize-btn" onMouseDown={onResizeHandler} />
    </div>
  );
};
