import { motion } from 'motion/react';
import { Target, Eye, Heart, Award, Users, BookOpen, TrendingUp, Globe } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  const milestones = [
    { year: '1986', title: 'Foundation', description: 'Sri Chaitanya was established with a vision' },
    { year: '1995', title: 'Expansion', description: 'Expanded to 50 campuses nationwide' },
    { year: '2005', title: 'Excellence', description: 'Achieved 95% success rate in competitive exams' },
    { year: '2015', title: 'Innovation', description: 'Introduced digital learning platforms' },
    { year: '2026', title: 'Global Recognition', description: '200+ campuses, 50,000+ students' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to the highest standards of academic and personal achievement.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Building character through ethical values and honest practices.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Fostering teamwork and community engagement at every level.',
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Embracing modern teaching methods and educational technology.',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[var(--brand-blue)] via-[var(--brand-blue-dark)] to-[var(--brand-blue)] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--brand-gold)] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--brand-gold)] rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl text-white/80 font-bold mb-6">About Sri Chaitanya</h1>
            <p className="text-xl text-white/70">
              A legacy of academic excellence, nurturing minds and shaping futures for over three decades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[var(--brand-gold)] font-semibold mb-2 block">Our Story</span>
              <h2 className="text-4xl font-bold text-[var(--brand-maroon)] mb-6">
                38+ Years of Educational Excellence
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 1986, Sri Chaitanya has grown from a single institution to one of India's most 
                respected educational networks. Our journey has been driven by an unwavering commitment to 
                academic excellence and holistic student development.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                With over 200 campuses across the nation and more than 50,000 students, we have consistently 
                maintained our reputation for producing top-performing students in board examinations and 
                competitive entrance tests.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our success is built on innovative teaching methodologies, dedicated faculty, and 
                state-of-the-art infrastructure that creates an optimal learning environment for every student.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1730106443463-0fb1512c5e60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzAyMDE3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="School Building"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--brand-gold)] rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">38+</div>
                  <div className="text-sm text-white/90">Years</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-[var(--brand-maroon)] rounded-xl flex items-center justify-center mb-6">
                <Target className="size-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[var(--brand-maroon)] mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide world-class education that empowers students with knowledge, skills, and values 
                to excel academically and contribute meaningfully to society. We strive to create an 
                environment that nurtures curiosity, critical thinking, and lifelong learning.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-[var(--brand-gold)] rounded-xl flex items-center justify-center mb-6">
                <Eye className="size-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[var(--brand-maroon)] mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and respected educational institution in India, recognized globally 
                for academic excellence, innovative teaching practices, and holistic student development. 
                We aspire to shape future leaders who will make a positive impact on the world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[var(--brand-gold)] font-semibold mb-2 block">Our Journey</span>
            <h2 className="text-4xl font-bold text-[var(--brand-maroon)]">Milestones of Excellence</h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[var(--brand-maroon)] to-[var(--brand-gold)]" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg inline-block">
                      <h3 className="text-2xl font-bold text-[var(--brand-maroon)] mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="w-20 h-20 bg-gradient-to-br from-[var(--brand-maroon)] to-[var(--brand-gold)] rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                    <span className="text-white font-bold">{milestone.year}</span>
                  </div>

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-[var(--brand-maroon)] to-[var(--brand-maroon-dark)] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[var(--brand-gold)] font-semibold mb-2 block">Core Values</span>
            <h2 className="text-4xl font-bold mb-4">What We Stand For</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Our core values guide every decision we make and every action we take.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[var(--brand-gold)] rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="size-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-white/80">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[var(--brand-gold)] font-semibold mb-2 block">Leadership</span>
            <h2 className="text-4xl font-bold text-[var(--brand-maroon)]">Meet Our Leaders</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="h-80 bg-gradient-to-br from-gray-200 to-gray-300" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[var(--brand-maroon)] mb-1">Dr. Name {index + 1}</h3>
                  <p className="text-[var(--brand-gold)] font-semibold mb-3">Designation</p>
                  <p className="text-gray-600 text-sm">
                    Leading our educational mission with years of experience in shaping young minds.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
