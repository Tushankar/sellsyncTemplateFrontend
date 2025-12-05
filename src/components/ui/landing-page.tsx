import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Github,
  ArrowUpRight,
  Sparkles,
  Zap,
  Palette,
  Code,
  LineChart,
  MessageSquare,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function DesignAgency() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${scrollY > 50 ? "shadow-md" : ""}`}
      >
        <div className="container flex h-16 items-center justify-between border-x border-muted">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="https://sellsync.netlify.app/assets/FullLogo2-BHrAzKAZ.png"
                alt="SellSync Logo"
                className="h-10 w-auto"
              />
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">SellSync</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="relative text-base font-semibold tracking-wide transition-colors hover:text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              Services
            </a>
            <a href="#work" className="relative text-base font-semibold tracking-wide transition-colors hover:text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              Work
            </a>
            <a href="#about" className="relative text-base font-semibold tracking-wide transition-colors hover:text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              About
            </a>
            <a href="#clients" className="relative text-base font-semibold tracking-wide transition-colors hover:text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              Clients
            </a>
            <a href="#contact" className="relative text-base font-semibold tracking-wide transition-colors hover:text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              Contact
            </a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Link to="/builder">
              <Button variant="outline" size="sm" className="rounded-3xl">
                Log In
              </Button>
            </Link>
            <Link to="/builder">
              <Button size="sm" className="rounded-3xl">
                Get Started
              </Button>
            </Link>
          </div>
          <button className="flex md:hidden" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background md:hidden"
        >
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center space-x-3">
                <img
                  src="https://sellsync.netlify.app/assets/FullLogo2-BHrAzKAZ.png"
                  alt="SellSync Logo"
                  className="h-10 w-auto"
                />
                <span className="font-bold text-xl bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">SellSync</span>
              </Link>
            </div>
            <button onClick={toggleMenu}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <motion.nav
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="container grid gap-3 pb-8 pt-6"
          >
            {["Services", "Work", "About", "Clients", "Contact"].map((item, index) => (
              <motion.div key={index} variants={itemFadeIn}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="flex items-center justify-between rounded-3xl px-3 py-2 text-lg font-medium hover:bg-accent"
                  onClick={toggleMenu}
                >
                  {item}
                  <ChevronRight className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
            <motion.div variants={itemFadeIn} className="flex flex-col gap-3 pt-4">
              <Link to="/builder">
                <Button variant="outline" className="w-full rounded-3xl">
                  Log In
                </Button>
              </Link>
              <Link to="/builder">
                <Button className="w-full rounded-3xl">Get Started</Button>
              </Link>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-8 md:py-12 lg:py-16 xl:py-20 overflow-hidden">
          <div className="container px-4 md:px-6 border border-muted rounded-3xl bg-gradient-to-br from-background to-muted/30">
            <div className="grid gap-3 lg:grid-cols-[1fr_400px] lg:gap-3 xl:grid-cols-[1fr_600px]">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="flex flex-col justify-center space-y-4 py-10"
              >
                <div className="space-y-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-3xl bg-muted px-3 py-1 text-sm"
                  >
                    <Zap className="mr-1 h-3 w-3" />
                    Website Builder Platform
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  >
                    Build stunning websites without{" "}
                    <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                      coding
                    </span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="max-w-[600px] text-muted-foreground md:text-xl"
                  >
                    Create professional websites in minutes with our intuitive drag-and-drop builder. Choose from stunning templates and customize everything to match your brand.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="flex flex-col gap-3 sm:flex-row"
                >
                  <Link to="/builder">
                    <Button size="lg" className="rounded-3xl group">
                      Get Started
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </motion.span>
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="rounded-3xl">
                    <span className="hidden sm:inline">View Our Work</span>
                    <span className="sm:hidden">Our Work</span>
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center justify-center"
              >
                <div className="relative h-[350px] w-full md:h-[450px] lg:h-[500px] xl:h-[550px] overflow-hidden rounded-3xl">
                  <img
                    src="/Web dev svg.svg"
                    alt="Website Builder Illustration"
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section id="clients" className="w-full py-4 md:py-6 lg:py-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container px-4 md:px-6 border border-muted rounded-3xl bg-muted/20"
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block rounded-3xl bg-muted px-3 py-1 text-sm"
                >
                  Trusted by
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                >
                  Our Clients
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                >
                  We've helped thousands of businesses build their online presence
                </motion.p>
              </div>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto grid grid-cols-2 items-center gap-3 py-8 md:grid-cols-3 lg:grid-cols-6"
            >
              {[
                { name: "Google", url: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" },
                { name: "Microsoft", url: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" },
                { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
                { name: "Netflix", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
                { name: "Spotify", url: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
                { name: "Stripe", url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
              ].map((client, i) => (
                <motion.div
                  key={i}
                  variants={itemFadeIn}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center"
                >
                  <div className="rounded-3xl p-8 bg-background/80 transition-all w-full min-h-[180px] flex items-center justify-center">
                    <img
                      src={client.url}
                      alt={`${client.name} Logo`}
                      className="h-16 w-auto max-w-[160px] transition-all object-contain"
                      onError={(e) => {
                        // Fallback to company name if logo fails
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector('.fallback-text')) {
                          const span = document.createElement('span');
                          span.className = 'fallback-text text-lg font-semibold text-muted-foreground';
                          span.textContent = client.name;
                          parent.appendChild(span);
                        }
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>


        {/* Services Section */}
        <section id="services" className="w-full py-8 md:py-12 lg:py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container px-4 md:px-6 border border-muted rounded-3xl"
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block rounded-3xl bg-muted px-3 py-1 text-sm"
                >
                  Services
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                >
                  Powerful Features
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                >
                  Everything you need to build and launch your website
                </motion.p>
              </div>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto grid max-w-5xl items-center gap-3 py-12 md:grid-cols-2 lg:grid-cols-3"
            >
              {[
                {
                  icon: <Palette className="h-10 w-10 text-primary" />,
                  title: "Drag & Drop Builder",
                  description:
                    "Build your website visually with our intuitive drag-and-drop interface. No coding required.",
                },
                {
                  icon: <Code className="h-10 w-10 text-primary" />,
                  title: "Pre-built Templates",
                  description:
                    "Choose from our library of professional templates designed for various industries and purposes.",
                },
                {
                  icon: <Sparkles className="h-10 w-10 text-primary" />,
                  title: "Real-time Editing",
                  description:
                    "See your changes instantly as you build. Edit text, images, colors, and layouts in real-time.",
                },
                {
                  icon: <Zap className="h-10 w-10 text-primary" />,
                  title: "Responsive Design",
                  description: "All templates are fully responsive and look perfect on desktop, tablet, and mobile devices.",
                },
                {
                  icon: <LineChart className="h-10 w-10 text-primary" />,
                  title: "One-Click Deploy",
                  description:
                    "Publish your website instantly with a single click. No complex hosting setup required.",
                },
                {
                  icon: <MessageSquare className="h-10 w-10 text-primary" />,
                  title: "Custom Components",
                  description: "Add headers, footers, hero sections, forms, and more with our extensive component library.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemFadeIn}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group relative overflow-hidden rounded-3xl border p-6 shadow-sm transition-all hover:shadow-md bg-background/80"
                >
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300"></div>
                  <div className="relative space-y-3">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <a href="#" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
                      Learn more
                    </a>
                    <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Portfolio/Work Bento Grid */}
        <section id="work" className="w-full py-8 md:py-12 lg:py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container px-4 md:px-6 border border-muted rounded-3xl bg-muted/10"
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block rounded-3xl bg-muted px-3 py-1 text-sm"
                >
                  Portfolio
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                >
                  Our Work
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                >
                  A showcase of websites built with SellSync
                </motion.p>
              </div>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto grid max-w-7xl gap-3 py-12 md:grid-cols-4 md:grid-rows-2 lg:gap-3"
            >
              {/* Bento Grid Items */}
              <motion.div
                variants={itemFadeIn}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-3xl md:col-span-2 md:row-span-2 h-[400px] md:h-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop"
                  alt="Portfolio Item 1"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="text-xl font-bold">E-commerce Store</h3>
                  <p className="text-sm">Complete online store built in hours, not weeks</p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-3"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-3xl bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30"
                    >
                      View Project <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                variants={itemFadeIn}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-3xl h-[200px]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=600&fit=crop"
                  alt="Portfolio Item 2"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="text-xl font-bold">Portfolio Website</h3>
                  <p className="text-sm">Stunning portfolio created with our templates</p>
                </div>
              </motion.div>
              <motion.div
                variants={itemFadeIn}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-3xl h-[200px]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <img
                  src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=600&fit=crop"
                  alt="Portfolio Item 3"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="text-xl font-bold">Business Landing</h3>
                  <p className="text-sm">Professional landing page in minutes</p>
                </div>
              </motion.div>
              <motion.div
                variants={itemFadeIn}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-3xl h-[200px]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <img
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=600&fit=crop"
                  alt="Portfolio Item 4"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="text-xl font-bold">Restaurant Site</h3>
                  <p className="text-sm">Beautiful restaurant website with menu integration</p>
                </div>
              </motion.div>
              <motion.div
                variants={itemFadeIn}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-3xl md:col-span-2 h-[200px]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop"
                  alt="Portfolio Item 5"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="text-xl font-bold">Agency Website</h3>
                  <p className="text-sm">Full-featured agency site with contact forms</p>
                </div>
              </motion.div>
            </motion.div>
            <div className="flex justify-center pb-10">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/builder"><Button size="lg" className="rounded-3xl group">View All Projects<motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}><ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></motion.span></Button></Link>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* About/Team Section */}
        <section id="about" className="w-full py-8 md:py-12 lg:py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container px-4 md:px-6 border border-muted rounded-3xl"
          >
            <div className="grid gap-3 lg:grid-cols-2 lg:gap-3">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4 p-6"
              >
                <div className="inline-block rounded-3xl bg-muted px-3 py-1 text-sm">About Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission</h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  SellSync was created to democratize web design. We believe everyone should be able to create a
                  professional website without needing to code or hire expensive developers.
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Our platform combines powerful features with an intuitive interface, making website creation
                  accessible to businesses of all sizes. From startups to enterprises, we help you build your online presence.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link to="/builder"><Button variant="outline" size="lg" className="rounded-3xl">View Templates</Button></Link>
                  <Link to="/builder"><Button variant="outline" size="lg" className="rounded-3xl">Start Building</Button></Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center"
              >
                <div className="relative h-[350px] w-full md:h-[450px] lg:h-[500px] overflow-hidden rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"
                    alt="Team Photo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-8 md:py-12 lg:py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container px-4 md:px-6 border border-muted rounded-3xl bg-muted/20"
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block rounded-3xl bg-background px-3 py-1 text-sm"
                >
                  Testimonials
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                >
                  What Our Clients Say
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                >
                  Don't just take our word for it - hear from some of our satisfied clients
                </motion.p>
              </div>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto grid max-w-5xl gap-3 py-12 lg:grid-cols-2"
            >
              {[
                {
                  quote:
                    "SellSync made it incredibly easy to build our company website. We went from idea to launch in just 2 days!",
                  author: "Sarah Johnson",
                  company: "CEO, TechStart",
                  avatar: "/sarah_johnson_avatar.png",
                },
                {
                  quote:
                    "The drag-and-drop builder is so intuitive. I built a professional portfolio site without writing a single line of code.",
                  author: "Michael Chen",
                  company: "Freelance Designer",
                  avatar: "/michael_chen_avatar.png",
                },
                {
                  quote:
                    "The template library is amazing. I found the perfect design for my business and customized it to match my brand in minutes.",
                  author: "Emma Rodriguez",
                  company: "Owner, Boutique Shop",
                  avatar: "/emma_rodriguez_avatar.png",
                },
                {
                  quote:
                    "SellSync's one-click deploy feature is a game-changer. Our website is live and we can update it anytime, anywhere.",
                  author: "David Kim",
                  company: "Founder, StartupHub",
                  avatar: "/david_kim_avatar.png",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemFadeIn}
                  whileHover={{ y: -10 }}
                  className="flex flex-col justify-between rounded-3xl border bg-background p-6 shadow-sm"
                >
                  <div>
                    <div className="flex gap-0.5 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="mt-4 text-lg font-medium leading-relaxed">"{testimonial.quote}"</blockquote>
                  </div>
                  <div className="mt-6 flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={`${testimonial.author} avatar`}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-8 md:py-12 lg:py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container grid items-center gap-3 px-4 md:px-6 lg:grid-cols-2 border border-muted rounded-3xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-3 p-6"
            >
              <div className="inline-block rounded-3xl bg-muted px-3 py-1 text-sm">Contact</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Let's Work Together</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ready to start your next project? Get in touch with us to discuss how we can help bring your vision to
                life.
              </p>
              <div className="mt-8 space-y-4">
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                  <div className="rounded-3xl bg-muted p-2">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Our Location</h3>
                    <p className="text-sm text-muted-foreground">123 Design Street, Creative City, 10001</p>
                  </div>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                  <div className="rounded-3xl bg-muted p-2">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <p className="text-sm text-muted-foreground">hello@sellsync.com</p>
                  </div>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                  <div className="rounded-3xl bg-muted p-2">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </motion.div>
              </div>
              <div className="mt-8 flex space-x-3">
                {[
                  { icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
                  { icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
                  { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
                  { icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
                ].map((social, index) => (
                  <motion.div key={index} whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <a
                      href="#"
                      className="rounded-3xl border p-2 text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                    >
                      {social.icon}
                      <span className="sr-only">{social.label}</span>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border bg-background p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold">Send Us a Message</h3>
              <p className="text-sm text-muted-foreground">
                Fill out the form below and we'll get back to you shortly.
              </p>
              <form className="mt-6 space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="first-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      First name
                    </label>
                    <Input id="first-name" placeholder="Enter your first name" className="rounded-3xl" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="last-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Last name
                    </label>
                    <Input id="last-name" placeholder="Enter your last name" className="rounded-3xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" className="rounded-3xl" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <Textarea id="message" placeholder="Enter your message" className="min-h-[120px] rounded-3xl" />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" className="w-full rounded-3xl">
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="container grid gap-3 px-4 py-10 md:px-6 lg:grid-cols-4 border-x border-muted"
        >
          <div className="space-y-3">
            <Link to="/" className="flex items-center space-x-3">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="h-10 w-10 rounded-3xl bg-primary flex items-center justify-center"
              >
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </motion.div>
              <span className="font-bold text-xl">SellSync</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              We create beautiful, functional designs that help businesses grow and connect with their audience.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
                { icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
                { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
                { icon: <Github className="h-5 w-5" />, label: "GitHub" },
              ].map((social, index) => (
                <motion.div key={index} whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    {social.icon}
                    <span className="sr-only">{social.label}</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <h3 className="text-lg font-medium">Company</h3>
              <nav className="mt-4 flex flex-col space-y-2 text-sm">
                <a href="#about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Careers
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Our Process
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  News & Press
                </a>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-medium">Services</h3>
              <nav className="mt-4 flex flex-col space-y-2 text-sm">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  UI/UX Design
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Web Development
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Brand Identity
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Digital Marketing
                </a>
              </nav>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <h3 className="text-lg font-medium">Resources</h3>
              <nav className="mt-4 flex flex-col space-y-2 text-sm">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Blog
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Case Studies
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Guides & Tutorials
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  FAQ
                </a>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-medium">Legal</h3>
              <nav className="mt-4 flex flex-col space-y-2 text-sm">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Cookie Policy
                </a>
              </nav>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Subscribe to our newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Stay updated with our latest projects, design tips, and company news.
            </p>
            <form className="flex space-x-3">
              <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1 rounded-3xl" />
              <Button type="submit" className="rounded-3xl">
                Subscribe
              </Button>
            </form>
          </div>
        </motion.div>
        <div className="border-t">
          <div className="container flex flex-col items-center justify-between gap-3 py-6 md:h-16 md:flex-row md:py-0">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} SellSync. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">Crafted with passion in New York City</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
