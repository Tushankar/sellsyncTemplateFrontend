import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { motion } from "framer-motion";

const CookiePolicy = () => {
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-[#1C244B]">Cookie Policy</h1>

            <div className="prose prose-lg prose-blue max-w-none text-gray-600 space-y-8">
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1C244B] mb-4">1. What Are Cookies</h2>
                <p>
                  Cookies are small text files that are placed on your computer or mobile device by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1C244B] mb-4">2. How We Use Cookies</h2>
                <p>
                  We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1C244B] mb-4">3. The Cookies We Set</h2>
                <ul className="list-disc pl-6 mt-4 space-y-4">
                  <li>
                    <strong>Account related cookies:</strong> If you create an account with us, then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out however in some cases they may remain afterwards to remember your site preferences when logged out.
                  </li>
                  <li>
                    <strong>Login related cookies:</strong> We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.
                  </li>
                  <li>
                    <strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1C244B] mb-4">4. Third Party Cookies</h2>
                <p>
                  In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>
                    This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1C244B] mb-4">5. Disabling Cookies</h2>
                <p>
                  You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore it is recommended that you do not disable cookies.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1C244B] mb-4">6. More Information</h2>
                <p>
                  Hopefully that has clarified things for you. As was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.
                </p>
                <p className="mt-4">
                  However, if you are still looking for more information, you can contact us through one of our preferred contact methods:
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

export default CookiePolicy;
