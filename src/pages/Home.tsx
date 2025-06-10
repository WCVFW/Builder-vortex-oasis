import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Heart,
  Users,
  Award,
  TrendingUp,
  BookOpen,
  Briefcase,
  Shield,
  Star,
  ArrowRight,
  Play,
  CheckCircle,
} from "lucide-react";

const Home = () => {
  const stats = [
    { number: "15K+", label: "Women Empowered", icon: Users },
    { number: "250+", label: "Programs Delivered", icon: Award },
    { number: "98%", label: "Success Rate", icon: TrendingUp },
    { number: "50+", label: "Partner Organizations", icon: Heart },
  ];

  const programs = [
    {
      title: "Education & Scholarships",
      description:
        "Providing access to quality education and financial support for women pursuing higher education.",
      icon: BookOpen,
      color: "empowerment",
      link: "/programs#education",
    },
    {
      title: "Career Development",
      description:
        "Professional skills training, job placement assistance, and career advancement programs.",
      icon: Briefcase,
      color: "hope",
      link: "/programs#career",
    },
    {
      title: "Health & Wellness",
      description:
        "Comprehensive healthcare access, mental health support, and wellness education programs.",
      icon: Shield,
      color: "growth",
      link: "/programs#health",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Program Graduate",
      content:
        "This foundation changed my life. Through their education program, I was able to complete my degree and start my own business.",
      rating: 5,
    },
    {
      name: "Maria Rodriguez",
      role: "Career Development Participant",
      content:
        "The mentorship and career guidance I received helped me advance from entry-level to management in just two years.",
      rating: 5,
    },
    {
      name: "Jennifer Chen",
      role: "Leadership Program Alumni",
      content:
        "The leadership skills I learned here have made me a confident advocate for women's rights in my community.",
      rating: 5,
    },
  ];

  const achievements = [
    "15,000+ women successfully completed our programs",
    "98% employment rate among career program graduates",
    "500+ scholarships awarded to deserving students",
    "250+ successful business launches supported",
    "100+ leadership positions filled by our alumni",
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient">
        <div className="container-custom py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="bg-empowerment-100 text-empowerment-800 hover:bg-empowerment-200"
                >
                  Empowering Women Since 2010
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Empowering Women to
                  <span className="gradient-text"> Change the World</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We believe every woman deserves the opportunity to reach her
                  full potential. Through education, leadership development, and
                  community support, we're building a brighter future together.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/donate">
                  <Button size="lg" className="btn-primary text-lg px-8 py-4">
                    <Heart className="mr-2 h-5 w-5" />
                    Make a Donation
                  </Button>
                </Link>
                <Link to="/programs">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-4 border-2 border-empowerment-300 text-empowerment-700 hover:bg-empowerment-50"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Explore Programs
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-empowerment-100 to-hope-100 p-8">
                <div className="w-full h-full bg-gradient-to-br from-empowerment-200 to-hope-200 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <Heart className="w-12 h-12 text-empowerment-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      15,000+
                    </h3>
                    <p className="text-gray-600 font-medium">
                      Lives Transformed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-empowerment-500 to-hope-500 rounded-full flex items-center justify-center mx-auto">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Our Impact Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive programs designed to address the unique
              challenges women face and provide them with the tools they need to
              succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="card-hover border-0 shadow-lg bg-white"
              >
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r from-${program.color}-500 to-${program.color}-600 rounded-xl flex items-center justify-center`}
                    >
                      <program.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold">{program.title}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {program.description}
                      </p>
                    </div>
                    <Link
                      to={program.link}
                      className="inline-flex items-center text-empowerment-600 hover:text-empowerment-700 font-semibold"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Our Achievements
                </h2>
                <p className="text-xl text-gray-600">
                  Over the years, we've made significant impact in the lives of
                  women and their communities. Here are some of our proudest
                  achievements.
                </p>
              </div>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-growth-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>

              <Link to="/impact">
                <Button className="btn-secondary">
                  View Full Impact Report
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <Card className="p-6 bg-gradient-to-br from-empowerment-50 to-empowerment-100 border-empowerment-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-empowerment-700">
                      250+
                    </div>
                    <div className="text-empowerment-600 font-medium">
                      Programs
                    </div>
                  </div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-growth-50 to-growth-100 border-growth-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-growth-700">
                      50+
                    </div>
                    <div className="text-growth-600 font-medium">Countries</div>
                  </div>
                </Card>
              </div>
              <div className="space-y-6 mt-8">
                <Card className="p-6 bg-gradient-to-br from-hope-50 to-hope-100 border-hope-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-hope-700">98%</div>
                    <div className="text-hope-600 font-medium">
                      Success Rate
                    </div>
                  </div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-wisdom-50 to-wisdom-100 border-wisdom-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-wisdom-700">
                      24/7
                    </div>
                    <div className="text-wisdom-600 font-medium">Support</div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from the amazing women whose lives have been transformed
              through our programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="card-hover border-0 shadow-lg bg-white"
              >
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-current text-wisdom-500"
                        />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="pt-4 border-t">
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-empowerment-600 to-hope-600 text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl opacity-90">
              Join us in empowering women and creating lasting change in
              communities around the world. Every contribution matters, and
              together we can build a brighter future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate">
                <Button
                  size="lg"
                  className="bg-white text-empowerment-600 hover:bg-gray-100 text-lg px-8 py-4"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Donate Today
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-lg px-8 py-4"
                >
                  Get Involved
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
