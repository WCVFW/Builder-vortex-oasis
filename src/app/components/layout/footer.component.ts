import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <footer class="bg-gray-900 text-white">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      >
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          <!-- About Section -->
          <div class="sm:col-span-2 lg:col-span-2">
            <div class="flex items-center mb-4 lg:mb-6">
              <div
                class="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl"
              >
                <span class="text-white text-lg sm:text-xl">♥</span>
              </div>
              <span
                class="ml-2 sm:ml-3 text-lg sm:text-xl lg:text-2xl font-bold text-white"
                >Women's Foundation</span
              >
            </div>
            <p
              class="text-sm sm:text-base text-gray-300 mb-6 lg:mb-8 max-w-md leading-relaxed"
            >
              Empowering women through education, support, and community
              building. Together, we create opportunities and break barriers for
              a more equitable future.
            </p>

            <!-- Social Media Links -->
            <div class="flex space-x-4 lg:space-x-6">
              <a
                href="#"
                class="text-gray-400 hover:text-purple-400 transition-colors duration-200 transform hover:scale-110"
                aria-label="Facebook"
              >
                <span class="text-xl sm:text-2xl">📘</span>
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-purple-400 transition-colors duration-200 transform hover:scale-110"
                aria-label="Twitter"
              >
                <span class="text-xl sm:text-2xl">🐦</span>
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-purple-400 transition-colors duration-200 transform hover:scale-110"
                aria-label="Instagram"
              >
                <span class="text-xl sm:text-2xl">📷</span>
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-purple-400 transition-colors duration-200 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <span class="text-xl sm:text-2xl">💼</span>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3
              class="text-base sm:text-lg lg:text-xl font-semibold mb-4 lg:mb-6 text-white"
            >
              Quick Links
            </h3>
            <ul class="space-y-2 lg:space-y-3">
              <li>
                <a
                  routerLink="/about"
                  class="text-sm sm:text-base text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center group"
                >
                  <span
                    class="mr-2 group-hover:mr-3 transition-all duration-200"
                    >👥</span
                  >
                  About Us
                </a>
              </li>
              <li>
                <a
                  routerLink="/programs"
                  class="text-sm sm:text-base text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center group"
                >
                  <span
                    class="mr-2 group-hover:mr-3 transition-all duration-200"
                    >📚</span
                  >
                  Programs
                </a>
              </li>
              <li>
                <a
                  routerLink="/impact"
                  class="text-sm sm:text-base text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center group"
                >
                  <span
                    class="mr-2 group-hover:mr-3 transition-all duration-200"
                    >📊</span
                  >
                  Our Impact
                </a>
              </li>
              <li>
                <a
                  routerLink="/donate"
                  class="text-sm sm:text-base text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center group"
                >
                  <span
                    class="mr-2 group-hover:mr-3 transition-all duration-200"
                    >♥</span
                  >
                  Donate
                </a>
              </li>
              <li>
                <a
                  routerLink="/contact"
                  class="text-sm sm:text-base text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center group"
                >
                  <span
                    class="mr-2 group-hover:mr-3 transition-all duration-200"
                    >📧</span
                  >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3
              class="text-base sm:text-lg lg:text-xl font-semibold mb-4 lg:mb-6 text-white"
            >
              Contact Info
            </h3>
            <div class="space-y-3 lg:space-y-4">
              <div class="flex items-start group">
                <span
                  class="text-purple-400 mr-2 sm:mr-3 mt-1 group-hover:scale-110 transition-transform duration-200"
                  >📧</span
                >
                <div>
                  <p class="text-sm sm:text-base text-gray-300">
                    info&#64;womensfoundation.org
                  </p>
                  <p class="text-xs sm:text-sm text-gray-500">
                    We respond within 24 hours
                  </p>
                </div>
              </div>
              <div class="flex items-start group">
                <span
                  class="text-purple-400 mr-2 sm:mr-3 mt-1 group-hover:scale-110 transition-transform duration-200"
                  >📞</span
                >
                <div>
                  <p class="text-sm sm:text-base text-gray-300">
                    +1 (555) 123-4567
                  </p>
                  <p class="text-xs sm:text-sm text-gray-500">
                    Mon-Fri, 9AM-6PM EST
                  </p>
                </div>
              </div>
              <div class="flex items-start group">
                <span
                  class="text-purple-400 mr-2 sm:mr-3 mt-1 group-hover:scale-110 transition-transform duration-200"
                  >📍</span
                >
                <div>
                  <p class="text-sm sm:text-base text-gray-300 leading-relaxed">
                    123 Foundation St.<br />
                    Hope City, HC 12345<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Newsletter Signup -->
        <div
          class="border-t border-gray-700 mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 lg:pt-12"
        >
          <div class="max-w-2xl mx-auto text-center">
            <h4
              class="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-2 sm:mb-4"
            >
              Stay Updated
            </h4>
            <p class="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
              Get the latest news about our programs and impact stories.
            </p>
            <div
              class="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                class="flex-1 px-4 py-2 sm:py-3 text-sm sm:text-base text-gray-900 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                class="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg hover:from-purple-700 hover:to-cyan-600 transform hover:scale-105 transition-all duration-200"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div
            class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
          >
            <p
              class="text-xs sm:text-sm text-gray-400 text-center sm:text-left"
            >
              © {{ currentYear }} Women's Foundation. All rights reserved.
            </p>
            <div
              class="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4"
            >
              <div class="flex items-center text-xs sm:text-sm text-purple-400">
                <span>Made with</span>
                <span class="mx-1 text-red-500 animate-pulse">♥</span>
                <span>for women everywhere</span>
              </div>
              <div class="flex space-x-4 text-xs sm:text-sm">
                <a
                  href="#"
                  class="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  class="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
