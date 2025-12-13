import React, { useState } from 'react';
import { ChevronUp, Accessibility, Mail, Phone, User, Send, ArrowRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

// Interface for Product Data
interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  isTitleBlue?: boolean;
}

const FeaturedProductSection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Data derived from the screenshot
  const products: Product[] = [
    {
      id: 1,
      image: "https://goftx.com/wp-content/uploads/2025/08/HP-Engage-One-Pro-15.6-Display-1-1.png",
      title: 'HP Engage One Pro 15.6” (G2) Display',
      description: "A smooth and powerful display to elevate your customer experience.",
      isTitleBlue: false,
    },
    {
      id: 2,
      image: "https://goftx.com/wp-content/uploads/2025/08/HP-Engage-14-Customer-Facing-Display-transparent.png",
      title: 'HP Engage 14” Customer Facing Display w/ Stand',
      description: "Inform and engage your customers with this clear and concise display.",
      isTitleBlue: false, // Changed to false as requested
    },
    {
      id: 3,
      image: "https://goftx.com/wp-content/uploads/2024/03/HP-Thermal-Receipt-Printer-1.png",
      title: 'HP Thermal Receipt Printer and Cable',
      description: "A reliable device that delivers clear, fast, and professional receipts for your business.",
      isTitleBlue: false,
    },
    {
      id: 4,
      image: "https://goftx.com/wp-content/uploads/2024/03/HP-Engage-Imaging-Barcode-1-2.png",
      title: 'HP Engage Imaging Barcode Scanner',
      description: "Accelerate your checkout process with this high-speed and accurate barcode scanner.",
      isTitleBlue: false,
    },
    {
      id: 5,
      image: "https://goftx.com/wp-content/uploads/2024/03/HP-Cash-Drawer-1-2.png",
      title: 'HP Cash Drawer',
      description: "Compact footprint, dual media slots, and durable construction for your point-of-sale.",
      isTitleBlue: false,
    },
    {
      id: 6,
      image: "https://goftx.com/wp-content/uploads/2024/03/SMARTtill-Unit-1-1.png",
      title: 'smarttill Unit',
      description: "Make cash handling operations proactive with our intelligent cash drawer.",
      isTitleBlue: false, // Changed to false as requested
    }
  ];

  const handleContactClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full bg-[#FEFEFF] font-sans relative min-h-screen flex items-center">

      {/* Main Grid Container */}
      <div className="w-full px-6 py-12 lg:px-12 flex flex-col items-center">

        {/* Section Header */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Get a Comprehensive POS System <br className="hidden md:block" />
            <span className="text-[#D87027]"> – Including Accessories – </span> <br className="hidden md:block" />
            With Our Hardware
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full w-full">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onContactClick={() => handleContactClick(product)}
            />
          ))}
        </div>
      </div>

      {/* Product Inquiry Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-5 h-full">
            {/* Sidebar (Visual) */}
            <div className="md:col-span-2 bg-gradient-to-br from-[#4175FC] to-[#005a87] p-6 text-white flex flex-col justify-between hidden md:flex">
              <div>
                <h4 className="text-xl font-bold mb-2">Get in Touch</h4>
                <p className="text-blue-100 text-sm mb-6">We'd love to help you find the perfect hardware for your business.</p>
                {selectedProduct && (
                  <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 mb-4">
                    <img src={selectedProduct.image} alt="Product" className="w-16 h-16 object-contain mb-2 bg-white rounded-lg p-1" />
                    <p className="font-semibold text-xs opacity-90 line-clamp-2">{selectedProduct.title}</p>
                  </div>
                )}
              </div>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3 opacity-90">
                  <Phone size={16} /> <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 opacity-90">
                  <Mail size={16} /> <span>sales@sellsync.com</span>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="md:col-span-3 p-6 md:p-8">
              <DialogHeader className="mb-6">
                <DialogTitle className="text-2xl font-bold text-gray-900">Request Details</DialogTitle>
                <DialogDescription className="text-gray-500">
                  Fill out the form below to inquire about <span className="font-semibold text-blue-600">{selectedProduct?.title}</span>.
                </DialogDescription>
              </DialogHeader>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <Input id="name" placeholder="John Doe" className="pl-9 bg-gray-50 border-gray-200 focus:bg-white transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <Input id="email" type="email" placeholder="john@example.com" className="pl-9 bg-gray-50 border-gray-200 focus:bg-white transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                  <Textarea
                    id="message"
                    placeholder="I'm interested in..."
                    className="min-h-[100px] bg-gray-50 border-gray-200 focus:bg-white transition-colors resize-none"
                  />
                </div>

                <Button type="submit" className="w-full bg-[#4175FC] hover:bg-blue-600 text-white font-bold py-6 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98]">
                  Send Inquiry <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Floating Action Button (Bottom Right) */}
      <button className="fixed bottom-8 right-8 bg-[#007bff] hover:bg-blue-600 text-white p-3 rounded shadow-lg transition-colors z-50">
        <ChevronUp size={20} strokeWidth={3} />
      </button>

      {/* Accessibility Icon (Bottom Left) */}
      <div className="fixed bottom-8 left-8 bg-[#005a87] text-white p-2 rounded-full cursor-pointer shadow-lg hover:bg-blue-800 transition-colors z-50">
        <Accessibility size={24} />
      </div>

    </div>
  );
};

// Individual Card Component
const ProductCard: React.FC<{ product: Product, onContactClick: () => void }> = ({ product, onContactClick }) => {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="col-xs-12 col-sm-6 col-lg-4 col-xl-4 h-full w-full">
      <div className="hard-box bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-12 flex flex-col items-center text-center h-full min-h-[550px] border border-gray-200 hover:border-gray-300 transition-all duration-300" id={`product-${product.id}`}>

        {/* Image Area */}
        <div className="hard-img h-72 w-full flex items-center justify-center mb-8">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Title */}
        <h3 className={`text-2xl font-bold mb-4 leading-tight ${product.isTitleBlue ? 'text-[#4A89DC]' : 'text-black'}`}>
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed mb-8 flex-grow">
          {product.description}
        </p>

        {/* Action Area (Quantity + Contact Button) */}
        <div className="w-full mt-auto flex items-center justify-center gap-3">
          {/* Quantity Input */}
          <div className="relative">
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              className="w-14 h-11 border border-gray-200 rounded pl-3 pr-1 text-gray-600 text-sm focus:outline-none focus:border-blue-400"
            />
          </div>

          <button
            onClick={onContactClick}
            className="bg-[#D87027] hover:bg-[#c26522] text-white font-bold py-3 px-6 rounded-full text-base transition-colors shadow-lg shadow-[#D87027]/40 flex items-center justify-center gap-2"
          >
            Contact Us <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductSection;
