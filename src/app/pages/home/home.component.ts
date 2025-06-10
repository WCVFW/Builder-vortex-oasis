import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <!-- Hero Section -->
    <section
      class="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-cyan-50"
    >
      <div class="max-w-7xl mx-auto">
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center"
        >
          <!-- Content -->
          <div class="order-2 lg:order-1 text-center lg:text-left">
            <h1
              class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 lg:mb-8"
            >
              Empowering
              <span
                class="block sm:inline bg-gradient-to-r from-purple-600 via-cyan-500 to-green-500 bg-clip-text text-transparent"
                >Women</span
              >
              <span class="block sm:inline">to Change the World</span>
            </h1>
            <p
              class="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0"
            >
              Join our mission to create opportunities, break barriers, and
              build a more equitable future for women everywhere through
              education, support, and community building.
            </p>
            <div
              class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                routerLink="/donate"
                class="inline-flex items-center justify-center px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg hover:from-purple-700 hover:to-cyan-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span class="mr-2">♥</span>
                Make a Donation
              </a>
              <a
                routerLink="/programs"
                class="inline-flex items-center justify-center px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-purple-300 transition-all duration-200"
              >
                Learn More
                <span class="ml-2">→</span>
              </a>
            </div>
          </div>

          <!-- Hero Image -->
          <div class="order-1 lg:order-2 relative">
            <div
              class="relative z-10 bg-white rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Empowered women"
                class="w-full h-48 sm:h-64 lg:h-80 xl:h-96 object-cover rounded-xl"
              />
            </div>
            <!-- Floating decorative elements -->
            <div
              class="absolute -top-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full opacity-20 animate-pulse"
            ></div>
            <div
              class="absolute -bottom-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full opacity-20 animate-pulse"
              style="animation-delay: 1s"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div
            *ngFor="let stat of stats; let i = index"
            class="text-center transform hover:scale-105 transition-transform duration-200"
            [style.animation-delay]="i * 0.1 + 's'"
          >
            <div
              class="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6 shadow-lg"
            >
              <span
                class="text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl"
                >{{ stat.icon }}</span
              >
            </div>
            <h3
              class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-1 sm:mb-2"
            >
              {{ stat.number }}
            </h3>
            <p
              class="text-xs sm:text-sm lg:text-base text-gray-600 leading-tight"
            >
              {{ stat.label }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Programs Preview -->
    <section class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2
            class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6"
          >
            Our
            <span
              class="bg-gradient-to-r from-purple-600 via-cyan-500 to-green-500 bg-clip-text text-transparent"
              >Programs</span
            >
          </h2>
          <p
            class="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover how we're making a difference through our comprehensive
            programs designed to empower women at every stage of their journey.
          </p>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <div
            *ngFor="let program of programs; let i = index"
            class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 p-6 lg:p-8"
            [style.animation-delay]="i * 0.1 + 's'"
          >
            <div
              class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl flex items-center justify-center mb-4 lg:mb-6 shadow-lg"
            >
              <span class="text-white text-lg sm:text-xl lg:text-2xl">{{
                program.icon
              }}</span>
            </div>
            <h3
              class="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 lg:mb-4"
            >
              {{ program.title }}
            </h3>
            <p
              class="text-sm sm:text-base text-gray-600 mb-4 lg:mb-6 leading-relaxed"
            >
              {{ program.description }}
            </p>
            <a
              routerLink="/programs"
              class="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors duration-150 text-sm sm:text-base"
            >
              Learn More
              <span class="ml-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2
            class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6"
          >
            Stories of
            <span
              class="bg-gradient-to-r from-purple-600 via-cyan-500 to-green-500 bg-clip-text text-transparent"
              >Impact</span
            >
          </h2>
          <p
            class="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Hear from the incredible women whose lives have been transformed
            through our programs.
          </p>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <div
            *ngFor="let testimonial of testimonials; let i = index"
            class="bg-white rounded-xl shadow-md p-6 lg:p-8 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            [style.animation-delay]="i * 0.1 + 's'"
          >
            <div class="flex items-center mb-4 lg:mb-6">
              <div class="flex text-yellow-400 mb-2">
                <span
                  *ngFor="let star of [1, 2, 3, 4, 5]"
                  class="text-lg sm:text-xl"
                  >⭐</span
                >
              </div>
            </div>
            <p
              class="text-sm sm:text-base text-gray-600 mb-4 lg:mb-6 italic leading-relaxed"
            >
              "{{ testimonial.quote }}"
            </p>
            <div class="flex items-center">
              <img
                [src]="testimonial.image"
                [alt]="testimonial.name"
                class="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
              />
              <div>
                <h4 class="text-sm sm:text-base font-semibold text-gray-900">
                  {{ testimonial.name }}
                </h4>
                <p class="text-xs sm:text-sm text-purple-600 font-medium">
                  {{ testimonial.role }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section
      class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-cyan-500 text-white"
    >
      <div class="max-w-4xl mx-auto text-center">
        <h2
          class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6"
        >
          Ready to Make a Difference?
        </h2>
        <p
          class="text-base sm:text-lg lg:text-xl mb-8 lg:mb-10 opacity-90 leading-relaxed"
        >
          Join thousands of supporters who are helping us create a world where
          every woman has the opportunity to reach her full potential.
        </p>
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto"
        >
          <a
            routerLink="/donate"
            class="inline-flex items-center justify-center px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold bg-white text-purple-600 rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            <span class="mr-2">♥</span>
            Donate Now
          </a>
          <a
            routerLink="/contact"
            class="inline-flex items-center justify-center px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-200"
          >
            Get Involved
            <span class="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  `,
})
export class HomeComponent {
  stats = [
    { icon: "👥", number: "10,000+", label: "Women Empowered" },
    { icon: "🌍", number: "25", label: "Countries Reached" },
    { icon: "💼", number: "3,847", label: "Jobs Created" },
    { icon: "🏆", number: "95%", label: "Success Rate" },
  ];

  programs = [
    {
      icon: "📚",
      title: "Education & Skills",
      description:
        "Providing educational opportunities and skill development programs to help women build successful careers and achieve financial independence.",
    },
    {
      icon: "👥",
      title: "Community Support",
      description:
        "Building strong networks and support systems that connect women, foster mentorship, and create lasting bonds within our community.",
    },
    {
      icon: "📊",
      title: "Leadership Development",
      description:
        "Cultivating the next generation of women leaders through mentorship, training, and opportunities to make meaningful impact in their communities.",
    },
  ];

  testimonials = [
    {
      quote:
        "The Women's Foundation gave me the tools and confidence I needed to start my own business. I'm now employing 5 other women in my community.",
      name: "Sarah Johnson",
      role: "Entrepreneur",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      quote:
        "Through their leadership program, I found my voice and now serve on the city council. This foundation changes lives.",
      name: "Maria Rodriguez",
      role: "City Council Member",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      quote:
        "The education programs helped me complete my degree while working full-time. I'm now a software engineer at a tech company.",
      name: "Jennifer Chen",
      role: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
  ];
}
