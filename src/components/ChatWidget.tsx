import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface ChatWidgetProps {
  telegramUrl: string;
}

export default function ChatWidget({ telegramUrl }: ChatWidgetProps) {
  const [isVisible, setIsVisible] = useState(true);

  const openTelegram = () => {
    window.open(telegramUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <button 
          onClick={openTelegram}
          className="bg-xbox-green hover:bg-xbox-green/90 text-xbox-black px-4 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2 text-sm font-medium group"
        >
          <div className="flex flex-col items-start">
            <span className="flex items-center gap-1">
              <span>❓</span>
              <span>Есть вопросы?</span>
            </span>
            <span className="flex items-center gap-1 text-xs opacity-90">
              <span>💬</span>
              <span>Напишите нам в Telegram</span>
            </span>
          </div>
          <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
        </button>
        
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 w-6 h-6 bg-xbox-gray/80 hover:bg-xbox-gray text-white rounded-full flex items-center justify-center text-xs transition-colors duration-200"
        >
          <Icon name="X" size={12} />
        </button>
      </div>
    </div>
  );
}