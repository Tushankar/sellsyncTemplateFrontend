import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <div className="flex-1 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-[#1C244B]">Terms of Service</h1>

            <div className="prose prose-lg prose-blue max-w-none text-gray-600 space-y-8">
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1C244B] mb-4">1. Agreement to Terms</h2>
                <p>
                  These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and SellSync ("we," "us" or "our"), concerning your access to and use of the SellSync website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
                </p>
                <p className="mt-4">
                  You agree that by accessing the Site, you have read, understood, and accept to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must discontinue use immediately.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1C244B] mb-4">2. Intellectual Property Rights</h2>
                <p>
                  Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1C244B] mb-4">3. User Representations</h2>
                <p>
                  By using the Site, you represent and warrant that:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>All registration information you submit will be true, accurate, current, and complete.</li>
                  <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                  <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                  <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise.</li>
                  <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                  <li>Your use of the Site will not violate any applicable law or regulation.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1C244B] mb-4">4. Products</h2>
                <p>
                  We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on the Site. However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect the actual colors and details of the products.
                </p>
                <p className="mt-4">
                  All products are subject to availability, and we cannot guarantee that items will be in stock. We reserve the right to discontinue any products at any time for any reason. Prices for all products are subject to change.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1C244B] mb-4">5. Purchases and Payment</h2>
                <p>
                  We accept the following forms of payment: Visa, Mastercard, American Express, Discover, and PayPal. You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1C244B] mb-4">6. Contact Us</h2>
                <p>
                  In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                </p>
                <div className="mt-4 p-6 bg-gray-50 rounded-lg">
                  <p className="font-bold text-[#1C244B]">SellSync Support</p>
                  <p>Email: support@sellsync.com</p>
                </div>
              </section>
            </div>

            <div className="mt-12 text-sm text-gray-500">
              <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
