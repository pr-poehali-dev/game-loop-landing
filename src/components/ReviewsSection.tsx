import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Review {
  name: string;
  text: string;
  rating: number;
}

interface ReviewsSectionProps {
  reviews: Review[];
}

export default function ReviewsSection({ reviews }: ReviewsSectionProps) {
  return (
    <section id="otzyvy" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-glow">
          Отзывы клиентов
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-xbox-black border border-xbox-gray/30 hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-xbox-green rounded-full flex items-center justify-center text-xbox-black font-bold mr-3">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-xbox-white">{review.name}</div>
                    <div className="flex text-xbox-green">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-xbox-gray">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}