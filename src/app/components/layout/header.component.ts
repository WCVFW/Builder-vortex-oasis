import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="sticky top-0 w-full z-50 bg-white border-b border-gray-200">
      <div class="max-w-6xl mx-auto px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <a routerLink="/" class="flex items-center">
            <div
              class="flex items-center justify-center w-8 h-8 bg-purple-600 rounded-xl"
            >
              <span class="text-white">♥</span>
            </div>
            <span class="ml-2 text-xl font-bold text-purple-600"
              >Women's Foundation</span
            >
          </a>

          <!-- Navigation -->
          <nav
            class="flex items-center justify-center flex-1 relative z-10 max-w-max"
          >
            <ul class="flex items-center justify-center space-x-2">
              <li>
                <a
                  routerLink="/"
                  routerLinkActive="bg-purple-50 text-purple-600"
                  [routerLinkActiveOptions]="{ exact: true }"
                  class="px-4 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  routerLink="/about"
                  routerLinkActive="bg-purple-50 text-purple-600"
                  class="px-4 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  routerLink="/programs"
                  routerLinkActive="bg-purple-50 text-purple-600"
                  class="px-4 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  routerLink="/impact"
                  routerLinkActive="bg-purple-50 text-purple-600"
                  class="px-4 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Impact
                </a>
              </li>
              <li>
                <a
                  routerLink="/contact"
                  routerLinkActive="bg-purple-50 text-purple-600"
                  class="px-4 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <!-- Donate Button -->
          <a
            routerLink="/donate"
            class="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg hover:from-purple-700 hover:to-cyan-600"
          >
            Donate
          </a>
        </div>
      </div>
    </header>
  `,
})
export class HeaderComponent {}
