import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Heart,
  CreditCard,
  Shield,
  Users,
  BookOpen,
  Briefcase,
  Award,
  Gift,
  Star,
  CheckCircle,
  ArrowRight,
  Lock,
} from "lucide-react";

const Donate = () => {
  const [donationType, setDonationType] = useState("one-time");
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("where-needed");

  const donationAmounts = [
    {
      value: "25",
      label: "$25",
      impact: "Provides school supplies for 1 student",
    },
    { value: "50", label: "$50", impact: "Funds 1 week of skills training" },
    {
      value: "100",
      label: "$100",
      impact: "Supports 1 woman's health program",
    },
    {
      value: "250",
      label: "$250",
      impact: "Covers 1 month of leadership training",
    },
    {
      value: "500",
      label: "$500",
      impact: "Funds a complete scholarship application",
    },
    {
      value: "1000",
      label: "$1000",
      impact: "Supports 1 woman's full program journey",
    },
  ];

  const programs = [
    {
      id: "where-needed",
      name: "Where Most Needed",
      description:
        "Allow us to direct your donation to programs with the greatest need",
      icon: Heart,
      color: "empowerment",
    },
    {
      id: "education",
      name: "Education & Scholarships",
      description:
        "Support women pursuing higher education and skill development",
      icon: BookOpen,
      color: "hope",
    },
    {
      id: "career",
      name: "Career Development",
      description: "Help women advance their careers and start businesses",
      icon: Briefcase,
      color: "growth",
    },
    {
      id: "health",
      name: "Health & Wellness",
      description: "Provide healthcare access and wellness education",
      icon: Shield,
      color: "wisdom",
    },
    {
      id: "leadership",
      name: "Leadership Training",
      description: "Develop the next generation of women leaders",
      icon: Award,
      color: "strength",
    },
  ];

  const impactExamples = [
    {
      amount: "$25",
      impact: "School supplies for one student for a semester",
      icon: BookOpen,
    },
    {
      amount: "$50",
      impact: "One week of professional skills training",
      icon: Briefcase,
    },
    {
      amount: "$100",
      impact: "Healthcare support for one woman for a month",
      icon: Shield,
    },
    {
      amount: "$250",
      impact: "Leadership workshop for 10 women",
      icon: Award,
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Monthly Donor",
      quote:
        "Knowing my $50/month helps women access education gives my contribution real meaning.",
      amount: "$50/month",
    },
    {
      name: "James K.",
      role: "Corporate Sponsor",
      quote:
        "Our company partnership has helped launch 50+ women-owned businesses.",
      amount: "$10,000/year",
    },
    {
      name: "Maria R.",
      role: "Individual Donor",
      quote:
        "I started small but seeing the impact made me want to give more each year.",
      amount: "$100/quarter",
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
              Make a Difference Today
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Your Donation
              <span className="gradient-text"> Changes Lives</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Every contribution, no matter the size, directly impacts a woman's
              journey to empowerment. Join thousands of supporters who are
              creating lasting change worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Main Donation Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Donation Form */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center">
                    <Heart className="mr-3 h-6 w-6 text-empowerment-600" />
                    Make Your Donation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Donation Type */}
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">
                      Donation Type
                    </Label>
                    <RadioGroup
                      value={donationType}
                      onValueChange={setDonationType}
                      className="grid grid-cols-2 gap-4"
                    >
                      <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                        <RadioGroupItem value="one-time" id="one-time" />
                        <Label htmlFor="one-time" className="cursor-pointer">
                          One-time Donation
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                        <RadioGroupItem value="monthly" id="monthly" />
                        <Label htmlFor="monthly" className="cursor-pointer">
                          Monthly Giving
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Amount Selection */}
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">
                      Select Amount
                    </Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {donationAmounts.map((donationAmount) => (
                        <div
                          key={donationAmount.value}
                          className={`p-4 border rounded-lg cursor-pointer transition-all hover:border-empowerment-300 ${
                            amount === donationAmount.value
                              ? "border-empowerment-500 bg-empowerment-50"
                              : "border-gray-200"
                          }`}
                          onClick={() => {
                            setAmount(donationAmount.value);
                            setCustomAmount("");
                          }}
                        >
                          <div className="text-center space-y-2">
                            <div className="text-lg font-bold">
                              {donationAmount.label}
                            </div>
                            <div className="text-xs text-gray-600">
                              {donationAmount.impact}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Custom Amount */}
                    <div className="space-y-2">
                      <Label htmlFor="custom-amount">Other Amount</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                          $
                        </span>
                        <Input
                          id="custom-amount"
                          type="number"
                          placeholder="Enter custom amount"
                          className="pl-8"
                          value={customAmount}
                          onChange={(e) => {
                            setCustomAmount(e.target.value);
                            setAmount("");
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Program Selection */}
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">
                      Support a Specific Program
                    </Label>
                    <RadioGroup
                      value={selectedProgram}
                      onValueChange={setSelectedProgram}
                      className="space-y-3"
                    >
                      {programs.map((program) => (
                        <div
                          key={program.id}
                          className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50"
                        >
                          <RadioGroupItem
                            value={program.id}
                            id={program.id}
                            className="mt-1"
                          />
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center space-x-2">
                              <program.icon
                                className={`w-5 h-5 text-${program.color}-600`}
                              />
                              <Label
                                htmlFor={program.id}
                                className="cursor-pointer font-semibold"
                              >
                                {program.name}
                              </Label>
                            </div>
                            <p className="text-sm text-gray-600">
                              {program.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <Separator />

                  {/* Donor Information */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold">Donor Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="First name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Last name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Information */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold flex items-center">
                      <CreditCard className="mr-2 h-5 w-5" />
                      Payment Information
                    </h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input
                          id="card-number"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2 col-span-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Optional Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Share why you're supporting our mission..."
                      rows={3}
                    />
                  </div>

                  {/* Terms and Privacy */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox id="newsletter" />
                      <Label htmlFor="newsletter" className="text-sm">
                        I would like to receive updates about the impact of my
                        donation
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the Terms of Service and Privacy Policy
                      </Label>
                    </div>
                  </div>

                  {/* Security Notice */}
                  <div className="p-4 bg-gray-50 rounded-lg flex items-center space-x-3">
                    <Lock className="w-5 h-5 text-green-600" />
                    <div className="text-sm text-gray-700">
                      Your payment information is encrypted and secure. We never
                      store credit card details.
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button size="lg" className="w-full btn-primary text-lg py-4">
                    <Heart className="mr-2 h-5 w-5" />
                    Complete Donation
                    {(amount || customAmount) && (
                      <span className="ml-2">
                        - ${amount || customAmount}
                        {donationType === "monthly" ? "/month" : ""}
                      </span>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Donation Impact */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    Your Impact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {impactExamples.map((example, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-empowerment-500 to-hope-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <example.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="space-y-1">
                        <div className="font-semibold text-empowerment-600">
                          {example.amount}
                        </div>
                        <div className="text-sm text-gray-600">
                          {example.impact}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Other Ways to Give */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    Other Ways to Give
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Gift className="w-5 h-5 text-empowerment-600" />
                      <span className="text-sm">Corporate Partnerships</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-hope-600" />
                      <span className="text-sm">Volunteer Your Time</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-growth-600" />
                      <span className="text-sm">Legacy Giving</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 text-strength-600" />
                      <span className="text-sm">Fundraise for Us</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Donor Recognition */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-empowerment-50 to-hope-50">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-empowerment-500 to-hope-500 rounded-full flex items-center justify-center mx-auto">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-empowerment-800">
                      Donor Recognition
                    </h3>
                    <p className="text-sm text-empowerment-700">
                      Major donors are recognized in our annual report and on
                      our website (with permission).
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Donor Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              What Our Donors Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a community of supporters who are passionate about women's
              empowerment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-current text-wisdom-500"
                        />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="space-y-2">
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-empowerment-600 font-medium">
                        {testimonial.role}
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-empowerment-100 text-empowerment-800"
                      >
                        {testimonial.amount}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Information */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">
                      Tax-Deductible Donations
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Women's Foundation is a registered 501(c)(3) nonprofit
                      organization. Your donation is tax-deductible to the full
                      extent allowed by law.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm">Tax ID: 12-3456789</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm">
                          Receipt provided for all donations
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm">
                          GuideStar Gold Seal of Transparency
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-empowerment-500 to-hope-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-empowerment-600 mb-2">
                      93%
                    </div>
                    <div className="text-gray-600">
                      of donations go directly to programs
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
