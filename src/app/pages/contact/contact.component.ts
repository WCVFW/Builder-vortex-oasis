import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { FormsModule } from "@angular/forms";
import {
  LucideAngularModule,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Heart,
  Users,
  Building,
} from "lucide-angular";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  template: `
    <!-- Hero Section -->
    <section
      class="section-padding bg-gradient-to-br from-purple-50 via-white to-cyan-50"
    >
      <div class="container-max">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in <span class="gradient-text">Touch</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Ready to join our mission? Have questions about our programs? We'd
            love to hear from you and explore how we can work together.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Information & Form -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div class="animate-fade-in-up">
            <h2 class="text-3xl font-bold text-gray-900 mb-8">
              Contact Information
            </h2>

            <div class="space-y-6">
              <div class="flex items-start">
                <div
                  class="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                >
                  <lucide-icon
                    name="mail"
                    class="w-6 h-6 text-white"
                  ></lucide-icon>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-1">
                    Email Us
                  </h3>
                  <p class="text-gray-600">info&#64;womensfoundation.org</p>
                  <p class="text-sm text-gray-500">
                    We respond within 24 hours
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div
                  class="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                >
                  <lucide-icon
                    name="phone"
                    class="w-6 h-6 text-white"
                  ></lucide-icon>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-1">
                    Call Us
                  </h3>
                  <p class="text-gray-600">+1 (555) 123-4567</p>
                  <p class="text-sm text-gray-500">
                    Monday - Friday, 9AM - 6PM EST
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div
                  class="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                >
                  <lucide-icon
                    name="map-pin"
                    class="w-6 h-6 text-white"
                  ></lucide-icon>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-1">
                    Visit Us
                  </h3>
                  <p class="text-gray-600">
                    123 Foundation Street<br />Hope City, HC 12345<br />United
                    States
                  </p>
                  <p class="text-sm text-gray-500">By appointment only</p>
                </div>
              </div>

              <div class="flex items-start">
                <div
                  class="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                >
                  <lucide-icon
                    name="clock"
                    class="w-6 h-6 text-white"
                  ></lucide-icon>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-1">
                    Office Hours
                  </h3>
                  <p class="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM -
                    2:00 PM<br />Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <!-- Quick Actions -->
            <div class="mt-12">
              <h3 class="text-xl font-semibold text-gray-900 mb-6">
                Quick Actions
              </h3>
              <div class="space-y-4">
                <a
                  routerLink="/donate"
                  class="btn-primary btn-primary-gradient w-full"
                >
                  <lucide-icon name="heart" class="w-5 h-5 mr-2"></lucide-icon>
                  Make a Donation
                </a>
                <a routerLink="/programs" class="btn-secondary w-full">
                  <lucide-icon name="users" class="w-5 h-5 mr-2"></lucide-icon>
                  View Our Programs
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="animate-fade-in-up">
            <div class="card p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>

              <form (ngSubmit)="handleSubmit()" class="space-y-6">
                <!-- Contact Type -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-3"
                    >I'm interested in:</label
                  >
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <label class="relative">
                      <input
                        type="radio"
                        name="contactType"
                        value="programs"
                        [(ngModel)]="contactForm.type"
                        class="sr-only"
                      />
                      <div
                        [class]="
                          contactForm.type === 'programs'
                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                            : 'border-gray-300 text-gray-700'
                        "
                        class="border-2 rounded-lg p-3 text-center cursor-pointer transition-all"
                      >
                        <lucide-icon
                          name="users"
                          class="w-5 h-5 mx-auto mb-1"
                        ></lucide-icon>
                        <span class="text-sm font-medium"
                          >Joining Programs</span
                        >
                      </div>
                    </label>
                    <label class="relative">
                      <input
                        type="radio"
                        name="contactType"
                        value="volunteer"
                        [(ngModel)]="contactForm.type"
                        class="sr-only"
                      />
                      <div
                        [class]="
                          contactForm.type === 'volunteer'
                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                            : 'border-gray-300 text-gray-700'
                        "
                        class="border-2 rounded-lg p-3 text-center cursor-pointer transition-all"
                      >
                        <lucide-icon
                          name="heart"
                          class="w-5 h-5 mx-auto mb-1"
                        ></lucide-icon>
                        <span class="text-sm font-medium">Volunteering</span>
                      </div>
                    </label>
                    <label class="relative">
                      <input
                        type="radio"
                        name="contactType"
                        value="partnership"
                        [(ngModel)]="contactForm.type"
                        class="sr-only"
                      />
                      <div
                        [class]="
                          contactForm.type === 'partnership'
                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                            : 'border-gray-300 text-gray-700'
                        "
                        class="border-2 rounded-lg p-3 text-center cursor-pointer transition-all"
                      >
                        <lucide-icon
                          name="building"
                          class="w-5 h-5 mx-auto mb-1"
                        ></lucide-icon>
                        <span class="text-sm font-medium">Partnership</span>
                      </div>
                    </label>
                    <label class="relative">
                      <input
                        type="radio"
                        name="contactType"
                        value="other"
                        [(ngModel)]="contactForm.type"
                        class="sr-only"
                      />
                      <div
                        [class]="
                          contactForm.type === 'other'
                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                            : 'border-gray-300 text-gray-700'
                        "
                        class="border-2 rounded-lg p-3 text-center cursor-pointer transition-all"
                      >
                        <lucide-icon
                          name="mail"
                          class="w-5 h-5 mx-auto mb-1"
                        ></lucide-icon>
                        <span class="text-sm font-medium">Other</span>
                      </div>
                    </label>
                  </div>
                </div>

                <!-- Personal Information -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      for="firstName"
                      class="block text-sm font-medium text-gray-700 mb-1"
                      >First Name *</label
                    >
                    <input
                      type="text"
                      id="firstName"
                      [(ngModel)]="contactForm.firstName"
                      name="firstName"
                      required
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label
                      for="lastName"
                      class="block text-sm font-medium text-gray-700 mb-1"
                      >Last Name *</label
                    >
                    <input
                      type="text"
                      id="lastName"
                      [(ngModel)]="contactForm.lastName"
                      name="lastName"
                      required
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700 mb-1"
                    >Email Address *</label
                  >
                  <input
                    type="email"
                    id="email"
                    [(ngModel)]="contactForm.email"
                    name="email"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                <div>
                  <label
                    for="phone"
                    class="block text-sm font-medium text-gray-700 mb-1"
                    >Phone Number</label
                  >
                  <input
                    type="tel"
                    id="phone"
                    [(ngModel)]="contactForm.phone"
                    name="phone"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                <div>
                  <label
                    for="organization"
                    class="block text-sm font-medium text-gray-700 mb-1"
                    >Organization (if applicable)</label
                  >
                  <input
                    type="text"
                    id="organization"
                    [(ngModel)]="contactForm.organization"
                    name="organization"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                <div>
                  <label
                    for="subject"
                    class="block text-sm font-medium text-gray-700 mb-1"
                    >Subject *</label
                  >
                  <input
                    type="text"
                    id="subject"
                    [(ngModel)]="contactForm.subject"
                    name="subject"
                    required
                    placeholder="Brief description of your inquiry"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                <div>
                  <label
                    for="message"
                    class="block text-sm font-medium text-gray-700 mb-1"
                    >Message *</label
                  >
                  <textarea
                    id="message"
                    [(ngModel)]="contactForm.message"
                    name="message"
                    required
                    rows="5"
                    placeholder="Tell us more about your inquiry, background, or how you'd like to get involved..."
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  ></textarea>
                </div>

                <div class="flex items-start">
                  <input
                    type="checkbox"
                    id="newsletter"
                    [(ngModel)]="contactForm.newsletter"
                    name="newsletter"
                    class="mt-1 mr-3"
                  />
                  <label for="newsletter" class="text-sm text-gray-600">
                    I'd like to receive updates about Women's Foundation
                    programs and impact stories
                  </label>
                </div>

                <button
                  type="submit"
                  [disabled]="!isFormValid()"
                  class="w-full btn-primary btn-primary-gradient"
                >
                  <lucide-icon name="send" class="w-5 h-5 mr-2"></lucide-icon>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span class="gradient-text">Questions</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Quick answers to common questions about our programs and how to get
            involved.
          </p>
        </div>

        <div class="max-w-3xl mx-auto space-y-6">
          <div class="card p-6" *ngFor="let faq of faqs">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">
              {{ faq.question }}
            </h3>
            <p class="text-gray-600">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Message -->
    <div
      *ngIf="showSuccess"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <div class="bg-white rounded-lg p-8 max-w-md w-full text-center">
        <div
          class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <lucide-icon name="send" class="w-8 h-8 text-white"></lucide-icon>
        </div>
        <h3 class="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
        <p class="text-gray-600 mb-6">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <button
          (click)="showSuccess = false"
          class="btn-primary btn-primary-gradient"
        >
          Continue
        </button>
      </div>
    </div>
  `,
})
export class ContactComponent {
  readonly Mail = Mail;
  readonly Phone = Phone;
  readonly MapPin = MapPin;
  readonly Clock = Clock;
  readonly Send = Send;
  readonly Heart = Heart;
  readonly Users = Users;
  readonly Building = Building;

