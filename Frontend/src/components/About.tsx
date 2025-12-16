import React from 'react';

export const About = () => {
    return (
        <div className="mt-12 sm:mt-16 md:mt-20 relative mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
            
            {/* Main content container with glass effect */}
            <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/10 shadow-[0_0_50px_rgba(192,219,255,0.15)] overflow-hidden">
                {/* Animated neon lines */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-[glow_4s_ease-in-out_infinite]" />
                    <div className="absolute bottom-0 right-0 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-[glow_4s_ease-in-out_infinite_1s]" />
                </div>

                {/* Title section with glow */}
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 [text-shadow:_0_0_30px_rgba(192,219,255,0.3)] mb-3 sm:mb-4 px-2">
                        Why Choose Course Guider?
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-300/80 max-w-3xl mx-auto leading-relaxed px-4">
                        Experience AI-powered education guidance that adapts to your unique learning journey. Get personalized recommendations and insights that help shape your academic future.
                    </p>
                </div>

                {/* Features with hover glow effect */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur transition-all duration-500 group-hover:blur-xl opacity-0 group-hover:opacity-100" />
                        <div className="relative p-4 sm:p-5 md:p-6 transition-all duration-500 group-hover:translate-y-[-2px]">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-400 mb-2 sm:mb-3">Smart Analysis</h3>
                            <p className="text-sm sm:text-base text-gray-300/70">Advanced AI algorithms that understand your learning style and adapt to your needs.</p>
                        </div>
                    </div>

                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur transition-all duration-500 group-hover:blur-xl opacity-0 group-hover:opacity-100" />
                        <div className="relative p-4 sm:p-5 md:p-6 transition-all duration-500 group-hover:translate-y-[-2px]">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-400 mb-2 sm:mb-3">Custom Path</h3>
                            <p className="text-sm sm:text-base text-gray-300/70">Personalized learning roadmaps crafted specifically for your educational goals.</p>
                        </div>
                    </div>

                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-xl blur transition-all duration-500 group-hover:blur-xl opacity-0 group-hover:opacity-100" />
                        <div className="relative p-4 sm:p-5 md:p-6 transition-all duration-500 group-hover:translate-y-[-2px]">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-pink-400 mb-2 sm:mb-3">Real-time Help</h3>
                            <p className="text-sm sm:text-base text-gray-300/70">Get instant support and guidance whenever you need it, 24/7 at your fingertips.</p>
                        </div>
                    </div>

                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur transition-all duration-500 group-hover:blur-xl opacity-0 group-hover:opacity-100" />
                        <div className="relative p-4 sm:p-5 md:p-6 transition-all duration-500 group-hover:translate-y-[-2px]">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-400 mb-2 sm:mb-3">Future Ready</h3>
                            <p className="text-sm sm:text-base text-gray-300/70">Stay ahead with cutting-edge educational insights and industry-aligned guidance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

