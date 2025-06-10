import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { FormsModule } from "@angular/forms";
import {
  LucideAngularModule,
  Heart,
  DollarSign,
  Users,
  Gift,
  Shield,
  CreditCard,
  CheckCircle,
} from "lucide-angular";

@Component({
  selector: "app-donate",
  standalone: true,
  imports: [RouterLink, FormsModule, LucideAngularModule],
  template: `
    <!-- Hero Section -->
    <section
      class="section-padding bg-gradient-to-br from-purple-50 via-white to-cyan-50"
    >
      <div class="container-max">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Make a <span class="gradient-text">Difference</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Your donation helps us empower women, break barriers, and create
            lasting change in communities around the world. Every contribution
            matters.
          </p>
        </div>
      </div>
    </section>

    <!-- Donation Impact -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your <span class="gradient-text">Impact</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            See how your donation directly translates into opportunities and
            support for women.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="card p-6 text-center animate-fade-in-up">
            <div
              class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <lucide-icon
                name="dollar-sign"
                class="w-8 h-8 text-white"
              ></lucide-icon>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">$25</h3>
            <p class="text-gray-600">
              Provides basic supplies for a woman in our skills training program
            </p>
          </div>

          <div
            class="card p-6 text-center animate-fade-in-up"
            style="animation-delay: 0.1s"
          >
            <div
              class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <lucide-icon
                name="dollar-sign"
                class="w-8 h-8 text-white"
              ></lucide-icon>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">$50</h3>
            <p class="text-gray-600">
              Funds a week of online education courses for a student
            </p>
          </div>

          <div
            class="card p-6 text-center animate-fade-in-up"
            style="animation-delay: 0.2s"
          >
            <div
              class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <lucide-icon
                name="dollar-sign"
                class="w-8 h-8 text-white"
              ></lucide-icon>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">$100</h3>
            <p class="text-gray-600">
              Supports a woman entrepreneur with business mentorship
            </p>
          </div>

          <div
            class="card p-6 text-center animate-fade-in-up"
            style="animation-delay: 0.3s"
          >
            <div
              class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <lucide-icon
                name="dollar-sign"
                class="w-8 h-8 text-white"
              ></lucide-icon>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">$250</h3>
            <p class="text-gray-600">
              Provides a full scholarship for our leadership development program
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Donation Form -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="max-w-2xl mx-auto">
          <div class="card p-8">
            <div class="text-center mb-8">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">
                Choose Your Donation Amount
              </h2>
              <p class="text-gray-600">
                Select an amount or enter a custom donation below.
              </p>
            </div>

            <form (ngSubmit)="handleDonate()" class="space-y-6">
              <!-- Donation Type -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-3"
                  >Donation Type</label
                >
                <div class="grid grid-cols-2 gap-4">
                  <label class="relative">
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
                          ? 'border-purple-500 bg-purple-50 text-purple-700'
                          : 'border-gray-300 text-gray-700'
                      "
                      class="border-2 rounded-lg p-4 text-center cursor-pointer transition-all"
                    >
                      <lucide-icon
                        name="gift"
                        class="w-6 h-6 mx-auto mb-2"
                      ></lucide-icon>
                      <span class="font-medium">One-time</span>
                    </div>
                  </label>
                  <label class="relative">
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
                          ? 'border-purple-500 bg-purple-50 text-purple-700'
                          : 'border-gray-300 text-gray-700'
                      "
                      class="border-2 rounded-lg p-4 text-center cursor-pointer transition-all"
                    >
                      <lucide-icon
                        name="heart"
                        class="w-6 h-6 mx-auto mb-2"
                      ></lucide-icon>
                      <span class="font-medium">Monthly</span>
                    </div>
                  </label>
                </div>
              </div>

              <!-- Amount Selection -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-3"
                  >Amount</label
                >
                <div class="grid grid-cols-4 gap-3 mb-4">
                  <label *ngFor="let amount of presetAmounts" class="relative">
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
                          ? 'border-purple-500 bg-purple-50 text-purple-700'
                          : 'border-gray-300 text-gray-700'
                      "
                      class="border-2 rounded-lg p-3 text-center cursor-pointer transition-all"
                    >
                      <span class="font-semibold">${{ amount }}</span>
                    </div>
                  </label>
                </div>
                <div class="relative">
                  <label
                    for="customAmount"
                    class="block text-sm text-gray-600 mb-2"
                    >Or enter custom amount:</label
                  >
                  <div class="relative">
                    <span
                      class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                      >$</span
                    >
                    <input
                      type="number"
                      id="customAmount"
                      [(ngModel)]="customAmount"
                      name="customAmount"
                      (input)="onCustomAmountChange()"
                      placeholder="Enter amount"
                      class="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                </div>
              </div>

              <!-- Donor Information -->
              <div class="space-y-4">
                <h3 class="text-lg font-semibold text-gray-900">
                  Donor Information
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      for="firstName"
                      class="block text-sm font-medium text-gray-700 mb-1"
                      >First Name</label
                    >
                    <input
                      type="text"
                      id="firstName"
                      [(ngModel)]="donorInfo.firstName"
                      name="firstName"
                      required
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label
                      for="lastName"
                      class="block text-sm font-medium text-gray-700 mb-1"
                      >Last Name</label
                    >
                    <input
                      type="text"
                      id="lastName"
                      [(ngModel)]="donorInfo.lastName"
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
                    >Email Address</label
                  >
                  <input
                    type="email"
                    id="email"
                    [(ngModel)]="donorInfo.email"
                    name="email"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </div>

              <!-- Payment Security Notice -->
              <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                <div class="flex items-center">
                  <lucide-icon
                    name="shield"
                    class="w-5 h-5 text-green-600 mr-2"
                  ></lucide-icon>
                  <span class="text-sm text-green-800 font-medium"
                    >Secure Payment</span
                  >
                </div>
                <p class="text-sm text-green-700 mt-1">
                  Your payment information is encrypted and secure. We never
                  store your payment details.
                </p>
              </div>

              <!-- Donate Button -->
              <button
                type="submit"
                class="w-full btn-primary btn-primary-gradient text-lg py-3"
              >
                <lucide-icon name="heart" class="w-5 h-5 mr-2"></lucide-icon>
                Donate {{ getDonationAmount() | currency }}
                {{ donationType === "monthly" ? "/month" : "" }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Donate -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why <span class="gradient-text">Donate</span>?
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Your support helps us continue our vital work in empowering women
            worldwide.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center animate-fade-in-up">
            <div
              class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <lucide-icon
                name="users"
                class="w-8 h-8 text-white"
              ></lucide-icon>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Direct Impact
            </h3>
            <p class="text-gray-600">
              95% of donations go directly to programs. Your money creates
              immediate, measurable change in women's lives.
            </p>
          </div>

          <div
            class="text-center animate-fade-in-up"
            style="animation-delay: 0.1s"
          >
            <div
              class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <lucide-icon
                name="check-circle"
                class="w-8 h-8 text-white"
              ></lucide-icon>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Proven Results
            </h3>
            <p class="text-gray-600">
              Over 10 years of experience with documented success stories and
              transparent impact reporting.
            </p>
          </div>

          <div
            class="text-center animate-fade-in-up"
            style="animation-delay: 0.2s"
          >
            <div
              class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <lucide-icon
                name="shield"
                class="w-8 h-8 text-white"
              ></lucide-icon>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Trusted Organization
            </h3>
            <p class="text-gray-600">
              Recognized by leading organizations and awarded for our commitment
              to transparency and effectiveness.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Other Ways to Help -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Other Ways to <span class="gradient-text">Help</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Can't donate right now? There are other meaningful ways to support
            our mission.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card p-6 text-center">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Volunteer</h3>
            <p class="text-gray-600 mb-4">
              Share your skills and time to directly support our programs and
              participants.
            </p>
            <a
              routerLink="/contact"
              class="text-purple-600 font-medium hover:text-purple-700"
            >
              Learn More →
            </a>
          </div>

          <div class="card p-6 text-center">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Corporate Partnership
            </h3>
            <p class="text-gray-600 mb-4">
              Partner with us to create employee engagement programs and CSR
              initiatives.
            </p>
            <a
              routerLink="/contact"
              class="text-purple-600 font-medium hover:text-purple-700"
            >
              Partner with Us →
            </a>
          </div>

          <div class="card p-6 text-center">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Spread the Word
            </h3>
            <p class="text-gray-600 mb-4">
              Share our mission on social media and help us reach more
              supporters.
            </p>
            <a
              href="#"
              class="text-purple-600 font-medium hover:text-purple-700"
            >
              Share Now →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Thank You Message (if donated) -->
    <div
      *ngIf="showThankYou"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <div class="bg-white rounded-lg p-8 max-w-md w-full text-center">
        <div
          class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <lucide-icon name="heart" class="w-8 h-8 text-white"></lucide-icon>
        </div>
        <h3 class="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
        <p class="text-gray-600 mb-6">
          Your generous donation will make a real difference in women's lives.
          You'll receive a confirmation email shortly.
        </p>
        <button
          (click)="showThankYou = false"
          class="btn-primary btn-primary-gradient"
        >
          Continue
        </button>
      </div>
    </div>
  `,
})
export class DonateComponent {
  readonly Heart = Heart;
  readonly DollarSign = DollarSign;
  readonly Users = Users;
  readonly Gift = Gift;
  readonly Shield = Shield;
  readonly CreditCard = CreditCard;
  readonly CheckCircle = CheckCircle;

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
      // In a real application, this would integrate with a payment processor
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
