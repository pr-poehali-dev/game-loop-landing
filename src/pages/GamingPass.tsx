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
      
      {showLeadMagnet && (
        <LeadMagnetPopup onClose={closeLeadMagnet} />
      )}
    </div>
  );
}