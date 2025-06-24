
import { useState, useEffect } from "react";
import { GlassCard } from "./GlassCard";
import { Bell, X, Check, Clock, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Notification {
  id: string;
  type: 'habit' | 'goal' | 'health' | 'reminder';
  title: string;
  message: string;
  time: string;
  read: boolean;
  action?: string;
}

export const NotificationCenter = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'habit',
      title: 'Rapèl Abitid',
      message: 'Li tan pou w fè meditasyon ou!',
      time: '5 minit pase',
      read: false,
      action: 'marke-fini'
    },
    {
      id: '2',
      type: 'goal',
      title: 'Objektif Prèske Rive',
      message: 'Ou gen sèlman 2 liv anko pou w li nan mwa sa!',
      time: '1 è pase',
      read: false
    },
    {
      id: '3',
      type: 'health',
      title: 'Rapò Sante',
      message: 'HRV ou pi wo pase nòmal - bon nouvel!',
      time: '3 è pase',
      read: true
    }
  ]);

  const [showNotifications, setShowNotifications] = useState(false);

  const getIcon = (type: string) => {
    switch (type) {
      case 'habit': return <Clock className="text-blue-400" size={16} />;
      case 'goal': return <Target className="text-green-400" size={16} />;
      case 'health': return <Heart className="text-red-400" size={16} />;
      default: return <Bell className="text-gray-400" size={16} />;
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="relative">
      <Button
        onClick={() => setShowNotifications(!showNotifications)}
        variant="ghost"
        className="relative p-2 text-gray-400 hover:text-white"
      >
        <Bell size={20} />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </Button>

      {showNotifications && (
        <div className="absolute right-0 top-12 w-80 z-50">
          <GlassCard>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Notifikasyon</h3>
              <Button
                onClick={() => setShowNotifications(false)}
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                <X size={16} />
              </Button>
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto">
              {notifications.length === 0 ? (
                <p className="text-gray-400 text-center py-4">Pa gen notifikasyon</p>
              ) : (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-3 rounded-lg border transition-colors ${
                      notification.read 
                        ? 'bg-white/5 border-white/10' 
                        : 'bg-blue-500/10 border-blue-500/20'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      {getIcon(notification.type)}
                      <div className="flex-1">
                        <h4 className={`font-medium ${notification.read ? 'text-gray-300' : 'text-white'}`}>
                          {notification.title}
                        </h4>
                        <p className="text-sm text-gray-400 mt-1">
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                          {notification.time}
                        </p>
                      </div>
                      <div className="flex space-x-1">
                        {!notification.read && (
                          <Button
                            onClick={() => markAsRead(notification.id)}
                            variant="ghost"
                            size="sm"
                            className="text-green-400 hover:text-green-300"
                          >
                            <Check size={14} />
                          </Button>
                        )}
                        <Button
                          onClick={() => deleteNotification(notification.id)}
                          variant="ghost"
                          size="sm"
                          className="text-red-400 hover:text-red-300"
                        >
                          <X size={14} />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  );
};

export default NotificationCenter;
