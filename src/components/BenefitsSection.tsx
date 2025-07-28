import Icon from '@/components/ui/icon';

interface Benefit {
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  benefits: Benefit[];
}

export default function BenefitsSection({ benefits }: BenefitsSectionProps) {
  return (
    <section id="chto-vkhodit" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-glow">
          Что входит в подписку
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center animate-fade-in hover-scale" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="w-16 h-16 bg-xbox-green/20 border border-xbox-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={index === 0 ? 'Gamepad2' : index === 1 ? 'Monitor' : index === 2 ? 'Cloud' : 'Users'} className="text-xbox-green" size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2 text-xbox-white">{benefit.title}</h3>
              <p className="text-xbox-gray text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}