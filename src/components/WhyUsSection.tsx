import Icon from '@/components/ui/icon';

const advantages = [
  {
    icon: 'Shield',
    title: 'Только официальная активация',
    description: 'Гарантированная работа подписки'
  },
  {
    icon: 'Users',
    title: 'Более 10 000 довольных клиентов',
    description: 'Проверенный временем сервис'
  },
  {
    icon: 'Zap',
    title: 'Моментальная выдача в Telegram',
    description: 'Получите подписку за 5 минут'
  },
  {
    icon: 'Headphones',
    title: 'Поддержка 24/7 и гарантия',
    description: 'Помогаем в любое время'
  },
  {
    icon: 'DollarSign',
    title: 'Доступные цены',
    description: 'Лучшие цены на рынке'
  },
  {
    icon: 'Star',
    title: 'Высокий рейтинг',
    description: '4.9★ от наших клиентов'
  }
];

export default function WhyUsSection() {
  return (
    <section className="py-20 bg-[#0B0B0B]">
      <div className="container mx-auto px-4">
        {/* SEO-оптимизированная подводка */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-glow">
            Почему стоит выбрать Game Loop — выгодно, быстро, удобно
          </h2>
          <p className="text-lg text-xbox-gray max-w-4xl mx-auto leading-relaxed">
            Магазин подписок Xbox Game Pass с официальной активацией, моментальной доставкой и поддержкой 24/7
          </p>
        </div>

        {/* Преимущества в стиле BenefitsSection */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Иконка в круге с свечением */}
              <div className="relative mb-6 mx-auto">
                <div className="w-20 h-20 bg-xbox-dark rounded-full flex items-center justify-center mx-auto border-2 border-xbox-green/30 shadow-lg shadow-xbox-green/20 group-hover:shadow-xbox-green/40 transition-all duration-300 group-hover:scale-110">
                  <Icon 
                    name={advantage.icon} 
                    size={32} 
                    className="text-[#107C10] group-hover:text-xbox-bright-green transition-colors duration-300" 
                  />
                </div>
                {/* Внешнее свечение */}
                <div className="absolute inset-0 w-20 h-20 bg-[#107C10]/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 mx-auto" />
              </div>

              {/* Текст */}
              <h3 className="text-xl font-heading font-bold mb-3 text-xbox-white group-hover:text-xbox-bright-green transition-colors duration-300">
                {advantage.title}
              </h3>
              <p className="text-xbox-gray leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA с внутренними ссылками */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6 text-xbox-white">
            Узнайте больше о нашем сервисе
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/activation" 
              className="inline-block bg-xbox-green/10 hover:bg-xbox-green/20 text-xbox-green border border-xbox-green/30 hover:border-xbox-green/50 px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              Как проходит активация
            </a>
            <a 
              href="/reviews" 
              className="inline-block bg-xbox-green/10 hover:bg-xbox-green/20 text-xbox-green border border-xbox-green/30 hover:border-xbox-green/50 px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              Отзывы клиентов
            </a>
            <a 
              href="/faq" 
              className="inline-block bg-xbox-green/10 hover:bg-xbox-green/20 text-xbox-green border border-xbox-green/30 hover:border-xbox-green/50 px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              Частые вопросы
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}