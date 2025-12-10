import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
  Zap,
  BarChart3,
  ShoppingCart,
  Package,
  Users,
  Shield,
  Database,
  CreditCard,
  FileText,
  Calendar,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  DollarSign,
  Building2,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import FAQs from "@/components/ui/text-reveal-faqs";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function FAQPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-md border-muted text-foreground transition-all duration-300">
        <div className="container flex h-20 items-center justify-between px-4 md:border-x md:border-muted">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/sellsyncbg.png"
                alt="SellSync Logo"
                className="h-24 w-auto"
              />
              <span className="font-bold text-xl text-foreground">SELLSYNC</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {["Features", "Hardware", "Pricing", "Industries", "Demo"].map((item) => (
              <a
                key={item}
                href={`/#${item.toLowerCase()}`}
                className="relative text-xl font-bold transition-colors hover:text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full text-foreground"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3 ml-auto">
            <Link to="/login">
              <Button variant="outline" className="rounded-3xl font-bold text-xl">
                Log In
              </Button>
            </Link>
            <Link to="/builder">
              <Button className="rounded-3xl font-bold text-xl bg-gradient-to-r from-[#D87027] to-[#D87027] hover:from-[#D87027]/90 hover:to-[#D87027]/90 text-white shadow-lg shadow-[#D87027]/30 border border-[#D87027]/20">
                Get Demo
              </Button>
            </Link>
          </div>
          <button className="flex md:hidden ml-auto text-foreground" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden" onClick={() => setIsMenuOpen(false)}>
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-bold text-xl">Menu</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="p-4 space-y-4">
              {["Features", "Hardware", "Pricing", "Industries", "Demo"].map((item) => (
                <a
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  className="block py-2 text-lg font-medium text-gray-900 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 border-t space-y-3">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full rounded-3xl">
                    Log In
                  </Button>
                </Link>
                <Link to="/builder" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full rounded-3xl bg-gradient-to-r from-[#D87027] to-[#D87027] hover:from-[#D87027]/90 hover:to-[#D87027]/90 text-white">
                    Get Demo
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about SellSync POS system
            </p>
          </div>
          <FAQs />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="container grid gap-6 sm:gap-3 px-3 sm:px-4 py-8 sm:py-10 md:px-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:border-x md:border-muted"
        >
          <div className="space-y-3">
            <Link to="/" className="flex items-center space-x-3">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex items-center justify-center"
              >
                <img
                  src="/sellsyncbg.png"
                  alt="SellSync Logo"
                  className="h-24 w-auto"
                />
              </motion.div>
              <span className="font-bold text-xl">SELLSYNC</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              The smarter POS system for modern USA retail stores. Streamline operations and grow your business.
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
                <a href="#overview" className="text-muted-foreground hover:text-foreground">
                  About Us
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Careers
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </a>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-medium">Support</h3>
              <nav className="mt-4 flex flex-col space-y-2 text-sm">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Help Center
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Onboarding
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Status
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
                  Guides
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  API Docs
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Changelog
                </a>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-medium">Legal</h3>
              <nav className="mt-4 flex flex-col space-y-2 text-sm">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Cookie Policy
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Security
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  GDPR
                </a>
              </nav>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Subscribe to our newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Stay updated with POS tips, retail trends, and SellSync news.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 sm:gap-0 sm:space-x-3">
              <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1 rounded-2xl sm:rounded-3xl" />
              <Button type="submit" className="rounded-2xl sm:rounded-3xl w-full sm:w-auto">
                Subscribe
              </Button>
            </form>
          </div>
        </motion.div>
        <div className="border-t">
          <div className="container flex flex-col items-center justify-between gap-2 sm:gap-3 py-4 sm:py-6 md:h-16 md:flex-row md:py-0 px-3 sm:px-4">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} SellSync. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">Powered by cloud technology in the USA</p>
          </div>
        </div>
      </footer>
    </div>
  );
}