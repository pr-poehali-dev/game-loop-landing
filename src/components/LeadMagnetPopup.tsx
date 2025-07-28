import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface LeadMagnetPopupProps {
  isVisible: boolean;
  onClose: () => void;
  openTelegram: () => void;
}

export default function LeadMagnetPopup({ isVisible, onClose, openTelegram }: LeadMagnetPopupProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
    }
  }, [isVisible]);

  const handleTelegramClick = () => {
    openTelegram();
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Popup */}
      <Card className={`relative bg-xbox-dark border-2 border-xbox-green/30 shadow-2xl shadow-xbox-green/20 max-w-md w-full mx-4 transform transition-all duration-500 ${
        isAnimating ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
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
            <span className="text-4xl">🎁</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-xbox-green mb-3">
            Напиши нам и участвуй в розыгрыше игры!
          </h3>

          {/* Subtitle */}
          <p className="text-xbox-gray mb-6">
            Плюс бонус каждому — расскажем в Telegram
          </p>

          {/* CTA Button */}
          <Button
            onClick={handleTelegramClick}
            className="bg-xbox-green hover:bg-xbox-green/90 text-xbox-black font-bold px-6 py-3 w-full hover-scale shadow-lg shadow-xbox-green/30"
          >
            <Icon name="MessageCircle" className="mr-2" size={18} />
            Перейти в Telegram
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}