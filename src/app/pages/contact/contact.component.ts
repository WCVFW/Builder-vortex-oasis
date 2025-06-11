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
      class="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 via-white to-rose-50"
    >
      <div class="max-w-4xl mx-auto text-center">
        <h1
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8"
        >
          Get in
          <span
            class="bg-gradient-to-r from-pink-500 via-pink-400 to-rose-400 bg-clip-text text-transparent"
            >Touch</span
          >
        </h1>
        <p
          class="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed"
        >
          Ready to join our mission? Have questions about our programs? We'd
          love to hear from you and explore how we can work together.
        </p>
      </div>
    </section>

    <!-- Contact Information & Form -->
    <section class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          <!-- Contact Information -->
          <div class="order-2 lg:order-1">
            <h2
              class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10"
            >
              Contact Information
            </h2>

            <div class="space-y-6 sm:space-y-8">
              <div class="flex items-start group">
                <div
                  class="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-pink-500 to-pink-400 rounded-xl flex items-center justify-center mr-3 sm:mr-4 lg:mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-pink-200"
                >
                  <span class="text-white text-lg sm:text-xl lg:text-2xl"
                    >📧</span
                  >
                </div>
                <div>
                  <h3
                    class="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-1 sm:mb-2"
                  >
                    Email Us
                  </h3>
                  <p class="text-sm sm:text-base lg:text-lg text-gray-600 mb-1">
                    info&#64;womensfoundation.org
                  </p>
                  <p class="text-xs sm:text-sm lg:text-base text-gray-500">
                    We respond within 24 hours
                  </p>
                </div>
              </div>

              <div class="flex items-start group">
                <div
                  class="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-pink-500 to-pink-400 rounded-xl flex items-center justify-center mr-3 sm:mr-4 lg:mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-pink-200"
                >
                  <span class="text-white text-lg sm:text-xl lg:text-2xl"
                    >📞</span
                  >
                </div>
                <div>
                  <h3
                    class="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-1 sm:mb-2"
                  >
                    Call Us
                  </h3>
                  <p class="text-sm sm:text-base lg:text-lg text-gray-600 mb-1">
                    +1 (555) 123-4567
                  </p>
                  <p class="text-xs sm:text-sm lg:text-base text-gray-500">
                    Monday - Friday, 9AM - 6PM EST
                  </p>
                </div>
              </div>

              <div class="flex items-start group">
                <div
                  class="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-pink-500 to-pink-400 rounded-xl flex items-center justify-center mr-3 sm:mr-4 lg:mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-pink-200"
                >
                  <span class="text-white text-lg sm:text-xl lg:text-2xl"
                    >📍</span
                  >
                </div>
                <div>
                  <h3
                    class="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-1 sm:mb-2"
                  >
                    Visit Us
                  </h3>
                  <p
                    class="text-sm sm:text-base lg:text-lg text-gray-600 mb-1 leading-relaxed"
                  >
                    123 Foundation Street<br />Hope City, HC 12345<br />United
                    States
                  </p>
                  <p class="text-xs sm:text-sm lg:text-base text-gray-500">
                    By appointment only
                  </p>
                </div>
              </div>

              <div class="flex items-start group">
                <div
                  class="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-pink-500 to-pink-400 rounded-xl flex items-center justify-center mr-3 sm:mr-4 lg:mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-pink-200"
                >
                  <span class="text-white text-lg sm:text-xl lg:text-2xl"
                    >🕒</span
                  >
                </div>
                <div>
                  <h3
                    class="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-1 sm:mb-2"
                  >
                    Office Hours
                  </h3>
                  <p
                    class="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed"
                  >
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <!-- Quick Actions -->
            <div class="mt-8 sm:mt-10 lg:mt-12">
              <h3
                class="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6"
              >
                Quick Actions
              </h3>
              <div class="space-y-3 sm:space-y-4">
                <a
                  routerLink="/donate"
                  class="flex items-center justify-center w-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-pink-400 rounded-lg hover:from-pink-600 hover:to-pink-500 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <span
                    class="mr-2"
                    style="color: white !important; filter: brightness(1.5);"
                    >💖</span
                  >
                  Make a Donation
                </a>
                <a
                  routerLink="/programs"
                  class="flex items-center justify-center w-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold text-gray-700 bg-white border-2 border-pink-300 rounded-lg hover:bg-pink-50 hover:border-pink-400 transition-all duration-200"
                >
                  <span class="mr-2">👥</span>
                  View Our Programs
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="order-1 lg:order-2">
            <div
              class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 border border-pink-100"
            >
              <h2
                class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8"
              >
                Send us a Message
              </h2>

              <form (ngSubmit)="handleSubmit()" class="space-y-4 sm:space-y-6">
                <!-- Contact Type -->
                <div>
                  <label
                    class="block text-sm sm:text-base font-medium text-gray-700 mb-3 sm:mb-4"
                    >I'm interested in:</label
                  >
                  <div class="grid grid-cols-2 gap-2 sm:gap-3">
                    <label class="relative cursor-pointer">
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
                            ? 'border-pink-500 bg-pink-50 text-pink-700'
                            : 'border-gray-300 text-gray-700 hover:border-pink-300'
                        "
                        class="border-2 rounded-lg p-3 sm:p-4 text-center transition-all duration-200"
                      >
                        <span class="text-lg sm:text-xl mb-1 sm:mb-2 block"
                          >👥</span
                        >
                        <span class="text-xs sm:text-sm font-medium"
                          >Joining Programs</span
                        >
                      </div>
                    </label>
                    <label class="relative cursor-pointer">
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
                            ? 'border-pink-500 bg-pink-50 text-pink-700'
                            : 'border-gray-300 text-gray-700 hover:border-pink-300'
                        "
                        class="border-2 rounded-lg p-3 sm:p-4 text-center transition-all duration-200"
                      >
                        <span class="text-lg sm:text-xl mb-1 sm:mb-2 block"
                          >💖</span
                        >
                        <span class="text-xs sm:text-sm font-medium"
                          >Volunteering</span
                        >
                      </div>
                    </label>
                    <label class="relative cursor-pointer">
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
                            ? 'border-pink-500 bg-pink-50 text-pink-700'
                            : 'border-gray-300 text-gray-700 hover:border-pink-300'
                        "
                        class="border-2 rounded-lg p-3 sm:p-4 text-center transition-all duration-200"
                      >
                        <span class="text-lg sm:text-xl mb-1 sm:mb-2 block"
                          >🏢</span
                        >
                        <span class="text-xs sm:text-sm font-medium"
                          >Partnership</span
                        >
                      </div>
                    </label>
                    <label class="relative cursor-pointer">
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
                            ? 'border-pink-500 bg-pink-50 text-pink-700'
                            : 'border-gray-300 text-gray-700 hover:border-pink-300'
                        "
                        class="border-2 rounded-lg p-3 sm:p-4 text-center transition-all duration-200"
                      >
                        <span class="text-lg sm:text-xl mb-1 sm:mb-2 block"
                          >📧</span
                        >
                        <span class="text-xs sm:text-sm font-medium"
                          >Other</span
                        >
                      </div>
                    </label>
                  </div>
                </div>

                <!-- Personal Information -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label
                      for="firstName"
                      class="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2"
                      >First Name *</label
                    >
                    <input
                      type="text"
                      id="firstName"
                      [(ngModel)]="contactForm.firstName"
                      name="firstName"
                      required
                      class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label
                      for="lastName"
                      class="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2"
                      >Last Name *</label
                    >
                    <input
                      type="text"
                      id="lastName"
                      [(ngModel)]="contactForm.lastName"
                      name="lastName"
                      required
                      class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="email"
                    class="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2"
                    >Email Address *</label
                  >
                  <input
                    type="email"
                    id="email"
                    [(ngModel)]="contactForm.email"
                    name="email"
                    required
                    class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200"
                  />
                </div>

                <div>
                  <label
                    for="subject"
                    class="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2"
                    >Subject *</label
                  >
                  <input
                    type="text"
                    id="subject"
                    [(ngModel)]="contactForm.subject"
                    name="subject"
                    required
                    placeholder="Brief description of your inquiry"
                    class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200"
                  />
                </div>

                <div>
                  <label
                    for="message"
                    class="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2"
                    >Message *</label
                  >
                  <textarea
                    id="message"
                    [(ngModel)]="contactForm.message"
                    name="message"
                    required
                    rows="4"
                    placeholder="Tell us more about your inquiry..."
                    class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200 resize-vertical"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  [disabled]="!isFormValid()"
                  class="w-full flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-pink-400 rounded-lg hover:from-pink-600 hover:to-pink-500 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <span
                    class="mr-2"
                    style="color: white !important; filter: brightness(1.5);"
                    >💖</span
                  >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-pink-50">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2
            class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6"
          >
            Frequently Asked
            <span
              class="bg-gradient-to-r from-pink-500 via-pink-400 to-rose-400 bg-clip-text text-transparent"
              >Questions</span
            >
          </h2>
          <p class="text-base sm:text-lg lg:text-xl text-gray-600">
            Quick answers to common questions about our programs and how to get
            involved.
          </p>
        </div>

        <div class="space-y-4 sm:space-y-6">
          <div
            class="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow duration-200 border border-pink-100"
            *ngFor="let faq of faqs; let i = index"
          >
            <h3
              class="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 lg:mb-4"
            >
              {{ faq.question }}
            </h3>
            <p
              class="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed"
            >
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Message -->
    <div
      *ngIf="showSuccess"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <div
        class="bg-white rounded-2xl p-6 sm:p-8 max-w-sm sm:max-w-md w-full text-center transform scale-95 animate-bounce border border-pink-200"
      >
        <div
          class="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg shadow-pink-200 animate-pink-glow"
        >
          <span
            class="text-white text-2xl sm:text-3xl"
            style="color: white !important; filter: brightness(1.5);"
            >💖</span
          >
        </div>
        <h3
          class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4"
        >
          Message Sent!
        </h3>
        <p class="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <button
          (click)="showSuccess = false"
          class="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-pink-500 to-pink-400 rounded-lg hover:from-pink-600 hover:to-pink-500 transform hover:scale-105 transition-all duration-200 shadow-lg"
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
    {
      question: "How can my company partner with you?",
      answer:
        "We welcome corporate partnerships through sponsorships, employee volunteer programs, skills-based volunteering, and CSR initiatives. Contact us to discuss how we can create a meaningful partnership.",
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
