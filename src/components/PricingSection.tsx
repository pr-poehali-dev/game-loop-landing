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
  hasBonus?: boolean;
}

interface PricingSectionProps {
  plans: Plan[];
  openTelegram: () => void;
}

export default function PricingSection({ plans, openTelegram }: PricingSectionProps) {
  return (
    <section id="tarify" className="py-20 bg-[#0F0F0F]">
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
                  <Badge className="bg-[#107C10] text-white px-4 py-2 text-sm font-bold shadow-lg shadow-[#107C10]/50 border-0">
                    🔥 Хит продаж
                  </Badge>
                </div>
              )}
              
              <Card 
                className={`relative overflow-hidden transition-all duration-300 h-full flex flex-col ${
                  plan.popular 
                    ? 'bg-[#0F0F0F] border-2 border-[#107C10] shadow-lg shadow-[#107C10]/30 hover:shadow-[#107C10]/50 ring-2 ring-[#107C10]/20' 
                    : 'bg-[#0F0F0F] border-2 border-gray-700/50 hover:border-[#107C10]/50'
                } hover:scale-[1.02] hover:shadow-xl animate-fade-in group`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Мягкая подсветка по контуру */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-[#107C10]/15 via-transparent to-[#107C10]/15' 
                    : 'bg-gradient-to-br from-[#107C10]/8 via-transparent to-[#107C10]/8'
                }`} />
                <CardContent className="p-6 text-center relative z-10 flex-1 flex flex-col justify-between">
                  {/* Название тарифа */}
                  <div className="mb-2">
                    <span className="text-lg font-semibold text-white/80">{plan.name}</span>
                  </div>
                  
                  {/* Длительность с акцентом на бонус */}
                  <div className="mb-4">
                    {plan.hasBonus ? (
                      <div className="space-y-2">
                        <h3 className="text-xl font-heading font-bold text-[#107C10]">
                          12 месяцев <span className="text-white">+</span>
                        </h3>
                        <Badge className="bg-[#107C10] text-white px-3 py-1 text-xs border-0">
                          🎁 1 месяц в подарок
                        </Badge>
                      </div>
                    ) : (
                      <h3 className="text-2xl font-heading font-bold text-[#107C10]">{plan.duration}</h3>
                    )}
                  </div>
                  
                  {/* Цены */}
                  <div className="mb-6 flex-1">
                    <span className="text-4xl font-bold text-[#107C10]">{plan.price}</span>
                    <div className="text-sm text-white/60 line-through mt-1">{plan.originalPrice}</div>
                    <div className="text-sm text-[#107C10] mb-2 font-semibold">Экономия: {plan.savings}</div>
                    <div className="text-xs text-white/60">{plan.monthlyPrice} в месяц</div>
                  </div>
                  

                  
                  {/* CTA кнопка */}
                  {/* CTA кнопка с улучшенными анимациями */}
                  <div className="mt-auto">
                    <Button 
                      onClick={openTelegram}
                      className="w-full bg-gradient-to-r from-[#107C10] to-[#0F6B0F] hover:from-[#128C12] hover:to-[#107C10] text-white font-bold py-4 px-6 text-lg border-0 transition-all duration-300 ease-out hover:shadow-lg hover:shadow-[#107C10]/40 hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] group"
                    >
                      <Icon name="Play" className="mr-2 transition-transform duration-300 group-hover:scale-110" size={20} />
                      <span className="transition-all duration-300">Активировать</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Мобильная версия - вертикальное расположение */}
        <div className="md:hidden mt-8">
          <p className="text-center text-white/60 text-sm">
            Лучший выбор — тариф на 3 месяца с максимальной экономией!
          </p>
        </div>
      </div>
    </section>
  );
}