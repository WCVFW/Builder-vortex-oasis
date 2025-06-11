import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-about",
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
            About
            <span
              class="block sm:inline bg-gradient-to-r from-pink-500 via-pink-400 to-rose-400 bg-clip-text text-transparent"
              >Women's Foundation</span
            >
          </h1>
          <p
            class="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed"
          >
            For over a decade, we've been dedicated to creating opportunities,
            breaking barriers, and empowering women to achieve their dreams and
            transform their communities.
          </p>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="section-spacing bg-white">
      <div class="max-w-7xl mx-auto">
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center"
        >
          <div class="order-2 lg:order-1">
            <h2
              class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8"
            >
              Our Story
            </h2>
            <div class="space-y-4 sm:space-y-6">
              <p
                class="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed"
              >
                Founded in 2013, the Women's Foundation began with a simple yet
                powerful vision: every woman deserves the opportunity to reach
                her full potential. What started as a small grassroots
                initiative has grown into a global movement.
              </p>
              <p
                class="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed"
              >
                Our founders, a group of passionate advocates, recognized that
                systemic barriers were preventing countless women from accessing
                education, career opportunities, and leadership roles. They set
                out to change that narrative.
              </p>
              <p
                class="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed"
              >
                Today, we operate in 25 countries, have launched over 50
                programs, and have directly impacted the lives of more than
                10,000 women worldwide.
              </p>
            </div>
            <div class="mt-6 sm:mt-8">
              <a
                routerLink="/impact"
                class="btn-responsive text-white bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-500 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                💖 See Our Impact
              </a>
            </div>
          </div>
          <div class="order-1 lg:order-2 relative">
            <div
              class="relative z-10 rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border border-pink-100 transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Women working together"
                class="w-full h-64 sm:h-80 lg:h-96 xl:h-[28rem] object-cover"
              />
            </div>
            <!-- Floating decorative elements -->
            <div
              class="absolute -top-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-20 animate-pulse"
            ></div>
            <div
              class="absolute -bottom-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-r from-rose-400 to-pink-300 rounded-full opacity-20 animate-pulse"
              style="animation-delay: 1s;"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission, Vision, Values -->
    <section class="section-spacing bg-pink-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2
            class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6"
          >
            Our Foundation
          </h2>
          <p
            class="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            The core principles that guide everything we do and shape our vision
            for the future.
          </p>
        </div>

        <div class="grid-responsive-3">
          <!-- Mission -->
          <div class="text-center group">
            <div
              class="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8 shadow-lg shadow-pink-200 group-hover:scale-110 transition-transform duration-300"
            >
              <span class="text-white text-2xl sm:text-3xl lg:text-4xl"
                >🎯</span
              >
            </div>
            <h3
              class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6"
            >
              Our Mission
            </h3>
            <p
              class="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed"
            >
              To empower women through education, support, and community
              building, creating pathways to economic independence and
              leadership opportunities.
            </p>
          </div>

          <!-- Vision -->
          <div class="text-center group">
            <div
              class="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8 shadow-lg shadow-pink-200 group-hover:scale-110 transition-transform duration-300"
            >
              <span class="text-white text-2xl sm:text-3xl lg:text-4xl"
                >👁</span
              >
            </div>
            <h3
              class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6"
            >
              Our Vision
            </h3>
            <p
              class="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed"
            >
              A world where every woman has equal access to opportunities, where
              gender is never a barrier to success, and where women lead
              positive change globally.
            </p>
          </div>

          <!-- Values -->
          <div class="text-center group">
            <div
              class="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8 shadow-lg shadow-pink-200 group-hover:scale-110 transition-transform duration-300"
            >
              <span class="text-white text-2xl sm:text-3xl lg:text-4xl"
                >💖</span
              >
            </div>
            <h3
              class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6"
            >
              Our Values
            </h3>
            <p
              class="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed"
            >
              Empowerment, equality, community, innovation, and sustainability
              guide everything we do. We believe in the transformative power of
              women.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership Team -->
    <section class="section-spacing bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2
            class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6"
          >
            Meet Our
            <span
              class="bg-gradient-to-r from-pink-500 via-pink-400 to-rose-400 bg-clip-text text-transparent"
              >Leadership Team</span
            >
          </h2>
          <p
            class="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our diverse team of leaders brings decades of experience in
            advocacy, business, education, and community development.
          </p>
        </div>

        <div class="grid-responsive-3">
          <div
            class="card-responsive bg-white text-center border-pink-100 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group"
          >
            <div class="relative mb-4 sm:mb-6">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Dr. Sarah Williams"
                class="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full object-cover mx-auto border-4 border-pink-200 group-hover:border-pink-400 transition-colors duration-300"
              />
            </div>
            <h3
              class="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2"
            >
              Dr. Sarah Williams
            </h3>
            <p
              class="text-pink-600 font-medium mb-3 sm:mb-4 text-sm sm:text-base"
            >
              CEO & Founder
            </p>
            <p
              class="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed"
            >
              Former UN Women advocate with 20+ years experience in
              international development and women's rights advocacy.
            </p>
          </div>

          <div
            class="card-responsive bg-white text-center border-pink-100 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group"
          >
            <div class="relative mb-4 sm:mb-6">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Maria Rodriguez"
                class="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full object-cover mx-auto border-4 border-pink-200 group-hover:border-pink-400 transition-colors duration-300"
              />
            </div>
            <h3
              class="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2"
            >
              Maria Rodriguez
            </h3>
            <p
              class="text-pink-600 font-medium mb-3 sm:mb-4 text-sm sm:text-base"
            >
              Director of Programs
            </p>
            <p
              class="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed"
            >
              Education specialist who has designed and implemented programs
              that have reached over 5,000 women across Latin America.
            </p>
          </div>

          <div
            class="card-responsive bg-white text-center border-pink-100 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group"
          >
            <div class="relative mb-4 sm:mb-6">
              <img
                src="https://images.unsplash.com/photo-1594736797933-d0d2110d2d73?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Jennifer Chen"
                class="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full object-cover mx-auto border-4 border-pink-200 group-hover:border-pink-400 transition-colors duration-300"
              />
            </div>
            <h3
              class="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2"
            >
              Jennifer Chen
            </h3>
            <p
              class="text-pink-600 font-medium mb-3 sm:mb-4 text-sm sm:text-base"
            >
              Head of Technology
            </p>
            <p
              class="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed"
            >
              Tech entrepreneur and former Silicon Valley executive, leading our
              digital initiatives and online learning platforms.
            </p>
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
          Join Our Mission
        </h2>
        <p
          class="text-base sm:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 lg:mb-10 opacity-90 leading-relaxed"
        >
          Whether through volunteering, donating, or partnering with us, there
          are many ways to be part of our mission to empower women.
        </p>
        <div
          class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-lg mx-auto"
        >
          <a
            routerLink="/donate"
            class="btn-responsive bg-white text-pink-600 hover:bg-pink-50 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            💖 Donate Now
          </a>
          <a
            routerLink="/contact"
            class="btn-responsive border-2 border-white text-white hover:bg-white hover:text-pink-600 transition-all duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {}
