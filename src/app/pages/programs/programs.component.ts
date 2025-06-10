import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-programs",
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Hero Section -->
    <section
      class="py-16 px-8 bg-gradient-to-br from-pink-50 via-white to-rose-50"
    >
      <div class="max-w-6xl mx-auto">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our
            <span
              class="bg-gradient-to-r from-pink-500 via-pink-400 to-rose-400 bg-clip-text text-transparent"
              >Programs</span
            >
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Comprehensive initiatives designed to empower women through
            education, skill development, and community support at every stage
            of their journey.
          </p>
        </div>
      </div>
    </section>

    <!-- Program Categories -->
    <section class="py-16 px-8 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Education & Skills -->
          <div
            class="bg-white rounded-xl shadow-md p-8 border border-pink-100 hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
          >
            <div
              class="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-pink-200"
            >
              <span class="text-white text-2xl">🎓</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
              Education & Skills
            </h3>
            <p class="text-gray-600 mb-6">
              Providing educational opportunities and skill development programs
              to help women build successful careers and achieve financial
              independence.
            </p>
            <ul class="text-gray-600 space-y-2 mb-6">
              <li class="flex items-center">
                <span class="text-pink-500 mr-2">💖</span> Digital literacy
                programs
              </li>
              <li class="flex items-center">
                <span class="text-pink-500 mr-2">💖</span> Professional
                certification courses
              </li>
              <li class="flex items-center">
                <span class="text-pink-500 mr-2">💖</span> Higher education
                scholarships
              </li>
              <li class="flex items-center">
                <span class="text-pink-500 mr-2">💖</span> Vocational training
              </li>
            </ul>
            <a
              routerLink="/contact"
              class="text-pink-600 font-medium hover:text-pink-700 transition-colors duration-150"
            >
              Learn More →
            </a>
          </div>

          <!-- Leadership Development -->
          <div
            class="bg-white rounded-xl shadow-md p-8 border border-pink-100 hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
          >
            <div
              class="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-pink-200"
            >
              <span class="text-white text-2xl">👥</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
              Leadership Development
            </h3>
            <p class="text-gray-600 mb-6">
              Cultivating the next generation of women leaders through
              mentorship, training, and opportunities to make meaningful impact.
            </p>
            <ul class="text-gray-600 space-y-2 mb-6">
              <li class="flex items-center">
                <span class="text-pink-500 mr-2">💖</span> Leadership workshops
              </li>
              <li class="flex items-center">
                <span class="text-pink-500 mr-2">💖</span> Mentorship programs
              </li>
              <li class="flex items-center">
                <span class="text-pink-500 mr-2">💖</span> Public speaking
                training
              </li>
              <li class="flex items-center">
                <span class="text-pink-500 mr-2">💖</span> Board readiness
                programs
              </li>
            </ul>
            <a
              routerLink="/contact"
              class="text-pink-600 font-medium hover:text-pink-700 transition-colors duration-150"
            >
              Learn More →
            </a>
          </div>

          <!-- Entrepreneurship -->
          <div
            class="bg-white rounded-xl shadow-md p-8 border border-pink-100 hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
          >
            <div
              class="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-pink-200"
            >
              <span class="text-white text-2xl">💼</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
              Entrepreneurship
            </h3>
            <p class="text-gray-600 mb-6">
              Supporting women entrepreneurs with the tools, knowledge, and
              network needed to build and scale successful businesses.
            </p>
            <ul class="text-gray-600 space-y-2 mb-6">
              <li class="flex items-center">
                <span class="text-pink-500 mr-2">💖</span> Business planning
                workshops
              </li>
              <li class="flex items-center">
                <span class="text-pink-500 mr-2">💖</span> Access to
                microfinance
              </li>
              <li class="flex items-center">
                <span class="text-pink-500 mr-2">💖</span> Networking events
              </li>
              <li class="flex items-center">
                <span class="text-pink-500 mr-2">💖</span> Incubator programs
              </li>
            </ul>
            <a
              routerLink="/contact"
              class="text-pink-600 font-medium hover:text-pink-700 transition-colors duration-150"
            >
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Programs -->
    <section class="py-16 px-8 bg-pink-50">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured
            <span
              class="bg-gradient-to-r from-pink-500 via-pink-400 to-rose-400 bg-clip-text text-transparent"
              >Programs</span
            >
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Our flagship initiatives that are making the biggest impact in
            communities around the world.
          </p>
        </div>

        <div class="space-y-12">
          <!-- Tech Leaders Program -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-400 rounded-lg flex items-center justify-center mr-4 shadow-lg"
                >
                  <span class="text-white text-xl">💻</span>
                </div>
                <h3 class="text-2xl font-bold text-gray-900">
                  Women in Tech Leaders
                </h3>
              </div>
              <p class="text-gray-600 mb-6">
                A comprehensive 12-month program designed to prepare women for
                senior technical roles in the technology industry. Participants
                receive advanced technical training, leadership development, and
                mentorship from industry executives.
              </p>
              <div class="grid grid-cols-2 gap-4 mb-6">
                <div class="bg-white p-4 rounded-lg border border-pink-100">
                  <h4 class="font-semibold text-gray-900 mb-2">
                    Program Duration
                  </h4>
                  <p class="text-pink-600 font-bold">12 months</p>
                </div>
                <div class="bg-white p-4 rounded-lg border border-pink-100">
                  <h4 class="font-semibold text-gray-900 mb-2">Participants</h4>
                  <p class="text-pink-600 font-bold">500+ women</p>
                </div>
                <div class="bg-white p-4 rounded-lg border border-pink-100">
                  <h4 class="font-semibold text-gray-900 mb-2">Success Rate</h4>
                  <p class="text-pink-600 font-bold">95% job placement</p>
                </div>
                <div class="bg-white p-4 rounded-lg border border-pink-100">
                  <h4 class="font-semibold text-gray-900 mb-2">Locations</h4>
                  <p class="text-pink-600 font-bold">15 cities</p>
                </div>
              </div>
              <a
                routerLink="/contact"
                class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-pink-500 to-pink-400 rounded-lg hover:from-pink-600 hover:to-pink-500 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                💖 Apply Now
              </a>
            </div>
            <div class="relative">
              <img
                src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Women in tech"
                class="w-full h-96 object-cover rounded-lg shadow-lg border border-pink-100"
              />
            </div>
          </div>

          <!-- Global Entrepreneurship Initiative -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="relative order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Women entrepreneurs"
                class="w-full h-96 object-cover rounded-lg shadow-lg border border-pink-100"
              />
            </div>
            <div class="order-1 lg:order-2">
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-400 rounded-lg flex items-center justify-center mr-4 shadow-lg"
                >
                  <span class="text-white text-xl">🌍</span>
                </div>
                <h3 class="text-2xl font-bold text-gray-900">
                  Global Entrepreneurship Initiative
                </h3>
              </div>
              <p class="text-gray-600 mb-6">
                Supporting women entrepreneurs in developing countries with
                access to capital, business training, and international market
                opportunities. This program has helped launch over 1,000
                women-led businesses globally.
              </p>
              <div class="grid grid-cols-2 gap-4 mb-6">
                <div class="bg-white p-4 rounded-lg border border-pink-100">
                  <h4 class="font-semibold text-gray-900 mb-2">
                    Businesses Launched
                  </h4>
                  <p class="text-pink-600 font-bold">1,000+</p>
                </div>
                <div class="bg-white p-4 rounded-lg border border-pink-100">
                  <h4 class="font-semibold text-gray-900 mb-2">Countries</h4>
                  <p class="text-pink-600 font-bold">25 countries</p>
                </div>
                <div class="bg-white p-4 rounded-lg border border-pink-100">
                  <h4 class="font-semibold text-gray-900 mb-2">
                    Funding Provided
                  </h4>
                  <p class="text-pink-600 font-bold">$2.5M+</p>
                </div>
                <div class="bg-white p-4 rounded-lg border border-pink-100">
                  <h4 class="font-semibold text-gray-900 mb-2">Jobs Created</h4>
                  <p class="text-pink-600 font-bold">3,500+</p>
                </div>
              </div>
              <a
                routerLink="/contact"
                class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-pink-500 to-pink-400 rounded-lg hover:from-pink-600 hover:to-pink-500 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                💖 Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section
      class="py-16 px-8 bg-gradient-to-r from-pink-500 to-pink-400 text-white"
    >
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Ready to Join Our Programs?
        </h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Whether you're looking to develop new skills, advance your career, or
          start a business, we have a program designed to help you succeed.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            routerLink="/contact"
            class="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-white text-pink-600 rounded-lg hover:bg-pink-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            💖 Apply Now
          </a>
          <a
            routerLink="/donate"
            class="inline-flex items-center justify-center px-6 py-3 text-base font-medium border-2 border-white text-white rounded-lg hover:bg-white hover:text-pink-600 transition-all duration-200"
          >
            Support Our Programs
          </a>
        </div>
      </div>
    </section>
  `,
})
export class ProgramsComponent {}
