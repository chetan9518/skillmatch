import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

type NavbarProps = {
  isLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
};

interface NavItem {
  label: string;
  href: string;
}

const publicNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Features", href: "/feature" },
  { label: "Contact", href: "/contact" },
];

// NavLinks subcomponent
function NavLinks({ items, onNavigate, activePath, vertical = false }: { items: NavItem[]; onNavigate: (href: string) => void; activePath: string; vertical?: boolean }) {
  return (
    <nav aria-label="Main navigation">
      <ul className={`flex ${vertical ? "flex-col space-y-1" : "space-x-1"}`}>
        {items.map((item) => {
          const isActive = activePath === item.href;
          return (
            <li key={item.href}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate(item.href)}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 outline-none focus:ring-2 focus:ring-blue-500 ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                    : "text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/10"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

// AuthButtons subcomponent
function AuthButtons({ isLoggedIn, onLogin, onLogout, onSignup, onDashboard }: { isLoggedIn: boolean; onLogin: () => void; onLogout: () => void; onSignup: () => void; onDashboard: () => void }) {
  return isLoggedIn ? (
    <div className="flex items-center space-x-2 sm:space-x-4">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onDashboard}
        className="flex items-center space-x-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span>Dashboard</span>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onLogout}
        className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-400"
        title="Sign Out"
        aria-label="Sign Out"
      >
        <X className="w-5 h-5" />
      </motion.button>
    </div>
  ) : (
    <div className="hidden sm:flex items-center space-x-3">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onLogin}
        className="px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Sign In
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
        whileTap={{ scale: 0.95 }}
        onClick={onSignup}
        className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Get Started
      </motion.button>
    </div>
  );
}

// MobileMenu subcomponent
function MobileMenu({ open, onClose, items, onNavigate, activePath, onLogin }: { open: boolean; onClose: () => void; items: NavItem[]; onNavigate: (href: string) => void; activePath: string; onLogin: () => void; }) {
  const menuRef = useRef<HTMLDivElement>(null);
  // Focus trap for accessibility
  useEffect(() => {
    if (open && menuRef.current) {
      menuRef.current.focus();
    }
  }, [open]);
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex md:hidden"
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/30" onClick={onClose} />
          <div className="absolute right-0 top-16 w-48 h-auto bg-gradient-to-r from-blue-600 to-purple-600 shadow-2xl rounded-b-2xl focus:outline-none flex flex-col items-stretch p-4 space-y-3 z-50" tabIndex={-1} ref={menuRef}>
            <NavLinks
              items={items}
              onNavigate={(href) => {
                onNavigate(href);
                onClose();
              }}
              activePath={activePath}
              vertical={true}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                onLogin();
                onClose();
              }}
              className="w-full px-4 py-2 text-sm font-semibold text-white bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-200 shadow focus:outline-none focus:ring-2 focus:ring-white"
            >
              Sign In
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar({ isLoggedIn, onLogin, onLogout }: NavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handlers for navigation and auth
  const handleNavigate = (href: string) => {
    navigate(href);
  };
  const handleSignup = () => navigate("/signup");
  const handleDashboard = () => navigate("/dashboard");

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl shadow-xl border-b border-gray-200 dark:border-zinc-700"
          : "bg-gradient-to-r from-black/20 to-transparent bg-[url('/logo/bg.png')] bg-cover bg-center bg-no-repeat backdrop-blur-md border-b border-white/20 dark:border-zinc-800"
      }`}
      role="navigation"
      aria-label="Main site navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => navigate("/")}
            aria-label="SkillMatch Home"
          >
            <img
              src="/logo/icon.png"
              alt="SkillMatch Logo"
              className="h-10 w-auto rounded-lg shadow-sm"
            />
          </motion.div>

          {/* Desktop Navigation items for public users */}
          {!isLoggedIn && (
            <div className="hidden md:flex items-center space-x-1">
              <NavLinks items={publicNavItems} onNavigate={handleNavigate} activePath={location.pathname} />
            </div>
          )}

          {/* Right Section: Hamburger (mobile) + Auth/Dashboard */}
          <div className="flex items-center space-x-4">
            {/* Hamburger always visible on mobile, rightmost */}
            {!isLoggedIn && (
              <button
                className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white"
                onClick={() => setMobileMenuOpen((o) => !o)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            )}
            <AuthButtons
              isLoggedIn={isLoggedIn}
              onLogin={onLogin}
              onLogout={onLogout}
              onSignup={handleSignup}
              onDashboard={handleDashboard}
            />
          </div>
        </div>
      </div>
      {/* Mobile Menu Side Drawer */}
      {!isLoggedIn && (
        <MobileMenu
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          items={publicNavItems}
          onNavigate={handleNavigate}
          activePath={location.pathname}
          onLogin={onLogin}
        />
      )}
    </motion.nav>
  );
}
