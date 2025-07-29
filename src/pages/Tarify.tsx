import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import PricingSection from '@/components/PricingSection';

export default function Tarify() {
  useEffect(() => {
    document.title = 'Тарифы Xbox Game Pass Ultimate — выберите подходящий план | Game Loop Store';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Все тарифы Xbox Game Pass Ultimate со скидкой. От 1 месяца до года с экономией до 9690 ₽. Выберите оптимальный план подписки для Xbox и ПК.');
    }

    // Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Тарифы Xbox Game Pass Ultimate — выберите подходящий план | Game Loop Store');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Все тарифы Xbox Game Pass Ultimate со скидкой. От 1 месяца до года с экономией до 9690 ₽. Выберите оптимальный план подписки для Xbox и ПК.');
    }
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openTelegram = () => {
    window.open('https://t.me/submanag', '_blank');
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
      monthlyPrice: '897 ₽',
      popular: true,
      hasBonus: false
    },
    {
      name: 'Максимум выгоды',
      duration: '12 месяцев',
      price: '6990 ₽',
      originalPrice: '16680 ₽',
      savings: '9690 ₽',
      monthlyPrice: '582 ₽',
      popular: false,
      hasBonus: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Navigation scrollToSection={scrollToSection} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-xbox-green to-white bg-clip-text text-transparent">
            Тарифы Xbox Game Pass Ultimate
          </h1>
          <p className="text-xl md:text-2xl font-body mb-8 text-xbox-gray max-w-3xl mx-auto">
            Выберите подходящий план подписки и получите доступ к 500+ играм со скидкой до 58%
          </p>
        </div>
      </section>

      <PricingSection plans={plans} openTelegram={openTelegram} />

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-xbox-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Что входит во все тарифы?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-xbox-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="text-xl font-bold mb-2">500+ игр</h3>
              <p className="text-xbox-gray">Огромная библиотека игр для Xbox и ПК</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-xbox-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">☁️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Cloud Gaming</h3>
              <p className="text-xbox-gray">Играйте в облаке на любом устройстве</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-xbox-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Мультиплеер</h3>
              <p className="text-xbox-gray">Онлайн игры с друзьями</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 pb-20 lg:pb-8 border-t border-xbox-gray/30">
        <div className="container mx-auto px-4 text-center text-xbox-gray">
          <p>&copy; 2025 Game Loop Store. Все права защищены.</p>
          <p className="text-xs text-[#888888] mt-3 opacity-75">
            Информация на сайте не является публичной офертой.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="/" className="hover:text-xbox-green transition-colors">Главная</a>
            <a href="/faq" className="hover:text-xbox-green transition-colors">FAQ</a>
            <a href="/reviews" className="hover:text-xbox-green transition-colors">Отзывы</a>
            <a href="/support" className="hover:text-xbox-green transition-colors">Поддержка</a>
          </div>
        </div>
      </footer>
    </div>
  );
}