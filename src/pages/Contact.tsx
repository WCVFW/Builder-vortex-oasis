import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Heart,
  Users,
  Briefcase,
  BookOpen,
  MessageSquare,
  Globe,
  Calendar,
  ArrowRight,
} from "lucide-react";

const Contact = () => {
  const [inquiryType, setInquiryType] = useState("general");

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@womensfoundation.org",
      description: "We respond within 24 hours",
      color: "empowerment",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "(555) 123-4567",
      description: "Monday - Friday, 9 AM - 6 PM EST",
      color: "hope",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Foundation Drive, Empowerment City, EC 12345",
      description: "By appointment only",
      color: "growth",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Monday - Friday: 9 AM - 6 PM EST",
      description: "Closed weekends and holidays",
      color: "wisdom",
    },
  ];

  const inquiryTypes = [
    {
      id: "general",
      name: "General Information",
      description: "Questions about our mission and programs",
      icon: MessageSquare,
    },
    {
      id: "programs",
      name: "Program Application",
      description: "Interested in applying for our programs",
      icon: BookOpen,
    },
    {
      id: "partnership",
      name: "Partnership Inquiry",
      description: "Corporate or organizational partnerships",
      icon: Briefcase,
    },
    {
      id: "volunteer",
      name: "Volunteer Opportunities",
      description: "Want to volunteer your time and skills",
      icon: Users,
    },
    {
      id: "donation",
      name: "Donation Support",
      description: "Questions about making a donation",
      icon: Heart,
    },
    {
      id: "media",
      name: "Media & Press",
      description: "Press inquiries and media requests",
      icon: Globe,
    },
  ];

  const offices = [
    {
      city: "New York",
      address: "123 Foundation Drive, New York, NY 10001",
      phone: "(555) 123-4567",
      email: "newyork@womensfoundation.org",
      programs: ["Education", "Leadership", "Career Development"],
    },
    {
      city: "San Francisco",
      address: "456 Empowerment Ave, San Francisco, CA 94102",
      phone: "(555) 234-5678",
      email: "sanfrancisco@womensfoundation.org",
      programs: ["Tech Skills", "Entrepreneurship", "Health & Wellness"],
    },
    {
      city: "Chicago",
      address: "789 Progress Street, Chicago, IL 60601",
      phone: "(555) 345-6789",
      email: "chicago@womensfoundation.org",
      programs: ["Community Development", "Education", "Leadership"],
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Williams",
      role: "Executive Director",
      email: "sarah.williams@womensfoundation.org",
      phone: "(555) 123-4567 ext. 101",
      specialties: [
        "Strategic Planning",
        "Program Development",
        "International Relations",
      ],
    },
    {
      name: "Maria Rodriguez",
      role: "Program Director",
      email: "maria.rodriguez@womensfoundation.org",
      phone: "(555) 123-4567 ext. 102",
      specialties: [
        "Education Programs",
        "Community Outreach",
        "Latin America Operations",
      ],
    },
    {
      name: "Jennifer Chen",
      role: "Director of Operations",
      email: "jennifer.chen@womensfoundation.org",
      phone: "(555) 123-4567 ext. 103",
      specialties: [
        "Operations Management",
        "Technology",
        "Process Improvement",
      ],
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
              Get in Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              We'd Love to
              <span className="gradient-text"> Hear From You</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Have questions about our programs? Interested in partnering with
              us? Want to get involved? We're here to help and would love to
              connect with you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg bg-gradient-to-br from-${info.color}-50 to-${info.color}-100 text-center`}
              >
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r from-${info.color}-500 to-${info.color}-600 rounded-full flex items-center justify-center mx-auto`}
                    >
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3
                        className={`text-lg font-bold text-${info.color}-800`}
                      >
                        {info.title}
                      </h3>
                      <div className={`font-semibold text-${info.color}-700`}>
                        {info.details}
                      </div>
                      <p className={`text-sm text-${info.color}-600`}>
                        {info.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Information */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Send className="mr-3 h-6 w-6 text-empowerment-600" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Inquiry Type */}
                <div className="space-y-4">
                  <Label className="text-base font-semibold">
                    What can we help you with?
                  </Label>
                  <RadioGroup
                    value={inquiryType}
                    onValueChange={setInquiryType}
                    className="space-y-3"
                  >
                    {inquiryTypes.map((type) => (
                      <div
                        key={type.id}
                        className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50"
                      >
                        <RadioGroupItem
                          value={type.id}
                          id={type.id}
                          className="mt-1"
                        />
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center space-x-2">
                            <type.icon className="w-4 h-4 text-empowerment-600" />
                            <Label
                              htmlFor={type.id}
                              className="cursor-pointer font-semibold"
                            >
                              {type.name}
                            </Label>
                          </div>
                          <p className="text-sm text-gray-600">
                            {type.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name *</Label>
                    <Input id="first-name" placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name *</Label>
                    <Input id="last-name" placeholder="Your last name" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization">Organization (Optional)</Label>
                  <Input
                    id="organization"
                    placeholder="Your company or organization"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Please provide details about your inquiry..."
                    rows={5}
                  />
                </div>

                <Button size="lg" className="w-full btn-primary">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>

                <p className="text-sm text-gray-600">
                  * Required fields. We'll respond within 24 hours during
                  business days.
                </p>
              </CardContent>
            </Card>

            {/* Quick Actions & Information */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    variant="outline"
                    className="w-full justify-start h-auto p-4"
                  >
                    <Calendar className="mr-3 h-5 w-5 text-empowerment-600" />
                    <div className="text-left">
                      <div className="font-semibold">Schedule a Meeting</div>
                      <div className="text-sm text-gray-600">
                        Book time with our team
                      </div>
                    </div>
                    <ArrowRight className="ml-auto h-4 w-4" />
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start h-auto p-4"
                  >
                    <BookOpen className="mr-3 h-5 w-5 text-hope-600" />
                    <div className="text-left">
                      <div className="font-semibold">Apply for Programs</div>
                      <div className="text-sm text-gray-600">
                        Start your application
                      </div>
                    </div>
                    <ArrowRight className="ml-auto h-4 w-4" />
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start h-auto p-4"
                  >
                    <Heart className="mr-3 h-5 w-5 text-growth-600" />
                    <div className="text-left">
                      <div className="font-semibold">Make a Donation</div>
                      <div className="text-sm text-gray-600">
                        Support our mission
                      </div>
                    </div>
                    <ArrowRight className="ml-auto h-4 w-4" />
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start h-auto p-4"
                  >
                    <Users className="mr-3 h-5 w-5 text-wisdom-600" />
                    <div className="text-left">
                      <div className="font-semibold">Volunteer With Us</div>
                      <div className="text-sm text-gray-600">
                        Join our community
                      </div>
                    </div>
                    <ArrowRight className="ml-auto h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    Frequently Asked
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <h4 className="font-semibold text-sm">
                        How do I apply for programs?
                      </h4>
                      <p className="text-sm text-gray-600">
                        Visit our Programs page and click "Apply Now" for the
                        program you're interested in.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-sm">
                        Are your programs free?
                      </h4>
                      <p className="text-sm text-gray-600">
                        Yes, all our programs are provided at no cost to
                        participants thanks to our donors and partners.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-sm">
                        Do you accept international applications?
                      </h4>
                      <p className="text-sm text-gray-600">
                        Yes, we operate in 50+ countries and accept applications
                        globally for most programs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Offices */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Offices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have offices in major cities around the world to better serve
              our communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-empowerment-800">
                        {office.city}
                      </h3>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-start space-x-2">
                          <MapPin className="w-4 h-4 mt-0.5 text-empowerment-600" />
                          <span>{office.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-hope-600" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-growth-600" />
                          <span>{office.email}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">
                        Programs Offered:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {office.programs.map((program, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-empowerment-100 text-empowerment-800 text-xs"
                          >
                            {program}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Team Members */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Connect with Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have specific questions? Reach out directly to our leadership team
              members.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-empowerment-400 to-hope-400 rounded-full flex items-center justify-center mx-auto">
                        <span className="text-white text-xl font-bold">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <p className="text-empowerment-600 font-semibold">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-empowerment-600" />
                        <span className="text-gray-600">{member.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-hope-600" />
                        <span className="text-gray-600">{member.phone}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 text-sm">
                        Specialties:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.map((specialty, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-hope-100 text-hope-800 text-xs"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>
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
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl opacity-90">
              Whether you're looking to join our programs, partner with us, or
              support our mission, we're here to help you take the next step.
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
                Schedule a Call
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

export default Contact;
