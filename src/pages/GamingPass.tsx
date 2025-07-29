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

export default function GamingPass() {
  const [isVisible, setIsVisible] = useState(false);
  const [showLeadMagnet, setShowLeadMagnet] = useState(false);
  const [hasShownLeadMagnet, setHasShownLeadMagnet] = useState(false);

  useEffect(() => {
    // Set page title and meta description
    document.title = 'Xbox Gaming Pass — всё как вы искали, активация за 15 минут';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Часто ищут Xbox Gaming Pass — и попадают к нам. 500+ игр на Xbox и ПК. Быстрая активация, поддержка 24/7. 10000+ довольных клиентов');
    }

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
    window.open('https://t.me/submanag', '_blank');
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
      price: '599₽',
      originalPrice: '899₽',
      discount: '33%',
      popular: false,
      features: [
        'Доступ к 100+ играм',
        'EA Play включен',
        'Онлайн мультиплеер',
        'Облачный гейминг',
        'Скидки до 20% на игры'
      ]
    },
    {
      name: 'Оптимум',
      duration: '3 месяца',
      price: '1599₽',
      originalPrice: '2697₽',
      discount: '41%',
      popular: true,
      features: [
        'Доступ к 100+ играм',
        'EA Play включен',
        'Онлайн мультиплеер',
        'Облачный гейминг',
        'Скидки до 20% на игры',
        'Приоритетная поддержка'
      ]
    },
    {
      name: 'Максимум',
      duration: '12 месяцев',
      price: '5999₽',
      originalPrice: '10788₽',
      discount: '44%',
      popular: false,
      features: [
        'Доступ к 100+ играм',
        'EA Play включен',
        'Онлайн мультиплеер',
        'Облачный гейминг',
        'Скидки до 20% на игры',
        'Приоритетная поддержка',
        'Максимальная экономия'
      ]
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      
      <HeroSection 
        title="Xbox Gaming Pass — подписка на 500+ игр со скидкой"
        subtitle="Вы искали Xbox Gaming Pass — это альтернативное название подписки Xbox Game Pass. Всё правильно — оформляйте подписку со скидкой!"
        isVisible={isVisible}
        openTelegram={openTelegram}
      />
      
      <BenefitsSection benefits={seoContent.benefits} />
      <WhyUsSection />
      <PricingSection plans={plans} />
      <ActivationSection />
      <ReviewsSection />
      <QuestionsSection />
      <FAQSection />
      <FinalCTASection onOrderClick={openTelegram} />

      {/* SEO Content */}
      <section className="py-16 bg-xbox-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-xbox-gray">
            <p className="text-lg leading-relaxed">
              У нас можно купить официальную подписку <strong className="text-xbox-green">Xbox Gaming Pass Ultimate</strong> — более <strong className="text-xbox-green">500 игр</strong> на Xbox Series X|S, Xbox One и ПК. Моментальная активация. Поддержка 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 pb-20 lg:pb-8 border-t border-xbox-gray/30">
        <div className="container mx-auto px-4 text-center text-xbox-gray">
          <p>&copy; 2025 Xbox Gaming Pass Ultimate Store. Купить подписку в России. Все права защищены.</p>
          <p className="text-xs text-[#888888] mt-3 opacity-75">
            Все представленные на сайте цены и предложения не являются публичной офертой в соответствии со статьёй 437 ГК РФ.
          </p>
          
          <div className="mt-6">
            <a 
              href="/"
              className="inline-block bg-xbox-gray/20 hover:bg-xbox-green/20 text-xbox-gray hover:text-xbox-green text-sm px-4 py-2 rounded-md transition-all duration-300 border border-xbox-gray/30 hover:border-xbox-green/50"
            >
              Xbox Game Pass
            </a>
          </div>
        </div>
      </footer>
      
      {showLeadMagnet && (
        <LeadMagnetPopup onClose={closeLeadMagnet} />
      )}
    </div>
  );
}