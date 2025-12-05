import { SectionData } from '@/types/builder';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

interface BlogSectionProps {
  data: SectionData['data'];
  variant?: string;
  isPreview?: boolean;
}

export function BlogSection({ data, variant = 'grid', isPreview }: BlogSectionProps) {
  const {
    heading,
    description,
    items = [],
    buttons,
    backgroundColor,
    textColor,
    padding,
  } = data;

  // Featured Blog Variant
  if (variant === 'featured') {
    const post = items[0];
    if (!post) return null;

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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-muted to-muted/50 shadow-2xl">
                <img
                  src={post.image?.src}
                  alt={post.image?.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              {post.featured && (
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-primary to-secondary text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg">
                  Featured
                </div>
              )}
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                {heading || 'Featured Post'}
              </div>

              {post.category && (
                <Badge variant="outline" className="bg-violet-500/10 text-violet-600 border-violet-200">
                  {post.category}
                </Badge>
              )}

              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight" style={{ color: textColor }}>
                {post.title}
              </h2>

              <p className="text-xl text-muted-foreground leading-relaxed" style={{ color: textColor, opacity: 0.8 }}>
                {post.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                {post.author && (
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                )}
                {post.date && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                )}
                {post.readTime && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                )}
              </div>

              {buttons && buttons.length > 0 && (
                <div className="flex flex-wrap gap-4">
                  {buttons.map((button: any, idx: number) => (
                    <Button
                      key={idx}
                      variant={button.variant}
                      size={button.size}
                      className="shadow-lg"
                      onClick={(e) => isPreview && e.preventDefault()}
                    >
                      {button.text}
                      {button.variant === 'primary' && <ArrowRight className="w-5 h-5 ml-2" />}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // List Variant
  if (variant === 'list') {
    return (
      <section
        className="w-full transition-all"
        style={{
          backgroundColor: backgroundColor || 'hsl(var(--muted))',
          color: textColor || 'hsl(var(--foreground))',
          padding: padding || '100px 24px',
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Blog
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: textColor }}>
              {heading || 'Our Blog'}
            </h2>
            {description && (
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed" style={{ color: textColor, opacity: 0.8 }}>
                {description}
              </p>
            )}
          </div>

          <div className="space-y-8">
            {items.map((item: any) => (
              <Card
                key={item.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-card"
              >
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-[300px_1fr] gap-6">
                    <div className="aspect-video md:aspect-square overflow-hidden relative bg-gradient-to-br from-muted to-muted/50">
                      <img
                        src={item.image?.src}
                        alt={item.image?.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {item.category && (
                        <Badge className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-foreground">
                          {item.category}
                        </Badge>
                      )}
                    </div>
                    <div className="p-6 flex flex-col justify-center space-y-4">
                      <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors" style={{ color: textColor }}>
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed line-clamp-3" style={{ color: textColor, opacity: 0.8 }}>
                        {item.excerpt}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        {item.author && (
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>{item.author}</span>
                          </div>
                        )}
                        {item.date && (
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{item.date}</span>
                          </div>
                        )}
                        {item.readTime && (
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{item.readTime}</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <a
                          href="#"
                          className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all"
                          onClick={(e) => isPreview && e.preventDefault()}
                        >
                          Read More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </a>
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

  // Grid Variant (default)
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
            Blog
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: textColor }}>
            {heading || 'Our Blog'}
          </h2>
          {description && (
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed" style={{ color: textColor, opacity: 0.8 }}>
              {description}
            </p>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item: any) => (
            <Card
              key={item.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card"
            >
              <div className="aspect-video overflow-hidden relative bg-gradient-to-br from-muted to-muted/50">
                <img
                  src={item.image?.src}
                  alt={item.image?.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.category && (
                  <Badge className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-foreground">
                    {item.category}
                  </Badge>
                )}
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors line-clamp-2" style={{ color: textColor }}>
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed line-clamp-3" style={{ color: textColor, opacity: 0.8 }}>
                  {item.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground border-t pt-4">
                  {item.author && (
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{item.author}</span>
                    </div>
                  )}
                  {item.date && (
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{item.date}</span>
                    </div>
                  )}
                  {item.readTime && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{item.readTime}</span>
                    </div>
                  )}
                </div>
                <div className="pt-2">
                  <a
                    href="#"
                    className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all"
                    onClick={(e) => isPreview && e.preventDefault()}
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
