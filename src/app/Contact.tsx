import AnimatedSection from './components/AnimatedSection';
import TextLineAnimation from './components/TextLineAnimation';

export default function Contact() {
  return (
    <div id="contact" className="bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Contact Form Section */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <AnimatedSection delay={200}>
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Contact <span className="text-purple-600">Us</span>
              </h1>
              <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
                <div className="w-6 sm:w-8 h-0.5 bg-gray-300"></div>
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-pink-600 rounded-full"></div>
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-pink-600 rounded-full"></div>
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-pink-600 rounded-full"></div>
                <div className="w-6 sm:w-8 h-0.5 bg-gray-300"></div>
              </div>
              <TextLineAnimation 
                text="Get in touch with us for any questions or support"
                className="text-base sm:text-lg text-gray-600"
                lineDelay={100}
                splitBy="words"
              />
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={400}>
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <form className="space-y-4 sm:space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Contact Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Contact Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Your Contact Number"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all resize-none text-sm sm:text-base"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-pink-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-pink-700 transition-colors w-full sm:w-auto"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </div>
  );
}
