import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  template: `
    <!-- Hero Section -->
    <section
      class="py-16 px-8 bg-gradient-to-br from-purple-50 via-white to-cyan-50"
    >
      <div class="max-w-6xl mx-auto">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in
            <span
              class="bg-gradient-to-r from-purple-600 via-cyan-500 to-green-500 bg-clip-text text-transparent"
              >Touch</span
            >
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Ready to join our mission? Have questions about our programs? We'd
            love to hear from you and explore how we can work together.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Information & Form -->
    <section class="py-16 px-8 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-8">
              Contact Information
            </h2>

            <div class="space-y-6">
              <div class="flex items-start">
                <div
                  class="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                >
                  <span class="text-white text-xl">📧</span>
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
                  class="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                >
                  <span class="text-white text-xl">📞</span>
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
                  class="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                >
                  <span class="text-white text-xl">📍</span>
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
            </div>

            <!-- Quick Actions -->
            <div class="mt-12">
              <h3 class="text-xl font-semibold text-gray-900 mb-6">
                Quick Actions
              </h3>
              <div class="space-y-4">
                <a
                  routerLink="/donate"
                  class="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg hover:from-purple-700 hover:to-cyan-600"
                >
                  ♥ Make a Donation
                </a>
                <a
                  routerLink="/programs"
                  class="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  👥 View Our Programs
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div>
            <div class="bg-white rounded-lg shadow-md p-8">
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
                        <span class="text-lg mb-1 block">👥</span>
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
                        <span class="text-lg mb-1 block">♥</span>
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
                        <span class="text-lg mb-1 block">🏢</span>
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
                        <span class="text-lg mb-1 block">📧</span>
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
                    placeholder="Tell us more about your inquiry..."
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  [disabled]="!isFormValid()"
                  class="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg hover:from-purple-700 hover:to-cyan-600 disabled:opacity-50"
                >
                  📤 Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 px-8 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked
            <span
              class="bg-gradient-to-r from-purple-600 via-cyan-500 to-green-500 bg-clip-text text-transparent"
              >Questions</span
            >
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Quick answers to common questions about our programs and how to get
            involved.
          </p>
        </div>

        <div class="max-w-3xl mx-auto space-y-6">
          <div
            class="bg-white rounded-lg shadow-md p-6"
            *ngFor="let faq of faqs"
          >
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
          class="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <span class="text-white text-2xl">📤</span>
        </div>
        <h3 class="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
        <p class="text-gray-600 mb-6">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <button
          (click)="showSuccess = false"
          class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg hover:from-purple-700 hover:to-cyan-600"
        >
          Continue
        </button>
      </div>
    </div>
  `,
})
export class ContactComponent {
  showSuccess = false;

  contactForm = {
    type: "",
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
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
      console.log("Submitting contact form:", this.contactForm);
      this.showSuccess = true;
      this.contactForm = {
        type: "",
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      };
    }
  }
}
