import { motion } from 'motion/react';
import { BookOpen, Microscope, Calculator, Globe, Palette, Music, Trophy, Code } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AcademicsPage() {
  const subjects = [
    { icon: Calculator, name: 'Mathematics', color: 'from-blue-500 to-blue-600' },
    { icon: Microscope, name: 'Science', color: 'from-green-500 to-green-600' },
    { icon: Globe, name: 'Social Studies', color: 'from-orange-500 to-orange-600' },
    { icon: BookOpen, name: 'Languages', color: 'from-purple-500 to-purple-600' },
    { icon: Code, name: 'Computer Science', color: 'from-indigo-500 to-indigo-600' },
    { icon: Palette, name: 'Arts & Crafts', color: 'from-pink-500 to-pink-600' },
    { icon: Music, name: 'Music', color: 'from-yellow-500 to-yellow-600' },
    { icon: Trophy, name: 'Sports', color: 'from-red-500 to-red-600' },
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Academics</h1>
            <p className="text-xl text-white/90">
              A comprehensive curriculum designed for holistic development and academic excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[var(--brand-gold)] font-semibold mb-2 block">Our Curriculum</span>
            <h2 className="text-4xl font-bold text-[var(--brand-maroon)] mb-4">
              Comprehensive Learning Experience
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {subjects.map((subject, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${subject.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <subject.icon className="size-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-800">{subject.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[var(--brand-gold)] font-semibold mb-2 block">Our Approach</span>
              <h2 className="text-4xl font-bold text-[var(--brand-maroon)] mb-6">
                Innovative Teaching Methodology
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our teaching methodology combines traditional values with modern pedagogical techniques. 
                We employ a student-centric approach that encourages active learning, critical thinking, 
                and practical application of concepts.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With smart classrooms, interactive learning modules, and experienced faculty, we ensure 
                that every student receives personalized attention and achieves their full potential.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzY2hvb2wlMjBzdHVkZW50cyUyMHN0dWR5aW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3MDIwMTc2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Classroom"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Competitive Exam Preparation */}
      <section className="py-20 bg-gradient-to-br from-[var(--brand-maroon)] to-[var(--brand-maroon-dark)] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Competitive Exam Preparation</h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Specialized coaching for JEE, NEET, and other national-level entrance examinations
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['JEE Main & Advanced', 'NEET', 'Foundation Courses'].map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
                >
                  <h3 className="text-2xl font-bold mb-4">{program}</h3>
                  <p className="text-white/80">
                    Comprehensive preparation with experienced faculty and proven success rates
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
