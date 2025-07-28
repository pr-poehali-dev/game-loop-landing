import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Plan {
  duration: string;
  price: string;
  originalPrice: string;
  savings: string;
  popular: boolean;
}

interface PricingSectionProps {
  plans: Plan[];
  openTelegram: () => void;
}

export default function PricingSection({ plans, openTelegram }: PricingSectionProps) {
  return (
    <section id="tarify" className="py-20 bg-xbox-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-glow">
          Тарифы
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`bg-xbox-black border-2 ${plan.popular ? 'border-xbox-green shadow-lg shadow-xbox-green/20' : 'border-xbox-gray/30'} hover-scale animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 text-center relative">
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-xbox-green text-xbox-black">
                    Популярный
                  </Badge>
                )}
                
                <h3 className="text-2xl font-heading font-bold mb-4 text-xbox-bright-green">{plan.duration}</h3>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-xbox-green">{plan.price}</span>
                  <div className="text-sm text-xbox-gray line-through">{plan.originalPrice}</div>
                  <div className="text-sm text-xbox-green">Экономия: {plan.savings}</div>
                </div>
                
                <Button 
                  onClick={openTelegram}
                  className="w-full bg-xbox-green hover:bg-xbox-green/90 text-xbox-black font-bold shadow-md shadow-xbox-green/30"
                >
                  Активировать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}