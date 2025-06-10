import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Heart,
  Target,
  Eye,
  Users,
  Award,
  Globe,
  BookOpen,
  Handshake,
  ArrowRight,
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Empowerment",
      description:
        "We believe in the inherent strength and potential of every woman, providing tools and support to unlock their capabilities.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Building strong networks and supportive communities where women can connect, collaborate, and grow together.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Striving for the highest standards in all our programs and services, ensuring maximum impact and lasting change.",
    },
    {
      icon: Globe,
      title: "Inclusivity",
      description:
        "Embracing diversity and ensuring our programs are accessible to women from all backgrounds and circumstances.",
    },
    {
      icon: BookOpen,
      title: "Education",
      description:
        "Providing access to quality education and continuous learning opportunities as the foundation for empowerment.",
    },
    {
      icon: Handshake,
      title: "Partnership",
      description:
        "Collaborating with organizations, communities, and individuals who share our vision for women's empowerment.",
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Williams",
      role: "Executive Director",
      bio: "30+ years in women's advocacy and international development. Former UN advisor on gender equality.",
      image: "sw",
    },
    {
      name: "Maria Rodriguez",
      role: "Program Director",
      bio: "Expert in education policy and community development with extensive field experience in Latin America.",
      image: "mr",
    },
    {
      name: "Jennifer Chen",
      role: "Director of Operations",
      bio: "Former corporate executive who transitioned to nonprofit leadership. Specializes in organizational efficiency.",
      image: "jc",
    },
    {
      name: "Dr. Amara Okafor",
      role: "Research & Impact Director",
      bio: "PhD in Social Psychology. Leads our impact measurement and program evaluation initiatives.",
      image: "ao",
    },
  ];

  const milestones = [
    {
      year: "2010",
      title: "Foundation Established",
      description: "Started with a vision to empower women through education",
    },
    {
      year: "2013",
      title: "First 1,000 Graduates",
      description: "Reached our first major milestone in program completion",
    },
    {
      year: "2016",
      title: "International Expansion",
      description: "Extended programs to 10 countries across three continents",
    },
    {
      year: "2019",
      title: "Digital Innovation",
      description: "Launched online learning platform and virtual mentorship",
    },
    {
      year: "2022",
      title: "15,000 Lives Transformed",
      description: "Celebrated reaching 15,000 program participants",
    },
    {
      year: "2024",
      title: "Next Generation Initiative",
      description: "Launched programs specifically for young women aged 16-25",
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
              Our Story
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Building a Future Where
              <span className="gradient-text"> Every Woman Thrives</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Since 2010, we've been dedicated to breaking down barriers and
              creating opportunities for women worldwide. Our comprehensive
              approach addresses education, economic empowerment, health, and
              leadership development.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Mission */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-empowerment-50 to-empowerment-100">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-empowerment-500 to-empowerment-600 rounded-xl flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-empowerment-800">
                      Our Mission
                    </h3>
                    <p className="text-empowerment-700 leading-relaxed">
                      To empower women and girls through education, leadership
                      development, and economic opportunities, enabling them to
                      achieve their full potential and create positive change in
                      their communities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-hope-50 to-hope-100">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-hope-500 to-hope-600 rounded-xl flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-hope-800">
                      Our Vision
                    </h3>
                    <p className="text-hope-700 leading-relaxed">
                      A world where every woman has equal access to
                      opportunities, resources, and support systems needed to
                      thrive personally and professionally, regardless of her
                      background or circumstances.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Impact */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-growth-50 to-growth-100">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-growth-500 to-growth-600 rounded-xl flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-growth-800">
                      Our Impact
                    </h3>
                    <p className="text-growth-700 leading-relaxed">
                      We measure our success through the transformation of
                      lives, the strength of communities, and the lasting change
                      created when women are empowered to lead and succeed.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we approach
              our mission of empowering women worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="card-hover border-0 shadow-lg bg-white"
              >
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-empowerment-500 to-hope-500 rounded-xl flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to global impact, discover the key
              milestones that have shaped our foundation's growth and success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <Card
                key={index}
                className="card-hover border-0 shadow-lg bg-white relative overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Badge
                        variant="secondary"
                        className="bg-empowerment-100 text-empowerment-800 text-lg px-4 py-2"
                      >
                        {milestone.year}
                      </Badge>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated leaders who guide our mission and ensure our
              programs create meaningful, lasting impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="card-hover border-0 shadow-lg bg-white"
              >
                <CardContent className="p-8">
                  <div className="space-y-6 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-empowerment-400 to-hope-400 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-white text-2xl font-bold">
                        {member.image.toUpperCase()}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-empowerment-600 font-semibold">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-empowerment-600 to-hope-600 text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Join Our Mission</h2>
            <p className="text-xl opacity-90">
              Together, we can create a world where every woman has the
              opportunity to reach her full potential. Your support makes a real
              difference in lives and communities worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/donate"
                className="inline-flex items-center justify-center bg-white text-empowerment-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Heart className="mr-2 h-5 w-5" />
                Support Our Cause
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105"
              >
                Get Involved
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
