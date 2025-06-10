import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import {
  LucideAngularModule,
  Heart,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-angular";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  template: `
    <footer class="bg-gray-900 text-white">
      <div class="max-w-6xl mx-auto px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- About Section -->
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center mb-4">
              <div
                class="flex items-center justify-center w-8 h-8 gradient-bg rounded-xl"
              >
                <lucide-icon
                  name="heart"
                  class="w-5 h-5 text-white"
                ></lucide-icon>
              </div>
              <span class="ml-2 text-xl font-bold gradient-text"
                >Women's Foundation</span
              >
            </div>
            <p class="text-gray-300 mb-6 max-w-md">
              Empowering women through education, support, and community
              building. Together, we create opportunities and break barriers for
              a more equitable future.
            </p>
            <div class="flex space-x-4">
              <a
                href="#"
                class="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <lucide-icon name="facebook" class="w-5 h-5"></lucide-icon>
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <lucide-icon name="twitter" class="w-5 h-5"></lucide-icon>
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <lucide-icon name="instagram" class="w-5 h-5"></lucide-icon>
              </a>
            </div>
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
              <li>
                <a
                  routerLink="/contact"
                  class="text-gray-300 hover:text-purple-400 transition-colors"
                  >Contact</a
                >
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Contact Info</h3>
            <div class="space-y-3">
              <div class="flex items-center">
                <lucide-icon
                  name="mail"
                  class="w-4 h-4 mr-3 text-purple-400"
                ></lucide-icon>
                <span class="text-gray-300">info&#64;womensfoundation.org</span>
              </div>
              <div class="flex items-center">
                <lucide-icon
                  name="phone"
                  class="w-4 h-4 mr-3 text-purple-400"
                ></lucide-icon>
                <span class="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div class="flex items-start">
                <lucide-icon
                  name="map-pin"
                  class="w-4 h-4 mr-3 mt-1 text-purple-400"
                ></lucide-icon>
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
            <span class="text-purple-400">Made with</span>
            <lucide-icon
              name="heart"
              class="w-4 h-4 inline mx-1 text-red-500"
            ></lucide-icon>
            <span class="text-purple-400">for women everywhere.</span>
          </p>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  readonly Heart = Heart;
  readonly Facebook = Facebook;
  readonly Twitter = Twitter;
  readonly Instagram = Instagram;
  readonly Mail = Mail;
  readonly Phone = Phone;
  readonly MapPin = MapPin;

  currentYear = new Date().getFullYear();
}
