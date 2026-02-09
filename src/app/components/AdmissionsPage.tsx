import { motion } from 'motion/react';
import { FileText, Calendar, CheckCircle, DollarSign, Download, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function AdmissionsPage() {
  const admissionSteps = [
    {
      icon: FileText,
      title: 'Submit Application',
      description: 'Fill out the online application form with required details and documents.',
    },
    {
      icon: Calendar,
      title: 'Schedule Visit',
      description: 'Book a campus tour to explore our facilities and meet our faculty.',
    },
    {
      icon: CheckCircle,
      title: 'Entrance Assessment',
      description: 'Attend the entrance assessment to evaluate academic readiness.',
    },
    {
      icon: DollarSign,
      title: 'Fee Payment',
      description: 'Complete the admission process with fee payment and enrollment.',
    },
  ];

  const documents = [
    'Birth Certificate',
    'Transfer Certificate (TC) from previous school',
    'Academic Records / Report Cards',
    'Passport-size photographs (4 copies)',
    'Aadhar Card copy (Student & Parents)',
    'Address Proof',
    'Medical fitness certificate',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Admissions</h1>
            <p className="text-xl text-white/90">
              Begin your journey to academic excellence with Sri Chaitanya
            </p>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[var(--brand-gold)] font-semibold mb-2 block">How to Apply</span>
            <h2 className="text-4xl font-bold text-[var(--brand-maroon)] mb-4">
              Simple Admission Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[var(--brand-maroon)] rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  <div className="w-16 h-16 bg-[var(--brand-gold)]/10 rounded-xl flex items-center justify-center mb-4 mt-4">
                    <step.icon className="size-8 text-[var(--brand-gold)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--brand-maroon)] mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < admissionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[var(--brand-gold)]/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[var(--brand-gold)] font-semibold mb-2 block">Documentation</span>
              <h2 className="text-4xl font-bold text-[var(--brand-maroon)] mb-6">
                Required Documents
              </h2>
              <p className="text-gray-600 mb-6">
                Please ensure you have the following documents ready when applying for admission:
              </p>
              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 bg-white p-3 rounded-lg"
                  >
                    <CheckCircle className="size-5 text-[var(--brand-gold)] flex-shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </motion.div>
                ))}
              </div>
              <Button className="mt-6 bg-[var(--brand-gold)] hover:bg-[var(--brand-gold-dark)] text-white">
                <Download className="mr-2 size-4" />
                Download Checklist
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-2xl font-bold text-[var(--brand-maroon)] mb-6">Important Dates</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-gray-700">Application Opens</span>
                  <span className="font-bold text-[var(--brand-maroon)]">March 1, 2026</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-gray-700">Last Date to Apply</span>
                  <span className="font-bold text-[var(--brand-maroon)]">June 30, 2026</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-gray-700">Entrance Test</span>
                  <span className="font-bold text-[var(--brand-maroon)]">July 15, 2026</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Academic Year Begins</span>
                  <span className="font-bold text-[var(--brand-maroon)]">August 1, 2026</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[var(--brand-maroon)] mb-4">
              Quick Enquiry Form
            </h2>
            <p className="text-gray-600">
              Fill out this form and our admissions team will contact you shortly.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-2xl shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Student Name *
                </label>
                <Input placeholder="Enter student name" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Date of Birth *
                </label>
                <Input type="date" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Parent Name *
                </label>
                <Input placeholder="Enter parent name" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <Input type="tel" placeholder="+91 XXXXX XXXXX" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address *
              </label>
              <Input type="email" placeholder="your.email@example.com" />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Grade Applying For *
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-maroon)]">
                <option value="">Select Grade</option>
                <option value="1">Grade 1</option>
                <option value="2">Grade 2</option>
                <option value="3">Grade 3</option>
                <option value="4">Grade 4</option>
                <option value="5">Grade 5</option>
                <option value="6">Grade 6</option>
                <option value="7">Grade 7</option>
                <option value="8">Grade 8</option>
                <option value="9">Grade 9</option>
                <option value="10">Grade 10</option>
                <option value="11">Grade 11</option>
                <option value="12">Grade 12</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Message (Optional)
              </label>
              <Textarea placeholder="Any additional information..." rows={4} />
            </div>

            <Button className="w-full bg-[var(--brand-maroon)] hover:bg-[var(--brand-maroon-dark)] text-white py-6">
              Submit Enquiry
            </Button>
          </motion.form>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-[var(--brand-maroon)] to-[var(--brand-maroon-dark)] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Need Assistance?</h2>
            <p className="text-xl text-white/90 mb-8">
              Our admissions team is here to help you with any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[var(--brand-gold)] hover:bg-[var(--brand-gold-dark)] text-white"
              >
                <Phone className="mr-2 size-5" />
                Call: +91 1800-XXX-XXXX
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[var(--brand-maroon)]"
              >
                Schedule Campus Visit
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
