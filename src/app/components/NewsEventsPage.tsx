import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function NewsEventsPage() {
  const news = [
    {
      title: 'Annual Sports Day 2026',
      date: 'March 15, 2026',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1696319179104-d85903b82048?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzdHVkZW50cyUyMHNwb3J0cyUyMGZpZWxkfGVufDF8fHx8MTc3MDIwMTc2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      excerpt: 'Join us for our annual sports day celebration featuring various athletic competitions and cultural programs.',
    },
    {
      title: 'Science Exhibition Success',
      date: 'February 20, 2026',
      category: 'News',
      image: 'https://images.unsplash.com/photo-1707944746620-fc0371b91906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzAwOTY5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      excerpt: 'Our students showcased innovative projects at the regional science exhibition, winning multiple awards.',
    },
    {
      title: 'New Computer Lab Inauguration',
      date: 'February 10, 2026',
      category: 'News',
      image: 'https://images.unsplash.com/photo-1766297247924-6638d54e7c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGxhYiUyMHN0dWRlbnRzJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzAyMDE3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      excerpt: 'State-of-the-art computer laboratory with latest technology inaugurated at our Hyderabad campus.',
    },
    {
      title: 'Parent-Teacher Meeting',
      date: 'March 25, 2026',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1511629091441-ee46146481b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZWFjaGVyJTIwY2xhc3Nyb29tJTIwdGVhY2hpbmd8ZW58MXx8fHwxNzcwMjAxNzY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      excerpt: 'Quarterly parent-teacher meeting to discuss student progress and academic development.',
    },
    {
      title: 'Outstanding JEE Results 2025',
      date: 'January 30, 2026',
      category: 'Achievement',
      image: 'https://images.unsplash.com/photo-1591218214141-45545921d2d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBzdHVkZW50cyUyMGNlbGVicmF0aW5nfGVufDF8fHx8MTc3MDE5NzEwNHww&ixlib=rb-4.1.0&q=80&w=1080',
      excerpt: '95% of our students qualified JEE 2025, with 50+ students securing top 1000 ranks.',
    },
    {
      title: 'Cultural Festival 2026',
      date: 'April 5, 2026',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBncm91cCUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MDIwMTc2OXww&ixlib=rb-4.1.0&q=80&w=1080',
      excerpt: 'Annual cultural festival celebrating diversity, talent, and creativity of our students.',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">News & Events</h1>
            <p className="text-xl text-white/90">
              Stay updated with the latest happenings at Sri Chaitanya
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[var(--brand-gold)] text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="size-4" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[var(--brand-maroon)] mb-3 group-hover:text-[var(--brand-gold)] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <button className="text-[var(--brand-maroon)] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="size-5" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[var(--brand-maroon)] to-[var(--brand-maroon-dark)] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Don't Miss Any Updates</h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to our newsletter for the latest news and events
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--brand-gold)]"
              />
              <Button
                size="lg"
                className="bg-[var(--brand-gold)] hover:bg-[var(--brand-gold-dark)] text-white px-8"
              >
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
