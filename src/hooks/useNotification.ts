import { useNotificationStore } from '../store/notificationStore';

export const useNotification = () => {
  const { show, hide, clearAll } = useNotificationStore();

  return {
    show,
    hide,
    clearAll,
    success: (message: string, subMessage?: string, duration?: number) => {
      return show({
        message,
        subMessage,
        duration,
        variant: 'success',
      });
    },
    error: (message: string, subMessage?: string, duration?: number) => {
      return show({
        message,
        subMessage,
        duration,
        variant: 'error',
      });
    },
    warning: (message: string, subMessage?: string, duration?: number) => {
      return show({
        message,
        subMessage,
        duration,
        variant: 'warning',
      });
    },
    info: (message: string, subMessage?: string, duration?: number) => {
      return show({
        message,
        subMessage,
        duration,
        variant: 'info',
      });
    },
  };
};
