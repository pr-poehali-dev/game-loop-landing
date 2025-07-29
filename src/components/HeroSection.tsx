import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  onGetStarted?: () => void;
  onLearnMore?: () => void;
  isVisible?: boolean;
  openTelegram?: () => void;
}

export default function HeroSection({ 
  title = "Подписка Xbox Game Pass Ultimate", 
  subtitle = "У нас можно купить официальную подписку Xbox Game Pass Ultimate — более 500 игр на Xbox Series X|S, Xbox One и ПК. \n\nМоментальная активация. Поддержка 24/7",
  isVisible = true,
  openTelegram = () => {},
  onGetStarted,
  onLearnMore 
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <img 
        src="https://cdn.poehali.dev/files/8042ca3f-9f4c-4908-8c7d-0c359d8f5bf7.png"
        alt="Xbox геймпад с цветными кнопками A, B, X, Y"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-xbox-black/60 via-xbox-black/80 to-xbox-black" />
      
      <div className={`relative container mx-auto px-4 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-glow">
          {title}
          {title === "Xbox Gaming Pass — 100+ игр, подписка со скидкой" ? null : (
            <>
              <br />
              <span className="text-xbox-green">дешевле, чем в Microsoft Store</span>
            </>
          )}
        </h1>
        
        <p className="text-xl md:text-2xl font-body mb-8 text-xbox-gray max-w-3xl mx-auto">
          {subtitle}
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