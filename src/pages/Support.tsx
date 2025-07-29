import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';

export default function Support() {
  useEffect(() => {
    document.title = 'Поддержка и контакты — свяжитесь с нами | Game Loop Store';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Нужна помощь с Xbox Game Pass Ultimate? Свяжитесь с нашей поддержкой через Telegram или WhatsApp. Отвечаем 24/7, помогаем с активацией и настройкой.');
    }

    // Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Поддержка и контакты — свяжитесь с нами | Game Loop Store');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Нужна помощь с Xbox Game Pass Ultimate? Свяжитесь с нашей поддержкой через Telegram или WhatsApp. Отвечаем 24/7, помогаем с активацией и настройкой.');
    }
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openTelegram = () => {
    window.open('https://t.me/submanag', '_blank');
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Navigation scrollToSection={scrollToSection} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-xbox-green to-white bg-clip-text text-transparent">
            Поддержка и контакты
          </h1>
          <p className="text-xl md:text-2xl font-body mb-8 text-xbox-gray max-w-3xl mx-auto">
            Мы всегда готовы помочь с покупкой, активацией и использованием Xbox Game Pass Ultimate
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Telegram</h3>
              <p className="text-xbox-gray mb-6">
                Самый быстрый способ связаться с нами. Отвечаем в течение 5 минут
              </p>
              <Button 
                onClick={openTelegram}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3"
              >
                Написать в Telegram
              </Button>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">WhatsApp</h3>
              <p className="text-xbox-gray mb-6">
                Удобное общение через мессенджер. Поддержка документами и скриншотами
              </p>
              <Button 
                onClick={openWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3"
              >
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 bg-gradient-to-r from-xbox-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Популярные вопросы
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3 text-xbox-green">❓ Как активировать подписку?</h3>
              <p className="text-xbox-gray text-sm mb-4">
                Подробная инструкция по активации Xbox Game Pass Ultimate
              </p>
              <a href="/activation" className="text-xbox-green hover:underline">
                Читать инструкцию →
              </a>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3 text-xbox-green">💰 Какие есть тарифы?</h3>
              <p className="text-xbox-gray text-sm mb-4">
                Все доступные планы подписки со скидками
              </p>
              <a href="/tarify" className="text-xbox-green hover:underline">
                Посмотреть тарифы →
              </a>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3 text-xbox-green">⭐ Отзывы клиентов?</h3>
              <p className="text-xbox-gray text-sm mb-4">
                Читайте отзывы наших довольных клиентов
              </p>
              <a href="/reviews" className="text-xbox-green hover:underline">
                Читать отзывы →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Режим работы поддержки
          </h2>
          <div className="bg-gradient-to-r from-xbox-green/10 to-xbox-black p-8 rounded-lg max-w-2xl mx-auto">
            <div className="text-4xl font-bold text-xbox-green mb-4">24/7</div>
            <p className="text-xl text-xbox-gray mb-4">
              Наша поддержка работает круглосуточно без выходных
            </p>
            <p className="text-xbox-gray">
              Среднее время ответа: 5-15 минут
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-xbox-green/10 to-xbox-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Остались вопросы?
          </h2>
          <p className="text-xl text-xbox-gray mb-8">
            Напишите нам в любое время — мы всегда готовы помочь!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={openTelegram}
              className="bg-xbox-green hover:bg-xbox-green/80 text-white px-8 py-3"
            >
              Связаться прямо сейчас
            </Button>
            <a 
              href="/faq" 
              className="border border-xbox-green text-xbox-green hover:bg-xbox-green hover:text-white px-8 py-3 rounded-lg font-medium transition-colors inline-block"
            >
              Посмотреть FAQ
            </a>
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
          </div>
        </div>
      </footer>
    </div>
  );
}