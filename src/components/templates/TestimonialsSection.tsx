import { SectionData } from '@/types/builder';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

interface TestimonialsSectionProps {
  data: SectionData['data'];
  isPreview?: boolean;
}

export function TestimonialsSection({ data, variant = 'grid', isPreview }: TestimonialsSectionProps & { variant?: string }) {
  const {
    heading,
    description,
    items = [],
    backgroundColor,
    textColor,
    padding,
  } = data;

  if (variant === 'carousel') {
    return (
      <section
        className="w-full transition-all"
        style={{
          backgroundColor: backgroundColor || 'hsl(var(--muted))',
          color: textColor || 'hsl(var(--foreground))',
          padding: padding || '100px 24px',
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{color: textColor}}>
              {heading || 'What Our Customers Say'}
            </h2>
            {description && (
              <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{color: textColor, opacity: 0.8}}>
                {description}
              </p>
            )}
          </div>

          <div className="space-y-8">
            {items.map((item: any, index: number) => (
              <Card
                key={item.id}
                className="border-0 shadow-lg bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={item.image?.src} alt={item.name} />
                      <AvatarFallback>{item.name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-4">
                      <Quote className="w-8 h-8 text-primary opacity-50" />
                      <p className="text-lg leading-relaxed italic" style={{color: textColor}}>"{item.quote}"</p>
                      <div>
                        <p className="font-semibold" style={{color: textColor}}>{item.name}</p>
                        <p className="text-sm" style={{color: textColor, opacity: 0.7}}>{item.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Default grid variant
  return (
    <section
      className="w-full transition-all"
      style={{
        backgroundColor: backgroundColor || 'hsl(var(--background))',
        color: textColor || 'hsl(var(--foreground))',
        padding: padding || '100px 24px',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{color: textColor}}>
            {heading || 'What Our Customers Say'}
          </h2>
          {description && (
            <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{color: textColor, opacity: 0.8}}>
              {description}
            </p>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item: any, index: number) => (
            <Card
              key={item.id}
              className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm hover:-translate-y-1"
            >
              <CardContent className="p-8 space-y-4 text-center">
                <Quote className="w-8 h-8 text-primary opacity-50 mx-auto" />
                <p className="text-lg leading-relaxed italic" style={{color: textColor}}>"{item.quote}"</p>
                <div className="flex items-center justify-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={item.image?.src} alt={item.name} />
                    <AvatarFallback>{item.name?.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="font-semibold" style={{color: textColor}}>{item.name}</p>
                    <p className="text-sm" style={{color: textColor, opacity: 0.7}}>{item.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
