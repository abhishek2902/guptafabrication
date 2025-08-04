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