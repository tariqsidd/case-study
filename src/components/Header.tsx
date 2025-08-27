'use client'
import { Search, Twitter, Facebook } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const navigationItems = [
    { label: 'Features', href: '#features' },
    { label: 'Downloads', href: '#downloads' },
    { label: 'Docs', href: '#docs' },
    { label: 'Support', href: '#support' },
    { label: 'Blog', href: '#blog' },
  ];

  const socialLinks = [
    { icon: Twitter, href: '#twitter', label: 'Twitter' },
    { icon: Facebook, href: '#facebook', label: 'Facebook' },
  ];

  return (
      <header className="w-full bg-nav-background border-b border-nav-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                  href="/public"
                  className="text-xl font-semibold text-logo-text hover:text-logo-hover transition-colors duration-200"
              >
                Logo
              </a>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                  <a
                      key={item.label}
                      href={item.href}
                      className="text-link-text hover:text-link-hover transition-colors duration-200 font-medium text-sm"
                  >
                    {item.label}
                  </a>
              ))}
            </nav>

            {/* Search and Social Icons */}
            <div className="flex items-center space-x-6">
              {/* Search */}
              <div className="relative">
                <div className="flex items-center space-x-2 px-3 py-2 bg-search-background border border-search-border rounded-md hover:border-link-hover transition-colors duration-200">
                  <Search className="h-4 w-4 text-search-placeholder" />
                  <input
                      type="text"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-transparent text-search-text placeholder:text-search-placeholder text-sm focus:outline-none w-20 sm:w-32"
                  />
                </div>
              </div>

              {/* Social Icons */}
              <div className="hidden sm:flex items-center space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                      <a
                          key={social.label}
                          href={social.href}
                          className="text-social-icon hover:text-social-hover transition-colors duration-200"
                          aria-label={social.label}
                      >
                        <IconComponent className="h-5 w-5" />
                      </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </header>
  );
};

export default Header;
