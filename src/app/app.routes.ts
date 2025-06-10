import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./pages/home/home.component").then((m) => m.HomeComponent),
  },
  {
    path: "about",
    loadComponent: () =>
      import("./pages/about/about.component").then((m) => m.AboutComponent),
  },
  {
    path: "programs",
    loadComponent: () =>
      import("./pages/programs/programs.component").then(
        (m) => m.ProgramsComponent,
      ),
  },
  {
    path: "impact",
    loadComponent: () =>
      import("./pages/impact/impact.component").then((m) => m.ImpactComponent),
  },
  {
    path: "donate",
    loadComponent: () =>
      import("./pages/donate/donate.component").then((m) => m.DonateComponent),
  },
  {
    path: "contact",
    loadComponent: () =>
      import("./pages/contact/contact.component").then(
        (m) => m.ContactComponent,
      ),
  },
  {
    path: "**",
    redirectTo: "",
  },
];
