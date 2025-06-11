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
        class="relative py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center bg-gradient-to-br from-pink-50 via-white to-rose-50 overflow-hidden"
        style="background-image: linear-gradient(rgba(108, 105, 106, 0.4), rgba(28, 26, 26, 0.6)), url('assets/images/hero-background.jpg'); background-size: cover; background-position: center; background-attachment: fixed;"
      >
        <!-- Floating background elements -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            class="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-300/20 rounded-full blur-xl animate-pulse"
          ></div>
          <div
            class="absolute top-3/4 right-1/4 w-48 h-48 bg-rose-300/20 rounded-full blur-xl animate-pulse"
            style="animation-delay: 1s;"
          ></div>
          <div
            class="absolute bottom-1/4 left-1/3 w-24 h-24 bg-pink-400/20 rounded-full blur-xl animate-pulse"
            style="animation-delay: 2s;"
          ></div>
        </div>

        <div class="max-w-5xl mx-auto relative z-10">
          <!-- Centered Content -->
          <div class="text-center">
            <h1
  class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6 text-white drop-shadow-lg whitespace-nowrap overflow-hidden text-ellipsis"
>
  Empowering
  <span class="bg-gradient-to-r from-pink-800 via-pink-400 to-purple-400 bg-clip-text text-transparent">
    Women
  </span>
  to Change the World
</h1>

            <p
              class="text-sm sm:text-base lg:text-lg xl:text-xl text-white mb-6 sm:mb-8 lg:mb-10 max-w-4xl mx-auto drop-shadow-md opacity-90 leading-relaxed"
            >
              When women seize employment and business opportunities, they not only transform their own lives but also uplift future generations. While education is vital, access to income opportunities is even more critical.
            </p>

            <!-- Expandable Content -->
            <div
              *ngIf="showMoreContent"
              class="mb-6 sm:mb-8 lg:mb-10 p-4 sm:p-6 lg:p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 max-w-3xl mx-auto"
            >
              <p
                class="text-white text-sm sm:text-base lg:text-lg leading-relaxed mb-4 opacity-90"
              >
                The We Can Voice for Women Foundation is at the forefront of creating these life-changing prospects.

Our mission is to empower 500 women from grassroots communities each year, enabling them to make a significant mark in the business world. To realize this vision, we are forging partnerships with government institutions and private companies to provide targeted vocational training for women. We are dedicated to identifying and uplifting women from underprivileged families across Tamil Nadu who are eagerly seeking employment, providing them with the skills they need to thrive.

