import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-programs",
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Hero Section -->
    <section
      class="py-16 px-8 bg-gradient-to-br from-purple-50 via-white to-cyan-50"
    >
      <div class="max-w-6xl mx-auto">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our
            <span
              class="bg-gradient-to-r from-purple-600 via-cyan-500 to-green-500 bg-clip-text text-transparent"
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
          <div class="bg-white rounded-lg shadow-md p-8">
            <div
              class="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full flex items-center justify-center mb-6"
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
              <li>• Digital literacy programs</li>
              <li>• Professional certification courses</li>
              <li>• Higher education scholarships</li>
              <li>• Vocational training</li>
            </ul>
            <a
              routerLink="/contact"
              class="text-purple-600 font-medium hover:text-purple-700"
            >
              Learn More →
            </a>
          </div>

          <!-- Leadership Development -->
          <div class="bg-white rounded-lg shadow-md p-8">
            <div
              class="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full flex items-center justify-center mb-6"
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
              <li>• Leadership workshops</li>
              <li>• Mentorship programs</li>
              <li>• Public speaking training</li>
              <li>• Board readiness programs</li>
            </ul>
            <a
              routerLink="/contact"
              class="text-purple-600 font-medium hover:text-purple-700"
            >
              Learn More →
            </a>
          </div>

          <!-- Entrepreneurship -->
          <div class="bg-white rounded-lg shadow-md p-8">
            <div
              class="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full flex items-center justify-center mb-6"
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
              <li>• Business planning workshops</li>
              <li>• Access to microfinance</li>
              <li>• Networking events</li>
              <li>• Incubator programs</li>
            </ul>
            <a
              routerLink="/contact"
              class="text-purple-600 font-medium hover:text-purple-700"
            >
              Learn More →
            </a>
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
          Ready to Join Our Programs?
        </h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Whether you're looking to develop new skills, advance your career, or
          start a business, we have a program designed to help you succeed.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            routerLink="/contact"
            class="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-white text-purple-600 rounded-lg hover:bg-gray-100"
          >
            ♥ Apply Now
          </a>
          <a
            routerLink="/donate"
            class="inline-flex items-center justify-center px-6 py-3 text-base font-medium border border-white text-white rounded-lg hover:bg-white hover:text-purple-600"
          >
            Support Our Programs
          </a>
        </div>
      </div>
    </section>
  `,
})
export class ProgramsComponent {}
