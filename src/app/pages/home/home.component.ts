import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import {
  LucideAngularModule,
  Heart,
  Users,
  BookOpen,
  BarChart3,
  ArrowRight,
  Star,
  Award,
  Globe,
} from "lucide-angular";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  template: `
    <!-- Hero Section -->
    <section
      class="section-padding bg-gradient-to-br from-purple-50 via-white to-cyan-50"
    >
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="animate-fade-in-up">
            <h1
              class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Empowering
              <span class="gradient-text">Women</span>
              to Change the World
            </h1>
            <p class="text-lg text-gray-600 mb-8 max-w-lg">
              Join our mission to create opportunities, break barriers, and
              build a more equitable future for women everywhere through
              education, support, and community building.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a routerLink="/donate" class="btn-primary btn-primary-gradient">
                <lucide-icon name="heart" class="w-5 h-5 mr-2"></lucide-icon>
                Make a Donation
              </a>
              <a routerLink="/programs" class="btn-secondary">
                Learn More
                <lucide-icon
                  name="arrow-right"
                  class="w-5 h-5 ml-2"
                ></lucide-icon>
              </a>
            </div>
          </div>
          <div class="relative animate-fade-in">
            <div class="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Empowered women"
                class="w-full h-80 object-cover rounded-xl"
              />
            </div>
            <!-- Floating elements -->
            <div
              class="absolute -top-6 -left-6 w-24 h-24 gradient-bg rounded-full opacity-20 animate-pulse"
            ></div>
            <div
              class="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full opacity-20 animate-pulse"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div
            class="text-center animate-fade-in-up"
            style="animation-delay: 0.1s"
          >
            <div
              class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <lucide-icon
                name="users"
                class="w-8 h-8 text-white"
              ></lucide-icon>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-2">10,000+</h3>
            <p class="text-gray-600">Women Empowered</p>
          </div>
          <div
            class="text-center animate-fade-in-up"
            style="animation-delay: 0.2s"
          >
            <div
              class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <lucide-icon
                name="book-open"
                class="w-8 h-8 text-white"
              ></lucide-icon>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-2">50+</h3>
            <p class="text-gray-600">Programs Launched</p>
          </div>
          <div
            class="text-center animate-fade-in-up"
            style="animation-delay: 0.3s"
          >
            <div
              class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <lucide-icon
                name="globe"
                class="w-8 h-8 text-white"
              ></lucide-icon>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-2">25</h3>
            <p class="text-gray-600">Countries Reached</p>
          </div>
          <div
            class="text-center animate-fade-in-up"
            style="animation-delay: 0.4s"
          >
            <div
              class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <lucide-icon
                name="award"
                class="w-8 h-8 text-white"
              ></lucide-icon>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-2">95%</h3>
            <p class="text-gray-600">Success Rate</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Programs Preview -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span class="gradient-text">Programs</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how we're making a difference through our comprehensive
            programs designed to empower women at every stage of their journey.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card p-8 text-center animate-fade-in-up">
            <div
              class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <lucide-icon
                name="book-open"
                class="w-8 h-8 text-white"
              ></lucide-icon>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Education & Skills
            </h3>
            <p class="text-gray-600 mb-6">
              Providing educational opportunities and skill development programs
              to help women build successful careers and achieve financial
              independence.
            </p>
            <a
              routerLink="/programs"
              class="text-purple-600 font-medium hover:text-purple-700 inline-flex items-center"
            >
              Learn More
              <lucide-icon
                name="arrow-right"
                class="w-4 h-4 ml-1"
              ></lucide-icon>
            </a>
          </div>

          <div
            class="card p-8 text-center animate-fade-in-up"
            style="animation-delay: 0.1s"
          >
            <div
              class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <lucide-icon
                name="users"
                class="w-8 h-8 text-white"
              ></lucide-icon>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Community Support
            </h3>
            <p class="text-gray-600 mb-6">
              Building strong networks and support systems that connect women,
              foster mentorship, and create lasting bonds within our community.
            </p>
            <a
              routerLink="/programs"
              class="text-purple-600 font-medium hover:text-purple-700 inline-flex items-center"
            >
              Learn More
              <lucide-icon
                name="arrow-right"
                class="w-4 h-4 ml-1"
              ></lucide-icon>
            </a>
          </div>

          <div
            class="card p-8 text-center animate-fade-in-up"
            style="animation-delay: 0.2s"
          >
            <div
              class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <lucide-icon
                name="bar-chart-3"
                class="w-8 h-8 text-white"
              ></lucide-icon>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Leadership Development
            </h3>
            <p class="text-gray-600 mb-6">
              Cultivating the next generation of women leaders through
              mentorship, training, and opportunities to make meaningful impact
              in their communities.
            </p>
            <a
              routerLink="/programs"
              class="text-purple-600 font-medium hover:text-purple-700 inline-flex items-center"
            >
              Learn More
              <lucide-icon
                name="arrow-right"
                class="w-4 h-4 ml-1"
              ></lucide-icon>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stories of <span class="gradient-text">Impact</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from the incredible women whose lives have been transformed
            through our programs.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card p-6 animate-fade-in-up">
            <div class="flex items-center mb-4">
              <div *ngFor="let star of [1, 2, 3, 4, 5]" class="text-yellow-400">
                <lucide-icon
                  name="star"
                  class="w-5 h-5 fill-current"
                ></lucide-icon>
              </div>
            </div>
            <p class="text-gray-600 mb-6">
              "The Women's Foundation gave me the tools and confidence I needed
              to start my own business. I'm now employing 5 other women in my
              community."
            </p>
            <div class="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                alt="Sarah Johnson"
                class="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 class="font-semibold text-gray-900">Sarah Johnson</h4>
                <p class="text-sm text-gray-500">Entrepreneur</p>
              </div>
            </div>
          </div>

          <div
            class="card p-6 animate-fade-in-up"
            style="animation-delay: 0.1s"
          >
            <div class="flex items-center mb-4">
              <div *ngFor="let star of [1, 2, 3, 4, 5]" class="text-yellow-400">
                <lucide-icon
                  name="star"
                  class="w-5 h-5 fill-current"
                ></lucide-icon>
              </div>
            </div>
            <p class="text-gray-600 mb-6">
              "Through their leadership program, I found my voice and now serve
              on the city council. This foundation changes lives."
            </p>
            <div class="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                alt="Maria Rodriguez"
                class="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 class="font-semibold text-gray-900">Maria Rodriguez</h4>
                <p class="text-sm text-gray-500">City Council Member</p>
              </div>
            </div>
          </div>

          <div
            class="card p-6 animate-fade-in-up"
            style="animation-delay: 0.2s"
          >
            <div class="flex items-center mb-4">
              <div *ngFor="let star of [1, 2, 3, 4, 5]" class="text-yellow-400">
                <lucide-icon
                  name="star"
                  class="w-5 h-5 fill-current"
                ></lucide-icon>
              </div>
            </div>
            <p class="text-gray-600 mb-6">
              "The education programs helped me complete my degree while working
              full-time. I'm now a software engineer at a tech company."
            </p>
            <div class="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                alt="Jennifer Chen"
                class="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 class="font-semibold text-gray-900">Jennifer Chen</h4>
                <p class="text-sm text-gray-500">Software Engineer</p>
              </div>
            </div>
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
          Ready to Make a Difference?
        </h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Join thousands of supporters who are helping us create a world where
          every woman has the opportunity to reach her full potential.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            routerLink="/donate"
            class="btn-primary bg-white text-purple-600 hover:bg-gray-100"
          >
            <lucide-icon name="heart" class="w-5 h-5 mr-2"></lucide-icon>
            Donate Now
          </a>
          <a
            routerLink="/contact"
            class="btn-secondary border-white text-white hover:bg-white hover:text-purple-600"
          >
            Get Involved
            <lucide-icon name="arrow-right" class="w-5 h-5 ml-2"></lucide-icon>
          </a>
        </div>
      </div>
    </section>
  `,
})
export class HomeComponent {
  readonly Heart = Heart;
  readonly Users = Users;
  readonly BookOpen = BookOpen;
  readonly BarChart3 = BarChart3;
  readonly ArrowRight = ArrowRight;
  readonly Star = Star;
  readonly Award = Award;
  readonly Globe = Globe;
}
