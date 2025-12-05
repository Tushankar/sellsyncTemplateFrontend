import { SectionData } from '@/types/builder';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  data: SectionData['data'];
  variant?: string;
  isPreview?: boolean;
}

export function AboutSection({ data, variant = 'image-left', isPreview }: AboutSectionProps) {
  const {
    heading,
    description,
    image,
    buttons = [],
    backgroundColor,
    textColor,
    padding,
  } = data;

  const highlights = [
    'Professional expertise',
    'Dedicated support',
    'Proven results',
  ];

  const renderContent = () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
          About Us
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          {heading || 'About Us'}
        </h2>
      </div>
      {description && (
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
      <div className="space-y-3">
        {highlights.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
            </div>
            <span className="text-muted-foreground">{item}</span>
          </div>
        ))}
      </div>
      {buttons.length > 0 && (
        <div className="flex flex-wrap gap-4 pt-2">
          {buttons.map((btn: any, idx: number) => (
            <Button
              key={idx}
              variant={btn.variant as any}
              size={btn.size as any}
              onClick={(e) => isPreview && e.preventDefault()}
              className={`group ${idx === 0 ? 'shadow-lg hover:shadow-xl' : ''} transition-all`}
            >
              {btn.text}
              {idx === 0 && <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />}
            </Button>
          ))}
        </div>
      )}
    </div>
  );

  const renderImage = () => (
    image && (
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Decorative element */}
        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10"></div>
        <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full -z-10"></div>
      </div>
    )
  );

  if (variant === 'image-right') {
    return (
      <section
        className="w-full transition-all overflow-hidden"
        style={{
          backgroundColor: backgroundColor || 'hsl(var(--background))',
          color: textColor || 'hsl(var(--foreground))',
          padding: padding || '100px 24px',
        }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {renderContent()}
          {renderImage()}
        </div>
      </section>
    );
  }

  return (
    <section
      className="w-full transition-all overflow-hidden"
      style={{
        backgroundColor: backgroundColor || 'hsl(var(--muted))',
        color: textColor || 'hsl(var(--foreground))',
        padding: padding || '100px 24px',
      }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {renderImage()}
        {renderContent()}
      </div>
    </section>
  );
}
