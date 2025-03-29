export default function DigitalSolutions() {
    const solutions = [
      {
        title: "Portfolio Creation",
        description: "Showcase your work with stunning portfolios",
        icon: "🎨",
      },
      {
        title: "Website Development",
        description: "Custom websites that convert visitors into customers",
        icon: "🌐",
      },
      {
        title: "Mobile Apps",
        description: "Native and cross-platform mobile applications",
        icon: "📱",
      },
      {
        title: "Software Solutions",
        description: "Scalable software for business automation",
        icon: "</>",
      },
      {
        title: "Digital Transformation",
        description: "Complete digital makeover for your business",
        icon: "📊",
      },
     
      {
        title: "Business Analytics",
        description: "Data-driven insights for growth",
        icon: "📈",
      },
    ];
  
   

    return (
      <div id="service-section" className="bg-[#0C0F12] text-white py-12 px-6">
        <h2 className="text-center text-3xl font-bold mb-8">Our Digital Solutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-[#131619] p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition transform hover:scale-105 hover:bg-gray-700 border border-[#151]"
            >
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-300">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  