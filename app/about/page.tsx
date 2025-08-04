'use client';
import { useEffect, useState } from 'react';
import {
  Award,
  Users,
  Hammer,
  Handshake,
  Flame,
  Clock,
  CircleDollarSign,
  Shield,
  Headset,
  Factory,
  Mail,
  Star,
  MapPin,
  Lightbulb,
  Check,
  Phone,
} from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function AboutPage() {
  return (
    <main className="bg-gray-50 min-h-screen font-sans">
      <Navbar/>

      <HeroSection />

      <CompanyStory />

      <CoreValues />

      <ExpertiseShowcase />

      <TeamSection />

      <WhyChooseUs />

      <Testimonials />

      <CallToAction />

      <Footer />
    </main>
  );
}

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 pt-40 relative overflow-hidden hero-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-orange-400">Gupta Fabrication</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              For over two decades, we&apos;ve been crafting excellence in metal fabrication. From humble beginnings to a trusted name in the industry, our journey is built on quality, innovation, and unwavering commitment to our clients.
            </p>
            <div className="flex flex-wrap gap-6">
              <CounterCard number={25} label="Years Experience" />
              <CounterCard number={1500} label="Projects Completed" />
              <CounterCard number={98} label="Client Satisfaction" />
            </div>
          </div>

          <div className="animate-slide-in-right relative">
            <div className="animate-floating bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <InfoCard icon={<Award size={32} />} title="ISO Certified" subtitle="Quality Assured" />
                <InfoCard icon={<Users size={32} />} title="Expert Team" subtitle="Skilled Professionals" />
                <InfoCard icon={<Hammer size={32} />} title="Modern Equipment" subtitle="Latest Technology" />
                <InfoCard icon={<Handshake size={32} />} title="Trusted Service" subtitle="Reliable Partner" />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-red-400 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CounterCard({ number, label }: { number: number; label: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = number;
    const increment = Math.ceil(end / 100);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(start);
    }, 20);
    return () => clearInterval(interval);
  }, [number]);

  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20 w-40">
      <div className="text-3xl font-bold text-orange-400 tabular-nums">{count}</div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  );
}

function InfoCard({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <div className="bg-white bg-opacity-20 rounded-2xl p-6 shadow-lg text-white">
      <div className="mb-3">{icon}</div>
      <h4 className="text-lg font-bold mb-1">{title}</h4>
      <p className="text-orange-100 text-sm">{subtitle}</p>
    </div>
  );
}

