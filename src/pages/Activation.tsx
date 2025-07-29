import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import ActivationSection from '@/components/ActivationSection';

export default function Activation() {
  useEffect(() => {
    document.title = 'Как проходит активация Xbox Game Pass Ultimate | Game Loop Store';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Подробная инструкция по активации Xbox Game Pass Ultimate. Простые шаги, быстрый результат за 5-15 минут. Работает без VPN на вашем аккаунте Microsoft.');
    }

    // Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Как проходит активация Xbox Game Pass Ultimate | Game Loop Store');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Подробная инструкция по активации Xbox Game Pass Ultimate. Простые шаги, быстрый результат за 5-15 минут. Работает без VPN на вашем аккаунте Microsoft.');
    }
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openTelegram = () => {
    window.open('https://t.me/submanag', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Navigation scrollToSection={scrollToSection} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-xbox-green to-white bg-clip-text text-transparent">
            Как проходит активация
          </h1>
          <p className="text-xl md:text-2xl font-body mb-8 text-xbox-gray max-w-3xl mx-auto">
            Простой процесс активации Xbox Game Pass Ultimate за 5-15 минут без сложных настроек
          </p>
        </div>
      </section>

      <ActivationSection />

      {/* Additional Info Section */}
      <section className="py-16 bg-gradient-to-r from-xbox-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Важная информация
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-xbox-green">✅ Что работает</h3>
              <ul className="space-y-2 text-xbox-gray">
                <li>• Все игры из каталога Game Pass</li>
                <li>• Cloud Gaming (Xbox Cloud)</li>
                <li>• Мультиплеер онлайн</li>
                <li>• EA Play включен</li>
                <li>• Кросс-платформенные сохранения</li>
                <li>• Скидки в Microsoft Store</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-xbox-green">🛡️ Гарантии</h3>
              <ul className="space-y-2 text-xbox-gray">
                <li>• Официальная подписка Microsoft</li>
                <li>• Возврат средств при проблемах</li>
                <li>• Поддержка 24/7</li>
                <li>• Замена при технических сбоях</li>
                <li>• Никаких блокировок</li>
                <li>• Работает без VPN</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-xbox-green/10 to-xbox-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl text-xbox-gray mb-8">
            Выберите подходящий тариф и получите активацию в течение 15 минут
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/tarify" 
              className="bg-xbox-green hover:bg-xbox-green/80 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Выбрать тариф
            </a>
            <button 
              onClick={openTelegram}
              className="border border-xbox-green text-xbox-green hover:bg-xbox-green hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Написать в Telegram
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 pb-20 lg:pb-8 border-t border-xbox-gray/30">
        <div className="container mx-auto px-4 text-center text-xbox-gray">
          <p>&copy; 2025 Game Loop Store. Все права защищены.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="/" className="hover:text-xbox-green transition-colors">Главная</a>
            <a href="/tarify" className="hover:text-xbox-green transition-colors">Тарифы</a>
            <a href="/faq" className="hover:text-xbox-green transition-colors">FAQ</a>
            <a href="/reviews" className="hover:text-xbox-green transition-colors">Отзывы</a>
            <a href="/support" className="hover:text-xbox-green transition-colors">Поддержка</a>
          </div>
        </div>
      </footer>
    </div>
  );
}