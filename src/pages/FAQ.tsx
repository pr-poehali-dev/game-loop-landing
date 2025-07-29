import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import FAQSection from '@/components/FAQSection';

export default function FAQ() {
  useEffect(() => {
    document.title = 'Часто задаваемые вопросы — Xbox Game Pass Ultimate | Game Loop Store';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Ответы на частые вопросы об Xbox Game Pass Ultimate: активация, гарантии, совместимость, поддержка. Всё что нужно знать перед покупкой подписки.');
    }

    // Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Часто задаваемые вопросы — Xbox Game Pass Ultimate | Game Loop Store');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Ответы на частые вопросы об Xbox Game Pass Ultimate: активация, гарантии, совместимость, поддержка. Всё что нужно знать перед покупкой подписки.');
    }
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = [
    {
      id: 'faq-aktivatsiya',
      question: 'Как проходит активация подписки?',
      answer: 'После оплаты мы активируем Xbox Gaming Pass Ultimate на ваш аккаунт или предоставим готовый. Всё работает без VPN. Обычно занимает 5–30 минут.'
    },
    {
      id: 'faq-ofitsialno',
      question: 'Это официальная подписка?',
      answer: 'Да. Это полноценная подписка Xbox Gaming Pass Ultimate. Все функции работают — облако, EA Play, мультиплеер. Мы закупаем подписки через международные каналы.'
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
    },
    {
      id: 'faq-strana',
      question: 'В каких странах работает подписка?',
      answer: 'Подписка работает в России, Беларуси, Казахстане и других странах СНГ. Никаких блокировок и ограничений.'
    },
    {
      id: 'faq-prodlenie',
      question: 'Как продлить подписку?',
      answer: 'За неделю до окончания мы напомним о продлении. Можете купить новый период со скидкой или настроить автопродление.'
    },
    {
      id: 'faq-ustroistva',
      question: 'На каких устройствах работает?',
      answer: 'Xbox консоли всех поколений, ПК с Windows 10/11, мобильные устройства через облако, Smart TV с приложением Xbox.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Navigation scrollToSection={scrollToSection} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-xbox-green to-white bg-clip-text text-transparent">
            Часто задаваемые вопросы
          </h1>
          <p className="text-xl md:text-2xl font-body mb-8 text-xbox-gray max-w-3xl mx-auto">
            Ответы на все вопросы об Xbox Game Pass Ultimate — от активации до использования
          </p>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-xbox-green/10 to-xbox-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Не нашли ответ на свой вопрос?
          </h2>
          <p className="text-xl text-xbox-gray mb-8">
            Свяжитесь с нашей поддержкой — мы поможем в любое время
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/support" 
              className="bg-xbox-green hover:bg-xbox-green/80 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Связаться с поддержкой
            </a>
            <a 
              href="/tarify" 
              className="border border-xbox-green text-xbox-green hover:bg-xbox-green hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Посмотреть тарифы
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
            <a href="/reviews" className="hover:text-xbox-green transition-colors">Отзывы</a>
            <a href="/support" className="hover:text-xbox-green transition-colors">Поддержка</a>
          </div>
        </div>
      </footer>
    </div>
  );
}