import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import {
  LucideAngularModule,
  BookOpen,
  Users,
  Briefcase,
  GraduationCap,
  Heart,
  Laptop,
  Building,
  Globe,
} from "lucide-angular";

@Component({
  selector: "app-programs",
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  template: `
    <!-- Hero Section -->
    <section
      class="section-padding bg-gradient-to-br from-purple-50 via-white to-cyan-50"
    >
      <div class="container-max">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span class="gradient-text">Programs</span>
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
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Education & Skills -->
          <div class="card p-8 animate-fade-in-up">
            <div
              class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6"
            >
              <lucide-icon
                name="graduation-cap"
                class="w-8 h-8 text-white"
              ></lucide-icon>
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
          <div
            class="card p-8 animate-fade-in-up"
            style="animation-delay: 0.1s"
          >
            <div
              class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6"
            >
              <lucide-icon
                name="users"
                class="w-8 h-8 text-white"
              ></lucide-icon>
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
          <div
            class="card p-8 animate-fade-in-up"
            style="animation-delay: 0.2s"
          >
            <div
              class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6"
            >
              <lucide-icon
                name="briefcase"
                class="w-8 h-8 text-white"
              ></lucide-icon>
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

    <!-- Featured Programs -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured <span class="gradient-text">Programs</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Our flagship initiatives that are making the biggest impact in
            communities around the world.
          </p>
        </div>

        <div class="space-y-12">
          <!-- Tech Leaders Program -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="animate-fade-in-up">
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mr-4"
                >
                  <lucide-icon
                    name="laptop"
                    class="w-6 h-6 text-white"
                  ></lucide-icon>
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
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">
                    Program Duration
                  </h4>
                  <p class="text-gray-600">12 months</p>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Participants</h4>
                  <p class="text-gray-600">500+ women</p>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Success Rate</h4>
                  <p class="text-gray-600">95% job placement</p>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Locations</h4>
                  <p class="text-gray-600">15 cities</p>
                </div>
              </div>
              <a routerLink="/contact" class="btn-primary btn-primary-gradient">
                Apply Now
              </a>
            </div>
            <div class="relative">
              <img
                src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Women in tech"
                class="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <!-- Global Entrepreneurship Initiative -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="relative order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Women entrepreneurs"
                class="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div class="animate-fade-in-up order-1 lg:order-2">
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mr-4"
                >
                  <lucide-icon
                    name="globe"
                    class="w-6 h-6 text-white"
                  ></lucide-icon>
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
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">
                    Businesses Launched
                  </h4>
                  <p class="text-gray-600">1,000+</p>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Countries</h4>
                  <p class="text-gray-600">25 countries</p>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">
                    Funding Provided
                  </h4>
                  <p class="text-gray-600">$2.5M+</p>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Jobs Created</h4>
                  <p class="text-gray-600">3,500+</p>
                </div>
              </div>
              <a routerLink="/contact" class="btn-primary btn-primary-gradient">
                Get Started
              </a>
            </div>
          </div>

          <!-- Education Access Program -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="animate-fade-in-up">
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mr-4"
                >
                  <lucide-icon
                    name="book-open"
                    class="w-6 h-6 text-white"
                  ></lucide-icon>
                </div>
                <h3 class="text-2xl font-bold text-gray-900">
                  Education Access Program
                </h3>
              </div>
              <p class="text-gray-600 mb-6">
                Providing scholarships and educational support to women who lack
                access to quality education. From basic literacy to university
                degrees, we're breaking down barriers to learning and creating
                pathways to success.
              </p>
              <div class="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">
                    Scholarships Awarded
                  </h4>
                  <p class="text-gray-600">2,500+</p>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">
                    Graduation Rate
                  </h4>
                  <p class="text-gray-600">92%</p>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">
                    Partner Universities
                  </h4>
                  <p class="text-gray-600">50+</p>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">
                    Online Courses
                  </h4>
                  <p class="text-gray-600">200+</p>
                </div>
              </div>
              <a routerLink="/contact" class="btn-primary btn-primary-gradient">
                Apply for Scholarship
              </a>
            </div>
            <div class="relative">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Women studying"
                class="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Program Impact -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Program <span class="gradient-text">Impact</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Measuring success through the real changes in women's lives and
            communities.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center animate-fade-in-up">
            <div
              class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <lucide-icon
                name="graduation-cap"
                class="w-8 h-8 text-white"
              ></lucide-icon>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-2">10,000+</h3>
            <p class="text-gray-600">Women Educated</p>
          </div>

          <div
            class="text-center animate-fade-in-up"
            style="animation-delay: 0.1s"
          >
            <div
              class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <lucide-icon
                name="briefcase"
                class="w-8 h-8 text-white"
              ></lucide-icon>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-2">3,500+</h3>
            <p class="text-gray-600">Jobs Created</p>
          </div>

          <div
            class="text-center animate-fade-in-up"
            style="animation-delay: 0.2s"
          >
            <div
              class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <lucide-icon
                name="building"
                class="w-8 h-8 text-white"
              ></lucide-icon>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-2">1,000+</h3>
            <p class="text-gray-600">Businesses Launched</p>
          </div>

          <div
            class="text-center animate-fade-in-up"
            style="animation-delay: 0.3s"
          >
            <div
              class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <lucide-icon
                name="users"
                class="w-8 h-8 text-white"
              ></lucide-icon>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-2">500+</h3>
            <p class="text-gray-600">Leaders Developed</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section
      class="section-padding bg-gradient-to-r from-purple-600 to-cyan-500 text-white"
    >
      <div class="container-max text-center">
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
            class="btn-primary bg-white text-purple-600 hover:bg-gray-100"
          >
            <lucide-icon name="heart" class="w-5 h-5 mr-2"></lucide-icon>
            Apply Now
          </a>
          <a
            routerLink="/donate"
            class="btn-secondary border-white text-white hover:bg-white hover:text-purple-600"
          >
            Support Our Programs
          </a>
        </div>
      </div>
    </section>
  `,
})
export class ProgramsComponent {
  readonly BookOpen = BookOpen;
  readonly Users = Users;
  readonly Briefcase = Briefcase;
  readonly GraduationCap = GraduationCap;
  readonly Heart = Heart;
  readonly Laptop = Laptop;
  readonly Building = Building;
  readonly Globe = Globe;
}
