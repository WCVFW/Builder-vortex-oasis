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
      class="py-16 px-8 bg-gradient-to-br from-purple-50 via-white to-cyan-50"
    >
      <div class="max-w-6xl mx-auto">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Make a
            <span
              class="bg-gradient-to-r from-purple-600 via-cyan-500 to-green-500 bg-clip-text text-transparent"
              >Difference</span
            >
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
    <section class="py-16 px-8 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your
            <span
              class="bg-gradient-to-r from-purple-600 via-cyan-500 to-green-500 bg-clip-text text-transparent"
              >Impact</span
            >
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            See how your donation directly translates into opportunities and
            support for women.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <div
              class="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span class="text-white text-2xl">💰</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">&#36;25</h3>
            <p class="text-gray-600">
              Provides basic supplies for a woman in our skills training program
            </p>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <div
              class="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span class="text-white text-2xl">💰</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">&#36;50</h3>
            <p class="text-gray-600">
              Funds a week of online education courses for a student
            </p>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <div
              class="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span class="text-white text-2xl">💰</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">&#36;100</h3>
            <p class="text-gray-600">
              Supports a woman entrepreneur with business mentorship
            </p>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <div
              class="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span class="text-white text-2xl">💰</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">&#36;250</h3>
            <p class="text-gray-600">
              Provides a full scholarship for our leadership development program
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Donation Form -->
    <section class="py-16 px-8 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <div class="max-w-2xl mx-auto">
          <div class="bg-white rounded-lg shadow-md p-8">
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
                      <span class="text-2xl mb-2 block">🎁</span>
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
                      <span class="text-2xl mb-2 block">♥</span>
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
                      <span class="font-semibold">&#36;{{ amount }}</span>
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
                      >&#36;</span
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

              <!-- Donate Button -->
              <button
                type="submit"
                class="w-full inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg hover:from-purple-700 hover:to-cyan-600"
              >
                ♥ Donate {{ getDonationAmount() | currency }}
                {{ donationType === "monthly" ? "/month" : "" }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Thank You Message -->
    <div
      *ngIf="showThankYou"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <div class="bg-white rounded-lg p-8 max-w-md w-full text-center">
        <div
          class="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <span class="text-white text-2xl">♥</span>
        </div>
        <h3 class="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
        <p class="text-gray-600 mb-6">
          Your generous donation will make a real difference in women's lives.
          You'll receive a confirmation email shortly.
        </p>
        <button
          (click)="showThankYou = false"
          class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg hover:from-purple-700 hover:to-cyan-600"
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
