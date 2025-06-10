import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { CommonModule } from "@angular/common";
import {
  LucideAngularModule,
  Heart,
  Users,
  BookOpen,
  BarChart3,
  DollarSign,
  Mail,
} from "lucide-angular";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, LucideAngularModule],
  template: `
    <header
      class="sticky top-0 w-full z-50 backdrop-blur-sm bg-white/60 border-b border-purple-100"
    >
      <div class="max-w-6xl mx-auto px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <a routerLink="/" class="flex items-center">
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
          </a>

          <!-- Navigation -->
          <nav
            class="flex items-center justify-center flex-1 relative z-10 max-w-max"
          >
            <ul class="flex items-center justify-center">
              <li>
                <a
                  routerLink="/"
                  routerLinkActive="nav-link-active"
                  [routerLinkActiveOptions]="{ exact: true }"
                  class="nav-link nav-link-inactive mr-1"
                >
                  <lucide-icon name="heart" class="w-4 h-4 mr-2"></lucide-icon>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  routerLink="/about"
                  routerLinkActive="nav-link-active"
                  class="nav-link nav-link-inactive mr-1"
                >
                  <lucide-icon name="users" class="w-4 h-4 mr-2"></lucide-icon>
                  <span>About</span>
                </a>
              </li>
              <li>
                <a
                  routerLink="/programs"
                  routerLinkActive="nav-link-active"
                  class="nav-link nav-link-inactive mr-1"
                >
                  <lucide-icon
                    name="book-open"
                    class="w-4 h-4 mr-2"
                  ></lucide-icon>
                  <span>Programs</span>
                </a>
              </li>
              <li>
                <a
                  routerLink="/impact"
                  routerLinkActive="nav-link-active"
                  class="nav-link nav-link-inactive mr-1"
                >
                  <lucide-icon
                    name="bar-chart-3"
                    class="w-4 h-4 mr-2"
                  ></lucide-icon>
                  <span>Impact</span>
                </a>
              </li>
              <li>
                <a
                  routerLink="/contact"
                  routerLinkActive="nav-link-active"
                  class="nav-link nav-link-inactive mr-1"
                >
                  <lucide-icon name="mail" class="w-4 h-4 mr-2"></lucide-icon>
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>

          <!-- Donate Button -->
          <a routerLink="/donate" class="btn-primary btn-primary-gradient">
            <lucide-icon name="dollar-sign" class="w-4 h-4 mr-2"></lucide-icon>
            Donate
          </a>
        </div>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  readonly Heart = Heart;
  readonly Users = Users;
  readonly BookOpen = BookOpen;
  readonly BarChart3 = BarChart3;
  readonly DollarSign = DollarSign;
  readonly Mail = Mail;
}
