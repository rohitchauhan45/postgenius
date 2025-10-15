export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          {/* Postgenius Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold text-purple-400 mb-3 sm:mb-4">Postgenius</h3>
            <p className="text-gray-300 text-sm sm:text-sm leading-6 sm:leading-7 mb-4 sm:mb-6">
              Transform your ideas into engaging posts with AI-powered precision. 
              Create amazing content effortlessly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#terms" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#cookies" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                <p className="text-gray-300 text-sm">Email:</p>
                <p className="text-purple-400 text-sm">support@postgenius.com</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                <p className="text-gray-300 text-sm">Phone:</p>
                <p className="text-purple-400 text-sm">+1 (555) 123-4567</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                <p className="text-gray-300 text-sm">Address:</p>
                <p className="text-purple-400 text-sm">123 Tech Street<br />San Francisco, CA 94105</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2024 Postgenius. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6">
              <a href="#privacy" className="text-gray-400 hover:text-purple-400 transition-colors text-xs sm:text-sm">
                Privacy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-purple-400 transition-colors text-xs sm:text-sm">
                Terms
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-purple-400 transition-colors text-xs sm:text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
