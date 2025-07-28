import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface LeadMagnetPopupProps {
  isVisible: boolean;
  onClose: () => void;
  openTelegram: () => void;
}

export default function LeadMagnetPopup({ isVisible, onClose }: LeadMagnetPopupProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setIsAnimating(true), 100);
    }
  }, [isVisible]);

  const handleTelegramClick = () => {
    window.open('https://t.me/Game_Loop_Store_bot', '_blank');
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Popup Card */}
      <Card className={`bg-xbox-dark border-2 border-xbox-green/30 shadow-2xl shadow-xbox-green/20 w-80 rounded-lg transform transition-all duration-500 ease-out ${
        isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xbox-gray hover:text-xbox-white transition-colors z-10"
          aria-label="Закрыть"
        >
          <Icon name="X" size={20} />
        </button>

        <CardContent className="p-6 text-center">
          {/* Gift icon */}
          <div className="mb-4">
            <span className="text-3xl">🎁</span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-xbox-green mb-3 leading-tight">
            Напиши нам и участвуй в розыгрыше игры!
          </h3>

          {/* Subtitle */}
          <p className="text-xbox-gray mb-6 text-sm leading-relaxed">
            Плюс бонус каждому — расскажем в Telegram
          </p>

          {/* CTA Button */}
          <Button
            onClick={handleTelegramClick}
            className="bg-xbox-green hover:bg-xbox-green/90 text-xbox-black font-bold px-4 py-2 w-full hover-scale shadow-lg shadow-xbox-green/30 text-sm"
          >
            <Icon name="MessageCircle" className="mr-2" size={16} />
            Перейти в Telegram
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}