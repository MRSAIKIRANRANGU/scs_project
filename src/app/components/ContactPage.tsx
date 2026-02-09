import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123, Education Street', 'Hyderabad, Telangana', 'India - 500001'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 1800-XXX-XXXX', '+91 40-XXXX-XXXX', 'Mon-Sat: 9:00 AM - 6:00 PM'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['admissions@srichaitanya.net', 'info@srichaitanya.net', 'support@srichaitanya.net'],
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: Closed'],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[var(--brand-maroon)] to-[var(--brand-maroon-dark)] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/90">
              Get in touch with us - we're here to help and answer your questions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[var(--brand-gold)] rounded-xl flex items-center justify-center mb-4">
                  <info.icon className="size-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--brand-maroon)] mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[var(--brand-maroon)] mb-4">Send us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="john.doe@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input type="tel" placeholder="+91 XXXXX XXXXX" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input placeholder="How can we help you?" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea placeholder="Your message..." rows={5} />
                </div>

                <Button className="w-full bg-[var(--brand-maroon)] hover:bg-[var(--brand-maroon-dark)] text-white py-6">
                  <Send className="mr-2 size-5" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-2xl h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="size-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">Location: Hyderabad, Telangana</p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-[var(--brand-maroon)] to-[var(--brand-maroon-dark)] p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Quick Contact</h3>
                <p className="text-white/80 mb-6">
                  For immediate assistance, please call our admissions office or visit us during office hours.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="size-5 text-[var(--brand-gold)]" />
                    <span>+91 1800-XXX-XXXX</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="size-5 text-[var(--brand-gold)]" />
                    <span>admissions@srichaitanya.net</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
