import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  TrendingUp,
  Users,
  Award,
  Heart,
  BookOpen,
  Briefcase,
  Globe,
  Star,
  ArrowRight,
  BarChart3,
  Target,
  CheckCircle,
} from "lucide-react";

const Impact = () => {
  const globalStats = [
    {
      number: "15,247",
      label: "Women Empowered",
      description: "Across all our programs since 2010",
      icon: Users,
      color: "empowerment",
    },
    {
      number: "98%",
      label: "Success Rate",
      description: "Program completion and achievement rate",
      icon: Target,
      color: "growth",
    },
    {
      number: "250+",
      label: "Programs Delivered",
      description: "Comprehensive programs across multiple sectors",
      icon: Award,
      color: "hope",
    },
    {
      number: "50+",
      label: "Countries Reached",
      description: "Global presence spanning 5 continents",
      icon: Globe,
      color: "wisdom",
    },
  ];

  const programImpact = [
    {
      program: "Education & Scholarships",
      participants: 5420,
      completion: 96,
      employment: 89,
      highlights: [
        "Average 45% salary increase post-graduation",
        "85% pursue advanced degrees",
        "90% become community leaders",
      ],
      color: "empowerment",
    },
    {
      program: "Career Development",
      participants: 4230,
      completion: 94,
      employment: 92,
      highlights: [
        "70% receive promotions within 1 year",
        "Average 38% salary increase",
        "95% report improved confidence",
      ],
      color: "hope",
    },
    {
      program: "Health & Wellness",
      participants: 3890,
      completion: 97,
      employment: 85,
      highlights: [
        "60% improvement in health outcomes",
        "80% increase in health literacy",
        "200+ community health advocates trained",
      ],
      color: "growth",
    },
    {
      program: "Leadership Development",
      participants: 1707,
      completion: 92,
      employment: 96,
      highlights: [
        "250+ board appointments achieved",
        "150+ started their own organizations",
        "90% mentor other women",
      ],
      color: "strength",
    },
  ];

  const successStories = [
    {
      name: "Dr. Amara Okafor",
      program: "Education Scholarship",
      story:
        "From a refugee camp to earning a PhD in Public Health. Amara now runs health clinics in three countries, providing care to over 10,000 women and children annually.",
      achievement: "Founded non-profit serving 10K+ people",
      image: "ao",
      location: "Nigeria → Global",
    },
    {
      name: "Sofia Hernandez",
      program: "Entrepreneurship Bootcamp",
      story:
        "Started with a small loan and business training. Sofia's sustainable fashion company now employs 200+ women and has generated $5M in revenue while promoting ethical practices.",
      achievement: "Built $5M sustainable fashion company",
      image: "sh",
      location: "Guatemala",
    },
    {
      name: "Jennifer Chen",
      program: "Leadership Development",
      story:
        "From entry-level analyst to Fortune 500 CEO. Jennifer credits our leadership program for giving her the confidence and skills to break through corporate barriers.",
      achievement: "First Asian-American woman CEO in her industry",
      image: "jc",
      location: "United States",
    },
    {
      name: "Fatima Al-Rashid",
      program: "Digital Literacy Initiative",
      story:
        "Learned computer skills at age 45 and now runs an online tutoring platform that connects rural students with quality education, impacting 5,000+ students.",
      achievement: "Connected 5K+ students to education",
      image: "far",
      location: "Jordan",
    },
  ];

  const communityImpact = [
    {
      metric: "Jobs Created",
      value: "12,500+",
      description: "Direct and indirect employment opportunities",
    },
    {
      metric: "Businesses Started",
      value: "2,340",
      description: "Women-owned businesses launched",
    },
    {
      metric: "Families Lifted",
      value: "45,000+",
      description: "Families moved above poverty line",
    },
    {
      metric: "Communities Transformed",
      value: "350+",
      description: "Communities with active women leaders",
    },
  ];

  const impactAreas = [
    {
      area: "Economic Empowerment",
      impact: 85,
      description:
        "Women report significant increase in income and financial independence",
    },
    {
      area: "Education Access",
      impact: 92,
      description:
        "Increased access to quality education and skill development",
    },
    {
      area: "Health & Wellbeing",
      impact: 88,
      description: "Improved health outcomes and access to healthcare services",
    },
    {
      area: "Leadership & Voice",
      impact: 90,
      description:
        "Women taking leadership roles in their communities and workplaces",
    },
    {
      area: "Digital Inclusion",
      impact: 78,
      description: "Increased digital literacy and technology access",
    },
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
              Our Impact
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Measuring
              <span className="gradient-text"> Real Change</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Every statistic represents a life transformed, a dream realized,
              and a community strengthened. Discover the tangible impact of our
              work and the remarkable women who are changing the world.
            </p>
          </div>
        </div>
      </section>

      {/* Global Impact Stats */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Global Impact at a Glance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach to women's empowerment creates ripple
              effects that transform communities worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {globalStats.map((stat, index) => (
              <Card
                key={index}
                className={`card-hover border-0 shadow-lg bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100`}
              >
                <CardContent className="p-8 text-center">
                  <div className="space-y-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-600 rounded-full flex items-center justify-center mx-auto`}
                    >
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-2">
                      <div
                        className={`text-4xl font-bold text-${stat.color}-800`}
                      >
                        {stat.number}
                      </div>
                      <div
                        className={`text-lg font-semibold text-${stat.color}-700`}
                      >
                        {stat.label}
                      </div>
                      <p
                        className={`text-sm text-${stat.color}-600 leading-relaxed`}
                      >
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program-Specific Impact */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Program Impact Breakdown
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed outcomes and achievements across our core program areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programImpact.map((program, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">{program.program}</h3>
                      <Badge
                        variant="secondary"
                        className={`bg-${program.color}-100 text-${program.color}-800`}
                      >
                        {program.participants.toLocaleString()} participants
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Completion Rate</span>
                          <span className="font-semibold">
                            {program.completion}%
                          </span>
                        </div>
                        <Progress value={program.completion} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Employment Rate</span>
                          <span className="font-semibold">
                            {program.employment}%
                          </span>
                        </div>
                        <Progress value={program.employment} className="h-2" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {program.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start space-x-3 text-sm text-gray-600"
                          >
                            <CheckCircle className="w-4 h-4 mt-0.5 text-growth-500 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Transformational Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Behind every statistic is a powerful story of transformation,
              resilience, and success. Meet some of the remarkable women who are
              changing the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <Card
                key={index}
                className="card-hover border-0 shadow-lg bg-white overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-empowerment-400 to-hope-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-lg font-bold">
                          {story.image.toUpperCase()}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">{story.name}</h3>
                        <Badge
                          variant="secondary"
                          className="bg-empowerment-100 text-empowerment-800"
                        >
                          {story.program}
                        </Badge>
                        <p className="text-sm text-gray-600">
                          {story.location}
                        </p>
                      </div>
                    </div>

                    <blockquote className="text-gray-700 leading-relaxed italic">
                      "{story.story}"
                    </blockquote>

                    <div className="p-4 bg-gradient-to-r from-growth-50 to-hope-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Award className="w-5 h-5 text-growth-600" />
                        <span className="font-semibold text-growth-800">
                          Achievement:
                        </span>
                      </div>
                      <p className="mt-2 text-growth-700">
                        {story.achievement}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Community Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When women succeed, entire communities thrive. Our programs create
              positive ripple effects that extend far beyond individual
              participants.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {communityImpact.map((impact, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white text-center"
              >
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-empowerment-500 to-hope-500 rounded-full flex items-center justify-center mx-auto">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-gray-900">
                        {impact.value}
                      </div>
                      <div className="text-lg font-semibold text-empowerment-600">
                        {impact.metric}
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {impact.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas Progress */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Impact Across Key Areas
                </h2>
                <p className="text-xl text-gray-600">
                  We measure our success across multiple dimensions to ensure
                  comprehensive empowerment and sustainable change.
                </p>
              </div>

              <div className="space-y-6">
                {impactAreas.map((area, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-gray-900">
                        {area.area}
                      </h4>
                      <span className="text-empowerment-600 font-bold">
                        {area.impact}%
                      </span>
                    </div>
                    <Progress value={area.impact} className="h-3" />
                    <p className="text-sm text-gray-600">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-to-br from-empowerment-50 to-empowerment-100 border-empowerment-200">
                <div className="text-center space-y-3">
                  <TrendingUp className="w-8 h-8 text-empowerment-600 mx-auto" />
                  <div className="text-2xl font-bold text-empowerment-800">
                    400%
                  </div>
                  <div className="text-empowerment-700 font-medium text-sm">
                    Average Income Increase
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-hope-50 to-hope-100 border-hope-200">
                <div className="text-center space-y-3">
                  <Heart className="w-8 h-8 text-hope-600 mx-auto" />
                  <div className="text-2xl font-bold text-hope-800">95%</div>
                  <div className="text-hope-700 font-medium text-sm">
                    Report Improved Confidence
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-growth-50 to-growth-100 border-growth-200">
                <div className="text-center space-y-3">
                  <Users className="w-8 h-8 text-growth-600 mx-auto" />
                  <div className="text-2xl font-bold text-growth-800">80%</div>
                  <div className="text-growth-700 font-medium text-sm">
                    Become Community Leaders
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-wisdom-50 to-wisdom-100 border-wisdom-200">
                <div className="text-center space-y-3">
                  <Globe className="w-8 h-8 text-wisdom-600 mx-auto" />
                  <div className="text-2xl font-bold text-wisdom-800">50+</div>
                  <div className="text-wisdom-700 font-medium text-sm">
                    Countries Impacted
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-empowerment-600 to-hope-600 text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Be Part of Our Impact Story
            </h2>
            <p className="text-xl opacity-90">
              Your support helps us reach more women, expand our programs, and
              create lasting change in communities worldwide. Join us in
              building a better future for all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-empowerment-600 hover:bg-gray-100 text-lg px-8 py-4"
              >
                <Heart className="mr-2 h-5 w-5" />
                Support Our Mission
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-4"
              >
                Download Impact Report
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

export default Impact;
