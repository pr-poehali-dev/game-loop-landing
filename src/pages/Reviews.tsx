import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import ReviewsSection from '@/components/ReviewsSection';

export default function Reviews() {
  useEffect(() => {
    document.title = 'Отзывы клиентов о Xbox Game Pass Ultimate | Game Loop Store';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Читайте реальные отзывы клиентов о покупке Xbox Game Pass Ultimate. 10000+ довольных покупателей. Быстрая активация и качественная поддержка.');
    }

    // Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Отзывы клиентов о Xbox Game Pass Ultimate | Game Loop Store');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Читайте реальные отзывы клиентов о покупке Xbox Game Pass Ultimate. 10000+ довольных покупателей. Быстрая активация и качественная поддержка.');
    }
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const reviews = [
    {
      id: 1,
      name: 'Дмитрий К.',
      rating: 5,
      text: 'Активировали за 10 минут! Все игры работают отлично, никаких проблем. Буду брать ещё.',
      date: '2025-01-15'
    },
    {
      id: 2,
      name: 'Анна М.',
      rating: 5,
      text: 'Долго искала где купить Game Pass в России. Здесь всё быстро и честно. Рекомендую!',
      date: '2025-01-12'
    },
    {
      id: 3,
      name: 'Игорь С.',
      rating: 5,
      text: 'Взял на год — очень выгодно! Техподдержка отвечает быстро, всё объяснили.',
      date: '2025-01-10'
    },
    {
      id: 4,
      name: 'Елена В.',
      rating: 5,
      text: 'Сын в восторге! 500+ игр, включая новинки. Активация прошла без проблем.',
      date: '2025-01-08'
    },
    {
      id: 5,
      name: 'Михаил Р.',
      rating: 5,
      text: 'Покупаю второй раз. Всё работает стабильно, цены адекватные. Советую всем геймерам.',
      date: '2025-01-05'
    },
    {
      id: 6,
      name: 'Ольга Т.',
      rating: 5,
      text: 'Оплатила картой, активировали на мой аккаунт за 15 минут. Никаких танцев с VPN.',
      date: '2025-01-03'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Navigation scrollToSection={scrollToSection} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-xbox-green to-white bg-clip-text text-transparent">
            Отзывы наших клиентов
          </h1>
          <p className="text-xl md:text-2xl font-body mb-8 text-xbox-gray max-w-3xl mx-auto">
            Более 10,000 довольных покупателей выбрали Xbox Game Pass Ultimate в нашем магазине
          </p>
        </div>
      </section>

      <ReviewsSection reviews={reviews} />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-xbox-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-xbox-green mb-2">10,000+</div>
              <p className="text-xl text-xbox-gray">Довольных клиентов</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-xbox-green mb-2">4.9/5</div>
              <p className="text-xl text-xbox-gray">Средняя оценка</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-xbox-green mb-2">5 мин</div>
              <p className="text-xl text-xbox-gray">Среднее время активации</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-xbox-green/10 to-xbox-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Присоединяйтесь к нашим довольным клиентам
          </h2>
          <p className="text-xl text-xbox-gray mb-8">
            Получите Xbox Game Pass Ultimate со скидкой уже сегодня
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/tarify" 
              className="bg-xbox-green hover:bg-xbox-green/80 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Выбрать тариф
            </a>
            <a 
              href="/support" 
              className="border border-xbox-green text-xbox-green hover:bg-xbox-green hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Есть вопросы?
            </a>
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
            <a href="/tarify" className="hover:text-xbox-green transition-colors">Тарифы</a>
            <a href="/faq" className="hover:text-xbox-green transition-colors">FAQ</a>
            <a href="/support" className="hover:text-xbox-green transition-colors">Поддержка</a>
          </div>
        </div>
      </footer>
    </div>
  );
}