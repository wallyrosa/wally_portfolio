import { useRef, useCallback } from 'react';

export function useClickTouch(onTap?: () => void) {
    const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(
        null
    );

    const onTouchStart = useCallback((event: React.TouchEvent) => {
        const touch = event.touches[0];
        touchStartRef.current = {
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now(),
        };
    }, []);

    const onTouchEnd = useCallback(
        (event: React.TouchEvent) => {
        if (!touchStartRef.current) return;

        const touch = event.changedTouches[0];
        const touchEnd = {
            x: touch.clientX,
            y: touch.clientY,
            time: Date.now(),
        };

        // Calcula a distância do movimento
        const deltaX = Math.abs(touchEnd.x - touchStartRef.current.x);
        const deltaY = Math.abs(touchEnd.y - touchStartRef.current.y);
        const deltaTime = touchEnd.time - touchStartRef.current.time;

        // Considera como tap se:
        // - O movimento foi pequeno (menos de 10px)
        // - O tempo foi curto (menos de 300ms)
        const isValidTap = deltaX < 10 && deltaY < 10 && deltaTime < 300;

        if (isValidTap) {
            event.preventDefault();
            event.stopPropagation();

            // Se foi passado um callback, executa ele
            if (onTap) {
            onTap();
            } else {
            // Caso contrário, tenta disparar um evento de click
            const target = event.currentTarget as HTMLElement;
            if (target && target.click) {
                // Pequeno delay para evitar conflitos
                setTimeout(() => {
                target.click();
                }, 0);
            }
            }
        }

        touchStartRef.current = null;
        },
        [onTap]
    );

    return { onTouchStart, onTouchEnd };
}

// Hook simplificado para usar diretamente com onClick
export function useSmartTouch() {
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(
    null
  );

  const onTouchStart = useCallback((event: React.TouchEvent) => {
    const touch = event.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now(),
    };
  }, []);

  const onTouchEnd = useCallback((event: React.TouchEvent) => {
    if (!touchStartRef.current) return;

    const touch = event.changedTouches[0];
    const touchEnd = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now(),
    };

    const deltaX = Math.abs(touchEnd.x - touchStartRef.current.x);
    const deltaY = Math.abs(touchEnd.y - touchStartRef.current.y);
    const deltaTime = touchEnd.time - touchStartRef.current.time;

    const isValidTap = deltaX < 10 && deltaY < 10 && deltaTime < 300;

    if (!isValidTap) {
      // Se não foi um tap válido, previne o click
      event.preventDefault();
      event.stopPropagation();
    }

    touchStartRef.current = null;
  }, []);

  return { onTouchStart, onTouchEnd };
}

// Função simples para casos onde você não quer usar o hook
export function onClickTouch(event: React.TouchEvent) {
  event.preventDefault();
  event.stopPropagation();
}
