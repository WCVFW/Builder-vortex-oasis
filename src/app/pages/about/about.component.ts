import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-about",
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
            About
            <span
              class="bg-gradient-to-r from-pink-500 via-pink-400 to-rose-400 bg-clip-text text-transparent"
              >Women's Foundation</span
            >
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            For over a decade, we've been dedicated to creating opportunities,
            breaking barriers, and empowering women to achieve their dreams and
            transform their communities.
          </p>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="py-16 px-8 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p class="text-gray-600 mb-6">
              Founded in 2013, the Women's Foundation began with a simple yet
              powerful vision: every woman deserves the opportunity to reach her
              full potential. What started as a small grassroots initiative has
              grown into a global movement.
            </p>
            <p class="text-gray-600 mb-6">
              Our founders, a group of passionate advocates, recognized that
              systemic barriers were preventing countless women from accessing
              education, career opportunities, and leadership roles. They set
              out to change that narrative.
            </p>
            <p class="text-gray-600 mb-8">
              Today, we operate in 25 countries, have launched over 50 programs,
              and have directly impacted the lives of more than 10,000 women
              worldwide.
            </p>
            <a
              routerLink="/impact"
              class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-pink-500 to-pink-400 rounded-lg hover:from-pink-600 hover:to-pink-500 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              💖 See Our Impact
            </a>
          </div>
          <div class="relative">
            <img
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Women working together"
              class="w-full h-96 object-cover rounded-lg shadow-lg border border-pink-100"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Mission, Vision, Values -->
    <section class="py-16 px-8 bg-pink-50">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Mission -->
          <div class="text-center">
            <div
              class="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-pink-200"
            >
              <span class="text-white text-2xl">🎯</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p class="text-gray-600">
              To empower women through education, support, and community
              building, creating pathways to economic independence and
              leadership opportunities.
            </p>
          </div>

          <!-- Vision -->
          <div class="text-center">
            <div
              class="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-pink-200"
            >
              <span class="text-white text-2xl">👁</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p class="text-gray-600">
              A world where every woman has equal access to opportunities, where
              gender is never a barrier to success, and where women lead
              positive change globally.
            </p>
          </div>

          <!-- Values -->
          <div class="text-center">
            <div
              class="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-pink-200"
            >
              <span class="text-white text-2xl">💖</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p class="text-gray-600">
              Empowerment, equality, community, innovation, and sustainability
              guide everything we do. We believe in the transformative power of
              women.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership Team -->
    <section class="py-16 px-8 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our
            <span
              class="bg-gradient-to-r from-pink-500 via-pink-400 to-rose-400 bg-clip-text text-transparent"
              >Leadership Team</span
            >
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Our diverse team of leaders brings decades of experience in
            advocacy, business, education, and community development.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            class="bg-white rounded-xl shadow-md p-6 text-center border border-pink-100 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="Dr. Sarah Williams"
              class="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-pink-200"
            />
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Dr. Sarah Williams
            </h3>
            <p class="text-pink-600 font-medium mb-3">CEO & Founder</p>
            <p class="text-gray-600 text-sm">
              Former UN Women advocate with 20+ years experience in
              international development and women's rights advocacy.
            </p>
          </div>

          <div
            class="bg-white rounded-xl shadow-md p-6 text-center border border-pink-100 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="Maria Rodriguez"
              class="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-pink-200"
            />
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Maria Rodriguez
            </h3>
            <p class="text-pink-600 font-medium mb-3">Director of Programs</p>
            <p class="text-gray-600 text-sm">
              Education specialist who has designed and implemented programs
              that have reached over 5,000 women across Latin America.
            </p>
          </div>

          <div
            class="bg-white rounded-xl shadow-md p-6 text-center border border-pink-100 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src="https://images.unsplash.com/photo-1594736797933-d0d2110d2d73?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="Jennifer Chen"
              class="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-pink-200"
            />
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Jennifer Chen
            </h3>
            <p class="text-pink-600 font-medium mb-3">Head of Technology</p>
            <p class="text-gray-600 text-sm">
              Tech entrepreneur and former Silicon Valley executive, leading our
              digital initiatives and online learning platforms.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section
      class="py-16 px-8 bg-gradient-to-r from-pink-500 to-pink-400 text-white"
    >
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Join Our Mission</h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Whether through volunteering, donating, or partnering with us, there
          are many ways to be part of our mission to empower women.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            routerLink="/donate"
            class="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-white text-pink-600 rounded-lg hover:bg-pink-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            💖 Donate Now
          </a>
          <a
            routerLink="/contact"
            class="inline-flex items-center justify-center px-6 py-3 text-base font-medium border-2 border-white text-white rounded-lg hover:bg-white hover:text-pink-600 transition-all duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {}
