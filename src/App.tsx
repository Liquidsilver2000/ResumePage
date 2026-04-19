import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Menu, X, ChevronRight, MapPin, Phone, Mail, 
  Database, Code, BarChart3, Cloud, Brain, 
  GraduationCap, Award, Briefcase, Sparkles, 
  TrendingUp, Users, Zap, Target, Shield,
  ChevronDown, BookOpen, Layers,
  Globe, GitBranch, LineChart, PieChart,
  Activity, FolderOpen, Star, MessageSquare
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

gsap.registerPlugin(ScrollTrigger);

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Objective', href: '#objective' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Knowledge', href: '#knowledge' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#footer' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#04070a]/90 backdrop-blur-xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="section-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#hero" className="text-xl font-bold code-font text-gradient">
            &lt;SitalKumarNayee /&gt;
          </a>
          
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white/70 hover:text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#04070a]/95 backdrop-blur-xl border-t border-white/10">
          <div className="section-padding py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// Hero Section
const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [currentTitle, setCurrentTitle] = useState(0);
  
  const titles = [
    'Data Scientist',
    'Banking Analytics Strategist',
    'BI Developer',
    'Machine Learning Professional',
    'Automation Builder',
    'AI Solutions Architect'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(nameRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.3 }
      );
      
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.6 }
      );
      
      gsap.fromTo(imageRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out', delay: 0.5 }
      );
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img 
          src="/hero-bg.jpg" 
          alt="" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#04070a]/60 via-[#04070a]/80 to-[#04070a]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#58a6ff]/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 section-padding w-full pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="mb-4">
                <Badge variant="outline" className="px-4 py-1.5 text-sm border-[#58a6ff]/30 text-[#58a6ff] bg-[#58a6ff]/10">
                  <Sparkles className="w-3 h-3 mr-2" />
                  Professional Portfolio
                </Badge>
              </div>
              
              <h1 
                ref={nameRef}
                className="heading-xl mb-6"
              >
                <span className="text-white">SitalKumar</span>
                <br />
                <span className="text-gradient">Nayee</span>
              </h1>
              
              <div ref={subtitleRef} className="mb-8">
                <div className="h-8 mb-4">
                  <p className="text-xl sm:text-2xl text-[#39d0d8] code-font font-medium">
                    {titles[currentTitle]}
                  </p>
                </div>
                <p className="body-lg max-w-xl mx-auto lg:mx-0">
                  Transforming complex data into strategic insights. 
                  Over 25 years of excellence in banking analytics, 
                  business intelligence, and data science innovation.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <MapPin className="w-4 h-4 text-[#58a6ff]" />
                  <span>Oviedo, FL</span>
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Phone className="w-4 h-4 text-[#39d0d8]" />
                  <span>(407) XXX-XXXX</span>
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Mail className="w-4 h-4 text-[#a371f7]" />
                  <span>sitalnayee@gmail.com</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <Button onClick={() => scrollToSection('objective')} className="btn-primary">
                  Explore Resume
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
                <Button onClick={() => scrollToSection('expertise')} variant="outline" className="border-white/20 hover:bg-white/5">
                  View Expertise
                </Button>
                <Button onClick={() => scrollToSection('certifications')} variant="outline" className="border-white/20 hover:bg-white/5">
                  Certifications
                </Button>
                <Button onClick={() => scrollToSection('experience')} variant="outline" className="border-white/20 hover:bg-white/5">
                  Career Timeline
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <div ref={imageRef} className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#58a6ff] via-[#39d0d8] to-[#a371f7] opacity-50 blur-xl animate-pulse-glow" />
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#58a6ff] via-[#39d0d8] to-[#a371f7] animate-rotate" style={{ padding: '2px' }}>
                  <div className="w-full h-full rounded-full bg-[#04070a]" />
                </div>
                <img 
                  src="/profile.png" 
                  alt="SitalKumar Nayee"
                  className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-[#04070a]"
                />
                
                <div className="absolute -top-4 -right-4 glass-card px-4 py-2 animate-float">
                  <span className="text-sm font-medium text-[#58a6ff]">74+ Dashboards</span>
                </div>
                <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2 animate-float-delayed">
                  <span className="text-sm font-medium text-[#39d0d8]">60+ Certifications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5 text-white/40 animate-bounce" />
      </div>
    </section>
  );
};

