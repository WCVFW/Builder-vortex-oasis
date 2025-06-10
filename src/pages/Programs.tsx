import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  BookOpen,
  Briefcase,
  Shield,
  Users,
  Heart,
  Award,
  Clock,
  MapPin,
  Calendar,
  ArrowRight,
  CheckCircle,
  Target,
  TrendingUp,
} from "lucide-react";

const Programs = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const programCategories = [
    { id: "all", name: "All Programs", icon: Heart },
    { id: "education", name: "Education", icon: BookOpen },
    { id: "career", name: "Career Development", icon: Briefcase },
    { id: "health", name: "Health & Wellness", icon: Shield },
    { id: "leadership", name: "Leadership", icon: Award },
  ];

  const programs = [
    {
      id: 1,
      title: "Scholarship Program",
      category: "education",
      description:
        "Full and partial scholarships for women pursuing higher education in STEM, business, and social sciences.",
      duration: "4 years",
      participants: "500+ annually",
      location: "Global",
      features: [
        "Full tuition coverage",
        "Monthly stipend",
        "Mentorship support",
        "Career placement assistance",
      ],
      outcomes: [
        "95% graduation rate",
        "85% employed within 6 months",
        "Average 40% salary increase",
      ],
      color: "empowerment",
    },
    {
      id: 2,
      title: "Professional Skills Training",
      category: "career",
      description:
        "Comprehensive training in digital literacy, project management, and leadership skills for career advancement.",
      duration: "6 months",
      participants: "300+ per cohort",
      location: "Online & In-person",
      features: [
        "Industry-relevant curriculum",
        "Hands-on projects",
        "Networking opportunities",
        "Job placement support",
      ],
      outcomes: [
        "98% completion rate",
        "70% promotion or job change",
        "Average 35% salary increase",
      ],
      color: "hope",
    },
    {
      id: 3,
      title: "Women's Health Initiative",
      category: "health",
      description:
        "Comprehensive healthcare access, mental health support, and wellness education programs for women and families.",
      duration: "Ongoing",
      participants: "2,000+ monthly",
      location: "15 countries",
      features: [
        "Free healthcare clinics",
        "Mental health counseling",
        "Health education workshops",
        "Community health workers",
      ],
      outcomes: [
        "50% improvement in health outcomes",
        "80% increase in health literacy",
        "24/7 support hotline",
      ],
      color: "growth",
    },
    {
      id: 4,
      title: "Leadership Development Program",
      category: "leadership",
      description:
        "Intensive leadership training for women seeking to advance to executive and board positions.",
      duration: "12 months",
      participants: "100 per year",
      location: "Major cities",
      features: [
        "Executive coaching",
        "Board readiness training",
        "Peer mentoring circles",
        "Strategic planning workshops",
      ],
      outcomes: [
        "90% achieve leadership roles",
        "250+ board appointments",
        "Executive network access",
      ],
      color: "wisdom",
    },
    {
      id: 5,
      title: "Entrepreneurship Bootcamp",
      category: "career",
      description:
        "Intensive program for women entrepreneurs to develop business skills, access funding, and launch successful ventures.",
      duration: "3 months",
      participants: "150+ per cohort",
      location: "Online",
      features: [
        "Business plan development",
        "Pitch training",
        "Investor introductions",
        "1-year mentorship",
      ],
      outcomes: [
        "200+ businesses launched",
        "$50M+ in funding raised",
        "75% still operating after 2 years",
      ],
      color: "strength",
    },
    {
      id: 6,
      title: "Digital Literacy Initiative",
      category: "education",
      description:
        "Basic to advanced digital skills training to bridge the technology gap and create new opportunities.",
      duration: "3 months",
      participants: "500+ per cohort",
      location: "Community centers",
      features: [
        "Computer basics",
        "Internet safety",
        "Online job applications",
        "Digital communication",
      ],
      outcomes: [
        "95% technology confidence",
        "60% find online employment",
        "Community tech support network",
      ],
      color: "hope",
    },
  ];

  const filteredPrograms =
    selectedCategory === "all"
      ? programs
      : programs.filter((program) => program.category === selectedCategory);

  const stats = [
    { number: "25+", label: "Active Programs", icon: Target },
    { number: "15K+", label: "Women Served", icon: Users },
    { number: "50+", label: "Countries", icon: MapPin },
    { number: "98%", label: "Success Rate", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient">
        <div className="container-custom py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge
              variant="secondary"
              className="bg-empowerment-100 text-empowerment-800 hover:bg-empowerment-200"
            >
              Our Programs
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Transforming Lives Through
              <span className="gradient-text"> Comprehensive Programs</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our evidence-based programs are designed to address the unique
              challenges women face and provide them with the tools, resources,
              and support they need to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Program Stats */}
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

      {/* Program Categories & Filters */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Our Program Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of programs designed to empower
              women at every stage of their journey.
            </p>
          </div>

          {/* Category Tabs */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-12">
              {programCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center space-x-2"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <category.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Programs Grid */}
            <TabsContent value={selectedCategory} className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPrograms.map((program) => (
                  <Card
                    key={program.id}
                    className="card-hover border-0 shadow-lg bg-white"
                  >
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r from-${program.color}-500 to-${program.color}-600 rounded-xl flex items-center justify-center`}
                        >
                          {program.category === "education" && (
                            <BookOpen className="w-8 h-8 text-white" />
                          )}
                          {program.category === "career" && (
                            <Briefcase className="w-8 h-8 text-white" />
                          )}
                          {program.category === "health" && (
                            <Shield className="w-8 h-8 text-white" />
                          )}
                          {program.category === "leadership" && (
                            <Award className="w-8 h-8 text-white" />
                          )}
                        </div>

                        <div className="space-y-3">
                          <h3 className="text-xl font-bold">{program.title}</h3>
                          <p className="text-gray-600 leading-relaxed">
                            {program.description}
                          </p>
                        </div>

                        <div className="space-y-3 pt-4 border-t">
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="w-4 h-4 mr-2" />
                            Duration: {program.duration}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="w-4 h-4 mr-2" />
                            {program.participants}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="w-4 h-4 mr-2" />
                            {program.location}
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h4 className="font-semibold text-gray-900">
                            Key Features:
                          </h4>
                          <ul className="space-y-2">
                            {program.features
                              .slice(0, 3)
                              .map((feature, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-center text-sm text-gray-600"
                                >
                                  <CheckCircle className="w-4 h-4 mr-2 text-growth-500" />
                                  {feature}
                                </li>
                              ))}
                          </ul>
                        </div>

                        <Button
                          className="w-full btn-primary"
                          onClick={() => {
                            // Navigate to program details or application
                          }}
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Program Outcomes */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Proven Results & Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our programs are designed with measurable outcomes in mind. Here's
              how we're making a difference in women's lives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.slice(0, 3).map((program, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-gradient-to-br from-gray-50 to-white"
              >
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold">{program.title}</h3>
                      <p className="text-gray-600">Program Outcomes:</p>
                    </div>

                    <div className="space-y-3">
                      {program.outcomes.map((outcome, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-3 p-3 bg-white rounded-lg border"
                        >
                          <div className="w-8 h-8 bg-gradient-to-r from-growth-500 to-growth-600 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-gray-700 font-medium">
                            {outcome}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">
                How to Get Started
              </h2>
              <p className="text-xl text-gray-600">
                Ready to transform your life? Here's how to apply for our
                programs.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Explore Programs",
                  description: "Browse our programs and find the best fit",
                },
                {
                  step: "2",
                  title: "Submit Application",
                  description: "Complete our online application form",
                },
                {
                  step: "3",
                  title: "Interview Process",
                  description: "Participate in our selection interview",
                },
                {
                  step: "4",
                  title: "Start Your Journey",
                  description: "Begin your transformational experience",
                },
              ].map((step, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-empowerment-500 to-hope-500 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white text-2xl font-bold">
                      {step.step}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="btn-primary text-lg px-8 py-4">
                <Calendar className="mr-2 h-5 w-5" />
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-empowerment-600 to-hope-600 text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl opacity-90">
              Join thousands of women who have already transformed their lives
              through our programs. Your journey to empowerment starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-empowerment-600 hover:bg-gray-100 text-lg px-8 py-4"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Apply for Programs
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-4"
              >
                Download Brochure
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
