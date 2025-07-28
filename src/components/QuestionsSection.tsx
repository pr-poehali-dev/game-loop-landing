import Icon from '@/components/ui/icon';

interface QuestionsSectionProps {
  openTelegram: () => void;
}

export default function QuestionsSection({ openTelegram }: QuestionsSectionProps) {
  return (
    <section className="py-16 bg-xbox-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-8 text-xbox-white">
            💬 Остались вопросы?
          </h2>
          
          <div className="space-y-4 mb-8 text-lg text-xbox-gray">
            <p className="flex items-center justify-center gap-3">
              <span>❓</span>
              <span>Не знаете, какую подписку выбрать?</span>
            </p>
            <p className="flex items-center justify-center gap-3">
              <span>⚠</span>
              <span>Уже столкнулись с ошибкой при активации?</span>
            </p>
            <p className="flex items-center justify-center gap-3">
              <span>💡</span>
              <span>Нужно разобраться, как всё работает?</span>
            </p>
          </div>
          
          <div className="mb-8 text-xbox-white">
            <p className="text-xl mb-2">Мы поможем — быстро и по делу.</p>
            <p className="text-lg text-xbox-gray">Напишите нам, и мы всё подскажем.</p>
          </div>
          
          <button
            onClick={openTelegram}
            className="inline-flex items-center gap-3 bg-xbox-green hover:bg-xbox-green/90 text-xbox-black px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-xbox-green/25 group"
          >
            <span>🚀</span>
            <span>Написать нам в Telegram</span>
            <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
}