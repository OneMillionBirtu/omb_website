"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Bell } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname() || "/";

  const isActive = (path: string) => pathname === path;
  const isActiveSection = (path: string) => pathname.startsWith(path);

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-1">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-40 h-20 bg-gradient-primary rounded-lg flex items-center justify-center relative overflow-hidden">
              <Image src="/logo.png" alt="OMB Logo" fill className="object-contain pl-2" />
            </div>
            {/* <span className="font-heading font-bold text-xl text-foreground">OMB</span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* About Us Dropdown */}
            <div className="relative group">
              <Link
                href="/about"
                className={`font-medium transition-colors hover:text-primary flex items-center space-x-1 ${
                  isActiveSection("/about") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <span className="text-green-900">About Us</span>
                <ChevronDown className="w-4 h-4 text-green-900" />
              </Link>
              <div className="absolute top-full left-0 mt-1 w-56 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link
                  href="/about/who-we-are"
                  className="text-green-900 block px-4 py-2 text-sm hover:bg-muted rounded-t-lg"
                >
                  Who We Are
                </Link>
                <Link
                  href="/about/our-approach"
                  className="block text-green-900 px-4 py-2 text-sm hover:bg-muted"
                >
                  Our Approach
                </Link>
                <Link
                  href="/about#our-team"
                  className="text-green-900 block px-4 py-2 text-sm hover:bg-muted rounded-b-lg"
                >
                  Our Teams
                </Link>
              </div>
            </div>

            {/* our Work Dropdown */}
            <div className="relative group">
              <Link
                href="/ourwork"
                className={`font-medium transition-colors hover:text-primary flex items-center space-x-1 ${
                  isActiveSection("/ourofwork") ||
                  isActiveSection("/livelihood") ||
                  isActiveSection("/health") ||
                  isActiveSection("/education") ||
                  isActiveSection("/programs")
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                <span className="text-green-900">Our Work</span>
                <ChevronDown className="w-4 h-4" />
              </Link>
              <div className="absolute top-full left-0 mt-1 w-56 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link
                  href="/ourwork/livelihood"
                  className="text-green-900 block px-4 py-2 text-sm hover:bg-muted rounded-t-lg"
                >
                  Livelihood
                </Link>
                <Link
                  href="/ourwork/health"
                  className=" text-green-900 block px-4 py-2 text-sm hover:bg-muted"
                >
                  Health
                </Link>
                <Link
                  href="/ourwork/education"
                  className="text-green-900 block px-4 py-2 text-sm hover:bg-muted"
                >
                  Education
                </Link>
              </div>
            </div>

            {/* Birtu Insights Dropdown */}
            <div className="relative group">
              <button
                className={`font-medium transition-colors hover:text-primary flex items-center space-x-1 ${
                  isActiveSection("/news") || isActiveSection("/resources")
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                <span className="text-green-900">Birtu Insights</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-64 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link
                  href="/birtuinsights/casestudies"
                  className="text-green-900 block px-4 py-2 text-sm hover:bg-muted rounded-t-lg"
                >
                  Case Studies
                </Link>
                <Link
                  href="/birtuinsights/newsarticles"
                  className="text-green-900 block px-4 py-2 text-sm hover:bg-muted rounded-b-lg"
                >
                  News and Articles
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button
                className={`font-medium transition-colors hover:text-primary flex items-center space-x-1 ${
                  isActiveSection("/news") || isActiveSection("/resources")
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                <span className="text-green-900">Our Programs</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-64 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link
                  href="/ourprograms/EDEL"
                  className="text-green-900 block px-4 py-2 text-sm hover:bg-muted rounded-t-lg"
                >
                  Edel
                </Link>
                <Link
                  href="/ourprograms/Health"
                  className="text-green-900 block px-4 py-2 text-sm hover:bg-muted rounded-b-lg"
                >
                  Health
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button
                className={`font-medium transition-colors hover:text-primary flex items-center space-x-1 ${
                  isActiveSection("/news") || isActiveSection("/resources")
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                <span className="text-green-900">Resources</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-64 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link
                  href="/resources/publications"
                  className="text-green-900 block px-4 py-2 text-sm hover:bg-muted rounded-t-lg"
                >
                  Publications
                </Link>
                <Link
                  href="/resources/benchmarks"
                  className="text-green-900 block px-4 py-2 text-sm hover:bg-muted rounded-b-lg"
                >
                  Benchmarks
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              className={`text-green-900 font-medium transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4 pr-4">
            <Link href="/notices" className="relative">
              <Bell className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-destructive rounded-full"></span>
            </Link>
            <Button asChild className="bg-amber-400 text-green-900">
              <Link href="/support">Donate</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link href="/about" className="font-medium text-muted-foreground hover:text-primary">
                About Us
              </Link>
              <Link
                href="/ourwork"
                className="font-medium text-muted-foreground hover:text-primary"
              >
                Our Work
              </Link>
              <Link
                href="/birtuinsights/casestudies"
                className="font-medium text-muted-foreground hover:text-primary"
              >
                Our Programs
              </Link>
              <Link
                href="/resources/publications"
                className="font-medium text-muted-foreground hover:text-primary"
              >
                Resources
              </Link>
              <Link
                href="/birtuinsights/casestudies"
                className="font-medium text-muted-foreground hover:text-primary"
              >
                Birtu Insights
              </Link>
              <Link
                href="/contact"
                className="font-medium text-muted-foreground hover:text-primary"
              >
                Contact
              </Link>
              <Link
                href="/notices"
                className="font-medium text-muted-foreground hover:text-primary"
              >
                Notices
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button asChild className="bg-amber-400">
                  <Link href="/support" className="">
                    Donate
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