Moreover, we invite institutions, volunteers, and entrepreneurs who share our vision of igniting a business revolution among women in Tamil Nadu to join us by entering into a Memorandum of Understanding. Together, we can create a brighter, more equitable future for women and their communities.
              </p>
              <p
                class="text-white text-sm sm:text-base lg:text-lg leading-relaxed opacity-90"
              >
                Since our founding, we've reached over 10,000 women across 25
                countries, created 3,847 jobs, and maintained a 95% success rate
                in our programs. Every donation directly supports these
                initiatives, providing scholarships, resources, and mentorship
                opportunities that transform lives.
              </p>
            </div>

            <div
              class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-2xl mx-auto"
            >
              <a
                routerLink="/donate"
                class="group relative inline-flex items-center justify-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold text-white bg-gradient-to-r from-pink-500 via-pink-400 to-rose-400 rounded-lg hover:from-pink-600 hover:via-pink-500 hover:to-rose-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-500/50 border border-pink-300 animate-pulse min-w-[180px] sm:min-w-[200px] lg:min-w-[220px]"
                style="animation-duration: 2s; animation-iteration-count: infinite;"
              >
                <span
                  class="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-600 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></span>
                <span class="relative flex items-center justify-center w-full">
                  <span
                    class="mr-2 sm:mr-3 text-base sm:text-lg"
                    style="color: #ffffff !important;"
                    >🤍</span
                  >
                  <span class="tracking-wide font-bold">MAKE A DONATION</span>
                </span>
                <div
                  class="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-500 to-rose-400 blur-sm opacity-50 -z-10 group-hover:blur-md group-hover:opacity-75 transition-all duration-300"
                ></div>
              </a>
              <button
                (click)="toggleMoreContent()"
                class="group inline-flex items-center justify-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold text-white bg-white/30 backdrop-blur-md border-2 border-white/60 rounded-lg hover:bg-white/40 hover:border-white/80 transform hover:scale-105 transition-all duration-300 shadow-lg min-w-[160px] sm:min-w-[180px] lg:min-w-[200px]"
              >
                <span class="tracking-wide font-bold">{{
                  showMoreContent ? "SHOW LESS" : "READ MORE"
                }}</span>
                <span
                  class="ml-2 sm:ml-3 text-base sm:text-lg group-hover:translate-x-1 transition-transform duration-300"
                  >{{ showMoreContent ? "↑" : "→" }}</span
                >
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section
        class=" hidden py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-500/80 via-pink-400/80 to-rose-400/80"
      >
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div
              *ngFor="let stat of stats; let i = index"
              class="text-center transform hover:scale-105 transition-transform duration-200"
              [style.animation-delay]="i * 0.1 + 's'"
            >
              <div
                class="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 shadow-lg shadow-pink-200"
              >
                <span
                  class="text-white text-sm sm:text-base lg:text-lg xl:text-xl"
                  [style.color]="stat.icon === '🤍' ? '#ffffff' : 'white'"
                  >{{ stat.icon }}</span
                >
              </div>
              <h3
                class="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg"
              >
                {{ stat.number }}
              </h3>
              <p
                class="text-xs sm:text-sm lg:text-base text-white/90 leading-tight drop-shadow-md"
              >
                {{ stat.label }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Programs Preview -->
      <section class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-pink-50">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2
              class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 lg:mb-5"
            >
              Our
              <span
                class="bg-gradient-to-r from-pink-500 via-pink-400 to-rose-400 bg-clip-text text-transparent"
                >Programs</span
              >
            </h2>
            <p
              class="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto"
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
              class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 p-6 lg:p-8 border border-pink-100"
              [style.animation-delay]="i * 0.1 + 's'"
            >
              <div
                class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-pink-400 rounded-lg flex items-center justify-center mb-3 lg:mb-4 shadow-lg shadow-pink-200"
              >
                <span class="text-white text-sm sm:text-base lg:text-lg">{{
                  program.icon
                }}</span>
              </div>
              <h3
                class="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-2 lg:mb-3"
              >
                {{ program.title }}
              </h3>
              <p
                class="text-xs sm:text-sm text-gray-600 mb-3 lg:mb-4 leading-relaxed"
              >
                {{ program.description }}
              </p>
              <a
                routerLink="/programs"
                class="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700 transition-colors duration-150 text-sm sm:text-base"
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
              class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 lg:mb-5"
            >
              Stories of
              <span
                class="bg-gradient-to-r from-pink-500 via-pink-400 to-rose-400 bg-clip-text text-transparent"
                >Impact</span
              >
            </h2>
            <p
              class="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto"
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
              class="bg-white rounded-xl shadow-md p-6 lg:p-8 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-pink-100"
              [style.animation-delay]="i * 0.1 + 's'"
            >
              <div class="flex items-center mb-4 lg:mb-6">
                <div class="flex text-pink-400 mb-2">
                  <span
                    *ngFor="let star of [1, 2, 3, 4, 5]"
                    class="text-sm sm:text-base"
                    style="color: #ffffff !important;"
                    >💗</span
                  >
                </div>
              </div>
              <p
                class="text-xs sm:text-sm text-gray-600 mb-3 lg:mb-4 italic leading-relaxed"
              >
                "{{ testimonial.quote }}"
              </p>
              <div class="flex items-center">
                <img
                  [src]="testimonial.image"
                  [alt]="testimonial.name"
                  class="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover mr-2 sm:mr-3 border-2 border-pink-200"
                />
                <div>
                  <h4 class="text-xs sm:text-sm font-semibold text-gray-900">
                    {{ testimonial.name }}
                  </h4>
                  <p class="text-xs text-pink-600 font-medium">
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
        class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500 to-pink-400 text-white"
      >
        <div class="max-w-4xl mx-auto text-center">
          <h2
            class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6"
          >
            Ready to Make a Difference?
          </h2>
          <p
            class="text-sm sm:text-base lg:text-lg xl:text-xl mb-4 sm:mb-6 lg:mb-8 opacity-90 leading-relaxed"
          >
            Join thousands of supporters who are helping us create a world where
            every woman has the opportunity to reach her full potential.
          </p>
          <div
            class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-xl mx-auto"
          >
            <a
              routerLink="/donate"
              class="group relative inline-flex items-center justify-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold bg-white text-pink-600 rounded-lg hover:bg-pink-50 transform hover:scale-105 transition-all duration-300 shadow-lg border border-white/50 animate-bounce min-w-[140px] sm:min-w-[160px] lg:min-w-[180px]"
            >
              <span
                class="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
              ></span>
              <span class="relative flex items-center justify-center w-full">
                <span
                  class="mr-2 sm:mr-3 text-base sm:text-lg"
                  style="color: #ffffff !important;"
                  >💗</span
                >
                <span class="tracking-wide font-bold">DONATE NOW</span>
              </span>
              <div
                class="absolute inset-0 rounded-lg bg-white blur-sm opacity-50 -z-10 group-hover:blur-md group-hover:opacity-75 transition-all duration-300"
              ></div>
            </a>
            <a
              routerLink="/contact"
              class="group inline-flex items-center justify-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold border-2 border-white text-white rounded-lg hover:bg-white hover:text-pink-600 transition-all duration-300 backdrop-blur-sm bg-white/10 min-w-[140px] sm:min-w-[160px] lg:min-w-[180px]"
            >
              <span class="tracking-wide font-bold">GET INVOLVED</span>
              <span
                class="ml-2 sm:ml-3 text-base sm:text-lg group-hover:translate-x-1 transition-transform duration-300"
                >→</span
              >
            </a>
          </div>
        </div>
      </section>

      <!-- Floating Action Buttons - Always Visible -->
      <div
        class="fixed bottom-4 sm:bottom-6 right-3 sm:right-4 lg:right-6 z-40 flex flex-col gap-2 sm:gap-3"
      >
        <!-- Donate FAB -->
        <a
          routerLink="/donate"
          class="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full shadow-lg hover:shadow-pink-500/50 transform hover:scale-110 transition-all duration-300 animate-pulse"
          title="Make a Donation"
        >
          <span
            class="text-white text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300"
            style="color: #ffffff !important;"
            >💗</span
          >
        </a>

        <!-- Contact FAB -->
        <a
          routerLink="/contact"
          class="group flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/90 backdrop-blur-sm border-2 border-pink-300 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          title="Contact Us"
        >
          <span
            class="text-pink-600 text-sm sm:text-base lg:text-lg group-hover:scale-110 transition-transform duration-300"
            >📧</span
          >
        </a>
      </div>
    `,
  })
  export class HomeComponent {
    showMoreContent = false;

    toggleMoreContent() {
      this.showMoreContent = !this.showMoreContent;
    }

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
