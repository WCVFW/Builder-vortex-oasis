import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import {
  LucideAngularModule,
  Heart,
  Target,
  Eye,
  Users,
  Award,
  Globe,
} from "lucide-angular";

@Component({
  selector: "app-about",
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
            About <span class="gradient-text">Women's Foundation</span>
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
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="animate-fade-in-up">
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
            <a routerLink="/impact" class="btn-primary btn-primary-gradient">
              See Our Impact
            </a>
          </div>
          <div class="relative">
            <img
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Women working together"
              class="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Mission, Vision, Values -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Mission -->
          <div class="text-center animate-fade-in-up">
            <div
              class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <lucide-icon
                name="target"
                class="w-8 h-8 text-white"
              ></lucide-icon>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p class="text-gray-600">
              To empower women through education, support, and community
              building, creating pathways to economic independence and
              leadership opportunities.
            </p>
          </div>

          <!-- Vision -->
          <div
            class="text-center animate-fade-in-up"
            style="animation-delay: 0.1s"
          >
            <div
              class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <lucide-icon name="eye" class="w-8 h-8 text-white"></lucide-icon>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p class="text-gray-600">
              A world where every woman has equal access to opportunities, where
              gender is never a barrier to success, and where women lead
              positive change globally.
            </p>
          </div>

          <!-- Values -->
          <div
            class="text-center animate-fade-in-up"
            style="animation-delay: 0.2s"
          >
            <div
              class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <lucide-icon
                name="heart"
                class="w-8 h-8 text-white"
              ></lucide-icon>
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
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span class="gradient-text">Leadership Team</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Our diverse team of leaders brings decades of experience in
            advocacy, business, education, and community development.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card p-6 text-center animate-fade-in-up">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="Dr. Sarah Williams"
              class="w-32 h-32 rounded-full object-cover mx-auto mb-4"
            />
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Dr. Sarah Williams
            </h3>
            <p class="text-purple-600 font-medium mb-3">CEO & Founder</p>
            <p class="text-gray-600 text-sm">
              Former UN Women advocate with 20+ years experience in
              international development and women's rights advocacy.
            </p>
          </div>

          <div
            class="card p-6 text-center animate-fade-in-up"
            style="animation-delay: 0.1s"
          >
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="Maria Rodriguez"
              class="w-32 h-32 rounded-full object-cover mx-auto mb-4"
            />
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Maria Rodriguez
            </h3>
            <p class="text-purple-600 font-medium mb-3">Director of Programs</p>
            <p class="text-gray-600 text-sm">
              Education specialist who has designed and implemented programs
              that have reached over 5,000 women across Latin America.
            </p>
          </div>

          <div
            class="card p-6 text-center animate-fade-in-up"
            style="animation-delay: 0.2s"
          >
            <img
              src="https://images.unsplash.com/photo-1594736797933-d0d2110d2d73?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="Jennifer Chen"
              class="w-32 h-32 rounded-full object-cover mx-auto mb-4"
            />
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Jennifer Chen
            </h3>
            <p class="text-purple-600 font-medium mb-3">Head of Technology</p>
            <p class="text-gray-600 text-sm">
              Tech entrepreneur and former Silicon Valley executive, leading our
              digital initiatives and online learning platforms.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Achievements -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span class="gradient-text">Achievements</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognition and milestones that reflect our commitment to women's
            empowerment.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center animate-fade-in-up">
            <div
              class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <lucide-icon
                name="award"
                class="w-8 h-8 text-white"
              ></lucide-icon>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">2023</h3>
            <p class="text-gray-600">UN Women Partnership Award</p>
          </div>

          <div
            class="text-center animate-fade-in-up"
            style="animation-delay: 0.1s"
          >
            <div
              class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <lucide-icon
                name="globe"
                class="w-8 h-8 text-white"
              ></lucide-icon>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">2022</h3>
            <p class="text-gray-600">Global Impact Innovation Prize</p>
          </div>

          <div
            class="text-center animate-fade-in-up"
            style="animation-delay: 0.2s"
          >
            <div
              class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <lucide-icon
                name="users"
                class="w-8 h-8 text-white"
              ></lucide-icon>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">2021</h3>
            <p class="text-gray-600">Community Excellence Recognition</p>
          </div>

          <div
            class="text-center animate-fade-in-up"
            style="animation-delay: 0.3s"
          >
            <div
              class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <lucide-icon
                name="heart"
                class="w-8 h-8 text-white"
              ></lucide-icon>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">2020</h3>
            <p class="text-gray-600">Humanitarian Leadership Award</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section
      class="section-padding bg-gradient-to-r from-purple-600 to-cyan-500 text-white"
    >
      <div class="container-max text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Join Our Mission</h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Whether through volunteering, donating, or partnering with us, there
          are many ways to be part of our mission to empower women.
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
            Contact Us
          </a>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
  readonly Heart = Heart;
  readonly Target = Target;
  readonly Eye = Eye;
  readonly Users = Users;
  readonly Award = Award;
  readonly Globe = Globe;
}
