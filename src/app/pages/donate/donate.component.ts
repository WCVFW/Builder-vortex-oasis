import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-donate",
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
          Make a
          <span
            class="bg-gradient-to-r from-pink-500 via-pink-400 to-rose-400 bg-clip-text text-transparent"
            >Difference</span
          >
        </h1>
        <p
          class="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed"
        >
          Your donation helps us empower women, break barriers, and create
          lasting change in communities around the world. Every contribution
          matters.
        </p>
      </div>
    </section>

    <!-- Donation Impact -->
    <section class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2
            class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6"
          >
            Your
            <span
              class="bg-gradient-to-r from-pink-500 via-pink-400 to-rose-400 bg-clip-text text-transparent"
              >Impact</span
            >
          </h2>
          <p
            class="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            See how your donation directly translates into opportunities and
            support for women.
          </p>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          <div
            *ngFor="let impact of impactLevels; let i = index"
            class="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8 text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-pink-100"
            [style.animation-delay]="i * 0.1 + 's'"
          >
            <div
              class="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6 shadow-lg shadow-pink-200 animate-pink-glow"
            >
              <span class="text-white text-lg sm:text-xl lg:text-2xl">💖</span>
            </div>
            <h3
              class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3"
            >
              &#36;{{ impact.amount }}
            </h3>
            <p
              class="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed"
            >
              {{ impact.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Donation Form -->
    <section class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-pink-50">
      <div class="max-w-4xl mx-auto">
        <div
          class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 border border-pink-100"
        >
          <div class="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2
              class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6"
            >
              Choose Your Donation Amount
            </h2>
            <p class="text-sm sm:text-base lg:text-lg text-gray-600">
              Select an amount or enter a custom donation below.
            </p>
          </div>

          <form (ngSubmit)="handleDonate()" class="space-y-6 sm:space-y-8">
            <!-- Donation Type -->
            <div>
              <label
                class="block text-sm sm:text-base lg:text-lg font-medium text-gray-700 mb-3 sm:mb-4"
                >Donation Type</label
              >
              <div class="grid grid-cols-2 gap-3 sm:gap-4">
                <label class="relative cursor-pointer">
                  <input
                    type="radio"
                    name="donationType"
                    value="one-time"
                    [(ngModel)]="donationType"
                    class="sr-only"
                  />
                  <div
                    [class]="
                      donationType === 'one-time'
                        ? 'border-pink-500 bg-pink-50 text-pink-700'
                        : 'border-gray-300 text-gray-700 hover:border-pink-300'
                    "
                    class="border-2 rounded-xl p-4 sm:p-6 text-center transition-all duration-200"
                  >
                    <span class="text-2xl sm:text-3xl mb-2 sm:mb-3 block"
                      >🎁</span
                    >
                    <span class="text-sm sm:text-base lg:text-lg font-semibold"
                      >One-time</span
                    >
                  </div>
                </label>
                <label class="relative cursor-pointer">
                  <input
                    type="radio"
                    name="donationType"
                    value="monthly"
                    [(ngModel)]="donationType"
                    class="sr-only"
                  />
                  <div
                    [class]="
                      donationType === 'monthly'
                        ? 'border-pink-500 bg-pink-50 text-pink-700'
                        : 'border-gray-300 text-gray-700 hover:border-pink-300'
                    "
                    class="border-2 rounded-xl p-4 sm:p-6 text-center transition-all duration-200"
                  >
                    <span class="text-2xl sm:text-3xl mb-2 sm:mb-3 block"
                      >💖</span
                    >
                    <span class="text-sm sm:text-base lg:text-lg font-semibold"
                      >Monthly</span
                    >
                  </div>
                </label>
              </div>
            </div>

            <!-- Amount Selection -->
            <div>
              <label
                class="block text-sm sm:text-base lg:text-lg font-medium text-gray-700 mb-3 sm:mb-4"
                >Amount</label
              >
              <div
                class="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-6"
              >
                <label
                  *ngFor="let amount of presetAmounts"
                  class="relative cursor-pointer"
                >
                  <input
                    type="radio"
                    [value]="amount"
                    name="amount"
                    [(ngModel)]="selectedAmount"
                    class="sr-only"
                  />
                  <div
                    [class]="
                      selectedAmount === amount
                        ? 'border-pink-500 bg-pink-50 text-pink-700'
                        : 'border-gray-300 text-gray-700 hover:border-pink-300'
                    "
                    class="border-2 rounded-lg p-3 sm:p-4 text-center transition-all duration-200"
                  >
                    <span class="text-sm sm:text-base lg:text-lg font-bold"
                      >&#36;{{ amount }}</span
                    >
                  </div>
                </label>
              </div>
              <div class="relative">
                <label
                  for="customAmount"
                  class="block text-sm sm:text-base font-medium text-gray-600 mb-2"
                  >Or enter custom amount:</label
                >
                <div class="relative">
                  <span
                    class="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm sm:text-base"
                    >&#36;</span
                  >
                  <input
                    type="number"
                    id="customAmount"
                    [(ngModel)]="customAmount"
                    name="customAmount"
                    (input)="onCustomAmountChange()"
                    placeholder="Enter amount"
                    class="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-3 sm:py-4 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200"
                  />
                </div>
              </div>
            </div>

            <!-- Donor Information -->
            <div class="space-y-4 sm:space-y-6">
              <h3
                class="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900"
              >
                Donor Information
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label
                    for="firstName"
                    class="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2"
                    >First Name</label
                  >
                  <input
                    type="text"
                    id="firstName"
                    [(ngModel)]="donorInfo.firstName"
                    name="firstName"
                    required
                    class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label
                    for="lastName"
                    class="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2"
                    >Last Name</label
                  >
                  <input
                    type="text"
                    id="lastName"
                    [(ngModel)]="donorInfo.lastName"
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
                  >Email Address</label
                >
                <input
                  type="email"
                  id="email"
                  [(ngModel)]="donorInfo.email"
                  name="email"
                  required
                  class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200"
                />
              </div>
            </div>

            <!-- Security Notice -->
            <div
              class="bg-green-50 border border-green-200 rounded-xl p-4 sm:p-6"
            >
              <div class="flex items-start">
                <span class="text-green-600 mr-2 sm:mr-3 text-lg sm:text-xl"
                  >🔒</span
                >
                <div>
                  <span
                    class="text-sm sm:text-base text-green-800 font-semibold"
                    >Secure Payment</span
                  >
                  <p class="text-xs sm:text-sm text-green-700 mt-1">
                    Your payment information is encrypted and secure. We never
                    store your payment details.
                  </p>
                </div>
              </div>
            </div>

            <!-- Donate Button -->
            <button
              type="submit"
              class="w-full flex items-center justify-center px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg lg:text-xl font-bold text-white bg-gradient-to-r from-pink-500 to-pink-400 rounded-xl hover:from-pink-600 hover:to-pink-500 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl animate-pink-glow"
            >
              <span class="mr-2 sm:mr-3">💖</span>
              Donate {{ getDonationAmount() | currency }}
              {{ donationType === "monthly" ? "/month" : "" }}
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Why Donate -->
    <section class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2
            class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6"
          >
            Why
            <span
              class="bg-gradient-to-r from-pink-500 via-pink-400 to-rose-400 bg-clip-text text-transparent"
              >Donate</span
            >?
          </h2>
          <p
            class="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Your support helps us continue our vital work in empowering women
            worldwide.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          <div
            *ngFor="let reason of donateReasons; let i = index"
            class="text-center transform hover:scale-105 transition-transform duration-200"
            [style.animation-delay]="i * 0.1 + 's'"
          >
            <div
              class="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8 shadow-lg shadow-pink-200"
            >
              <span class="text-white text-2xl sm:text-3xl lg:text-4xl">{{
                reason.icon
              }}</span>
            </div>
            <h3
              class="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4"
            >
              {{ reason.title }}
            </h3>
            <p
              class="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed"
            >
              {{ reason.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Thank You Message -->
    <div
      *ngIf="showThankYou"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <div
        class="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 max-w-sm sm:max-w-md lg:max-w-lg w-full text-center transform scale-95 animate-bounce border border-pink-200"
      >
        <div
          class="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg shadow-pink-200 animate-pink-glow"
        >
          <span class="text-white text-2xl sm:text-3xl lg:text-4xl">💖</span>
        </div>
        <h3
          class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6"
        >
          Thank You!
        </h3>
        <p
          class="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed"
        >
          Your generous donation will make a real difference in women's lives.
          You'll receive a confirmation email shortly.
        </p>
        <button
          (click)="showThankYou = false"
          class="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-pink-400 rounded-xl hover:from-pink-600 hover:to-pink-500 transform hover:scale-105 transition-all duration-200 shadow-lg"
        >
          Continue
        </button>
      </div>
    </div>
  `,
})
export class DonateComponent {
  donationType: "one-time" | "monthly" = "one-time";
  selectedAmount: number | null = null;
  customAmount: number | null = null;
  presetAmounts = [25, 50, 100, 250];
  showThankYou = false;

  donorInfo = {
    firstName: "",
    lastName: "",
    email: "",
  };

  impactLevels = [
    {
      amount: 25,
      description:
        "Provides basic supplies for a woman in our skills training program",
    },
    {
      amount: 50,
      description: "Funds a week of online education courses for a student",
    },
    {
      amount: 100,
      description: "Supports a woman entrepreneur with business mentorship",
    },
    {
      amount: 250,
      description:
        "Provides a full scholarship for our leadership development program",
    },
  ];

  donateReasons = [
    {
      icon: "👥",
      title: "Direct Impact",
      description:
        "95% of donations go directly to programs. Your money creates immediate, measurable change in women's lives.",
    },
    {
      icon: "✅",
      title: "Proven Results",
      description:
        "Over 10 years of experience with documented success stories and transparent impact reporting.",
    },
    {
      icon: "🛡️",
      title: "Trusted Organization",
      description:
        "Recognized by leading organizations and awarded for our commitment to transparency and effectiveness.",
    },
  ];

  onCustomAmountChange() {
    if (this.customAmount) {
      this.selectedAmount = null;
    }
  }

  getDonationAmount(): number {
    return this.customAmount || this.selectedAmount || 0;
  }

  handleDonate() {
    const amount = this.getDonationAmount();
    if (
      amount > 0 &&
      this.donorInfo.firstName &&
      this.donorInfo.lastName &&
      this.donorInfo.email
    ) {
      console.log("Processing donation:", {
        amount,
        type: this.donationType,
        donor: this.donorInfo,
      });

      this.showThankYou = true;

      // Reset form
      this.selectedAmount = null;
      this.customAmount = null;
      this.donorInfo = {
        firstName: "",
        lastName: "",
        email: "",
      };
    }
  }
}
