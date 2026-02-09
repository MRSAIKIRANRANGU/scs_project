import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { 
  GraduationCap, 
  BookOpen,
  Globe,
  Trophy,
  Target,
  Star,
  ChevronRight,
  Sparkles,
  CheckCircle,
  ArrowUpRight,
  Search,
  MapPin
} from 'lucide-react';
import { Button } from './ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (section: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const heroSlides = [
    {
      badge: 'Excellence in Education Since 1986',
      title: 'Shaping Future',
      accent: 'Leaders & Innovators',
      description: 'Empowering students with world-class education, innovative teaching, and a nurturing environment for holistic development.',
      backgroundImage: 'https://images.unsplash.com/photo-1723899957933-2c2e01b859ce',
    },
    {
      badge: 'India’s Trusted Learning Network',
      title: 'Building Bright',
      accent: 'Academic Foundations',
      description: 'From primary to competitive preparation, our programs inspire curiosity, confidence, and consistent achievement.',
      backgroundImage: 'https://images.unsplash.com/photo-1696319179104-d85903b82048',
    },
    {
      badge: 'Personalized Learning Pathways',
      title: 'Unlocking',
      accent: 'Student Potential',
      description: 'Expert faculty, modern infrastructure, and a supportive culture help every learner thrive.',
      backgroundImage: 'https://images.unsplash.com/photo-1511629091441-ee46146481b6',
    },
  ];

  const [heroSlideIndex, setHeroSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeroSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [heroSlides.length]);

  const programTiles = [
    { icon: Target, title: 'IIT (Main & Advanced)', featuredColor: 'bg-white/10'  },
    { icon: GraduationCap, title: 'NEET UG', featuredColor: 'bg-gradient-to-br from-[var(--brand-red)] to-[var(--brand-red-dark)] shadow-lg' },
    { icon: Trophy, title: 'UPSC Services', featuredColor:  "bg-[#2D4C9B]" },
  ];

  const programs = [
    {
      title: 'Primary Education',
      description: 'Building strong foundations with innovative learning methodologies and child-centric approaches.',
      icon: BookOpen,
      gradient: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1698465344246-68055cb6ef06',
    },
    {
      title: 'Secondary Education',
      description: 'Comprehensive curriculum aligned with national standards and future-ready skills development.',
      icon: Globe,
      gradient: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6',
    },
    {
      title: 'Competitive Preparation',
      description: 'Specialized coaching for JEE, NEET, and national-level competitive examinations.',
      icon: Trophy,
      gradient: 'from-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1707944746620-fc0371b91906',
    },
  ];

  const aboutCards = [
    {
      id: 'who-we-are',
      label: 'WHO WE ARE',
      title: 'A Legacy of Learning',
      description:
        'Sri Chaitanya is a learning community built on rigorous academics and personal care. Since 1986, we have blended world-class curricula with mentorship to shape confident learners ready for boards and competitive exams.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7',
      theme: 'bg-[#0B3B6E]',
    },
    {
      id: 'mission',
      label: 'MISSION',
      title: 'Our Mission',
      description:
        'To deliver holistic, future-ready education that nurtures intellect, character, and resilience. We combine data-driven teaching, modern infrastructure, and compassionate guidance so every student can excel.',
      image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b',
      theme: 'bg-[var(--brand-red)]',
      reverse: true,
    },
    {
      id: 'management',
      label: 'MANAGEMENT',
      title: 'Leadership & Management',
      description:
        'Our leadership team brings decades of academic and operational excellence. Strong governance, continuous teacher training, and student-centric systems ensure quality learning at scale.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',
      theme: 'bg-[#111827]',
    },
  ];
  const aboutHighlights = [
    {
      title: 'Student Life',
      image: 'https://images.unsplash.com/photo-1696319179104-d85903b82048',
    },
    {
      title: 'Admissions',
      image: 'https://images.unsplash.com/photo-1511629091441-ee46146481b6',
    },
    {
      title: 'Campus',
      image: 'https://images.unsplash.com/photo-1602114324193-e1c1b41dcde5',
    },
  ];
  const [activeAboutTab, setActiveAboutTab] = useState(aboutCards[0]?.id ?? '');


  const testimonials = [
    {
      name: 'Aarav Nair',
      role: 'Class 12, Science Stream',
      content: 'The study plan is crystal clear and the weekly tests helped me track my progress without stress.',
      rating: 5,
      image: 'AN',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    },
    {
      name: 'Diya Patel',
      role: 'Class 10, CBSE',
      content: 'Doubt-solving sessions are super helpful. I feel more confident going into board exams.',
      rating: 5,
      image: 'DP',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
    {
      name: 'Kunal Verma',
      role: 'JEE Aspirant',
      content: 'The problem sheets and timed practice sessions improved my speed and accuracy a lot.',
      rating: 4,
      image: 'KV',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    },
    {
      name: 'Meera Iyer',
      role: 'NEET Aspirant',
      content: 'The biology revision modules are concise and easy to remember. It keeps me consistent.',
      rating: 5,
      image: 'MI',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce',
    },
    {
      name: 'Rohan Singh',
      role: 'Class 8',
      content: 'Teachers explain concepts with examples, so math feels simple and fun now.',
      rating: 5,
      image: 'RS',
      avatar: 'https://images.unsplash.com/photo-1507120410856-1f35574c3b45',
    },
    {
      name: 'Sara Khan',
      role: 'Class 11, Commerce',
      content: 'The notes are neat and the teachers help us connect topics with real-life cases.',
      rating: 4,
      image: 'SK',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
    },
    {
      name: 'Nikhil Rao',
      role: 'Olympiad Prep',
      content: 'Challenging questions and personal feedback helped me level up quickly.',
      rating: 5,
      image: 'NR',
      avatar: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    },
    {
      name: 'Aisha Joseph',
      role: 'Class 9',
      content: 'Small batch size means more attention, and it shows in my marks.',
      rating: 5,
      image: 'AJ',
      avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91',
    },
    {
      name: 'Vivek Das',
      role: 'Class 12, PCM',
      content: 'The revision sprints before exams keep everything fresh and focused.',
      rating: 5,
      image: 'VD',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
    },
  ];
  const testimonialSplitIndex = Math.ceil(testimonials.length / 2);
  const testimonialRows = [
    testimonials.slice(0, testimonialSplitIndex),
    testimonials.slice(testimonialSplitIndex),
  ];

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-start overflow-hidden bg-gradient-to-br from-[var(--brand-blue)] via-[var(--brand-blue-dark)] to-[var(--brand-blue)]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-[var(--brand-red)]/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-blue-400/10 rounded-full blur-3xl"
          />
        </div>

        {/* Parallax Background Image */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`bg-img-${heroSlideIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <ImageWithFallback
                src={heroSlides[heroSlideIndex].backgroundImage}
                alt="Campus"
                className="w-full h-full object-cover opacity-20"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r" />
        </motion.div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 py-32">
          <div className="max-w-4xl mr-auto text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={heroSlideIndex}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="flex flex-col min-h-[420px] md:min-h-[520px] lg:min-h-[600px]"
              >
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full"
                >
                  <Sparkles className="size-5 text-[var(--brand-red)]" />
                  <span className="text-sm md:text-base text-white font-semibold">
                    {heroSlides[heroSlideIndex].badge}
                  </span>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl md:text-7xl lg:text-7xl font-bold text-white mb-8 leading-tight"
                >
                  {heroSlides[heroSlideIndex].title}
                  <span className="block bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-red-light)] bg-clip-text text-transparent">
                    {heroSlides[heroSlideIndex].accent}
                  </span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mr-auto"
                >
                  {heroSlides[heroSlideIndex].description}
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-6 justify-start"
                >
                  <Button
                    onClick={() => onNavigate('admissions')}
                    size="lg"
                    className="bg-gradient-to-r cursor-pointer from-[var(--brand-red)] to-[var(--brand-red-light)] hover:from-[var(--brand-red-dark)] hover:to-[var(--brand-red)] text-white px-10 py-7 text-lg rounded-2xl shadow-2xl hover:shadow-[var(--brand-red)]/50 transition-all duration-300 group"
                  >
                    Apply for Admission
                    <ArrowUpRight className="ml-2 size-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                 
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </section>

      {/* Search Filter Overlay */}
      <section className="relative -mt-16 md:-mt-20 z-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl border border-gray-100 px-6 py-6 md:px-10 md:py-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] gap-4 items-end">
              <div>
                <label className="text-sm text-gray-600 block mb-2">Select Board</label>
                <Select>
                  <SelectTrigger className="w-full h-[52px] rounded-xl border border-gray-200 bg-gray-50 px-4 text-gray-800 focus:ring-2 focus:ring-[var(--brand-blue)]/30">
                    <SelectValue placeholder="Select Board" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border border-gray-200">
                    <SelectItem value="cbse">CBSE</SelectItem>
                    <SelectItem value="icse">ICSE</SelectItem>
                    <SelectItem value="state">State Board</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm text-gray-600 block mb-2">Select State</label>
                <Select>
                  <SelectTrigger className="w-full h-[52px] rounded-xl border border-gray-200 bg-gray-50 px-4 text-gray-800 focus:ring-2 focus:ring-[var(--brand-blue)]/30">
                    <SelectValue placeholder="Select State" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border border-gray-200">
                    <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                    <SelectItem value="telangana">Telangana</SelectItem>
                    <SelectItem value="karnataka">Karnataka</SelectItem>
                    <SelectItem value="maharashtra">Maharashtra</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm text-gray-600 block mb-2">Select City</label>
                <Select>
                  <SelectTrigger className="w-full h-[52px] rounded-xl border border-gray-200 bg-gray-50 px-4 text-gray-800 focus:ring-2 focus:ring-[var(--brand-blue)]/30">
                    <SelectValue placeholder="Select City" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border border-gray-200">
                    <SelectItem value="hyderabad">Hyderabad</SelectItem>
                    <SelectItem value="visakhapatnam">Visakhapatnam</SelectItem>
                    <SelectItem value="bengaluru">Bengaluru</SelectItem>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm text-gray-600 block mb-2">Select Branch</label>
                <Select>
                  <SelectTrigger className="w-full h-[52px] rounded-xl border border-gray-200 bg-gray-50 px-4 text-gray-800 focus:ring-2 focus:ring-[var(--brand-blue)]/30">
                    <SelectValue placeholder="Select Branch" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border border-gray-200">
                    <SelectItem value="jubilee-hills">Jubilee Hills</SelectItem>
                    <SelectItem value="hitech-city">Hitech City</SelectItem>
                    <SelectItem value="indiranagar">Indiranagar</SelectItem>
                    <SelectItem value="andheri">Andheri</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                onClick={() => onNavigate('contact')}
                size="lg"
                className="h-[52px] px-8 rounded-xl bg-[#0F172A] hover:bg-[#0B1220] text-white shadow-lg"
              >
                <Search className="mr-2 size-5" />
                Find School
              </Button>
            </div>

            <div className="mt-6 pt-5 border-t border-gray-100 flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <span className="font-medium text-gray-600">Popular Locations:</span>
              {['Hyderabad', 'Bengaluru', 'Chennai', 'Mumbai', 'Delhi'].map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-3 py-1 text-[var(--brand-blue)] hover:bg-gray-100 cursor-pointer"
                >
                  <MapPin className="size-4" />
                  {city}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Highlight Strip */}
      <section className="relative py-20 bg-white overflow-hidden font-sans">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            viewport={{ once: true, amount: 0.3 }}
            className="relative overflow-hidden rounded-3xl bg-[#082C53] from-[var(--brand-blue)] via-[var(--brand-blue-dark)] to-[var(--brand-blue)] p-8 md:p-12 shadow-2xl"
          >
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[var(--brand-red)]/20 blur-3xl" />
            <div className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <motion.div
              initial={{ x: '-120%', opacity: 0 }}
              whileInView={{ x: '120%', opacity: 0.35 }}
              transition={{ duration: 1.1, ease: 'easeInOut', delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-2/3 bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-[-12deg] mix-blend-screen"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 items-center">
              <div className="text-white">
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--brand-red-light)] mb-4">Programs</p>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Explore Courses</h3>
                <p className="text-white/70 leading-relaxed">
                  Innovative, world-class learning pathways designed to help students excel in exams, careers, and life.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {programTiles.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.10, duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`group relative rounded-2xl p-6 cursor-pointer border border-white/10 backdrop-blur-md transition-all duration-300 ${
                      item.featuredColor ? item.featuredColor : 'bg-white/10'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-700 ease-in-out group-hover:rotate-[360deg] group-hover:scale-[1.2] ${
                      item.featuredColor ? 'bg-white/15' : 'bg-white/10'
                    }`}>
                      <item.icon className="size-6 text-white" />
                    </div>
                    
                    <h4 className="mt-4 text-white font-semibold">{item.title}</h4>
                    <div className="mt-2 inline-flex items-center gap-2 text-sm text-white/70 group-hover:text-white cursor-pointer">
                      Learn more
                      <ChevronRight className="size-4" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[var(--brand-red)] font-bold mb-4 px-4 py-2 bg-red-50 rounded-full text-sm tracking-wide uppercase">
              Our Programs
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-light)] bg-clip-text text-transparent">
                Comprehensive Learning
              </span>
              <br />
              Pathways
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              From foundational learning to competitive exam preparation, designed to excel at every stage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -15 }}
                className="group cursor-pointer"
              >
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                  <div className="relative h-72 overflow-hidden">
                    <ImageWithFallback
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    <div className="absolute top-6 left-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${program.gradient} rounded-2xl flex items-center justify-center shadow-xl transition-transform duration-700 ease-in-out group-hover:rotate-[360deg] group-hover:scale-[1.2]`}>
                        <program.icon className="size-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-3xl font-bold text-white mb-2">{program.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-gray-600 leading-relaxed mb-6">{program.description}</p>
                    <button
                      onClick={() => onNavigate('academics')}
                      className="inline-flex items-center gap-2 text-[var(--brand-blue)] font-bold group-hover:gap-4 transition-all"
                    >
                      Explore Program
                      <ChevronRight className="size-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section (Tabbed Cards) */}
      <section className="relative overflow-hidden bg-[#F8FAFC] py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FAFC] to-white" />
        <div className="pointer-events-none absolute -left-32 top-16 h-64 w-64 rounded-full bg-[var(--brand-blue)]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-72 w-72 rounded-full bg-[var(--brand-red)]/10 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[var(--brand-red)] font-bold mb-4 px-4 py-2 bg-red-50 rounded-full text-sm tracking-wide uppercase">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-light)] bg-clip-text text-transparent">
                Built on Purpose,
              </span>
              <br />
              Designed for Impact
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              A modern learning ecosystem that blends academic rigor, personalized mentoring, and
              future-ready skills at every stage.
            </p>
          </motion.div>

          <div className="mx-auto max-w-5xl">
            <div className="relative mb-10 rounded-2xl border border-blue-100 bg-white/90 p-2 shadow-sm">
              <div className="absolute inset-x-6 top-1 h-[3px] rounded-full bg-[var(--brand-red)]" />
              <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                {aboutCards.map((card, index) => {
                  const isActive = activeAboutTab === card.id;
                  return (
                    <motion.button
                      key={card.id}
                      onClick={() => setActiveAboutTab(card.id)}
                      whileTap={{ scale: 0.97 }}
                      animate={{
                        y: isActive ? -6 : 0,
                        scale: isActive ? 1.02 : 1,
                        boxShadow: isActive ? '0 18px 35px rgba(15, 60, 110, 0.25)' : 'none',
                      }}
                      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                      className={`relative flex items-center justify-center rounded-xl cursor-pointer px-6 py-5 text-sm font-semibold uppercase tracking-[0.25em] transition-colors ${
                        isActive
                          ? 'bg-[#0B3B6E] text-white'
                          : 'bg-white text-[var(--brand-blue)] hover:bg-blue-50'
                      } ${index < aboutCards.length - 1 ? 'md:border-r border-gray-200/80' : ''}`}
                      aria-pressed={isActive}
                    >
                      {card.label}
                      <span
                        className={`absolute inset-x-0 top-0 h-[3px] ${
                          isActive ? 'bg-[var(--brand-red)]' : 'bg-transparent'
                        }`}
                      />
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {(() => {
              const activeCard = aboutCards.find((card) => card.id === activeAboutTab) ?? aboutCards[0];
              return (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCard.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="grid grid-cols-1 gap-10 rounded-[32px] border border-blue-100 bg-white/90 p-6 shadow-[0_24px_60px_-40px_rgba(15,60,110,0.55)] backdrop-blur lg:grid-cols-[420px_1fr] lg:p-10 items-center"
                  >
                    <div className="relative">
                      <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-blue-100 via-white to-red-100 opacity-80" />
                      <div className="absolute -inset-2 rounded-[32px] border border-blue-200/60" />
                      <div className="relative overflow-hidden rounded-[28px] bg-white shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--brand-blue)]/15 via-transparent to-[var(--brand-red)]/20" />
                        <ImageWithFallback
                          src={activeCard.image}
                          alt={activeCard.title}
                          className="w-full h-[260px] md:h-[320px] object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                      <div className="absolute -bottom-5 right-6 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--brand-blue)] shadow-lg">
                        {activeCard.label}
                      </div>
                    </div>

                    <div className="space-y-5">
                      <p className="text-sm uppercase tracking-[0.3em] text-[var(--brand-blue)] font-semibold">
                        {activeCard.label}
                      </p>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                        {activeCard.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {activeCard.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {aboutHighlights.map((item) => (
                          <div
                            key={item.title}
                            className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm"
                          >
                            <ImageWithFallback
                              src={item.image}
                              alt={item.title}
                              className="h-24 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                            <span className="absolute bottom-2 left-3 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                              {item.title}
                            </span>
                          </div>
                        ))}
                      </div>
                      {/* <Button
                        onClick={() => onNavigate('about')}
                        variant="outline"
                        className="border-[var(--brand-red)] text-[var(--brand-red)] hover:bg-[var(--brand-red)] hover:text-white rounded-full px-6"
                      >
                        Read More
                        <ArrowUpRight className="ml-2 size-4" />
                      </Button> */}
                    </div>
                  </motion.div>
                </AnimatePresence>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[var(--brand-red)] font-bold mb-4 px-4 py-2 bg-red-50 rounded-full text-sm tracking-wide uppercase">
              Campus Life
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-light)] bg-clip-text text-transparent">
                Discover Our
              </span>
              <br />
              Campus Moments
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'https://images.unsplash.com/photo-1696319179104-d85903b82048',
              'https://images.unsplash.com/photo-1511629091441-ee46146481b6',
              'https://images.unsplash.com/photo-1602114324193-e1c1b41dcde5',
              'https://images.unsplash.com/photo-1766297247924-6638d54e7c89',
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative h-80 rounded-3xl overflow-hidden cursor-pointer group"
              >
                <ImageWithFallback
                  src={img}
                  alt={`Campus ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-blue)]/90 via-[var(--brand-blue)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6">
                  <CheckCircle className="size-12 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 bg-white text-slate-900 overflow-hidden">
        <style>{`
          @keyframes testimonials-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .testimonials-track {
            animation: testimonials-marquee 34s linear infinite;
            will-change: transform;
          }
          .testimonials-track.reverse {
            animation-direction: reverse;
          }
          .testimonials-row:hover .testimonials-track {
            animation-play-state: paused;
          }
          @media (prefers-reduced-motion: reduce) {
            .testimonials-track {
              animation: none;
              transform: translateX(0);
            }
          }
          .testimonials-mask {
            -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
            mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
            -webkit-mask-size: 100% 100%;
            mask-size: 100% 100%;
            -webkit-mask-repeat: no-repeat;
            mask-repeat: no-repeat;
          }
        `}</style>
        <div className="absolute inset-0">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[var(--brand-red)]/10 blur-[120px]" />
          <div className="absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-[var(--brand-blue)]/10 blur-[140px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[var(--brand-red)] font-bold mb-4 px-4 py-2 bg-[var(--brand-red)]/10 rounded-full text-sm tracking-wide uppercase">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              What Our Learners Say
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Real feedback from students who experienced our programs.
            </p>
          </motion.div>

          <div className="testimonials-wrap testimonials-mask relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-44 z-30  bg-[linear-gradient(90deg,rgba(255, 255, 255, 0.9)_0%,rgba(255,255,255,0)_100%)]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-44 z-30  bg-[linear-gradient(275deg,rgba(255, 255, 255, 0.88)_0%,rgba(255,255,255,0)_100%)]" />

            <div className="space-y-6">
              {testimonialRows.map((row, rowIndex) => (
                <div key={`row-${rowIndex}`} className="testimonials-row overflow-hidden">
                  <div className={`testimonials-track flex w-max gap-6 ${rowIndex === 1 ? 'reverse' : ''}`}>
                    {[...row, ...row].map((testimonial, index) => (
                      <div
                        key={`${testimonial.name}-${rowIndex}-${index}`}
                        className="relative w-[260px] md:w-[400px] shrink-0"
                      >
                        <div className="relative h-[240px] md:h-[260px] rounded-2xl border border-white/60 bg-white/40 backdrop-blur-xl shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)] overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-blue)]/10 via-transparent to-[var(--brand-red)]/12" />
                          <div className="relative p-6 md:p-7 flex flex-col h-full">
                            <div className="flex items-center gap-4 pb-4 border-b border-slate-200/70">
                              <div className="h-12 w-12 rounded-full overflow-hidden border border-white/60 bg-white/80 flex items-center justify-center">
                                {testimonial.avatar ? (
                                  <ImageWithFallback
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="h-full w-full object-cover"
                                  />
                                ) : (
                                  <span className="font-semibold text-sm text-[var(--brand-blue)]">
                                    {testimonial.image}
                                  </span>
                                )}
                              </div>
                              <div>
                                <p className="font-semibold text-slate-900">{testimonial.name}</p>
                                <p className="text-sm text-slate-500">{testimonial.role}</p>
                              </div>
                            </div>

                            <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                              <span className="text-slate-400">{testimonial.rating.toFixed(1)}</span>
                              <div className="flex gap-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="size-4 fill-[#f5c542] text-[#f5c542]" />
                                ))}
                              </div>
                            </div>

                            <p
                              className="mt-4 text-slate-600 leading-relaxed text-sm"
                              style={{
                                display: '-webkit-box',
                                WebkitLineClamp: 4,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                              }}
                            >
                              {testimonial.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-blue-dark)] to-[var(--brand-blue)] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--brand-red)]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Begin Your Journey to
              <span className="block text-[var(--brand-red)]">Excellence</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of successful students who have transformed their futures with Sri Chaitanya.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                onClick={() => onNavigate('admissions')}
                size="lg"
                className="bg-gradient-to-r cursor-pointer from-[var(--brand-red)] to-[var(--brand-red-light)] hover:from-[var(--brand-red-dark)] hover:to-[var(--brand-red)] text-white px-10 py-6 text-lg rounded-2xl shadow-2xl hover:shadow-[var(--brand-red)]/50 transition-all duration-300 group"
              >
                Apply Now
                <ArrowUpRight className="ml-2 size-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
              <Button
                onClick={() => onNavigate('contact')}
                size="lg"
                variant="outline"
                className="group relative cursor-pointer overflow-hidden border border-white/40 bg-white/10 text-white px-10 py-6 text-lg rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-white/70 hover:bg-white/20 hover:text-white shadow-[0_18px_50px_-30px_rgba(15,23,42,0.7)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 transition-transform duration-500 group-hover:translate-x-full" />
                <span className="relative">Schedule a Visit</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
