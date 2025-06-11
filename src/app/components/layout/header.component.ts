import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header
      [class]="
        'fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-pink-200 shadow-sm transition-transform duration-300 ease-in-out ' +
        (isHeaderVisible ? 'translate-y-0' : '-translate-y-full')
      "
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 lg:h-20">
          <!-- Logo -->
          <a routerLink="/" class="flex items-center flex-shrink-0">
            <!-- Logo Image -->
            <div class="flex items-center">
              <!-- Primary Logo (JPG) -->
              <img
                src="assets/images/logo.jpg"
                alt="Women's Foundation Logo"
                class="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shadow-lg transition-transform duration-200 hover:scale-110"
                (error)="onLogoError($event)"
              />

              <!-- Fallback Logo (SVG) - Hidden by default -->
              <img
                #fallbackSvg
                src="assets/images/logo.svg"
                alt="Women's Foundation Logo"
                class="hidden w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shadow-lg transition-transform duration-200 hover:scale-110"
                (error)="onSvgFallbackError($event)"
              />

              <!-- Second Fallback Logo (PNG) - Hidden by default -->
              <img
                #fallbackPng
                src="assets/images/logo.png"
                alt="Women's Foundation Logo"
                class="hidden w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-pink-300 shadow-lg transition-transform duration-200 hover:scale-110"
                (error)="onPngFallbackError($event)"
              />

              <!-- Final Fallback - Gradient Icon -->
              <div
                #gradientFallback
                class="hidden w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-110"
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
export class HeaderComponent implements OnInit, OnDestroy {
  isMobileMenuOpen = false;
  isHeaderVisible = true;
  lastScrollTop = 0;
  scrollThreshold = 5; // Minimum scroll distance before hiding/showing

  ngOnInit() {
    // Initial scroll position
    this.lastScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
  }

  ngOnDestroy() {
    // Cleanup if needed
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    // Always show header when at the top of the page
    if (currentScrollTop <= 50) {
      this.isHeaderVisible = true;
      this.lastScrollTop = currentScrollTop;
      return;
    }

    // Check scroll direction and distance
    const scrollDifference = Math.abs(currentScrollTop - this.lastScrollTop);

    if (scrollDifference > this.scrollThreshold) {
      if (currentScrollTop > this.lastScrollTop) {
        // Scrolling down - hide header
        this.isHeaderVisible = false;
        this.closeMobileMenu(); // Close mobile menu when hiding
      } else {
        // Scrolling up - show header
        this.isHeaderVisible = true;
      }

      this.lastScrollTop = currentScrollTop;
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  // Enhanced error handling for logo images with multiple fallbacks
  onLogoError(event: any) {
    console.log("Primary logo (JPG) failed to load, trying SVG fallback");
    // Hide the primary logo and show the SVG fallback
    event.target.style.display = "none";
    const fallbackSvg = event.target.nextElementSibling;
    if (fallbackSvg) {
      fallbackSvg.classList.remove("hidden");
    }
  }

  onSvgFallbackError(event: any) {
    console.log("SVG fallback failed to load, trying PNG fallback");
    // Hide the SVG fallback and show the PNG fallback
    event.target.style.display = "none";
    const fallbackPng = event.target.nextElementSibling;
    if (fallbackPng) {
      fallbackPng.classList.remove("hidden");
    }
  }

  onPngFallbackError(event: any) {
    console.log("PNG fallback failed to load, showing gradient fallback");
    // Hide the PNG fallback and show the gradient icon
    event.target.style.display = "none";
    const gradientFallback = event.target.nextElementSibling;
    if (gradientFallback) {
      gradientFallback.classList.remove("hidden");
    }
  }
}
