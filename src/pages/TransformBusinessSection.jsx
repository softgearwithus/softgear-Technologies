export default function TransformBusinessSection() {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] bg-gray-900 text-white text-center px-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2">
        Ready to Transform Your Business?
      </h2>
      <p className="text-gray-400 mb-6 max-w-lg">
        Join thousands of businesses that have successfully transformed their
        digital presence with SoftGear Technologies.
      </p>
      <div className="flex space-x-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-lg">
          Get Started
        </button>
        <button className="border border-gray-500 hover:border-white text-gray-300 hover:text-white font-medium py-2 px-5 rounded-lg">
          Learn More
        </button>
      </div>
    </div>
    );
  }
  