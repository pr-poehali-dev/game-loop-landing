import Icon from '@/components/ui/icon';

const advantages = [
  {
    icon: '✅',
    text: 'Только официальная активация'
  },
  {
    icon: '✅',
    text: 'Более 10 000 довольных клиентов'
  },
  {
    icon: '✅',
    text: 'Моментальная выдача в Telegram'
  },
  {
    icon: '✅',
    text: 'Поддержка 24/7 и гарантия'
  },
  {
    icon: '✅',
    text: 'Доступные цены'
  }
];

export default function WhyUsSection() {
  return (
    <section className="py-16 bg-xbox-black/50">
      <div className="container mx-auto px-4">
        {/* SEO-оптимизированная подводка */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-glow">
            Почему тысячи геймеров выбирают Game Loop
          </h2>
          <p className="text-lg text-xbox-gray max-w-4xl mx-auto leading-relaxed">
            Магазин подписок Xbox Game Pass с официальной активацией, моментальной доставкой и поддержкой 24/7
          </p>
        </div>

        {/* Преимущества */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="flex items-center space-x-3 bg-xbox-dark/50 rounded-lg p-4 hover:bg-xbox-dark/70 transition-colors duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-2xl text-[#107C10] flex-shrink-0">
                {advantage.icon}
              </span>
              <span className="text-white font-medium">
                {advantage.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}