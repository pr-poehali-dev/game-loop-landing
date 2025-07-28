export default function ActivationSection() {
  return (
    <section id="aktivatsiya" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-glow">
          Как проходит активация
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { step: '1', title: 'Выбираете срок', description: 'Определяете нужный вам период подписки' },
            { step: '2', title: 'Переходите в Telegram', description: 'Оформляете заказ в нашем боте' },
            { step: '3', title: 'Получаете активацию', description: 'Наслаждаетесь играми уже через 5 минут' }
          ].map((item, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.3}s` }}>
              <div className="w-16 h-16 bg-xbox-green text-xbox-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">{item.title}</h3>
              <p className="text-xbox-gray">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}