import { Check, Factory, Flame, Hammer, Handshake, MapPin } from "lucide-react";

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