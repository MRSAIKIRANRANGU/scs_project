import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Button } from "./ui/button";

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Navbar({
  activeSection,
  onNavigate,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);
  const [openDropdown, setOpenDropdown] = useState<
    string | null
  >(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    {
      id: "academics",
      label: "Academics",
      submenu: [
        { id: "curriculum", label: "Curriculum" },
        { id: "methodology", label: "Teaching Methodology" },
        { id: "programs", label: "Programs Offered" },
      ],
    },
    { id: "admissions", label: "Admissions" },
    { id: "campuses", label: "Campuses" },
    { id: "results", label: "Results" },
    { id: "news", label: "News & Events" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-[var(--brand-blue)] text-white py-3 hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-8">
              <motion.div
                className="flex items-center gap-2"
                
              >
                <Phone className="size-4" />
                <span>+91 1800-XXX-XXXX</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                
              >
                <Mail className="size-4" />
                <span>admissions@srichaitanya.net</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
               
              >
                <MapPin className="size-4" />
                <span>200+ Campuses Across India</span>
              </motion.div>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-white/80">
                Excellence Since 1986
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.nav
      
        className={`sticky top-0 z-50 ${
          isScrolled
            ? "bg-white shadow-xl border-b border-gray-100"
            : "bg-white/98 backdrop-blur-lg"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-[60px]">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 cursor-pointer group"
              onClick={() => onNavigate("home")}
            >
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <img src='assets/logo.png' alt="" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-light)] bg-clip-text text-transparent">
                  Sri Chaitanya
                </h1>
                <p className="text-xs text-[var(--brand-gray)] font-medium tracking-wide">
                  SCHOOL OF EXCELLENCE
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className="relative group"
                  onMouseEnter={() =>
                    item.submenu && setOpenDropdown(item.id)
                  }
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <motion.button
                    onClick={() =>
                      !item.submenu && onNavigate(item.id)
                    }
                    whileHover={{ y: -2 }}
                    className={`px-5 py-2.5 rounded-xl cursor-pointer transition-all duration-300 flex items-center gap-2 font-medium relative overflow-hidden ${
                      activeSection === item.id
                        ? "text-white"
                        : "text-gray-700 hover:text-[var(--brand-blue)]"
                    }`}
                  >
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-light)] rounded-xl"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">
                      {item.label}
                    </span>
                    {item.submenu && (
                      <ChevronDown
                        className={`size-4 relative z-10 transition-transform duration-300 ${
                          openDropdown === item.id
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    )}
                  </motion.button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.submenu &&
                      openDropdown === item.id && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 10,
                            scale: 0.95,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            y: 10,
                            scale: 0.95,
                          }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-2xl p-2 min-w-[240px] border border-gray-100 overflow-hidden"
                        >
                          {item.submenu.map((subItem) => (
                            <motion.button
                              key={subItem.id}
                              onClick={() => {
                                onNavigate(subItem.id);
                                setOpenDropdown(null);
                              }}
                              className="group relative w-full cursor-pointer text-left px-5 py-3 rounded-xl text-gray-700 transition-all duration-200 font-medium hover:text-[var(--brand-blue)] hover:font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)]/25"
                            >
                              <span className="relative z-10 inline-block">
                                {subItem.label}
                                <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-blue-light)] to-[var(--brand-red)] transition-[width] duration-300 group-hover:w-full" />
                              </span>
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                onClick={() => onNavigate("admissions")}
                className="group relative overflow-hidden cursor-pointer px-[28px] py-[22px] rounded-full text-white bg-[var(--brand-red)] shadow-[0_18px_40px_-22px_rgba(212,35,57,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-28px_rgba(212,35,57,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-red)]/40"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/35 to-white/0 -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[var(--brand-red)] via-[var(--brand-red-light)] to-[var(--brand-red)]" />
                <span className="relative font-semibold tracking-wide">Apply Admission</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }
              className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="size-6 text-gray-700" />
              ) : (
                <Menu className="size-6 text-gray-700" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden border-t overflow-hidden"
              >
                <div className="py-4 space-y-1">
                  {navItems.map((item) => (
                    <div key={item.id}>
                      <motion.button
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          if (!item.submenu) {
                            onNavigate(item.id);
                            setIsMobileMenuOpen(false);
                          }
                        }}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                          activeSection === item.id
                            ? "bg-[var(--brand-blue)] text-white"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">
                            {item.label}
                          </span>
                          {item.submenu && (
                            <ChevronDown className="size-4" />
                          )}
                        </div>
                      </motion.button>
                      {item.submenu && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.submenu.map((subItem) => (
                            <button
                              key={subItem.id}
                              onClick={() => {
                                onNavigate(subItem.id);
                                setIsMobileMenuOpen(false);
                              }}
                              className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-[var(--brand-blue)] hover:bg-gray-50 rounded-lg transition-all"
                            >
                              {subItem.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="px-4 pt-4">
                    <Button
                      onClick={() => {
                        onNavigate("admissions");
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-red-light)] text-white rounded-xl py-3"
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
}
