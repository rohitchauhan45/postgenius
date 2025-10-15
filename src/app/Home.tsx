export default function Home() {
    return (
        <div id="home" className="bg-gradient-to-br from-purple-50 to-purple-100 min-h-screen">
            {/* Hero Section */}
            <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left side - Content */}
                    <div>
                        <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-11 sm:leading-13 ">
                            Build Your Post in Just a Few Clicks by <span className="text-purple-600">Postgenius</span> for Free
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
                            Transform your ideas into engaging posts with AI-powered precision
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <button className="bg-purple-600 text-white px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-purple-700 transition-colors">
                                Get Started Free
                            </button>
                            <button className="border border-gray-300 text-gray-700 px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-50 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Right side - Animated Flow Diagram */}
                    <div className="flex justify-center mt-8 lg:mt-0">
                        <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[650px] h-[300px] sm:h-[350px] lg:h-[450px]">
                            {/* Person Icon (Left) */}
                            <div className="absolute left-[15%] top-1/2 transform -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white rounded-full shadow-lg flex items-center justify-center z-10">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                </svg>
                            </div>

                            {/* Refresh Icon (Center) */}
                            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white rounded-full shadow-lg flex items-center justify-center z-10">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
                                </svg>
                            </div>

                            {/* Social Media Icons (Right) */}
                            <div className="absolute right-[9%] top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 sm:space-y-5 lg:space-y-7">
                                {/* Facebook */}
                                <div className="pt-1">
                                    <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="#1877F2">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                        </svg>
                                    </div>
                                </div>

                                {/* Instagram */}
                                <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="url(#instagram-gradient)">
                                        <defs>
                                            <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#833AB4"/>
                                                <stop offset="50%" stopColor="#E1306C"/>
                                                <stop offset="100%" stopColor="#FD1D1D"/>
                                            </linearGradient>
                                        </defs>
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </div>

                                {/* X (Twitter) */}
                                <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="#000000">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                    </svg>
                                </div>

                                {/* LinkedIn */}
                                <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="#0077B5">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </div>

                                {/* YouTube */}
                                <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="#FF0000">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                    </svg>
                                </div>
                            </div>

                            {/* Animated SVG Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: 5}} xmlns="http://www.w3.org/2000/svg">
                                {/* Static Lines */}
                                <line x1="15%" y1="50%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="2.5" className="text-gray-600/30"/>
                                <line x1="50%" y1="50%" x2="85%" y2="17%" stroke="currentColor" strokeWidth="2.5" className="text-gray-600/30"/>
                                <line x1="50%" y1="50%" x2="85%" y2="31%" stroke="currentColor" strokeWidth="2.5" className="text-gray-600/30"/>
                                <line x1="50%" y1="50%" x2="85%" y2="50%" stroke="currentColor" strokeWidth="2.5" className="text-gray-600/30"/>
                                <line x1="50%" y1="50%" x2="85%" y2="69%" stroke="currentColor" strokeWidth="2.5" className="text-gray-600/30"/>
                                <line x1="50%" y1="50%" x2="85%" y2="83%" stroke="currentColor" strokeWidth="2.5" className="text-gray-600/30"/>

                                {/* Animated Lines */}
                                <line x1="15%" y1="50%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="3" className="text-purple-400 animated-line-left"/>
                                <line x1="50%" y1="50%" x2="85%" y2="17%" stroke="currentColor" strokeWidth="3" className="text-purple-400 animated-line-right"/>
                                <line x1="50%" y1="50%" x2="85%" y2="31%" stroke="currentColor" strokeWidth="3" className="text-purple-400 animated-line-right"/>
                                <line x1="50%" y1="50%" x2="85%" y2="50%" stroke="currentColor" strokeWidth="3" className="text-purple-400 animated-line-right"/>
                                <line x1="50%" y1="50%" x2="85%" y2="69%" stroke="currentColor" strokeWidth="3" className="text-purple-400 animated-line-right"/>
                                <line x1="50%" y1="50%" x2="85%" y2="83%" stroke="currentColor" strokeWidth="3" className="text-purple-400 animated-line-right"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-white py-12 sm:py-16">
                <div className="container mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
                        Why Choose <span className="text-purple-600">Postgenius</span>?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <div className="text-center">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-xl sm:text-2xl">⚡</span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">Lightning Fast</h3>
                            <p className="text-gray-600 text-sm sm:text-base">Generate posts in seconds, not hours</p>
                        </div>
                        <div className="text-center">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-xl sm:text-2xl">🎯</span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">AI-Powered</h3>
                            <p className="text-gray-600 text-sm sm:text-base">Smart algorithms create engaging content</p>
                        </div>
                        <div className="text-center sm:col-span-2 lg:col-span-1">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-xl sm:text-2xl">🆓</span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">Free to Use</h3>
                            <p className="text-gray-600 text-sm sm:text-base">No hidden costs, start creating today</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div id="how-it-works" className="bg-white py-12 sm:py-16">
                <div className="container mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
                        How <span className="text-purple-600">It Works</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <div className="text-center">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-xl sm:text-2xl">✍️</span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">1. Write Your Idea</h3>
                            <p className="text-gray-600 text-sm sm:text-base">Simply describe what you want to post about</p>
                        </div>
                        <div className="text-center">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-xl sm:text-2xl">🤖</span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">2. AI Generates Content</h3>
                            <p className="text-gray-600 text-sm sm:text-base">Our AI creates engaging posts for you</p>
                        </div>
                        <div className="text-center sm:col-span-2 lg:col-span-1">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-xl sm:text-2xl">📱</span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">3. Post Everywhere</h3>
                            <p className="text-gray-600 text-sm sm:text-base">Share across Facebook, Instagram & YouTube</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 py-12 sm:py-16">
                <div className="container mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                        Ready to Create Amazing Posts?
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8">
                        Join thousands of users who trust Postgenius for their content needs
                    </p>
                    <button className="bg-purple-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-lg sm:text-xl font-semibold hover:bg-purple-700 transition-colors">
                        Start Creating Now
                    </button>
                </div>
            </div>
        </div>
    )
}