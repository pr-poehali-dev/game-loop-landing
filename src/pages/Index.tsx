import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import PricingSection from '@/components/PricingSection';
import ActivationSection from '@/components/ActivationSection';
import ReviewsSection from '@/components/ReviewsSection';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';
import LeadMagnetPopup from '@/components/LeadMagnetPopup';
import WhyUsSection from '@/components/WhyUsSection';
import QuestionsSection from '@/components/QuestionsSection';

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [showLeadMagnet, setShowLeadMagnet] = useState(false);
  const [hasShownLeadMagnet, setHasShownLeadMagnet] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Показываем лид-магнит через 10 секунд, если не показывали в этой сессии
    const timer = setTimeout(() => {
      if (!hasShownLeadMagnet) {
        setShowLeadMagnet(true);
        setHasShownLeadMagnet(true);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [hasShownLeadMagnet]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openTelegram = () => {
    window.open('https://t.me/Game_Loop_Store_bot', '_blank');
  };

  const closeLeadMagnet = () => {
    setShowLeadMagnet(false);
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
        title: 'Облачный гейминг',
        description: 'Играйте на телефоне, планшете и даже на слабых ПК'
      },
      {
        title: 'Мультиплеер онлайн',
        description: 'Бесплатный Xbox Live Gold для онлайн-игр'
      }
    ]
  };

  const plans = [
    {
      name: 'Старт',
      duration: '1 месяц',
      price: '990 ₽',
      originalPrice: '1390 ₽',
      savings: '400 ₽',
      monthlyPrice: '990 ₽',
      popular: false
    },
    {
      name: 'Оптимальный',
      duration: '3 месяца',
      price: '2690 ₽',
      originalPrice: '4170 ₽',
      savings: '1480 ₽',
      monthlyPrice: '≈ 897 ₽',
      popular: true
    },
    {
      name: 'Максимум выгоды',
      duration: '12+1 месяц в подарок',
      price: '6990 ₽',
      originalPrice: '16680 ₽',
      savings: '9690 ₽',
      monthlyPrice: '≈ 538 ₽',
      popular: false,
      hasBonus: true
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
      <Navigation scrollToSection={scrollToSection} />
      
      <HeroSection isVisible={isVisible} openTelegram={openTelegram} />
      
      <WhyUsSection />
      
      <PricingSection plans={plans} openTelegram={openTelegram} />
      
      <BenefitsSection benefits={seoContent.benefits} />
      
      <ActivationSection />
      
      <QuestionsSection openTelegram={openTelegram} />
      
      <ReviewsSection reviews={reviews} />
      
      <FAQSection faqs={faqs} />
      
      <FinalCTASection openTelegram={openTelegram} />

      {/* Lead Magnet Popup */}
      <LeadMagnetPopup 
        isVisible={showLeadMagnet}
        onClose={closeLeadMagnet}
        openTelegram={openTelegram}
      />

      {/* SEO Content */}
      <section className="py-16 bg-xbox-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-xbox-gray">
            <p className="text-lg leading-relaxed">
              У нас можно купить официальную подписку <strong className="text-xbox-green">Xbox Game Pass Ultimate</strong> — более <strong className="text-xbox-green">500 игр</strong> на Xbox Series X|S, Xbox One и ПК. Моментальная активация. Поддержка 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 pb-20 lg:pb-8 border-t border-xbox-gray/30">
        <div className="container mx-auto px-4 text-center text-xbox-gray">
          <p>&copy; 2025 Xbox Game Pass Ultimate Store. Купить подписку в России. Все права защищены.</p>
          <p className="text-xs text-[#888888] mt-3 opacity-75">
            Все представленные на сайте цены и предложения не являются публичной офертой в соответствии со статьёй 437 ГК РФ.
          </p>
        </div>
      </footer>
    </div>
  );
}