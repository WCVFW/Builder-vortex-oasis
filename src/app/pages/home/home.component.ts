import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Hero Section -->
    <section
      class="py-16 px-8 bg-gradient-to-br from-purple-50 via-white to-cyan-50"
    >
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1
              class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Empowering
              <span
                class="bg-gradient-to-r from-purple-600 via-cyan-500 to-green-500 bg-clip-text text-transparent"
                >Women</span
              >
              to Change the World
            </h1>
            <p class="text-lg text-gray-600 mb-8 max-w-lg">
              Join our mission to create opportunities, break barriers, and
              build a more equitable future for women everywhere through
              education, support, and community building.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a
                routerLink="/donate"
                class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg hover:from-purple-700 hover:to-cyan-600"
              >
                ♥ Make a Donation
              </a>
              <a
                routerLink="/programs"
                class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Learn More →
              </a>
            </div>
          </div>
          <div class="relative">
            <div class="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Empowered women"
                class="w-full h-80 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 px-8 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div
              class="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span class="text-white text-2xl">👥</span>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-2">10,000+</h3>
            <p class="text-gray-600">Women Empowered</p>
          </div>
          <div class="text-center">
            <div
              class="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span class="text-white text-2xl">🌍</span>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-2">25</h3>
            <p class="text-gray-600">Countries Reached</p>
          </div>
          <div class="text-center">
            <div
              class="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span class="text-white text-2xl">💼</span>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-2">3,847</h3>
            <p class="text-gray-600">Jobs Created</p>
          </div>
          <div class="text-center">
            <div
              class="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span class="text-white text-2xl">🏆</span>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-2">95%</h3>
            <p class="text-gray-600">Success Rate</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section
      class="py-16 px-8 bg-gradient-to-r from-purple-600 to-cyan-500 text-white"
    >
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Ready to Make a Difference?
        </h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Join thousands of supporters who are helping us create a world where
          every woman has the opportunity to reach her full potential.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            routerLink="/donate"
            class="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-white text-purple-600 rounded-lg hover:bg-gray-100"
          >
            ♥ Donate Now
          </a>
          <a
            routerLink="/contact"
            class="inline-flex items-center justify-center px-6 py-3 text-base font-medium border border-white text-white rounded-lg hover:bg-white hover:text-purple-600"
          >
            Get Involved →
          </a>
        </div>
      </div>
    </section>
  `,
})
export class HomeComponent {}
