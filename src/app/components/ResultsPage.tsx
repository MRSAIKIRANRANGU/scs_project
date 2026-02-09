import { motion } from 'motion/react';
import { Trophy, Award, TrendingUp, Users } from 'lucide-react';

export function ResultsPage() {
  const achievements = [
    { year: '2025', jee: '95%', neet: '92%', boards: '98%' },
    { year: '2024', jee: '93%', neet: '90%', boards: '97%' },
    { year: '2023', jee: '91%', neet: '89%', boards: '96%' },
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Results & Achievements</h1>
            <p className="text-xl text-white/90">
              A legacy of excellence and outstanding academic achievements
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
            <h2 className="text-4xl font-bold text-[var(--brand-maroon)] mb-8">
              Academic Excellence Year Over Year
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((year, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-3xl font-bold text-[var(--brand-maroon)] mb-6">{year.year}</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">JEE Success Rate</span>
                    <span className="text-2xl font-bold text-[var(--brand-gold)]">{year.jee}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">NEET Success Rate</span>
                    <span className="text-2xl font-bold text-[var(--brand-gold)]">{year.neet}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Board Exams</span>
                    <span className="text-2xl font-bold text-[var(--brand-gold)]">{year.boards}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Trophy, value: '500+', label: 'IIT Selections' },
              { icon: Award, value: '800+', label: 'NEET Qualifiers' },
              { icon: TrendingUp, value: '98%', label: 'Board Excellence' },
              { icon: Users, value: '10,000+', label: 'Successful Alumni' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--brand-maroon)] to-[var(--brand-maroon-dark)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="size-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-[var(--brand-maroon)] mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