  showSuccess = false;

  contactForm = {
    type: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    subject: "",
    message: "",
    newsletter: false,
  };

  faqs = [
    {
      question: "How can I apply for your programs?",
      answer:
        "Applications for our programs open at different times throughout the year. Fill out the contact form above with your interest, and we'll send you information about upcoming application periods and requirements.",
    },
    {
      question: "Do you offer programs in my country?",
      answer:
        "We currently operate in 25 countries across Africa, Asia, Latin America, Middle East, and Europe. Contact us to see if we have programs in your area or if we're planning to expand there.",
    },
    {
      question: "Can I volunteer remotely?",
      answer:
        "Yes! We offer many remote volunteering opportunities including online mentoring, curriculum development, social media support, and virtual event assistance. Let us know your skills and availability.",
    },
    {
      question: "How can my company partner with you?",
      answer:
        "We welcome corporate partnerships through sponsorships, employee volunteer programs, skills-based volunteering, and CSR initiatives. Contact us to discuss how we can create a meaningful partnership.",
    },
    {
      question: "Are donations tax-deductible?",
      answer:
        "Yes, we are a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the full extent allowed by law. You'll receive a receipt for your records.",
    },
  ];

  isFormValid(): boolean {
    return !!(
      this.contactForm.type &&
      this.contactForm.firstName &&
      this.contactForm.lastName &&
      this.contactForm.email &&
      this.contactForm.subject &&
      this.contactForm.message
    );
  }

  handleSubmit() {
    if (this.isFormValid()) {
      // In a real application, this would send the form data to a server
      console.log("Submitting contact form:", this.contactForm);

      this.showSuccess = true;

      // Reset form
      this.contactForm = {
        type: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        organization: "",
        subject: "",
        message: "",
        newsletter: false,
      };
    }
  }
}
