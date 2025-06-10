import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <footer class="bg-gray-900 text-white">
      <div class="max-w-6xl mx-auto px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- About Section -->
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center mb-4">
              <div
                class="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl"
              >
                <span class="text-white">♥</span>
              </div>
              <span class="ml-2 text-xl font-bold text-white"
                >Women's Foundation</span
              >
            </div>
            <p class="text-gray-300 mb-6 max-w-md">
              Empowering women through education, support, and community
              building. Together, we create opportunities and break barriers for
              a more equitable future.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li>
                <a
                  routerLink="/about"
                  class="text-gray-300 hover:text-purple-400 transition-colors"
                  >About Us</a
                >
              </li>
              <li>
                <a
                  routerLink="/programs"
                  class="text-gray-300 hover:text-purple-400 transition-colors"
                  >Programs</a
                >
              </li>
              <li>
                <a
                  routerLink="/impact"
                  class="text-gray-300 hover:text-purple-400 transition-colors"
                  >Our Impact</a
                >
              </li>
              <li>
                <a
                  routerLink="/donate"
                  class="text-gray-300 hover:text-purple-400 transition-colors"
                  >Donate</a
                >
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Contact Info</h3>
            <div class="space-y-3">
              <div class="flex items-center">
                <span class="text-gray-300">info&#64;womensfoundation.org</span>
              </div>
              <div class="flex items-center">
                <span class="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div class="flex items-start">
                <span class="text-gray-300"
                  >123 Foundation St.<br />Hope City, HC 12345</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-gray-700 mt-12 pt-8 text-center">
          <p class="text-gray-400">
            © {{ currentYear }} Women's Foundation. All rights reserved.
            <span class="text-purple-400"
              >Made with ♥ for women everywhere.</span
            >
          </p>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
