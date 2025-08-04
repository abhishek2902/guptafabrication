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