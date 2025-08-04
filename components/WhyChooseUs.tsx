import { CircleDollarSign, Clock, Headset, Shield } from "lucide-react";

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