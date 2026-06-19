import React, { useEffect, useRef } from 'react';
import { useNotificationStore } from '../../store/notificationStore';

// Icon mapping
const getIcon = (variant?: string) => {
  switch (variant) {
    case 'success':
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      );
    case 'error':
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
        </svg>
      );
    case 'warning':
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
        </svg>
      );
    case 'info':
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      );
  }
};

export const GlobalNotification: React.FC = () => {
  const { notifications, hide } = useNotificationStore();
  const timeoutRefs = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  useEffect(() => {
    notifications.forEach(notification => {
      if (timeoutRefs.current[notification.id]) {
        clearTimeout(timeoutRefs.current[notification.id]);
      }

      timeoutRefs.current[notification.id] = setTimeout(() => {
        hide(notification.id);
      }, notification.duration || 2500);
    });

    return () => {
      Object.values(timeoutRefs.current).forEach(clearTimeout);
    };
  }, [notifications, hide]);

  const variantStyles = {
    default: {
      bg: 'bg-[#1a1a2e]',
      text: 'text-white',
      accent: 'text-[#ffd633]',
      shadow: 'shadow-lg',
    },
    success: {
      bg: 'bg-emerald-600',
      text: 'text-white',
      accent: 'text-emerald-200',
      shadow: 'shadow-lg',
    },
    error: {
      bg: 'bg-rose-600',
      text: 'text-white',
      accent: 'text-rose-200',
      shadow: 'shadow-lg',
    },
    warning: {
      bg: 'bg-amber-500',
      text: 'text-white',
      accent: 'text-amber-100',
      shadow: 'shadow-lg',
    },
    info: {
      bg: 'bg-sky-600',
      text: 'text-white',
      accent: 'text-sky-200',
      shadow: 'shadow-lg',
    },
  };

  const handleClose = (id: string) => {
    if (timeoutRefs.current[id]) {
      clearTimeout(timeoutRefs.current[id]);
    }
    hide(id);
  };

  if (notifications.length === 0) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[9999] flex flex-col gap-2 print:hidden">
      {notifications.map(notification => {
        const styles = variantStyles[notification.variant || 'default'];
        const icon = getIcon(notification.variant);

        return (
          <div
            key={notification.id}
            className={`
              flex items-center gap-3 px-4 py-2.5
              ${styles.bg} ${styles.text} ${styles.shadow}
              rounded-lg
              animate-slide-in
              max-w-[380px]
              min-w-[280px]
              relative
            `}
          >
            {/* Icon */}
            <div className={`flex-shrink-0 ${styles.accent}`}>{icon}</div>

            {/* Text */}
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-sm font-medium">{notification.message}</span>
              {notification.subMessage && (
                <span className="text-xs opacity-75 font-normal">{notification.subMessage}</span>
              )}
            </div>

            {/* Close button */}
            <button
              className="flex-shrink-0 text-white/40 hover:text-white/80 transition-colors cursor-pointer -mr-1"
              onClick={() => handleClose(notification.id)}
              type="button"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20 rounded-b-lg overflow-hidden">
              <div
                className={`h-full ${styles.accent} bg-current rounded-b-lg transition-all ease-linear`}
                style={{
                  width: '100%',
                  transitionDuration: `${notification.duration || 2500}ms`,
                }}
              />
            </div>
          </div>
        );
      })}

      <style>{`
        @keyframes slide-in {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
