import { Star } from "lucide-react";

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