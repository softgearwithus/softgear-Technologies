import Tick from '../assets/tick.png'
export default function ClientSuccessStories() {
    const testimonials = [
      {
        name: "Client A",
        position: "CEO, Digital Solutions Inc",
        feedback:
          "SoftGear Technologies transformed our traditional business into a thriving online brand. We saw a significant increase in customer engagement and sales!",
        icon: Tick,
      },
      {
        name: "Client B",
        position: "Founder, Tech Innovations",
        feedback:
          "Their expertise in digital solutions helped us streamline our operations and expand our reach effectively.",
        icon: Tick,
      },
    ];
  
    return (
      <div className="bg-[#0C0F12] text-white py-12 px-6">
        <h2 className="text-center text-3xl font-bold mb-8">Client Success Stories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#1A1D21] p-6 rounded-xl shadow-lg flex flex-col text-left transition transform hover:scale-105 hover:bg-gray-800"
            >
              <div className="text-4xl text-blue-500 mb-4"><img src={testimonial.icon} alt="" /></div>
              <p className="text-gray-300 mb-4">{testimonial.feedback}</p>
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  