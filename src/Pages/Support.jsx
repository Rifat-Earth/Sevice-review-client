import React from 'react';

const Support = () => {
    return (
         <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Support Center</h1>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-10">
          Find answers, get in touch, or share feedback with us.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* FAQ Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-blue-700">📌 Frequently Asked Questions</h2>
            <div className="space-y-3">
              <details className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                <summary className="cursor-pointer font-medium">How do I create an account?</summary>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Click on the "Sign Up" button in the navbar and fill out the form with your details.
                </p>
              </details>
              <details className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                <summary className="cursor-pointer font-medium">How do I reset my password?</summary>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Go to the login page and click on "Forgot Password". You’ll get reset instructions by email.
                </p>
              </details>
              <details className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                <summary className="cursor-pointer font-medium">How do I contact support?</summary>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  You can fill the form on this page or email us directly at <b>support@serve.com</b>.
                </p>
              </details>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-blue-700">📧 Contact Support</h2>
            <form className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border rounded-lg dark:bg-green-700"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border rounded-lg dark:bg-green-700"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-2 border rounded-lg dark:bg-green-700"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-2 border rounded-lg dark:bg-green-700"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Extra Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 dark:text-gray-400">Or reach us directly:</p>
          <p className="font-medium">📞 +880-1234-567890 | 📧 support@serve.com</p>
        </div>
      </div>
    </div>
  );
}

export default Support;