interface SchemaMarkupProps {
  type: 'organization' | 'website' | 'breadcrumb';
  data?: any;
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const getSchemaData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Game Loop Store",
          "url": "https://game-loop-store.ru",
          "logo": "https://game-loop-store.ru/logo.png",
          "description": "Магазин игровых подписок Xbox Game Pass Ultimate с быстрой активацией и поддержкой 24/7",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": "Russian"
          },
          "sameAs": [
            "https://t.me/submanag",
            "https://wa.me/79504077138"
          ]
        };
      
      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Game Loop Store",
          "url": "https://game-loop-store.ru/",
          "description": "Купить Xbox Game Pass Ultimate со скидкой в России. 500+ игр, быстрая активация за 5 минут.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://game-loop-store.ru/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        };
      
      case 'breadcrumb':
        return data || {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Главная",
            "item": "https://game-loop-store.ru/"
          }]
        };
      
      default:
        return null;
    }
  };

  const schemaData = getSchemaData();
  
  if (!schemaData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData)
      }}
    />
  );
}