export function CompanyStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          From a small workshop to a leading fabrication company, discover the journey that shaped Gupta Fabrication into the trusted name it is today.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 border border-orange-100">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">The Beginning</h4>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 1999 by Mr. Kamta Gupta, our company started as a small family business with a simple vision: to provide high-quality metal fabrication services with integrity and craftsmanship. What began in a modest 500 sq ft workshop has grown into a state-of-the-art facility spanning over 10,000 sq ft.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our founder&apos;s passion in mechanical engineering and metalwork laid the foundation for what would become one of Satna&apos;s most trusted fabrication companies. Every project, no matter how small, was treated with the same dedication and attention to detail.
            </p>
          </div>
        </div>
        <div className="relative">
          <Timeline />
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const events = [
    { year: 1999, title: 'Company Founded', desc: 'Started with basic welding and small fabrication projects', colorFrom: 'from-orange-500', colorTo: 'to-red-500' },
    { year: 2005, title: 'First Major Contract', desc: 'Secured industrial fabrication project worth ₹50 lakhs', colorFrom: 'from-blue-500', colorTo: 'to-indigo-500' },
    { year: 2012, title: 'ISO Certification', desc: 'Achieved ISO 9001:2008 quality management certification', colorFrom: 'from-green-500', colorTo: 'to-emerald-500' },
    { year: 2024, title: 'Industry Leader', desc: 'Recognized as top fabrication company in North India', colorFrom: 'from-purple-500', colorTo: 'to-pink-500' },
  ];

  return (
    <>
      <div className="space-y-8">
        {events.map(({ year, title, desc, colorFrom, colorTo }) => (
          <div key={year} className="flex items-center gap-6">
            <div className={`bg-gradient-to-r ${colorFrom} ${colorTo} text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg shadow-lg flex-shrink-0`}>
              {year}
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex-1">
              <h5 className="font-bold text-gray-900 mb-2">{title}</h5>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-orange-500 to-red-500 rounded-full -z-10 timeline-line"></div>
    </>
  );
}

export function CoreValues() {
  const values = [
    { icon: <Award size={48} />, title: 'Quality Excellence', desc: 'We never compromise on quality. Every project meets the highest standards of craftsmanship and durability.', from: 'blue-500', to: 'indigo-500' },
    { icon: <Handshake size={48} />, title: 'Integrity', desc: 'Honest communication, transparent pricing, and ethical business practices form the foundation of our relationships.', from: 'green-500', to: 'emerald-500' },
    { icon: <Lightbulb size={48} />, title: 'Innovation', desc: 'We continuously invest in new technologies and techniques to deliver cutting-edge solutions.', from: 'orange-500', to: 'red-500' },
    { icon: <Users size={48} />, title: 'Customer Focus', desc: 'Your success is our success. We work closely with clients to exceed expectations on every project.', from: 'purple-500', to: 'pink-500' },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          These fundamental principles guide every decision we make and every project we undertake.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map(({ icon, title, desc, from, to }) => (
          <div key={title} className={`bg-white rounded-3xl p-8 shadow-lg card-hover border border-gray-100 text-center`}>
            <div className={`bg-gradient-to-r from-${from} to-${to} text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
              {icon}
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">{title}</h4>
            <p className="text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ExpertiseShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise</h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive metal fabrication services backed by decades of experience and state-of-the-art equipment.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          icon={<Factory size={32} />}
          title="Custom Fabrication"
          desc="Bespoke metal structures designed and built to your exact specifications using advanced CAD/CAM technology."
          highlights={["Structural steelwork", "Industrial machinery parts", "Architectural metalwork"]}
          from="from-orange-500"
          to="to-red-500"
        />
        <ServiceCard
          icon={<Flame size={32} />}
          title="Welding Services"
          desc="Expert welding using MIG, TIG, and Arc welding techniques for all metals and alloys."
          highlights={["Certified welders", "All welding processes", "Quality testing"]}
          from="from-blue-500"
          to="to-indigo-500"
        />
        <ServiceCard
          icon={<Hammer size={32} />}
          title="Precision Cutting"
          desc="Advanced plasma and laser cutting services for precise, clean cuts across various metal thicknesses."
          highlights={["CNC plasma cutting", "Laser cutting", "Water jet cutting"]}
          from="from-green-500"
          to="to-emerald-500"
        />
        <ServiceCard
          icon={<MapPin size={32} />}
          title="Gates & Railings"
          desc="Beautiful secure gates, railings, and fencing solutions for residential and commercial properties."
          highlights={["Custom designs", "Security features", "Installation service"]}
          from="from-purple-500"
          to="to-pink-500"
        />
        <ServiceCard
          icon={<Handshake size={32} />}
          title="Industrial Parts"
          desc="Precision manufacturing of components, machinery parts, and replacements."
          highlights={["CNC machining", "Prototype development", "Batch production"]}
          from="from-yellow-500"
          to="to-orange-500"
        />
        <ServiceCard
          icon={<Factory size={32} />}
          title="Structural Work"
          desc="Heavy-duty structural fabrication for industrial buildings, warehouses, and infrastructure."
          highlights={["Steel frameworks", "Roof trusses", "Mezzanine floors"]}
          from="from-red-500"
          to="to-pink-500"
        />
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
  highlights,
  from,
  to,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  highlights: string[];
  from: string;
  to: string;
}) {
  return (
    <div
      className={`group bg-gradient-to-br ${from} ${to} rounded-3xl p-8 border border-${from} card-hover shadow-lg text-white cursor-pointer transition-transform`}
    >
      <div className={`bg-gradient-to-r ${from} ${to} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h4 className="text-xl font-bold mb-4">{title}</h4>
      <p className="mb-4">{desc}</p>
      <ul className="text-sm space-y-1">
        {highlights.map((hl) => (
          <li key={hl} className="flex items-center gap-2">
            <Check className="w-4" />
            {hl}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TeamSection() {
  const team = [
    {
      name: 'Kamta Gupta',
      role: 'Founder & CEO',
      description:
        '25+ years experience in metal fabrication and leadership. Mechanical Engineer with vision for excellence.',
      initials: 'KG',
      colorFrom: 'from-orange-500',
      colorTo: 'to-red-500',
      linkedin: '#',
      email: 'mailto:rajgupta@guptafabrication.com',
    },
    {
      name: 'Motilal Gupta',
      role: 'Head of Operations',
      description:
        'Expert in production planning and quality control. Ensures every project meets our high standards.',
      initials: 'MG',
      colorFrom: 'from-blue-500',
      colorTo: 'to-indigo-500',
      linkedin: '#',
      email: 'mailto:amitsharma@guptafabrication.com',
    },
    {
      name: 'Laxmi Prasad',
      role: 'Head of Operations',
      description:
        'Expert in production planning and quality control. Ensures every project meets our high standards.',
      initials: 'LP',
      colorFrom:"from-red-500",
      colorTo:"to-pink-500",
      linkedin: '#',
      email: 'mailto:amitsharma@guptafabrication.com',
    },
    {
      name: 'Usha Gupta',
      role: 'Managemt Operations',
      description:
        'Expert in production planning and quality control. Ensures every project meets our high standards.',
      initials: 'UG',
      colorFrom: 'from-blue-500',
      colorTo: 'to-indigo-500',
      linkedin: '#',
      email: 'mailto:amitsharma@guptafabrication.com',
    },
    {
      name: 'Rajesh Sen',
      role: 'Lead Welder',
      description:
        'Certified welder with 15+ years experience. Specialist in TIG welding and complex joint fabrication.',
      initials: 'RS',
      colorFrom: 'from-green-500',
      colorTo: 'to-emerald-500',
      linkedin: '#',
      email: 'mailto:vikramkumar@guptafabrication.com',
    },
    {
      name: 'Abhishek Kumar',
      role: 'Design Engineer',
      description:
        'CAD specialist and structural engineer. Ensures structural integrity and detailed designs.',
      initials: 'AK',
      colorFrom: 'from-purple-500',
      colorTo: 'to-pink-500',
      linkedin: '#',
      email: 'mailto:sureshpatel@guptafabrication.com',
    },
    {
      name: 'Rahul Gupta',
      role: 'Business Consultant',
      description:
        '25+ years experience in business development and leadership. Businessman with vision for excellence.',
      initials: 'RG',
      colorFrom: 'from-orange-500',
      colorTo: 'to-red-500',
      linkedin: '#',
      email: 'mailto:rajgupta@guptafabrication.com',
    },
    {
      name: 'Dr. Robin Ashutosh',
      role: 'MBBS Doctor',
      description:
        'A company doctor primarily focusing on employee health and well-being within the workplace.',
      initials: 'RA',
      colorFrom: 'from-blue-500',
      colorTo: 'to-indigo-500',
      linkedin: '#',
      email: 'mailto:amitsharma@guptafabrication.com',
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h3 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our skilled professionals bring decades of combined experience and passion for excellence to every project.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map(({ name, role, description, initials, colorFrom, colorTo, linkedin, email }) => (
          <div
            key={name}
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 card-hover text-center"
          >
            <div
              className={`w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center font-bold text-white text-2xl bg-gradient-to-r ${colorFrom} ${colorTo}`}
            >
              {initials}
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
            <p className={`font-semibold text-${colorFrom} mb-4`}>{role}</p>
            <p className="text-gray-600 text-sm mb-4">{description}</p>
            <div className="flex justify-center space-x-3">
              {/* <a href={linkedin} className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition">
                <Linkedin size={20} />
              </a> */}
              {/* <a href={email} className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition">
                <Mail size={20} />
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <Clock size={40} className="text-orange-500" />,
      title: 'On-Time Delivery',
      description:
        'We understand deadlines. Efficient management ensures 98% on-time delivery.',
      colorFrom: 'from-orange-500',
      colorTo: 'to-red-500'
    },
    {
      icon: <CircleDollarSign size={40} className="text-blue-600" />,
      title: 'Competitive Pricing',
      description: 'Quality without compromise, competitive rates with high standards.',
      colorFrom: 'from-blue-500',
      colorTo: 'to-indigo-500'
    },
    {
      icon: <Shield size={40} className="text-green-600" />,
      title: 'Quality Guarantee',
      description:
        'All projects come with comprehensive warranty and quality assurance.',
      colorFrom: 'from-green-500',
      colorTo: 'to-emerald-500'
    },
    {
      icon: <Headset size={40} className="text-purple-500" />,
      title: '24/7 Support',
      description: 'Our support team is available round the clock for queries and emergencies.',
      colorFrom: 'from-purple-500',
      colorTo: 'to-pink-500'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h3 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Gupta Fabrication?</h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover what sets us apart and makes us the preferred choice for metal fabrication.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          {reasons.map(({ icon, title, description, colorFrom, colorTo }) => (
            <div key={title} className="flex gap-6">
              <div
                className={`bg-gradient-to-r ${colorFrom} ${colorTo} text-white w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0`}
              >
                {icon}
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{title}</h4>
                <p className="text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="relative">
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 border border-orange-100">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2 counter" data-target="1500">10000+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2 counter" data-target="25">20</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2 counter" data-target="98">99</div>
                <div className="text-sm text-gray-600">Success Rate %</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2 counter" data-target="50">20</div>
                <div className="text-sm text-gray-600">Expert Team</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h4>
              <div className="flex justify-center items-center space-x-6 opacity-60">
                <TrustedBadge label="Sharda Steels" />
                <TrustedBadge label="Kamta Steels" />
                <TrustedBadge label="Rahul Trunk Store" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustedBadge({ label }: { label: string }) {
  return (
    <div className="bg-gray-200 px-4 py-2 rounded-lg text-sm font-semibold select-none">
      {label}
    </div>
  );
}

export function Testimonials() {
  const testimonials = [
    {
      name: 'Manoj Kumar',
      position: 'Factory Manager, ABC Industries',
      rating: 5,
      review:
        'Exceptional quality and timely delivery. Gupta Fabrication transformed our factory layout with their structural work. Highly recommended!',
      initials: 'MK',
      colorFrom: 'blue-500',
      colorTo: 'indigo-500',
    },
    {
      name: 'Priya Sharma',
      position: 'Architect, Design Studio',
      rating: 5,
      review:
        'Professional team with excellent craftsmanship. They created beautiful custom gates for our residential complex. Outstanding work!',
      initials: 'PS',
      colorFrom: 'green-500',
      colorTo: 'emerald-500',
    },
    {
      name: 'Rahul Jain',
      position: 'Project Manager, Construction Co.',
      rating: 5,
      review:
        'Reliable partner for all our fabrication needs. Their attention to detail and commitment to deadlines is impressive.',
      initials: 'RJ',
      colorFrom: 'orange-500',
      colorTo: 'red-500',
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h3 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t just take our word for it. Here&apos;s what our satisfied clients say about us.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map(({ name, position, rating, review, initials, colorFrom, colorTo }) => (
          <TestimonialCard
            key={name}
            name={name}
            position={position}
            rating={rating}
            review={review}
            initials={initials}
            colorFrom={colorFrom}
            colorTo={colorTo}
          />
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({
  name,
  position,
  rating,
  review,
  initials,
  colorFrom,
  colorTo,
}: {
  name: string;
  position: string;
  rating: number;
  review: string;
  initials: string;
  colorFrom: string;
  colorTo: string;
}) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
      <div className="flex items-center mb-6">
        <div className="flex text-yellow-400 text-xl">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} />
          ))}
        </div>
        <span className="ml-2 text-gray-600 text-sm">({rating.toFixed(1)})</span>
      </div>
      <p className="text-gray-700 mb-6 italic">&quot;{review}&quot;</p>
      <div className="flex items-center">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg bg-gradient-to-r from-${colorFrom} to-${colorTo}`}
        >
          {initials}
        </div>
        <div className="ml-4">
          <h5 className="font-bold text-gray-900">{name}</h5>
          <p className="text-gray-600 text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
}

function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white hero-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Start Your <span className="text-orange-400">Next Project?</span>
        </h3>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Let&apos;s discuss your metal fabrication needs and create something extraordinary together. Get in touch with our expert team today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+919876543210"
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg"
          >
            <Phone size={20} /> Call Now: +91 9340059307
          </a>
          <a
            href="mailto:info@guptafabrication.com"
            className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 hover:bg-opacity-20"
          >
            <Mail size={20} /> Get Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
