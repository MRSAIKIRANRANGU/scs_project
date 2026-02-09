import { motion } from 'motion/react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function CampusesPage() {
  const campuses = [
    {
      name: 'Hyderabad Central',
      address: '123, Education Street, Hyderabad, Telangana 500001',
      phone: '+91 40-XXXX-XXXX',
      email: 'hyderabad@srichaitanya.net',
      students: '2,500+',
    },
    {
      name: 'Bangalore Campus',
      address: '456, Learning Avenue, Bangalore, Karnataka 560001',
      phone: '+91 80-XXXX-XXXX',
      email: 'bangalore@srichaitanya.net',
      students: '2,200+',
    },
    {
      name: 'Chennai Branch',
      address: '789, Knowledge Road, Chennai, Tamil Nadu 600001',
      phone: '+91 44-XXXX-XXXX',
      email: 'chennai@srichaitanya.net',
      students: '2,000+',
    },
    {
      name: 'Mumbai Campus',
      address: '321, Scholar Street, Mumbai, Maharashtra 400001',
      phone: '+91 22-XXXX-XXXX',
      email: 'mumbai@srichaitanya.net',
      students: '1,800+',
    },
    {
      name: 'Pune Campus',
      address: '654, Education Lane, Pune, Maharashtra 411001',
      phone: '+91 20-XXXX-XXXX',
      email: 'pune@srichaitanya.net',
      students: '1,500+',
    },
    {
      name: 'Delhi Campus',
      address: '987, Learning Circle, Delhi, NCR 110001',
      phone: '+91 11-XXXX-XXXX',
      email: 'delhi@srichaitanya.net',
      students: '2,100+',
    },
  ];

  return (
    <div className="w-full">
      <section className="relative py-32 bg-gradient-to-br from-[var(--brand-maroon)] to-[var(--brand-maroon-dark)] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Campuses</h1>
            <p className="text-xl text-white/90">
              200+ campuses across India, bringing quality education closer to you
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[var(--brand-gold)] font-semibold mb-2 block">Find Us</span>
            <h2 className="text-4xl font-bold text-[var(--brand-maroon)] mb-4">
              Explore Our Campuses
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With campuses in major cities across India, we're committed to providing accessible, 
              quality education to students nationwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campuses.map((campus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-[var(--brand-maroon)] to-[var(--brand-maroon-dark)] flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="size-12 mx-auto mb-2" />
                    <p className="text-sm opacity-80">{campus.students} Students</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[var(--brand-maroon)] mb-4">
                    {campus.name}
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="size-5 text-[var(--brand-gold)] flex-shrink-0 mt-1" />
                      <p className="text-gray-600 text-sm">{campus.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="size-5 text-[var(--brand-gold)]" />
                      <p className="text-gray-600 text-sm">{campus.phone}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="size-5 text-[var(--brand-gold)]" />
                      <p className="text-gray-600 text-sm">{campus.email}</p>
                    </div>
                  </div>
                  <Button className="w-full bg-[var(--brand-maroon)] hover:bg-[var(--brand-maroon-dark)] text-white">
                    Visit Campus
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[var(--brand-maroon)] mb-6">
              Can't Find a Campus Near You?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're constantly expanding. Get in touch to learn about upcoming locations.
            </p>
            <Button
              size="lg"
              className="bg-[var(--brand-gold)] hover:bg-[var(--brand-gold-dark)] text-white"
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
