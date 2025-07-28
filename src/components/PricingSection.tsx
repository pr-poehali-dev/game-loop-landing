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
                  <Badge className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-2 text-sm font-bold shadow-lg border-0">
                    🔥 Хит продаж
                  </Badge>
                </div>
              )}
              
              <Card 
                className={`relative overflow-hidden transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-emerald-400 shadow-lg shadow-emerald-400/20 scale-105 hover:shadow-emerald-400/30' 
                    : 'bg-gradient-to-br from-gray-900 via-gray-850 to-gray-900 border-2 border-gray-700/50 hover:border-emerald-500/30'
                } hover:scale-105 hover:shadow-xl animate-fade-in group`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Мягкая подсветка по контуру */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-500/5' 
                    : 'bg-gradient-to-br from-emerald-500/3 via-transparent to-emerald-500/3'
                }`} />
                <CardContent className="p-6 text-center relative z-10">
                  {/* Название тарифа */}
                  <div className="mb-2">
                    <span className="text-lg font-semibold text-gray-300">{plan.name}</span>
                  </div>
                  
                  {/* Длительность с акцентом на бонус */}
                  <div className="mb-4">
                    {plan.hasBonus ? (
                      <div className="space-y-2">
                        <h3 className="text-xl font-heading font-bold text-emerald-400">
                          12 месяцев <span className="text-emerald-300">+</span>
                        </h3>
                        <Badge className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-3 py-1 text-xs border-0">
                          🎁 1 месяц в подарок
                        </Badge>
                      </div>
                    ) : (
                      <h3 className="text-2xl font-heading font-bold text-emerald-400">{plan.duration}</h3>
                    )}
                  </div>
                  
                  {/* Цены */}
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-emerald-400">{plan.price}</span>
                    <div className="text-sm text-gray-500 line-through mt-1">{plan.originalPrice}</div>
                    <div className="text-sm text-emerald-300 mb-2 font-semibold">Экономия: {plan.savings}</div>
                    <div className="text-xs text-gray-400">{plan.monthlyPrice} в месяц</div>
                  </div>
                  
                  {/* Иконки преимуществ для популярного тарифа */}
                  {plan.popular && (
                    <div className="flex justify-center space-x-6 mb-4 text-xs text-gray-400">
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
                  {/* CTA кнопка с улучшенными анимациями */}
                  <Button 
                    onClick={openTelegram}
                    className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-white font-bold py-4 px-6 text-lg border-0 transition-all duration-300 ease-out hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] group"
                  >
                    <Icon name="Play" className="mr-2 transition-transform duration-300 group-hover:scale-110" size={20} />
                    <span className="transition-all duration-300">Активировать</span>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Мобильная версия - вертикальное расположение */}
        <div className="md:hidden mt-8">
          <p className="text-center text-gray-400 text-sm">
            Лучший выбор — тариф на 3 месяца с максимальной экономией!
          </p>
        </div>
      </div>
    </section>
  );
}