import { SectionData } from '@/types/builder';
import { Card, CardContent } from '@/components/ui/card';
import * as Icons from 'lucide-react';

interface FeaturesSectionProps {
  data: SectionData['data'];
  isPreview?: boolean;
}

export function FeaturesSection({ data, variant = 'three-column', isPreview }: FeaturesSectionProps & { variant?: string }) {
  const {
    heading,
    description,
    items = [],
    backgroundColor,
    textColor,
    padding,
  } = data;

  const getIcon = (iconName: string) => {
    const Icon = (Icons as any)[iconName] || Icons.Star;
    return Icon;
  };

  const getGradientColor = (index: number): string => {
    const gradients = [
      'from-blue-500 to-blue-600',
      'from-purple-500 to-purple-600',
      'from-emerald-500 to-emerald-600',
      'from-amber-500 to-amber-600',
      'from-rose-500 to-rose-600',
      'from-cyan-500 to-cyan-600',
    ];
    return gradients[index % gradients.length];
  };

  if (variant === 'two-column') {
    return (
      <section
        className="w-full transition-all"
        style={{
          backgroundColor: backgroundColor || 'hsl(var(--background))',
          color: textColor || 'hsl(var(--foreground))',
          padding: padding || '60px 16px sm:80px 24px md:100px 24px',
        }}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-0">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 space-y-2 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-2 sm:mb-4">
              Features
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight" style={{color: textColor}}>
              {heading || 'Features'}
            </h2>
            {description && (
              <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed" style={{color: textColor, opacity: 0.8}}>
                {description}
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {items.map((item: any, index: number) => {
              const Icon = getIcon(item.icon);
              return (
                <Card
                  key={item.id}
                  className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm hover:-translate-y-1"
                >
                  <CardContent className="p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4">
                    {item.image?.src ? (
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={item.image.src}
                          alt={item.image.alt || item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${getGradientColor(index)} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                    )}
                    <h3 className="text-lg sm:text-2xl font-bold tracking-tight" style={{color: textColor}}>{item.title}</h3>
                    <p className="text-xs sm:text-base text-muted-foreground leading-relaxed" style={{color: textColor, opacity: 0.8}}>{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'icon-left') {
    return (
      <section
        className="w-full transition-all"
        style={{
          backgroundColor: backgroundColor || 'hsl(var(--background))',
          color: textColor || 'hsl(var(--foreground))',
          padding: padding || '60px 16px sm:80px 24px md:100px 24px',
        }}
      >
        <div className="max-w-4xl mx-auto px-2 sm:px-0">
          <div className="text-center mb-10 sm:mb-16 space-y-2 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-2 sm:mb-4">
              Why Choose Us
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight" style={{color: textColor}}>
              {heading || 'Features'}
            </h2>
            {description && (
              <p className="text-sm sm:text-lg md:text-xl text-muted-foreground leading-relaxed" style={{color: textColor, opacity: 0.8}}>
                {description}
              </p>
            )}
          </div>

          <div className="space-y-3 sm:space-y-6">
            {items.map((item: any, index: number) => {
              const Icon = getIcon(item.icon);
              return (
                <div
                  key={item.id}
                  className="group flex gap-3 sm:gap-4 md:gap-6 items-start p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-2xl hover:bg-muted/50 transition-all duration-300 border border-transparent hover:border-border"
                >
                  {item.image?.src ? (
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-2xl overflow-hidden flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={item.image.src}
                        alt={item.image.alt || item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-2xl bg-gradient-to-br ${getGradientColor(index)} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                  )}
                  <div className="space-y-1 sm:space-y-2 pt-0.5">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold tracking-tight group-hover:text-primary transition-colors" style={{color: textColor}}>{item.title}</h3>
                    <p className="text-xs sm:text-base md:text-lg text-muted-foreground leading-relaxed" style={{color: textColor, opacity: 0.8}}>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // Default three-column variant
  return (
    <section
      className="w-full transition-all"
      style={{
        backgroundColor: backgroundColor || 'hsl(var(--background))',
        color: textColor || 'hsl(var(--foreground))',
        padding: padding || '60px 16px sm:80px 24px md:100px 24px',
      }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-0">
        <div className="text-center mb-10 sm:mb-16 space-y-2 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-2 sm:mb-4">
            Features
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight" style={{color: textColor}}>
            {heading || 'Features'}
          </h2>
          {description && (
            <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed" style={{color: textColor, opacity: 0.8}}>
              {description}
            </p>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map((item: any, index: number) => {
            const Icon = getIcon(item.icon);
            return (
              <Card
                key={item.id}
                className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm hover:-translate-y-1"
              >
                <CardContent className="p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4 text-center">
                  {item.image?.src ? (
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-lg sm:rounded-2xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={item.image.src}
                        alt={item.image.alt || item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-lg sm:rounded-2xl bg-gradient-to-br ${getGradientColor(index)} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                  )}
                  <h3 className="text-base sm:text-lg md:text-xl font-bold tracking-tight" style={{color: textColor}}>{item.title}</h3>
                  <p className="text-xs sm:text-base text-muted-foreground leading-relaxed" style={{color: textColor, opacity: 0.8}}>{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