// Objective Section
const ObjectiveSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="objective" 
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#58a6ff]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#a371f7]/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 section-padding">
        <div ref={contentRef} className="max-w-4xl mx-auto">
          <div className="glass-card-strong glow-border p-8 sm:p-12 lg:p-16 text-center">
            <Badge variant="outline" className="mb-6 px-4 py-1.5 border-[#d4a373]/30 text-[#d4a373]">
              <Target className="w-3 h-3 mr-2" />
              Objective Statement
            </Badge>
            
            <h2 className="heading-md mb-8 text-gradient-gold">
              Committed | Dedicated | Focused
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-white/80 leading-relaxed">
              To provide my proven and strategic banking strategies to maximize quality banking 
              relationship service for the best interest of our financial institutions and our 
              members as a <span className="text-[#58a6ff] font-semibold">Data Scientist</span>. 
              Very knowledgeable of banking regulations and proven track record of implementing 
              the necessary controls to ensure compliance. Dedicated to maintaining a reputation 
              built on quality, service, and uncompromising ethics.
            </p>
            
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#58a6ff]/20 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#58a6ff]" />
                </div>
                <div className="text-left">
                  <p className="text-white font-medium">Compliance Expert</p>
                  <p className="text-white/50 text-sm">Banking Regulations</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#39d0d8]/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#39d0d8]" />
                </div>
                <div className="text-left">
                  <p className="text-white font-medium">Quality Focused</p>
                  <p className="text-white/50 text-sm">Service Excellence</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#a371f7]/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-[#a371f7]" />
                </div>
                <div className="text-left">
                  <p className="text-white font-medium">Ethical Standards</p>
                  <p className="text-white/50 text-sm">Uncompromising Integrity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Areas of Expertise Section
const ExpertiseSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const expertiseCategories = [
    {
      title: 'Data Engineering & Databases',
      icon: Database,
      color: '#58a6ff',
      skills: [
        'Database Development', 'SQL Queries', 'SQL Data Tools', 'Data Analytics',
        'SQL Views', 'SQL Data Storage', 'SQL Agent Jobs', 'SQL Data Access',
        'SQL Stored Procedures', 'MS SQL Server 2019', 'Data Warehousing',
        'Data Curation', 'Data Mining', 'Data Extraction', 'Data Prediction',
        'Database Structures', 'Spark, MongoDB, Redis'
      ]
    },
    {
      title: 'BI & Reporting',
      icon: BarChart3,
      color: '#39d0d8',
      skills: [
        'MS SSRS Developer', 'CRM Analytics', 'Adobe Analytics', 'MS SSIS Developer',
        'AD-HOC Reports', 'Data Analysis Expr.', 'MS Power BI Developer',
        'MS PBI Report Builder', 'Tableau Developer', 'MS Excel 2023',
        'SAS, SPSS, Seaborn', 'Wrangling & Analysis'
      ]
    },
    {
      title: 'Programming & App Development',
      icon: Code,
      color: '#a371f7',
      skills: [
        'Adv. Python Programming', 'Jupyter Lab / Notebook', 'HTML, CSS, JS, XML',
        'R Gui App Developer', 'MS Visual Studio', 'MS Visual Studio Code',
        'ESRI / ARCGIS', 'R-Programming', 'Microsoft Project Mgmt.',
        'MS Power Automate', 'MS Power Apps', 'Stream Lit Applications',
        'GitHub, Git Repos', 'Math, Stats, Algorithms'
      ]
    },
    {
      title: 'AI / ML / Analytics',
      icon: Brain,
      color: '#d4a373',
      skills: [
        'Rapid Miner, Weka', 'Feature Engineering', 'Supervised Learning',
        'Unsupervised Learning', 'Time-Series Modelling', 'Deep Learning (CNNs, RNNs)',
        'NLP & Text Analytics', 'Model Evaluation', 'Dimensionality Reduction',
        'Anomaly Detection', 'Ensemble Methods', 'Bayesian Inference',
        'Reinforcement Learning', 'Explainable AI', 'A/B Testing',
        'Big-Data Frameworks'
      ]
    },
    {
      title: 'Cloud / Automation / Dev Tools',
      icon: Cloud,
      color: '#58a6ff',
      skills: [
        'Azure DevOps', 'Azure Cloud', 'AWS SageMaker', 'Azure ML',
        'GCP AI Platform', 'MS PowerShell', 'Power Automate', 'Power Apps'
      ]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.expertise-card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
            delay: i * 0.1
          }
        );
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="expertise" 
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 border-[#58a6ff]/30 text-[#58a6ff]">
              <Zap className="w-3 h-3 mr-2" />
              Technical Proficiency
            </Badge>
            <h2 className="heading-lg mb-4">Areas of Expertise</h2>
            <p className="body-lg max-w-2xl mx-auto">
              A comprehensive toolkit spanning data engineering, business intelligence, 
              machine learning, and cloud technologies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseCategories.map((category, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div 
                    className="expertise-card glass-card p-6 cursor-pointer group hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
                  >
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${category.color}20` }}
                    >
                      <category.icon className="w-7 h-7" style={{ color: category.color }} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-gradient transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-white/50 text-sm mb-4">
                      {category.skills.slice(0, 5).join(', ')}...
                    </p>
                    <div className="flex items-center text-sm" style={{ color: category.color }}>
                      <span>View {category.skills.length} skills</span>
                      <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-2xl bg-[#0d1117]/95 backdrop-blur-xl border-white/10">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-3 text-2xl">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${category.color}20` }}
                      >
                        <category.icon className="w-5 h-5" style={{ color: category.color }} />
                      </div>
                      <span style={{ color: category.color }}>{category.title}</span>
                    </DialogTitle>
                  </DialogHeader>
                  <ScrollArea className="max-h-[60vh]">
                    <div className="grid grid-cols-2 gap-3 p-4">
                      {category.skills.map((skill, i) => (
                        <div 
                          key={i}
                          className="flex items-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                        >
                          <div 
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: category.color }}
                          />
                          <span className="text-white/80 text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Education Section
const EducationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const education = [
    {
      degree: 'Bachelors of Science in Data Science',
      schools: ['Seminole State College – Orlando, FL', 'University of Central Florida – Orlando, FL'],
      icon: Database,
      color: '#58a6ff'
    },
    {
      degree: 'Bachelors of Science in Information Management Systems',
      schools: ['Seminole State College – Orlando, FL', 'University of Central Florida – Orlando, FL'],
      icon: Code,
      color: '#39d0d8'
    },
    {
      degree: 'A.A. Degree in Data Science',
      schools: ['Valencia Community College – Orlando, FL'],
      icon: GraduationCap,
      color: '#a371f7'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.education-card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="education" 
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#58a6ff]/30 to-transparent" />
      
      <div className="relative z-10 section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 border-[#a371f7]/30 text-[#a371f7]">
              <GraduationCap className="w-3 h-3 mr-2" />
              Academic Background
            </Badge>
            <h2 className="heading-lg mb-4">Education</h2>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#58a6ff] via-[#39d0d8] to-[#a371f7] hidden lg:block" />
            
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className={`education-card relative flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 glass-card p-6 sm:p-8 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${edu.color}20` }}
                      >
                        <edu.icon className="w-6 h-6" style={{ color: edu.color }} />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-white">{edu.degree}</h3>
                    </div>
                    <div className={`space-y-1 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                      {edu.schools.map((school, i) => (
                        <p key={i} className="text-white/60">{school}</p>
                      ))}
                    </div>
                  </div>
                  
                  <div className="hidden lg:flex w-12 h-12 rounded-full bg-[#0d1117] border-2 items-center justify-center z-10"
                    style={{ borderColor: edu.color }}
                  >
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: edu.color }} />
                  </div>
                  
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Certifications Section
const CertificationsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const cunaCourses = [
    'The Data Science Course 2020 – Online',
    'Data Science and Machine Learning Boot Camp with R – Online',
    'The Business Intelligence Analyst 2020 – Online',
    'Complete TensorFlow 2 and Keras Deep Learning Boot Camp – Online',
    'Data Analysis Expressions using Free Tools – Online',
    'Microsoft SQL from A to Z – Online',
    'Learn C# With Windows Forms and SQL Server - Online',
    'Feature Engineering for Machine Learning - Online',
    'Complete Data Science, Machine Learning, DL, NLP Bootcamp - Online',
    'Microsoft PowerApps crash course - from UI to Integration - Online',
    'Automate Everything with Python - Online',
    'Azure Synapse Analytics for Data Engineers -Hands on Project - Online',
    'Natural Language Processing: NLP With Transformers in Python - Online',
    'Power Automate - Complete Guide to Microsoft Power Automate - Online',
    'Build Solutions with Power Apps, Power Automate & SharePoint - Online',
    'Microsoft Power Automate (Flow) Crash Course - Online',
    'The Git & GitHub Bootcamp - Online',
    'Power Apps - Complete Guide to Microsoft PowerApps - Online',
    'RPA - Process Automation using UIPATH - Beginner to Expert - Online',
    'Complete UiPath RPA Developer Course: Build 7 Robots - Online',
    'Machine Learning, Data Science & AI Engineering with Python - Online',
    'Machine Learning A-Z: AI, Python & R + ChatGPT Prize [2025] - Online',
    'SQL & Database Design A-Z™: Learn MS SQL Server + PostgreSQL - Online',
    'MongoDB - The Complete Developer\'s Guide 2025 - Online',
    'Azure Databricks & Spark for Data Engineers: Hands-on Project - Online',
    'The Complete Flutter Development Bootcamp with Dart - Online',
    'iOS & Swift - The Complete iOS App Development Bootcamp - Online',
    'Data Warehouse Developer-SQL Server/ETL/SSIS/SSAS/SSRS + AI - Online',
    'The Complete Full-Stack Web Development Bootcamp - Online',
    'Complete Web & Mobile Designer: UI/UX, Figma, +more - Online',
    'OpenAI Python API Bootcamp (2023): Learn AI, GPT, and more! - Online',
    'The Complete Python Bootcamp from Zero to Hero in Python - Online',
    'The Complete JavaScript Course 2025: From Zero to Expert! - Online',
    'R Programming: Advanced Analytics in R For Data Science - Online',
    'Taming Big Data with Apache Spark 4 and Python - Hands On! - Online',
    'Power BI DAX Masterclass - Measures & Calculated Columns - Online',
    'The Ultimate Hands-On Hadoop: Tame your Big Data! - Online'
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cert-badge',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.03,
          ease: 'back.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="certifications" 
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#58a6ff]/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 border-[#d4a373]/30 text-[#d4a373]">
              <Award className="w-3 h-3 mr-2" />
              Professional Development
            </Badge>
            <h2 className="heading-lg mb-4">Certifications</h2>
            <p className="body-lg max-w-2xl mx-auto">
              Continuous learning through professional courses and industry-recognized certifications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-[#58a6ff]/20 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-10 h-10 text-[#58a6ff]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">CUNA Compliant Courses</h3>
              <p className="text-4xl font-bold text-gradient mb-2">28</p>
              <p className="text-white/60">Professional Certification Courses</p>
            </div>
            
            <div className="glass-card p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-[#39d0d8]/20 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-10 h-10 text-[#39d0d8]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Udemy Certifications</h3>
              <p className="text-4xl font-bold text-gradient mb-2">37</p>
              <p className="text-white/60">Online Technology Courses</p>
            </div>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <div className="glass-card p-6 cursor-pointer hover:bg-white/10 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">View All Certifications</h3>
                  <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-[#58a6ff] transition-colors" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {cunaCourses.slice(0, 8).map((course, i) => (
                    <Badge key={i} variant="outline" className="text-xs border-white/10 text-white/50">
                      {course.split('–')[0].trim()}
                    </Badge>
                  ))}
                  <Badge variant="outline" className="text-xs border-[#58a6ff]/30 text-[#58a6ff]">
                    +{cunaCourses.length - 8} more
                  </Badge>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl bg-[#0d1117]/95 backdrop-blur-xl border-white/10 max-h-[80vh]">
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center gap-3">
                  <Award className="w-6 h-6 text-[#d4a373]" />
                  All Certifications
                </DialogTitle>
              </DialogHeader>
              <ScrollArea className="max-h-[60vh]">
                <div className="space-y-6 p-4">
                  <div>
                    <h4 className="text-lg font-semibold text-[#58a6ff] mb-3">Udemy Certifications</h4>
                    <div className="grid gap-2">
                      {cunaCourses.map((course, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                          <div className="w-2 h-2 rounded-full bg-[#58a6ff] mt-2" />
                          <span className="text-white/80 text-sm">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

// Areas of Knowledge Section
const KnowledgeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const knowledgeAreas = [
    {
      title: 'Banking Operations',
      icon: BuildingIcon,
      color: '#58a6ff',
      items: [
        'Banking Operations', 'CSR Relationship', 'Mortgage Lending', 'Risk Assessment',
        'Bus Banking Services', 'CSR Management', 'Consumer Lending', 'Expense Mgmt.',
        'Banking Compliance', 'CSR Resolution', 'Business Lending', 'Reg. Compliance',
        'Branch Operations', 'Product Knowledge', 'Auditing/Reporting'
      ]
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      color: '#a371f7',
      items: [
        'Feature Engineering & Selection',
        'Supervised Learning (Regression & Classification)',
        'Unsupervised Learning (Clustering & Assoc)',
        'Time-Series Modelling & Forecasting',
        'Deep Learning Architectures (CNNs, RNNs, Transformers)',
        'Natural Language Processing & Text Analytics',
        'Model Evaluation, Validation & Hyperparameter Tuning',
        'Dimensionality Reduction (PCA, t-SNE, UMAP)',
        'Anomaly Detection & Outlier Analysis',
        'Ensemble Methods (Random Forest, Gradient Boosting)',
        'Bayesian Inference & Probabilistic Modelling',
        'Reinforcement Learning & Sequential Decision Making',
        'Explainable AI & Model Interpretability',
        'A/B Testing & Experimental Design',
        'Big-Data Frameworks (Spark ML, Hadoop Ecosystem)',
        'Cloud-Based ML Platforms (AWS SageMaker, Azure ML, GCP AI Platform)'
      ]
    }
  ];

  function BuildingIcon(props: any) {
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M12 6h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/><path d="M8 6h.01"/><path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/><rect x="4" y="2" width="16" height="20" rx="2"/></svg>
    );
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.knowledge-card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
            delay: i * 0.15
          }
        );
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="knowledge" 
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />
      
      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 border-[#a371f7]/30 text-[#a371f7]">
              <BookOpen className="w-3 h-3 mr-2" />
              Domain Expertise
            </Badge>
            <h2 className="heading-lg mb-4">Areas of Knowledge</h2>
            <p className="body-lg max-w-2xl mx-auto">
              Deep expertise in banking operations and cutting-edge machine learning methodologies.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {knowledgeAreas.map((area, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="knowledge-card glass-card p-8 cursor-pointer group hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div 
                        className="w-16 h-16 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${area.color}20` }}
                      >
                        <area.icon className="w-8 h-8" style={{ color: area.color }} />
                      </div>
                      <h3 className="text-2xl font-semibold text-white">{area.title}</h3>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {area.items.slice(0, 5).map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: area.color }} />
                          <span className="text-white/70 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-sm" style={{ color: area.color }}>
                      <span>View all {area.items.length} topics</span>
                      <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-3xl bg-[#0d1117]/95 backdrop-blur-xl border-white/10">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-3 text-2xl">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${area.color}20` }}
                      >
                        <area.icon className="w-5 h-5" style={{ color: area.color }} />
                      </div>
                      <span style={{ color: area.color }}>{area.title}</span>
                    </DialogTitle>
                  </DialogHeader>
                  <ScrollArea className="max-h-[60vh]">
                    <div className="grid gap-2 p-4">
                      {area.items.map((item, i) => (
                        <div 
                          key={i}
                          className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                        >
                          <div 
                            className="w-2 h-2 rounded-full mt-2"
                            style={{ backgroundColor: area.color }}
                          />
                          <span className="text-white/80">{item}</span>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Section
const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const capstoneProjects = [
    {
      title: 'Management Inventory Systems Project',
      company: 'Nautique Boat Company, Orlando FL',
      duration: '12 Week Project',
      icon: FolderOpen,
      color: '#58a6ff',
      bgImage: '/project-bg-1.jpg',
      details: [
        'With the help of Excel – created Basic Inventory Control Template, Stock Inventory Control Template, Asset Tracking Template, Equipment Inventory Template, Boat Inventory Template, Personal Inventory Template for the company.',
        'Provided Cloud Solutions where real time updates, live backup, and multiple users can edit the same document at once.',
        'Designed Dashboards & Reports to allow easier decision making for executives.'
      ]
    },
    {
      title: 'Route Management Project',
      company: 'Waste Pro, Daytona Beach FL',
      duration: '12 Week Project',
      icon: GitBranch,
      color: '#39d0d8',
      bgImage: '/project-bg-2.jpg',
      details: [
        'Provided fleet management solutions such as Pricing, Demo\'s, benefits, from 6 major fleet management software providers e.g.: Fleetmatics, Omnitracs, Route4Me, Descartes, Breezeworks and Onterra',
        'Benefits Include: Real-Time Fleet Monitoring, Improve Fuel Efficiency, and Reduce labor costs, Decrease Fleet Expenses, Fleet Safety & Security and Improve Customer Service.'
      ]
    },
    {
      title: 'Inventory Management Project',
      company: 'Orlando Bait Co – Orlando, FL',
      duration: '12 Week Project',
      icon: Layers,
      color: '#a371f7',
      bgImage: '/project-bg-3.jpg',
      details: [
        'Design a visual dashboard that displays real-time inventory levels, popular product categories (e.g., live bait, lures, fishing line), and reorder points for specific items. Implement a system to ensure "first-in, first-out" (FIFO) inventory management, minimizing potential losses from spoiled bait. Designed a system to track inventory levels of individual tackle box components (e.g., lures, hooks, weights).',
        'Designed reports that flag bait nearing expiration dates, enabling the company to take proactive measures like offering discounts or promotions.',
        'Develop a system (possibly in Excel or a cloud-based spreadsheet) to track the maintenance schedules of fishing rods and reels (e.g., cleaning, lubrication, repair).'
      ]
    }
  ];

  const workProjects = [
    {
      department: 'Marketing Dept. Projects',
      count: 15,
      icon: TrendingUp,
      color: '#58a6ff',
      dashboards: ['Marketing Scorecard', 'Sales Performance', 'Revenue/Expense', 'Data Driven Dashboard', 'Traffic Source Report', 'Product Performances', 'Content Marketing', 'CRM Dashboard']
    },
    {
      department: 'Real Estate Dept. Projects',
      count: 18,
      icon: LineChart,
      color: '#39d0d8',
      dashboards: ['Real Estate Pipeline', 'Product Portfolio', 'FICS Dashboard', 'RE Cost Analysis', 'RE Performance', 'Budgeting Dashboard', 'YTD /MTD Analysis', 'RE Branch Dashboard']
    },
    {
      department: 'Consumer Lending Dept. Projects',
      count: 21,
      icon: PieChart,
      color: '#a371f7',
      dashboards: ['BOD Dashboard', 'Finance Committee', 'Product Portfolio', 'Cost Projection', 'Indirect Performance', 'Direct Performance', 'YTD/MTD Analysis', 'TAT Dashboard']
    },
    {
      department: 'Business Lending Dept. Projects',
      count: 12,
      icon: BarChart3,
      color: '#d4a373',
      dashboards: ['Bus. Loans Dashboard', 'All Branch Analysis', 'Loan Runoff Report', 'On boarding Dashboard', 'Product Portfolio', 'Bus. Com. Dashboard', 'YTD/MTD Analysis', 'Risk Tracking Report']
    },
    {
      department: 'Data Science Projects',
      count: 8,
      icon: Brain,
      color: '#58a6ff',
      dashboards: ['Credit-Risk Scoring Model', 'Churn Prediction for Deposit Accounts', 'Branch-Site Selection Engine', 'Personalized Product Recommendation System', 'Anomaly Detection for Fraud Monitoring', 'Customer Segmentation & Lifecycle Analysis', 'Automated Document Classification (NLP)', 'Predictive Maintenance for ATM Networks']
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.project-card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
            delay: i * 0.1
          }
        );
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 border-[#58a6ff]/30 text-[#58a6ff]">
              <FolderOpen className="w-3 h-3 mr-2" />
              Portfolio
            </Badge>
            <h2 className="heading-lg mb-4">Projects</h2>
          </div>
          
          {/* Capstone Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <Star className="w-6 h-6 text-[#d4a373]" />
              Real World Capstone Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capstoneProjects.map((project, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div 
                      className="project-card glass-card overflow-hidden cursor-pointer group hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="h-40 overflow-hidden relative">
                        <img 
                          src={project.bgImage} 
                          alt=""
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] to-transparent" />
                        <div 
                          className="absolute bottom-4 left-4 w-12 h-12 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${project.color}30` }}
                        >
                          <project.icon className="w-6 h-6" style={{ color: project.color }} />
                        </div>
                      </div>
                      <div className="p-6">
                        <Badge variant="outline" className="mb-2 text-xs border-white/20 text-white/50">
                          {project.duration}
                        </Badge>
                        <h4 className="text-lg font-semibold text-white mb-1">{project.title}</h4>
                        <p className="text-white/50 text-sm">{project.company}</p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl bg-[#0d1117]/95 backdrop-blur-xl border-white/10">
                    <DialogHeader>
                      <DialogTitle className="text-xl">
                        {project.title}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="p-4">
                      <Badge variant="outline" className="mb-4 border-white/20 text-white/50">
                        {project.company} | {project.duration}
                      </Badge>
                      <div className="space-y-4">
                        {project.details.map((detail, i) => (
                          <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-white/5">
                            <div 
                              className="w-2 h-2 rounded-full mt-2"
                              style={{ backgroundColor: project.color }}
                            />
                            <p className="text-white/80 text-sm leading-relaxed">{detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
          
          {/* Work Projects */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <Activity className="w-6 h-6 text-[#58a6ff]" />
              Work Related Data Science Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workProjects.map((project, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div className="project-card glass-card p-6 cursor-pointer group hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <div 
                          className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                          style={{ backgroundColor: `${project.color}20` }}
                        >
                          <project.icon className="w-7 h-7" style={{ color: project.color }} />
                        </div>
                        <div className="text-right">
                          <p className="text-3xl font-bold" style={{ color: project.color }}>{project.count}</p>
                          <p className="text-white/50 text-xs">Dashboards</p>
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">{project.department}</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.dashboards.slice(0, 3).map((db, i) => (
                          <Badge key={i} variant="outline" className="text-xs border-white/10 text-white/50">
                            {db}
                          </Badge>
                        ))}
                        <Badge variant="outline" className="text-xs border-[#58a6ff]/30 text-[#58a6ff]">
                          +{project.dashboards.length - 3}
                        </Badge>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl bg-[#0d1117]/95 backdrop-blur-xl border-white/10">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-3 text-xl">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${project.color}20` }}
                        >
                          <project.icon className="w-5 h-5" style={{ color: project.color }} />
                        </div>
                        <span>{project.department}</span>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="p-4">
                      <p className="text-white/60 mb-4">Built {project.count} Dashboards</p>
                      <div className="grid grid-cols-2 gap-2">
                        {project.dashboards.map((db, i) => (
                          <div 
                            key={i}
                            className="flex items-center gap-2 p-3 rounded-lg bg-white/5"
                          >
                            <div 
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: project.color }}
                            />
                            <span className="text-white/80 text-sm">{db}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Section
const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const processSkills = [
    'Process Improvement / Automation',
    'Cross-Functional Collaboration',
    'Business Process Mapping & Optimization',
    'Scripting & Automation with PowerShell/Python',
    'Project Management Principles',
    'Monitoring & Alert Automation with SQL',
    'Agile Facilitation & Coaching',
    'Scrum Master (Agile facilitation)'
  ];
  
  const leadershipSkills = [
    'Interpersonal / Leadership Skills',
    'Team Leadership & Mentoring',
    'CRM Analytics',
    'Frontline Leadership',
    'Stakeholder Communication & Presentation',
    'Big Audience Presentation',
    'Conflict Resolution & Negotiation',
    'R, Python, Julia, Golang'
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.skill-item',
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />
      
      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 border-[#39d0d8]/30 text-[#39d0d8]">
              <Users className="w-3 h-3 mr-2" />
              Professional Skills
            </Badge>
            <h2 className="heading-lg mb-4">Process & Leadership</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#58a6ff]/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[#58a6ff]" />
                </div>
                <h3 className="text-xl font-semibold text-white">Process Improvement / Automation</h3>
              </div>
              <div className="space-y-3">
                {processSkills.map((skill, i) => (
                  <div key={i} className="skill-item flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-[#58a6ff]" />
                    <span className="text-white/80 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#a371f7]/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#a371f7]" />
                </div>
                <h3 className="text-xl font-semibold text-white">Interpersonal / Leadership Skills</h3>
              </div>
              <div className="space-y-3">
                {leadershipSkills.map((skill, i) => (
                  <div key={i} className="skill-item flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-[#a371f7]" />
                    <span className="text-white/80 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Work Experience Section
const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const experiences = [
    {
      company: 'Addition Financial',
      location: 'Lake Mary, FL',
      period: '10/12/2015 – present',
      role: 'Data Scientist',
      color: '#58a6ff',
      description: 'Responsible for providing supporting data analysis, operational reporting, efficiency projects, and problem resolution to the Lending Dept. Strategically analyse reports across the dept. to identify gaps or opportunities that drive business improvement.',
      achievements: [
        'Applied Discrete Math principles to design decision-tree logic, optimize algorithm efficiency, and manage combinatorial feature selection in machine-learning models.',
        'Knowledgeable of programming concepts in Python and R, then built and deployed end-to-end data pipelines and ML applications.',
        'Engineered memory-efficient data structures and wrote optimized code for processing large-scale datasets, reflecting advanced Data Structures expertise.',
        'Designed and evaluated algorithms for model complexity and runtime, ensuring scalable performance in production environments.',
        'Developed and fine-tuned recommendation systems and clustering models using decision trees, association rules, and unsupervised learning techniques.',
        'Leveraged dimensionality reduction methods—such as PCA and vector transformations—to improve model accuracy and interpretability.',
        'Mentored junior analysts on machine-learning best practices, translating complex concepts into clear, actionable insights for cross-functional teams.',
        'Engaged in continuous learning through self-directed projects, workshops, and professional seminars to stay at the forefront of AI and data-science innovations.'
      ]
    },
    {
      company: 'C. F. E. Federal Credit Union',
      location: 'Longwood, FL',
      period: '10/12/2012 – 10/12/2015',
      role: 'Lead MSR / Loan Officer / Lending Analyst III',
      color: '#39d0d8',
      description: 'Design and develop business intelligence dashboards, analytical reports and data visualizations using Tableau, Power BI, R and other reporting tools. Focus on designing, developing and delivering critical reports, dashboards and analytic solutions for core business groups.',
      achievements: [
        'Create, develop, and maintain key organization reports by accessing data from multiple sources and present meaningful, accurate and relevant information on key actionable metrics from Inception to Completion.',
        'Responsible for collaborating with IT on the ongoing operations and standardization of Enterprise Data warehouse and operational data store.',
        'Provide ongoing help in evaluating, implementing and supporting team members with data mining and researching ideas.',
        'Contribute to the design, development, and maintenance of ongoing metrics, reports, analyses, dashboards to drive key business decisions.',
        'Develop, maintain and manage reporting, analytics, dashboards, report definitions, data extracts, etc.'
      ]
    },
    {
      company: 'UCF Federal Credit Union',
      location: 'Orlando, FL',
      period: '02/21/2009 – 09/22/2012',
      role: 'MSR II, III / Team Lead',
      color: '#a371f7',
      description: 'Schedule staff hours as needed to adequately cover business needs. Coordinate with the VP of Operations for personnel needs and ensure that all department personnel are meeting job standards.',
      achievements: [
        'Ensure adherence to established security procedures and reporting requirements.',
        'Keep the branch security system in good working order and update staff concerning security procedure and policies.',
        'Responsible for quality, quantity, accuracy, and timeliness of work produced by branch personnel daily.',
        'Manage credit union site cash, maintaining the appropriate supply of vault cash.',
        'Ensure that written procedures are documented for all functions within area of responsibility.'
      ]
    },
    {
      company: 'Spar International South Africa',
      location: 'Lusaka, Zambia',
      period: '01/07/1998 – 12/27/1999',
      role: 'Analytics Supervisor',
      color: '#d4a373',
      description: 'Managed, Supervised and led a team of 5 analysts to provide analytical insights to 15 distribution centres. Responsible for researching and analysing key marketing metrics to help the company executives make informed decisions about the market.',
      achievements: [
        'Develop dashboards that provide insights and visualization into channel performance relative to KPI\'s, Projections and historical performances.',
        'Provide key marketing information/research to assist management in developing longer-term business plans.',
        'Work with Data Services and Product management teams to further develop database logic for dashboard presentation.',
        'Assist with monthly/quarterly projections and executive-level marketing performance reporting.',
        'Analyse newsletter metrics, demographics, and website traffic using Excel, SQL and analytical skills.'
      ]
    },
    {
      company: 'Union Bank of Zambia',
      location: 'Livingstone, Zambia',
      period: '04/07/1997 – 08/30/1997',
      role: 'Customer Service Rep (Internship)',
      color: '#58a6ff',
      description: 'Banking internship focused on customer service and banking operations.',
      achievements: []
    },
    {
      company: 'Meridian Bank of Zambia',
      location: 'Livingstone, Zambia',
      period: '05/10/1996 – 08/30/1996',
      role: 'Bank Teller (Internship)',
      color: '#39d0d8',
      description: 'Banking internship focused on teller operations and cash management.',
      achievements: []
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.experience-card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="relative z-10 section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 border-[#58a6ff]/30 text-[#58a6ff]">
              <Briefcase className="w-3 h-3 mr-2" />
              Career Journey
            </Badge>
            <h2 className="heading-lg mb-4">Work Experience</h2>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#58a6ff] via-[#39d0d8] to-[#a371f7] hidden lg:block" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div 
                      className={`experience-card relative flex flex-col lg:flex-row items-center gap-8 cursor-pointer group ${
                        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                      }`}
                    >
                      <div className={`flex-1 glass-card p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                        <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                          <div 
                            className="w-12 h-12 rounded-xl flex items-center justify-center"
                            style={{ backgroundColor: `${exp.color}20` }}
                          >
                            <Briefcase className="w-6 h-6" style={{ color: exp.color }} />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                            <p className="text-white/50 text-sm">{exp.location}</p>
                          </div>
                        </div>
                        <Badge 
                          variant="outline" 
                          className="mb-3"
                          style={{ borderColor: `${exp.color}50`, color: exp.color }}
                        >
                          {exp.period}
                        </Badge>
                        <p className="text-lg font-medium" style={{ color: exp.color }}>{exp.role}</p>
                      </div>
                      
                      <div className="hidden lg:flex w-12 h-12 rounded-full bg-[#0d1117] border-2 items-center justify-center z-10"
                        style={{ borderColor: exp.color }}
                      >
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: exp.color }} />
                      </div>
                      
                      <div className="flex-1 hidden lg:block" />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl bg-[#0d1117]/95 backdrop-blur-xl border-white/10 max-h-[80vh]">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-3 text-xl">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${exp.color}20` }}
                        >
                          <Briefcase className="w-5 h-5" style={{ color: exp.color }} />
                        </div>
                        <div>
                          <p>{exp.company}</p>
                          <p className="text-sm text-white/50 font-normal">{exp.role}</p>
                        </div>
                      </DialogTitle>
                    </DialogHeader>
                    <ScrollArea className="max-h-[60vh]">
                      <div className="p-4">
                        <Badge 
                          variant="outline" 
                          className="mb-4"
                          style={{ borderColor: `${exp.color}50`, color: exp.color }}
                        >
                          {exp.period} | {exp.location}
                        </Badge>
                        <p className="text-white/70 mb-6">{exp.description}</p>
                        {exp.achievements.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-3">Key Achievements</h4>
                            <div className="space-y-3">
                              {exp.achievements.map((achievement, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                                  <div 
                                    className="w-2 h-2 rounded-full mt-2"
                                    style={{ backgroundColor: exp.color }}
                                  />
                                  <p className="text-white/80 text-sm leading-relaxed">{achievement}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Recognition & Footer Section
const FooterSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.recognition-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <footer 
      id="footer" 
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] to-transparent" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Recognitions */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 border-[#d4a373]/30 text-[#d4a373]">
              <Star className="w-3 h-3 mr-2" />
              Academic Excellence
            </Badge>
            <h2 className="heading-lg mb-8">Special Recognitions</h2>
            
            <div className="flex flex-wrap justify-center gap-6">
              <div className="recognition-card glass-card-strong p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-[#d4a373]/20 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-[#d4a373]" />
                </div>
                <h3 className="text-2xl font-bold text-gradient-gold mb-2">President's List</h3>
                <p className="text-4xl font-bold text-white mb-2">4</p>
                <p className="text-white/50">Semesters</p>
              </div>
              
              <div className="recognition-card glass-card-strong p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-[#58a6ff]/20 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-10 h-10 text-[#58a6ff]" />
                </div>
                <h3 className="text-2xl font-bold text-gradient mb-2">Dean's List</h3>
                <p className="text-4xl font-bold text-white mb-2">2</p>
                <p className="text-white/50">Semesters</p>
              </div>
            </div>
          </div>
          
          {/* References */}
          <div className="glass-card p-8 text-center mb-16">
            <MessageSquare className="w-10 h-10 text-[#a371f7] mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">Professional References</h3>
            <p className="text-white/60">Available Upon Request</p>
          </div>
          
          {/* Footer */}
          <div className="border-t border-white/10 pt-12">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-bold code-font text-gradient mb-4">
                  &lt;SitalKumarNayee /&gt;
                </h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  Data Scientist | BI Developer | Banking Analytics Strategist
                  Committed to excellence, driven by innovation.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-white/50">XXXX XXXX XXXX XXXX</p>
                  <p className="text-white/50">XXXX XXXX XXXX XXXX</p>
                  <p className="text-white/50">(407) XXX-XXXX</p>
                  <p className="text-white/50">sitalnayee@gmail.com</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <a href="#hero" className="text-white/50 hover:text-[#58a6ff] transition-colors">Home</a>
                  <a href="#expertise" className="text-white/50 hover:text-[#58a6ff] transition-colors">Expertise</a>
                  <a href="#projects" className="text-white/50 hover:text-[#58a6ff] transition-colors">Projects</a>
                  <a href="#experience" className="text-white/50 hover:text-[#58a6ff] transition-colors">Experience</a>
                </div>
              </div>
            </div>
            
            <div className="text-center pt-8 border-t border-white/5">
              <p className="text-white/30 text-sm">
                © 2025 SitalKumar Nayee. All rights reserved. | Built with passion for data excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#04070a]">
      <Navigation />
      <HeroSection />
      <ObjectiveSection />
      <ExpertiseSection />
      <EducationSection />
      <CertificationsSection />
      <KnowledgeSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <FooterSection />
    </div>
  );
}
