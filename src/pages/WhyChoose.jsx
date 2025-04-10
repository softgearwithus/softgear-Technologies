import technology from "../assets/technology.png"
import Customize from "../assets/coutomizes_solution.png"
import expertise from "../assets/expertise.png"
import support from "../assets/support.png"

export default function WhyChooseSoftGear() {
    const features = [
      {
        title: "Customized Solutions",
        description: "Tailored digital solutions that fit your business needs",
        icon: Customize,
      },
      {
        title: "Professional Expertise",
        description: "Experienced team dedicated to your success",
        icon: expertise,
      },
      {
        title: "Innovative Technology",
        description: "Cutting-edge technology for your business",
        icon: technology,
      },
      {
        title: "Ongoing Support",
        description: "Continuous support and maintenance",
        icon: support,
      },
    ];
  
    return (
      <div className="bg-[#0C0F12] text-gray-900 py-12 px-6">
        <h2 className="text-center text-3xl font-bold mb-8 text-white">Why Choose SoftGear</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#131619]  text-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition transform hover:scale-105 border border-[#151A20]"
            >
              <div className="text-4xl text-[#1FC8DB] mb-4"><img src={feature.icon} alt="" /></div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  