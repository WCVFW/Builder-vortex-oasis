import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header
      class="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-pink-200 shadow-sm"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 lg:h-20">
          <!-- Logo -->
          <a routerLink="/" class="flex items-center flex-shrink-0">
            <!-- Logo Image -->
            <div class="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1594736797933-d0d2110d2d73?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
                alt="Women's Foundation Logo"
                class="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-pink-300 shadow-lg"
              />
              <!-- Backup gradient icon (hidden when image loads) -->
              <div
                class="hidden w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-pink-500 to-pink-400 rounded-xl shadow-lg flex items-center justify-center"
              >
                <span class="text-white text-lg sm:text-xl">💖</span>
              </div>
            </div>

            <!-- Company Name -->
            <div class="ml-3 sm:ml-4">
              <span
                class="text-lg sm:text-xl lg:text-2xl font-bold text-pink-600 hidden sm:block"
                >Women's Foundation</span
              >
              <span class="text-sm font-bold text-pink-600 sm:hidden">WF</span>
              <!-- Tagline -->
              <p class="text-xs text-pink-500 hidden lg:block font-medium">
                Empowering Women Worldwide
              </p>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <nav
            class="hidden lg:flex items-center justify-center flex-1 max-w-2xl mx-8"
          >
            <ul class="flex items-center justify-center space-x-1">
              <li>
                <a
                  routerLink="/"
                  routerLinkActive="bg-pink-100 text-pink-700 font-semibold"
                  [routerLinkActiveOptions]="{ exact: true }"
                  class="px-3 xl:px-4 py-2 text-sm xl:text-base font-medium rounded-lg text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-150"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  routerLink="/about"
                  routerLinkActive="bg-pink-100 text-pink-700 font-semibold"
                  class="px-3 xl:px-4 py-2 text-sm xl:text-base font-medium rounded-lg text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-150"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  routerLink="/programs"
                  routerLinkActive="bg-pink-100 text-pink-700 font-semibold"
                  class="px-3 xl:px-4 py-2 text-sm xl:text-base font-medium rounded-lg text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-150"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  routerLink="/impact"
                  routerLinkActive="bg-pink-100 text-pink-700 font-semibold"
                  class="px-3 xl:px-4 py-2 text-sm xl:text-base font-medium rounded-lg text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-150"
                >
                  Impact
                </a>
              </li>
              <li>
                <a
                  routerLink="/contact"
                  routerLinkActive="bg-pink-100 text-pink-700 font-semibold"
                  class="px-3 xl:px-4 py-2 text-sm xl:text-base font-medium rounded-lg text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-150"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <!-- Desktop Donate Button -->
          <div class="hidden lg:flex">
            <a
              routerLink="/donate"
              class="inline-flex items-center px-4 xl:px-6 py-2 xl:py-3 text-sm xl:text-base font-semibold text-white bg-gradient-to-r from-pink-500 to-pink-400 rounded-lg hover:from-pink-600 hover:to-pink-500 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl animate-pink-glow"
            >
              <span class="mr-1 xl:mr-2">💖</span>
              Donate
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button
            (click)="toggleMobileMenu()"
            class="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-colors duration-150"
            [attr.aria-expanded]="isMobileMenuOpen"
            aria-label="Toggle navigation menu"
          >
            <svg
              class="h-6 w-6"
              [class.hidden]="isMobileMenuOpen"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              class="h-6 w-6"
              [class.hidden]="!isMobileMenuOpen"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation Menu -->
        <div
          class="lg:hidden transition-all duration-300 ease-in-out"
          [class.max-h-0]="!isMobileMenuOpen"
          [class.max-h-96]="isMobileMenuOpen"
          [class.opacity-0]="!isMobileMenuOpen"
          [class.opacity-100]="isMobileMenuOpen"
          style="overflow: hidden;"
        >
          <div
            class="px-2 pt-2 pb-6 space-y-1 bg-white border-t border-pink-200"
          >
            <a
              routerLink="/"
              routerLinkActive="bg-pink-100 text-pink-700 font-semibold"
              [routerLinkActiveOptions]="{ exact: true }"
              (click)="closeMobileMenu()"
              class="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg transition-colors duration-150"
            >
              🏠 Home
            </a>
            <a
              routerLink="/about"
              routerLinkActive="bg-pink-100 text-pink-700 font-semibold"
              (click)="closeMobileMenu()"
              class="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg transition-colors duration-150"
            >
              👥 About
            </a>
            <a
              routerLink="/programs"
              routerLinkActive="bg-pink-100 text-pink-700 font-semibold"
              (click)="closeMobileMenu()"
              class="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg transition-colors duration-150"
            >
              📚 Programs
            </a>
            <a
              routerLink="/impact"
              routerLinkActive="bg-pink-100 text-pink-700 font-semibold"
              (click)="closeMobileMenu()"
              class="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg transition-colors duration-150"
            >
              📊 Impact
            </a>
            <a
              routerLink="/contact"
              routerLinkActive="bg-pink-100 text-pink-700 font-semibold"
              (click)="closeMobileMenu()"
              class="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg transition-colors duration-150"
            >
              📧 Contact
            </a>
            <div class="pt-4 border-t border-pink-200">
              <a
                routerLink="/donate"
                (click)="closeMobileMenu()"
                class="block w-full text-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-pink-500 to-pink-400 rounded-lg hover:from-pink-600 hover:to-pink-500 transition-all duration-200 shadow-lg"
              >
                💖 Donate Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
