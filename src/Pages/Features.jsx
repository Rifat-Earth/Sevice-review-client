import { FaStar, FaSearch, FaLock, FaMoon, FaBolt, FaRegCommentDots } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaRegCommentDots className="text-4xl text-blue-500" />,
      title: "Easy Review System",
      desc: "Users can quickly add reviews with ratings, photos, and comments."
    },
    {
      icon: <FaStar className="text-4xl text-yellow-500" />,
      title: "Star Ratings",
      desc: "Supports star-based ratings to make reviews more visual."
    },
    {
      icon: <FaSearch className="text-4xl text-green-500" />,
      title: "Smart Search & Filter",
      desc: "Easily find reviews and services using advanced filters."
    },
    {
      icon: <FaLock className="text-4xl text-purple-500" />,
      title: "Secure Authentication",
      desc: "Login with Google/Firebase to keep user data safe."
    },
    {
      icon: <FaMoon className="text-4xl text-gray-400" />,
      title: "Dark & Light Mode",
      desc: "Switch themes anytime — your preference is saved."
    },
    {
      icon: <FaBolt className="text-4xl text-red-500" />,
      title: "Fast & Responsive",
      desc: "Built with React + Vite for speed and mobile support."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">🚀 Our Features</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-base-200 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-center">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mt-2">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
