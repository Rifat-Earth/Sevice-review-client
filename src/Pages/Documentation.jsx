import { useState } from "react";
import { FiBookOpen, FiSettings, FiHelpCircle, FiServer, FiUser,FiMenu } from "react-icons/fi";

const Documentation = () => {
  const [active, setActive] = useState("getting-started");
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { id: "getting-started", title: "Getting Started", icon: <FiBookOpen /> },
    { id: "features", title: "Features Overview", icon: <FiSettings /> },
    { id: "api", title: "API Endpoints", icon: <FiServer /> },
    { id: "user-guide", title: "User Guide", icon: <FiUser /> },
    { id: "faq", title: "FAQ", icon: <FiHelpCircle /> },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-base-200 p-4 sticky top-0 h-screen hidden md:block">
        <h2 className="text-xl font-bold mb-4 text-blue-700">Documentation</h2>
        <ul className="space-y-2">
          {sections.map((sec) => (
            <li key={sec.id}>
              <button
                onClick={() => setActive(sec.id)}
                className={`flex items-center gap-2 w-full text-left px-3 py-2 rounded-lg transition ${
                  active === sec.id ? "bg-primary text-white" : "hover:bg-base-300"
                }`}
              >
                {sec.icon} {sec.title}
              </button>
            </li>
          ))}
        </ul>
      </aside>

       <main className="flex-1 p-6 overflow-y-auto w-full">
        {/* Mobile Nav Button */}
        <div className="md:hidden mb-4 ">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn btn-outline border-2 border-green-700 flex items-center gap-2"
          >
            <FiMenu /> Menu
          </button>
          {menuOpen && (
            <div className="mt-2 bg-base-200 rounded-lg p-3 space-y-2">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => {
                    setActive(sec.id);
                    setMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-lg transition ${
                    active === sec.id ? "bg-primary text-white" : "hover:bg-base-300"
                  }`}
                >
                  {sec.title}
                </button>
              ))}
            </div>
          )}
        </div>

      {/* Content */}
      
        {active === "getting-started" && (
          <section>
            <h1 className="text-2xl text-green-700 font-bold mb-4">🚀 Getting Started</h1>
            <p className="mb-2">Follow these steps to set up the project locally:</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Clone repo: <code className="bg-base-300 px-2 py-1 rounded">git clone your-repo</code></li>
              <li>Install deps: <code className="bg-base-300 px-2 py-1 rounded">npm install</code></li>
              <li>Run project: <code className="bg-base-300 px-2 py-1 rounded">npm run dev</code></li>
            </ol>
          </section>
        )}

        {active === "features" && (
          <section>
            <h1 className="text-2xl font-bold mb-4 text-green-700">⚡ Features Overview</h1>
            <ul className="list-disc pl-5 space-y-2">
              <li>Search & Filter Services</li>
              <li>Customer Reviews + Ratings</li>
              <li>Dark / Light Mode Toggle</li>
              <li>Responsive Design</li>
            </ul>
          </section>
        )}

        {active === "api" && (
          <section>
            <h1 className="text-2xl font-bold mb-4 text-green-700">🛠 API Endpoints</h1>
            <pre className="bg-base-300 p-3 rounded">
              GET /api/services{"\n"}
              POST /api/reviews {"{ serviceId, text, rating }"}{"\n"}
              DELETE /api/reviews/:id
            </pre>
          </section>
        )}

        {active === "user-guide" && (
          <section>
            <h1 className="text-2xl font-bold mb-4 text-green-700">👤 User Guide</h1>
            <p>- Sign up / Log in to access services</p>
            <p>- Click on a service to see details</p>
            <p>- Add reviews & ratings</p>
            
          </section>
        )}

        {active === "faq" && (
          <section>
            <h1 className="text-2xl font-bold mb-4 text-green-700">❓ FAQ</h1>
            <div className="collapse collapse-arrow bg-base-200 mb-2">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">Why can’t I see my review?</div>
              <div className="collapse-content">
                <p>Make sure you’re logged in and refresh the page.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">Does dark mode save?</div>
              <div className="collapse-content">
                <p>Yes, it’s stored in localStorage, so it remembers after refresh.</p>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Documentation;
