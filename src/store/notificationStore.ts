import { create } from 'zustand';

export type NotificationVariant = 'default' | 'success' | 'error' | 'warning' | 'info';

export interface NotificationItem {
  id: string;
  message: string;
  subMessage?: string;
  icon?: string; // Changed from React.ReactNode to string (icon name)
  duration?: number;
  variant?: NotificationVariant;
}

interface NotificationStore {
  notifications: NotificationItem[];
  show: (notification: Omit<NotificationItem, 'id'>) => string;
  hide: (id: string) => void;
  clearAll: () => void;
}

export const useNotificationStore = create<NotificationStore>(set => ({
  notifications: [],

  show: notification => {
    const id = Date.now().toString();
    set(state => ({
      notifications: [...state.notifications, { ...notification, id }],
    }));
    return id;
  },

  hide: id => {
    set(state => ({
      notifications: state.notifications.filter(n => n.id !== id),
    }));
  },

  clearAll: () => {
    set({ notifications: [] });
  },
}));
