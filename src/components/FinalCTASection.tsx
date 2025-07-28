import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface FinalCTASectionProps {
  openTelegram: () => void;
}

export default function FinalCTASection({ openTelegram }: FinalCTASectionProps) {
  return (
    <section className="py-20 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 blur-sm"
        style={{ backgroundImage: `url('https://cdn.poehali.dev/files/40e65e02-745e-4e3c-9204-4b3d04a7d705.png')` }}
        role="img"
        aria-label="список игр Xbox Game Pass"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-xbox-black via-xbox-black/80 to-xbox-black/60" />
      
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-glow">
          Ты готов к играм?
          <br />
          <span className="text-xbox-green">Получи свою подписку уже сейчас</span>
        </h2>
        
        <Button 
          onClick={openTelegram}
          className="bg-xbox-green hover:bg-xbox-green/90 text-xbox-black font-bold text-xl px-12 py-6 hover-scale shadow-lg shadow-xbox-green/30"
        >
          <Icon name="MessageCircle" className="mr-2" size={24} />
          Оформить в Telegram
        </Button>
      </div>
    </section>
  );
}