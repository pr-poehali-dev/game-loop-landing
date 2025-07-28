import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Plan {
  name: string;
  duration: string;
  price: string;
  originalPrice: string;
  savings: string;
  monthlyPrice: string;
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
            <div key={index} className="relative">
              {/* Специальный бейдж для популярного тарифа */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-xbox-green text-xbox-black px-4 py-2 text-sm font-bold shadow-lg">
                    🔥 Хит продаж
                  </Badge>
                </div>
              )}
              
              <Card 
                className={`bg-xbox-black border-2 ${plan.popular ? 'border-xbox-green shadow-lg shadow-xbox-green/20 scale-105' : 'border-xbox-gray/30'} hover-scale animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center relative">
                  {/* Название тарифа */}
                  <div className="mb-2">
                    <span className="text-lg font-semibold text-xbox-gray">{plan.name}</span>
                  </div>
                  
                  {/* Длительность */}
                  <h3 className="text-2xl font-heading font-bold mb-4 text-xbox-bright-green">{plan.duration}</h3>
                  
                  {/* Цены */}
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-xbox-green">{plan.price}</span>
                    <div className="text-sm text-xbox-gray line-through mt-1">{plan.originalPrice}</div>
                    <div className="text-sm text-xbox-green mb-2">Экономия: {plan.savings}</div>
                    <div className="text-xs text-xbox-gray">{plan.monthlyPrice} в месяц</div>
                  </div>
                  
                  {/* Иконки преимуществ для популярного тарифа */}
                  {plan.popular && (
                    <div className="flex justify-center space-x-6 mb-4 text-xs text-xbox-gray">
                      <div className="flex flex-col items-center">
                        <span className="text-lg mb-1">🎮</span>
                        <span>500+ игр</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-lg mb-1">⚡</span>
                        <span>5 минут</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-lg mb-1">📅</span>
                        <span>До 60%</span>
                      </div>
                    </div>
                  )}
                  
                  {/* CTA кнопка */}
                  <Button 
                    onClick={openTelegram}
                    className="w-full bg-[#00ff66] hover:bg-[#00ff66]/90 text-xbox-black font-bold py-4 px-6 text-lg hover:shadow-lg hover:shadow-[#00ff66]/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                  >
                    <Icon name="Play" className="mr-2" size={20} />
                    Активировать
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Мобильная версия - вертикальное расположение */}
        <div className="md:hidden mt-8">
          <p className="text-center text-xbox-gray text-sm">
            Лучший выбор — тариф на 3 месяца с максимальной экономией!
          </p>
        </div>
      </div>
    </section>
  );
}