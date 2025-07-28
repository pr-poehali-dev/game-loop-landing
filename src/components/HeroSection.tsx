import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  isVisible: boolean;
  openTelegram: () => void;
}

export default function HeroSection({ isVisible, openTelegram }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url('img/8b921259-6532-4dc5-9c1c-a1461a5976dc.jpg')` }}
        role="img"
        aria-label="Xbox Game Pass игры: Forza, Halo, Starfield"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-xbox-black/60 via-xbox-black/80 to-xbox-black" />
      
      <div className={`relative container mx-auto px-4 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-glow">
          Подписка Xbox Game Pass Ultimate
          <br />
          <span className="text-xbox-green">дешевле, чем в Microsoft Store</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-body mb-8 text-xbox-gray max-w-3xl mx-auto">
          Купить официальную подписку Xbox Game Pass Ultimate — более 500 игр на Xbox Series X|S, Xbox One и ПК. Моментальная активация. Поддержка 24/7
        </p>
        
        <Button 
          onClick={openTelegram}
          className="bg-xbox-green hover:bg-xbox-green/90 text-xbox-black font-bold text-lg px-8 py-4 mb-8 hover-scale shadow-lg shadow-xbox-green/30"
        >
          <Icon name="MessageCircle" className="mr-2" />
          Оформить через Telegram
        </Button>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <Badge className="bg-xbox-green/20 text-xbox-green border border-xbox-green/50 px-4 py-2">
            <Icon name="Star" className="mr-1" size={16} />
            4.9 ★ рейтинг
          </Badge>
          <Badge className="bg-xbox-green/20 text-xbox-green border border-xbox-green/50 px-4 py-2">
            <Icon name="Users" className="mr-1" size={16} />
            10 000+ клиентов
          </Badge>
          <Badge className="bg-xbox-green/20 text-xbox-green border border-xbox-green/50 px-4 py-2">
            <Icon name="Shield" className="mr-1" size={16} />
            Гарантия возврата
          </Badge>
        </div>
      </div>
    </section>
  );
}