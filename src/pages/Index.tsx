import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const seoContent = {
    benefits: [
      {
        title: 'Более 500 игр в каталоге',
        description: 'Игры EA Play, Forza, Halo, Starfield и многие другие хиты'
      },
      {
        title: 'Работает на всех платформах',
        description: 'Xbox Series X|S, Xbox One, ПК Windows 10/11'
      },
      {
        title: 'Облачное стриминг',
        description: 'Играйте на телефоне, планшете и даже на слабых ПК'
      },
      {
        title: 'Мультиплеер онлайн',
        description: 'Бесплатный Xbox Live Gold для онлайн-игр'
      }
    ]
  };

  const openTelegram = () => {
    window.open('https://t.me/gameloop_bot', '_blank');
  };

  const plans = [
    {
      duration: '1 месяц',
      price: '990 ₽',
      originalPrice: '1390 ₽',
      savings: '400 ₽',
      popular: false
    },
    {
      duration: '3 месяца',
      price: '2690 ₽',
      originalPrice: '4170 ₽',
      savings: '1480 ₽',
      popular: true
    },
    {
      duration: '12 месяцев',
      price: '6990 ₽',
      originalPrice: '16680 ₽',
      savings: '9690 ₽',
      popular: false
    }
  ];

  const benefits = [
    {
      icon: 'Shield',
      title: 'Официальные ключи',
      description: 'Только лицензионные подписки от Microsoft'
    },
    {
      icon: 'Clock',
      title: 'Работаем с 2022 года',
      description: 'Проверенный временем сервис'
    },
    {
      icon: 'Zap',
      title: 'Моментальная активация',
      description: 'Получите доступ через 5 минут после оплаты'
    },
    {
      icon: 'MessageCircle',
      title: 'Поддержка 24/7',
      description: 'Помогаем в Telegram круглосуточно'
    }
  ];

  const reviews = [
    {
      name: 'Виктор',
      text: 'Супер быстро! Уже третий месяц покупаю, всё работает отлично',
      rating: 5
    },
    {
      name: 'Андрей',
      text: 'Заказал в 2 ночи, через 10 минут уже играл в Forza! Рекомендую',
      rating: 5
    },
    {
      name: 'Анна',
      text: 'Отличная поддержка, помогли разобраться с активацией',
      rating: 5
    }
  ];

  const faqs = [
    {
      id: 'faq-bezopasno',
      question: 'Это безопасно?',
      answer: 'Да. Мы работаем с 2022 года, активировали тысячи подписок. Используем только проверенные каналы. Все покупки сопровождаются гарантией возврата или восстановлением.'
    },
    {
      id: 'faq-aktivatsiya',
      question: 'Как проходит активация подписки?',
      answer: 'После оплаты мы активируем Xbox Game Pass Ultimate на ваш аккаунт или предоставим готовый. Всё работает без VPN. Обычно занимает 5–30 минут.'
    },
    {
      id: 'faq-ofitsialno',
      question: 'Это официальная подписка?',
      answer: 'Да. Это полноценная подписка Xbox Game Pass Ultimate. Все функции работают — облако, EA Play, мультиплеер. Мы закупаем подписки через международные каналы.'
    },
    {
      id: 'faq-progress',
      question: 'Что с моими играми и сохранениями?',
      answer: 'Если подписка на ваш аккаунт — все сохранения остаются. Если вы используете другой аккаунт — можно играть через домашнюю консоль, как на своём профиле.'
    },
    {
      id: 'faq-podderzhka',
      question: 'Что делать, если что-то не работает?',
      answer: 'Свяжитесь с нашей поддержкой в Telegram или WhatsApp. Мы поможем на любом этапе: покупка, активация, продление.'
    },
    {
      id: 'faq-garantiya',
      question: 'Есть ли гарантия?',
      answer: 'Да, подписка защищена гарантией на весь оплаченный срок. В случае сбоя — мы восстановим или вернём деньги. Всё честно.'
    }
  ];

  return (
    <div className="min-h-screen bg-xbox-black text-xbox-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-xbox-black/90 backdrop-blur-sm border-b border-xbox-green/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Gamepad2" className="text-xbox-green" size={32} />
              <span className="text-2xl font-heading font-bold text-glow">Game Loop</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <a href="#tarify" onClick={() => scrollToSection('tarify')} className="hover:text-xbox-green transition-colors">Тарифы</a>
              <a href="#chto-vkhodit" onClick={() => scrollToSection('chto-vkhodit')} className="hover:text-xbox-green transition-colors">Что входит</a>
              <a href="#otzyvy" onClick={() => scrollToSection('otzyvy')} className="hover:text-xbox-green transition-colors">Отзывы</a>
              <a href="#faq" onClick={() => scrollToSection('faq')} className="hover:text-xbox-green transition-colors">FAQ</a>
            </div>
            
            {/* Contact Icons */}
            <TooltipProvider>
              <div className="flex items-center space-x-3">
                {/* WhatsApp */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a 
                      href="https://wa.me/79504077138" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-green-500 hover:bg-green-600 transition-all duration-200 hover:scale-110 shadow-lg hover:shadow-green-500/25"
                    >
                      <Icon name="MessageCircle" className="text-white" size={20} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Написать в WhatsApp</p>
                  </TooltipContent>
                </Tooltip>
                
                {/* Telegram */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a 
                      href="https://t.me/submanag" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-all duration-200 hover:scale-110 shadow-lg hover:shadow-blue-500/25"
                    >
                      <Icon name="Send" className="text-white" size={20} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Открыть Telegram</p>
                  </TooltipContent>
                </Tooltip>
                
                {/* Avito */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a 
                      href="https://www.avito.ru/brands/gameloop" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-xbox-green hover:bg-xbox-green/80 transition-all duration-200 hover:scale-110 shadow-lg hover:shadow-xbox-green/25"
                    >
                      <Icon name="ShoppingBag" className="text-xbox-black" size={20} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Наш магазин на Авито</p>
                  </TooltipContent>
                </Tooltip>
                
                {/* Mobile Menu Button */}
                <div className="lg:hidden ml-4">
                  <button className="p-2 text-xbox-white hover:text-xbox-green transition-colors">
                    <Icon name="Menu" size={24} />
                  </button>
                </div>
              </div>
            </TooltipProvider>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('https://cdn.poehali.dev/files/b77fe6fe-4e41-4ff6-aec2-387775d25d92.png')` }}
          role="img"
          aria-label="геймпад Xbox Series"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-xbox-black/50 via-xbox-black/70 to-xbox-black" />
        
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

      {/* What's Included */}
      <section id="chto-vkhodit" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-glow">
            Что входит в подписку
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {seoContent.benefits.map((benefit, index) => (
              <div key={index} className="text-center animate-fade-in hover-scale" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-xbox-green/20 border border-xbox-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={index === 0 ? 'Gamepad2' : index === 1 ? 'Monitor' : index === 2 ? 'Cloud' : 'Users'} className="text-xbox-green" size={32} />
                </div>
                <h3 className="text-xl font-heading font-bold mb-2 text-xbox-white">{benefit.title}</h3>
                <p className="text-xbox-gray text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
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

      {/* How it works */}
      <section id="aktivatsiya" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-glow">
            Как проходит активация
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '1', title: 'Выбираете срок', description: 'Определяете нужный вам период подписки' },
              { step: '2', title: 'Переходите в Telegram', description: 'Оформляете заказ в нашем боте' },
              { step: '3', title: 'Получаете активацию', description: 'Наслаждаетесь играми уже через 5 минут' }
            ].map((item, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.3}s` }}>
                <div className="w-16 h-16 bg-xbox-green text-xbox-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">{item.title}</h3>
                <p className="text-xbox-gray">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 bg-xbox-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-glow">
            Преимущества Game Loop
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center animate-fade-in hover-scale" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-xbox-green/20 border border-xbox-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon as any} className="text-xbox-green" size={32} />
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">{benefit.title}</h3>
                <p className="text-xbox-gray text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="otzyvy" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-glow">
            Отзывы клиентов
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-xbox-black border border-xbox-gray/30 hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-xbox-green rounded-full flex items-center justify-center text-xbox-black font-bold mr-3">
                      {review.name[0]}
                    </div>
                    <div>
                      <div className="font-bold text-xbox-white">{review.name}</div>
                      <div className="flex text-xbox-green">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-xbox-gray">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-xbox-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-glow">
            Часто задаваемые вопросы
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-xbox-gray/30 rounded-lg bg-xbox-black">
                  <AccordionTrigger className="px-6 py-4 text-left hover:text-xbox-green" id={faq.id}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-xbox-gray">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
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

      {/* Mobile Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-xbox-black/95 backdrop-blur-sm border-t border-xbox-green/20 p-4">
        <TooltipProvider>
          <div className="flex justify-center space-x-8">
            {/* WhatsApp Mobile */}
            <Tooltip>
              <TooltipTrigger asChild>
                <a 
                  href="https://wa.me/79504077138" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-green-500 hover:bg-green-600 transition-all duration-200 active:scale-95 shadow-lg"
                >
                  <Icon name="MessageCircle" className="text-white" size={24} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>WhatsApp</p>
              </TooltipContent>
            </Tooltip>
            
            {/* Telegram Mobile */}
            <Tooltip>
              <TooltipTrigger asChild>
                <a 
                  href="https://t.me/submanag" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 transition-all duration-200 active:scale-95 shadow-lg"
                >
                  <Icon name="Send" className="text-white" size={24} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Telegram</p>
              </TooltipContent>
            </Tooltip>
            
            {/* Avito Mobile */}
            <Tooltip>
              <TooltipTrigger asChild>
                <a 
                  href="https://www.avito.ru/brands/gameloop" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-xbox-green hover:bg-xbox-green/80 transition-all duration-200 active:scale-95 shadow-lg"
                >
                  <Icon name="ShoppingBag" className="text-xbox-black" size={24} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Авито</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>

      {/* SEO Content */}
      <section className="py-16 bg-xbox-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-xbox-gray">
            <p className="text-lg leading-relaxed">
              Купите подписку <strong className="text-xbox-green">Xbox Game Pass Ultimate</strong> по выгодной цене. Получите доступ к более чем <strong className="text-xbox-green">500 играм</strong>, включая EA Play, Forza Horizon, Halo, Starfield и другие хиты. Активация подписки возможна на <strong className="text-xbox-green">Xbox Series X|S, Xbox One и ПК</strong>. Мы предлагаем моментальную настройку, поддержку 24/7 и гарантию на весь срок действия.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 pb-20 lg:pb-8 border-t border-xbox-gray/30">
        <div className="container mx-auto px-4 text-center text-xbox-gray">
          <p>&copy; 2024 Xbox Game Pass Ultimate Store. Купить подписку в России. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}