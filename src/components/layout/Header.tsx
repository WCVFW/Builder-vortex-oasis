import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Heart, Users, DollarSign, Mail, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Home", href: "/", icon: Heart },
    { name: "About", href: "/about", icon: Users },
    { name: "Programs", href: "/programs", icon: Award },
    { name: "Impact", href: "/impact", icon: Users },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-empowerment-500 to-hope-500">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl gradient-text">
              Women's Foundation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.href}
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                        isActivePath(item.href) &&
                          "bg-accent text-empowerment-600 font-semibold",
                      )}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/donate">
              <Button className="btn-primary">
                <DollarSign className="mr-2 h-4 w-4" />
                Donate Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-6">
                <Link to="/" className="flex items-center space-x-2 mb-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-empowerment-500 to-hope-500">
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-bold text-lg gradient-text">
                    Women's Foundation
                  </span>
                </Link>

                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors",
                      isActivePath(item.href) &&
                        "bg-accent text-empowerment-600 font-semibold",
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                ))}

                <div className="pt-4 border-t">
                  <Link to="/donate" onClick={() => setIsOpen(false)}>
                    <Button className="w-full btn-primary">
                      <DollarSign className="mr-2 h-4 w-4" />
                      Donate Now
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
