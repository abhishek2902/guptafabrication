import { Award, Handshake, Lightbulb, Users } from "lucide-react";

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