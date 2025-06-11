import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-programs",
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Hero Section -->
    <section
      class="section-spacing bg-gradient-to-br from-pink-50 via-white to-rose-50"
    >
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-4xl mx-auto">
          <h1
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8"
          >
            Our
            <span
              class="block sm:inline bg-gradient-to-r from-pink-500 via-pink-400 to-rose-400 bg-clip-text text-transparent"
              >Programs</span
            >
          </h1>
          <p
            class="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed"
          >
            Comprehensive initiatives designed to empower women through
            education, skill development, and community support at every stage
            of their journey.
          </p>
        </div>
      </div>
    </section>

    <!-- Program Categories -->
    <section class="section-spacing bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2
            class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6"
          >
            Program Categories
          </h2>
          <p
            class="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Explore our three main program areas designed to create lasting
            change in women's lives.
          </p>
        </div>

        <div class="grid-responsive-3">
          <!-- Education & Skills -->
          <div
            class="card-responsive bg-white border-pink-100 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group"
          >
            <div
              class="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full flex items-center justify-center mb-4 sm:mb-6 lg:mb-8 shadow-lg shadow-pink-200 group-hover:scale-110 transition-transform duration-300"
            >
              <span class="text-white text-2xl sm:text-3xl lg:text-4xl"
                >🎓</span
              >
            </div>
            <h3
              class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6"
            >
              Education & Skills
            </h3>
            <p
              class="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed"
            >
              Providing educational opportunities and skill development programs
              to help women build successful careers and achieve financial
              independence.
            </p>
            <ul class="text-gray-600 space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              <li class="flex items-center text-sm sm:text-base">
                <span class="text-pink-500 mr-2 sm:mr-3">💖</span> Digital
                literacy programs
              </li>
              <li class="flex items-center text-sm sm:text-base">
                <span class="text-pink-500 mr-2 sm:mr-3">💖</span> Professional
                certification courses
              </li>
              <li class="flex items-center text-sm sm:text-base">
                <span class="text-pink-500 mr-2 sm:mr-3">💖</span> Higher
                education scholarships
              </li>
              <li class="flex items-center text-sm sm:text-base">
                <span class="text-pink-500 mr-2 sm:mr-3">💖</span> Vocational
                training
              </li>
            </ul>
            <a
              routerLink="/contact"
              class="text-pink-600 font-medium hover:text-pink-700 transition-colors duration-150 text-sm sm:text-base"
            >
              Learn More →
            </a>
          </div>

          <!-- Leadership Development -->
          <div
            class="card-responsive bg-white border-pink-100 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group"
          >
            <div
              class="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full flex items-center justify-center mb-4 sm:mb-6 lg:mb-8 shadow-lg shadow-pink-200 group-hover:scale-110 transition-transform duration-300"
            >
              <span class="text-white text-2xl sm:text-3xl lg:text-4xl"
                >👥</span
              >
            </div>
            <h3
              class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6"
            >
              Leadership Development
            </h3>
            <p
              class="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed"
            >
              Cultivating the next generation of women leaders through
              mentorship, training, and opportunities to make meaningful impact.
            </p>
            <ul class="text-gray-600 space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              <li class="flex items-center text-sm sm:text-base">
                <span class="text-pink-500 mr-2 sm:mr-3">💖</span> Leadership
                workshops
              </li>
              <li class="flex items-center text-sm sm:text-base">
                <span class="text-pink-500 mr-2 sm:mr-3">💖</span> Mentorship
                programs
              </li>
              <li class="flex items-center text-sm sm:text-base">
                <span class="text-pink-500 mr-2 sm:mr-3">💖</span> Public
                speaking training
              </li>
              <li class="flex items-center text-sm sm:text-base">
                <span class="text-pink-500 mr-2 sm:mr-3">💖</span> Board
                readiness programs
              </li>
            </ul>
            <a
              routerLink="/contact"
              class="text-pink-600 font-medium hover:text-pink-700 transition-colors duration-150 text-sm sm:text-base"
            >
              Learn More →
            </a>
          </div>

          <!-- Entrepreneurship -->
          <div
            class="card-responsive bg-white border-pink-100 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group"
          >
            <div
              class="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full flex items-center justify-center mb-4 sm:mb-6 lg:mb-8 shadow-lg shadow-pink-200 group-hover:scale-110 transition-transform duration-300"
            >
              <span class="text-white text-2xl sm:text-3xl lg:text-4xl"
                >💼</span
              >
            </div>
            <h3
              class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6"
            >
              Entrepreneurship
            </h3>
            <p
              class="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed"
            >
              Supporting women entrepreneurs with the tools, knowledge, and
              network needed to build and scale successful businesses.
            </p>
            <ul class="text-gray-600 space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              <li class="flex items-center text-sm sm:text-base">
                <span class="text-pink-500 mr-2 sm:mr-3">💖</span> Business
                planning workshops
              </li>
              <li class="flex items-center text-sm sm:text-base">
                <span class="text-pink-500 mr-2 sm:mr-3">💖</span> Access to
                microfinance
              </li>
              <li class="flex items-center text-sm sm:text-base">
                <span class="text-pink-500 mr-2 sm:mr-3">💖</span> Networking
                events
              </li>
              <li class="flex items-center text-sm sm:text-base">
                <span class="text-pink-500 mr-2 sm:mr-3">💖</span> Incubator
                programs
              </li>
            </ul>
            <a
              routerLink="/contact"
              class="text-pink-600 font-medium hover:text-pink-700 transition-colors duration-150 text-sm sm:text-base"
            >
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Programs -->
    <section class="section-spacing bg-pink-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2
            class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6"
          >
            Featured
            <span
              class="bg-gradient-to-r from-pink-500 via-pink-400 to-rose-400 bg-clip-text text-transparent"
              >Programs</span
            >
          </h2>
          <p
            class="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our flagship initiatives that are making the biggest impact in
            communities around the world.
          </p>
        </div>

        <div class="space-y-12 sm:space-y-16 lg:space-y-24">
          <!-- Tech Leaders Program -->
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center"
          >
            <div class="order-2 lg:order-1">
              <div class="flex items-center mb-4 sm:mb-6">
                <div
                  class="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-pink-500 to-pink-400 rounded-xl flex items-center justify-center mr-3 sm:mr-4 lg:mr-6 shadow-lg"
                >
                  <span class="text-white text-xl sm:text-2xl lg:text-3xl"
                    >💻</span
                  >
                </div>
                <h3
                  class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900"
                >
                  Women in Tech Leaders
                </h3>
              </div>
              <p
                class="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed"
              >
                A comprehensive 12-month program designed to prepare women for
                senior technical roles in the technology industry. Participants
                receive advanced technical training, leadership development, and
                mentorship from industry executives.
              </p>
              <div class="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div
                  class="bg-white p-3 sm:p-4 lg:p-6 rounded-lg border border-pink-100"
                >
                  <h4
                    class="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base"
                  >
                    Program Duration
                  </h4>
                  <p
                    class="text-pink-600 font-bold text-sm sm:text-base lg:text-lg"
                  >
                    12 months
                  </p>
                </div>
                <div
                  class="bg-white p-3 sm:p-4 lg:p-6 rounded-lg border border-pink-100"
                >
                  <h4
                    class="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base"
                  >
                    Participants
                  </h4>
                  <p
                    class="text-pink-600 font-bold text-sm sm:text-base lg:text-lg"
                  >
                    500+ women
                  </p>
                </div>
                <div
                  class="bg-white p-3 sm:p-4 lg:p-6 rounded-lg border border-pink-100"
                >
                  <h4
                    class="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base"
                  >
                    Success Rate
                  </h4>
                  <p
                    class="text-pink-600 font-bold text-sm sm:text-base lg:text-lg"
                  >
                    95% job placement
                  </p>
                </div>
                <div
                  class="bg-white p-3 sm:p-4 lg:p-6 rounded-lg border border-pink-100"
                >
                  <h4
                    class="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base"
                  >
                    Locations
                  </h4>
                  <p
                    class="text-pink-600 font-bold text-sm sm:text-base lg:text-lg"
                  >
                    15 cities
                  </p>
                </div>
              </div>
              <a
                routerLink="/contact"
                class="btn-responsive text-white bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-500 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                💖 Apply Now
              </a>
            </div>
            <div class="order-1 lg:order-2 relative">
              <div
                class="relative z-10 rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border border-pink-100 transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Women in tech"
                  class="w-full h-64 sm:h-80 lg:h-96 xl:h-[28rem] object-cover"
                />
              </div>
            </div>
          </div>

          <!-- Global Entrepreneurship Initiative -->
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center"
          >
            <div class="relative order-2 lg:order-1">
              <div
                class="relative z-10 rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border border-pink-100 transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Women entrepreneurs"
                  class="w-full h-64 sm:h-80 lg:h-96 xl:h-[28rem] object-cover"
                />
              </div>
            </div>
            <div class="order-1 lg:order-2">
              <div class="flex items-center mb-4 sm:mb-6">
                <div
                  class="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-pink-500 to-pink-400 rounded-xl flex items-center justify-center mr-3 sm:mr-4 lg:mr-6 shadow-lg"
                >
                  <span class="text-white text-xl sm:text-2xl lg:text-3xl"
                    >🌍</span
                  >
                </div>
                <h3
                  class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900"
                >
                  Global Entrepreneurship Initiative
                </h3>
              </div>
              <p
                class="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed"
              >
                Supporting women entrepreneurs in developing countries with
                access to capital, business training, and international market
                opportunities. This program has helped launch over 1,000
                women-led businesses globally.
              </p>
              <div class="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div
                  class="bg-white p-3 sm:p-4 lg:p-6 rounded-lg border border-pink-100"
                >
                  <h4
                    class="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base"
                  >
                    Businesses Launched
                  </h4>
                  <p
                    class="text-pink-600 font-bold text-sm sm:text-base lg:text-lg"
                  >
                    1,000+
                  </p>
                </div>
                <div
                  class="bg-white p-3 sm:p-4 lg:p-6 rounded-lg border border-pink-100"
                >
                  <h4
                    class="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base"
                  >
                    Countries
                  </h4>
                  <p
                    class="text-pink-600 font-bold text-sm sm:text-base lg:text-lg"
                  >
                    25 countries
                  </p>
                </div>
                <div
                  class="bg-white p-3 sm:p-4 lg:p-6 rounded-lg border border-pink-100"
                >
                  <h4
                    class="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base"
                  >
                    Funding Provided
                  </h4>
                  <p
                    class="text-pink-600 font-bold text-sm sm:text-base lg:text-lg"
                  >
                    $2.5M+
                  </p>
                </div>
                <div
                  class="bg-white p-3 sm:p-4 lg:p-6 rounded-lg border border-pink-100"
                >
                  <h4
                    class="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base"
                  >
                    Jobs Created
                  </h4>
                  <p
                    class="text-pink-600 font-bold text-sm sm:text-base lg:text-lg"
                  >
                    3,500+
                  </p>
                </div>
              </div>
              <a
                routerLink="/contact"
                class="btn-responsive text-white bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-500 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
      class="section-spacing bg-gradient-to-r from-pink-500 to-pink-400 text-white"
    >
      <div class="max-w-4xl mx-auto text-center">
        <h2
          class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8"
        >
          Ready to Join Our Programs?
        </h2>
        <p
          class="text-base sm:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 lg:mb-10 opacity-90 leading-relaxed"
        >
          Whether you're looking to develop new skills, advance your career, or
          start a business, we have a program designed to help you succeed.
        </p>
        <div
          class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-lg mx-auto"
        >
          <a
            routerLink="/contact"
            class="btn-responsive bg-white text-pink-600 hover:bg-pink-50 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            💖 Apply Now
          </a>
          <a
            routerLink="/donate"
            class="btn-responsive border-2 border-white text-white hover:bg-white hover:text-pink-600 transition-all duration-200"
          >
            Support Our Programs
          </a>
        </div>
      </div>
    </section>
  `,
})
export class ProgramsComponent {}
