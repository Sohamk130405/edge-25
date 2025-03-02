import { motion } from "framer-motion";

const roadmapSteps = [
  {
    title: "Step 1",
    description: "Build a strong resume.",
    img: "https://images.unsplash.com/photo-1740654227692-a00a3dd36e4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Step 2",
    description: "Enhance your LinkedIn profile.",
    img: "https://images.unsplash.com/photo-1740654227692-a00a3dd36e4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Step 3",
    description: "Practice coding & DSA.",
    img: "https://images.unsplash.com/photo-1740654227692-a00a3dd36e4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Step 4",
    description: "Apply for internships.",
    img: "https://images.unsplash.com/photo-1740654227692-a00a3dd36e4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Roadmap = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 relative">
      <h2 className="text-center text-3xl font-bold mb-8">Placement Roadmap</h2>

      {/* Vertical Line */}
      <div className="absolute left-1/2 top-20 bottom-10 w-1 bg-gray-300 hidden md:block -translate-x-1/2"></div>

      <div className="space-y-10 relative z-10">
        {roadmapSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`flex flex-col md:flex-row items-center gap-6 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="relative">
              <img
                src={step.img}
                alt={step.title}
                className="w-40 h-40 rounded-lg shadow-lg"
              />
              {/* Connector Circle */}
              <div className="w-6 h-6 bg-blue-500 rounded-full absolute left-1/2 -top-3 -translate-x-1/2 border-4 border-white hidden md:block"></div>
            </div>

            {/* Step Details */}
            <div className="text-center md:text-left bg-white p-4 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
