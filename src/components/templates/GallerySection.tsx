import { SectionData } from '@/types/builder';
import { Expand, ZoomIn, Eye } from 'lucide-react';

interface GallerySectionProps {
  data: SectionData['data'];
  variant?: string;
  isPreview?: boolean;
}

export function GallerySection({ data, variant = 'grid', isPreview }: GallerySectionProps) {
  const {
    heading,
    description,
    items = [],
    backgroundColor,
    textColor,
    padding,
  } = data;

  if (variant === 'masonry') {
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
          <div className="text-center mb-16 space-y-6">
            {heading && (
              <div className="space-y-2">
                <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Portfolio
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{heading}</h2>
              </div>
            )}
            {description && (
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">{description}</p>
            )}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
            {items.map((item: any) => (
              <div
                key={item.id}
                className="break-inside-avoid overflow-hidden rounded-2xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {item.image && (
                  <div className="relative">
                    <img
                      src={item.image.src}
                      alt={item.image.alt}
                      className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-end p-6">
                      {item.title && (
                        <p className="text-white text-xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</p>
                      )}
                      {item.description && (
                        <p className="text-white/80 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.description}</p>
                      )}
                      <div className="mt-4 flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors">
                          <ZoomIn className="w-5 h-5 text-white" />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors">
                          <Expand className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

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
        <div className="text-center mb-16 space-y-6">
          {heading && (
            <div className="space-y-2">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Gallery
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{heading}</h2>
            </div>
          )}
          {description && (
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">{description}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((item: any, index: number) => (
            <div
              key={item.id}
              className={`overflow-hidden rounded-2xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 ${
                index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              {item.image && (
                <div className="relative h-full aspect-square">
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-end p-6">
                    {item.title && (
                      <p className="text-white text-lg font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</p>
                    )}
                    <div className="mt-3 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 hover:bg-white/40">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
