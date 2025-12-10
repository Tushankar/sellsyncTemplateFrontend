"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

const data = [
  {
    id: "shadcn-ui",
    title: "shadcn/ui: Building a Modern Component Library",
    description:
      "Explore how shadcn/ui revolutionized React component libraries by providing a unique approach to component distribution and customization, making it easier for developers to build beautiful, accessible applications.",
    href: "https://ui.shadcn.com",
    image:
      "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "tailwind",
    title: "Tailwind CSS: The Utility-First Revolution",
    description:
      "Discover how Tailwind CSS transformed the way developers style their applications, offering a utility-first approach that speeds up development while maintaining complete design flexibility.",
    href: "https://tailwindcss.com",
    image:
      "https://images.unsplash.com/photo-1551250928-e4a05afaed1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjR8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "astro",
    title: "Astro: The All-in-One Web Framework",
    description:
      "Learn how Astro's innovative 'Islands Architecture' and zero-JS-by-default approach is helping developers build faster websites while maintaining rich interactivity where needed.",
    href: "https://astro.build",
    image:
      "https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "react",
    title: "React: Pioneering Component-Based UI",
    description:
      "See how React continues to shape modern web development with its component-based architecture, enabling developers to build complex user interfaces with reusable, maintainable code.",
    href: "https://react.dev",
    image:
      "https://images.unsplash.com/photo-1548324215-9133768e4094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMzF8fHx8fHwyfHwxNzIzNDM1MzA1fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "nextjs",
    title: "Next.js: The React Framework for Production",
    description:
      "Explore how Next.js has become the go-to framework for building full-stack React applications, offering features like server components, file-based routing, and automatic optimization.",
    href: "https://nextjs.org",
    image:
      "https://images.unsplash.com/photo-1550070881-a5d71eda5800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Gallery4 = ({
  title = "Case Studies",
  description = "Discover how leading companies and developers are leveraging modern web technologies to build exceptional digital experiences. These case studies showcase real-world applications and success stories.",
  items = data,
}: Gallery4Props) => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="mb-6 sm:mb-8 md:mb-14 lg:mb-16 flex justify-center">
          <div className="flex flex-col gap-3 sm:gap-4 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block rounded-3xl bg-gradient-to-r from-[#D87027] to-[#D87027] text-white px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base font-medium shadow-lg shadow-[#D87027]/30"
            >
              Features
            </motion.div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-center px-4">
              {title}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground text-center px-4 max-w-3xl">{description}</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-3 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item) => (
            <a href={item.href} key={item.id} className="group rounded-xl">
              <div className="group relative h-full min-h-[20rem] sm:min-h-[24rem] md:min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-4 sm:p-6 md:p-8 text-white">
                  <div className="mb-2 pt-3 sm:pt-4 text-base sm:text-lg md:text-xl font-semibold md:mb-3 lg:pt-4">
                    {item.title}
                  </div>
                  <div className="mb-6 sm:mb-8 md:mb-12 lg:mb-9 line-clamp-2 text-xs sm:text-sm">
                    {item.description}
                  </div>
                  <div className="flex items-center text-xs sm:text-sm">
                    Read more{" "}
                    <ArrowRight className="ml-2 size-4 sm:size-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };