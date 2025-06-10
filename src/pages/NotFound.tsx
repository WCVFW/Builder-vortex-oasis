import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Home, ArrowLeft, Search, Heart } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20 lg:py-32">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            {/* Large 404 */}
            <div className="space-y-4">
              <h1 className="text-8xl lg:text-9xl font-bold gradient-text">
                404
              </h1>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Page Not Found
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-xl text-gray-600 leading-relaxed">
                The page you're looking for doesn't exist or has been moved. But
                don't worry – there are many ways to continue your journey with
                us.
              </p>
              <p className="text-gray-500">
                Perhaps you'd like to explore our programs or learn about our
                impact instead?
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link to="/">
                <Button size="lg" className="btn-primary">
                  <Home className="mr-2 h-5 w-5" />
                  Go Home
                </Button>
              </Link>
              <Link to="/programs">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-empowerment-300 text-empowerment-700 hover:bg-empowerment-50"
                >
                  <Search className="mr-2 h-5 w-5" />
                  Explore Programs
                </Button>
              </Link>
            </div>

            {/* Quick Links */}
            <div className="pt-12 border-t border-gray-200 mt-16">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Popular Pages
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link
                  to="/about"
                  className="p-4 rounded-lg border hover:border-empowerment-300 hover:bg-empowerment-50 transition-colors group"
                >
                  <div className="text-center space-y-2">
                    <Heart className="w-6 h-6 text-empowerment-600 mx-auto group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-gray-700">
                      About Us
                    </span>
                  </div>
                </Link>
                <Link
                  to="/programs"
                  className="p-4 rounded-lg border hover:border-hope-300 hover:bg-hope-50 transition-colors group"
                >
                  <div className="text-center space-y-2">
                    <Search className="w-6 h-6 text-hope-600 mx-auto group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-gray-700">
                      Programs
                    </span>
                  </div>
                </Link>
                <Link
                  to="/impact"
                  className="p-4 rounded-lg border hover:border-growth-300 hover:bg-growth-50 transition-colors group"
                >
                  <div className="text-center space-y-2">
                    <div className="w-6 h-6 bg-growth-600 rounded mx-auto group-hover:scale-110 transition-transform"></div>
                    <span className="text-sm font-medium text-gray-700">
                      Our Impact
                    </span>
                  </div>
                </Link>
                <Link
                  to="/contact"
                  className="p-4 rounded-lg border hover:border-wisdom-300 hover:bg-wisdom-50 transition-colors group"
                >
                  <div className="text-center space-y-2">
                    <div className="w-6 h-6 bg-wisdom-600 rounded mx-auto group-hover:scale-110 transition-transform"></div>
                    <span className="text-sm font-medium text-gray-700">
                      Contact
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
