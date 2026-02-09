import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin, ArrowRight, Send } from 'lucide-react';
import { Button } from './ui/button';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gradient-to-br from-[var(--brand-blue)] via-[var(--brand-blue-dark)] to-[var(--brand-blue)] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-3">Stay Connected</h3>
              <p className="text-white/80 text-lg">
                Subscribe to receive updates on admissions, events, and academic excellence.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 focus:border-[var(--brand-red)] focus:outline-none focus:bg-white/15 transition-all placeholder:text-white/50 text-white"
              />
              <Button className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-red-light)] hover:from-[var(--brand-red-dark)] hover:to-[var(--brand-red)] text-white px-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <Send className="size-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br rounded-2xl flex items-center justify-center shadow-lg">
                <img src='assets/logo.png' alt="" />
              </div>
              <div>
                <h2 className="font-bold text-lg">Sri Chaitanya</h2>
                <p className="text-xs text-white/70">School of Excellence</p>
              </div>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Established in 1986, we are committed to nurturing academic excellence 
              and shaping future leaders through innovative education and values.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 bg-white/10 hover:bg-[var(--brand-red)] backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-[var(--brand-red)]"
                >
                  <Icon className="size-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {['home', 'about', 'academics', 'admissions', 'results'].map((link) => (
                <li key={link}>
                  <motion.button
                    onClick={() => onNavigate(link)}
                    whileHover={{ x: 5 }}
                    className="text-white/70 hover:text-white transition-all duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="size-4 text-[var(--brand-red)] group-hover:translate-x-1 transition-transform" />
                    <span className="capitalize">{link}</span>
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-6 text-white">Our Programs</h3>
            <ul className="space-y-3">
              {[
                'Primary Education',
                'Secondary Education',
                'JEE Preparation',
                'NEET Preparation',
                'Foundation Courses'
              ].map((program, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => onNavigate('academics')}
                    whileHover={{ x: 5 }}
                    className="text-white/70 hover:text-white transition-all duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="size-4 text-[var(--brand-red)] group-hover:translate-x-1 transition-transform" />
                    <span>{program}</span>
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-6 text-white">Get in Touch</h3>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--brand-red)] transition-all">
                    <MapPin className="size-5 text-[var(--brand-red)] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm leading-relaxed">
                      123, Education Street<br />
                      Hyderabad, Telangana 500001
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-[var(--brand-red)] transition-all">
                    <Phone className="size-5 text-[var(--brand-red)] group-hover:text-white transition-colors" />
                  </div>
                  <a href="tel:+911800XXXXXXX" className="text-white/70 hover:text-white transition-colors">
                    +91 1800-XXX-XXXX
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-[var(--brand-red)] transition-all">
                    <Mail className="size-5 text-[var(--brand-red)] group-hover:text-white transition-colors" />
                  </div>
                  <a href="mailto:admissions@srichaitanya.net" className="text-white/70 hover:text-white transition-colors">
                    admissions@srichaitanya.net
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              className="text-white/60 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              © 2026 Sri Chaitanya School. All rights reserved.
            </motion.p>
            <div className="flex gap-8">
              {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -2 }}
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
