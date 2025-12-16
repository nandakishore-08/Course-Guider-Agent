import React from 'react';
import { Mail, MessageSquare, Phone, ArrowRight } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export const Contact = () => {
    const [state, handleSubmit] = useForm("xblkopvr");
    return (
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 bg-[#030303]">
            {/* Decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-50" />
                <div className="absolute h-[200px] w-[200px] rounded-full bg-purple-500/30 blur-3xl top-1/2 left-0 -translate-x-1/2" />
                <div className="absolute h-[200px] w-[200px] rounded-full bg-blue-500/20 blur-3xl bottom-0 right-0" />
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                {/* Left side - Contact info */}
                <div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Let's Connect</span>
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 sm:mb-12 max-w-md">
                        Have questions about our AI-powered course guidance? We're here to help you make the right educational choices.
                    </p>

                    {/* Contact methods */}
                    <div className="space-y-3 sm:space-y-4 md:space-y-6">
                        <a href="mailto:contact@courseguider.com" 
                           className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
                            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
                                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-white font-medium text-sm sm:text-base">Email Us</h3>
                                <p className="text-gray-400 text-xs sm:text-sm truncate">contact@courseguider.com</p>
                            </div>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 group-hover:text-blue-400 transition-colors flex-shrink-0" />
                        </a>

                        <a href="/chat" 
                           className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
                            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors flex-shrink-0">
                                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-white font-medium text-sm sm:text-base">Live Chat</h3>
                                <p className="text-gray-400 text-xs sm:text-sm">Chat with our AI assistant</p>
                            </div>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 group-hover:text-purple-400 transition-colors flex-shrink-0" />
                        </a>

                        <a href="tel:+1234567890" 
                           className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
                            <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400 group-hover:bg-pink-500/20 transition-colors flex-shrink-0">
                                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-white font-medium text-sm sm:text-base">Call Us</h3>
                                <p className="text-gray-400 text-xs sm:text-sm">+1 (234) 567-890</p>
                            </div>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 group-hover:text-pink-400 transition-colors flex-shrink-0" />
                        </a>
                    </div>
                </div>

                {/* Right side - Contact form */}
                <div className="relative mt-8 lg:mt-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl transform -rotate-6" />
                    <div className="relative bg-white/[0.02] backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10">
                        {state.succeeded ? (
                          <div className="text-center py-8 sm:py-12">
                            <h3 className="text-xl sm:text-2xl font-bold text-emerald-400 mb-2">Thank you!</h3>
                            <p className="text-sm sm:text-base text-gray-200">Your message has been sent. We'll get back to you soon.</p>
                          </div>
                        ) : (
                        <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="text-gray-200 text-xs sm:text-sm font-medium mb-2 block">Your Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                                    placeholder="John Doe"
                                    required
                                />
                                <ValidationError prefix="Name" field="name" errors={state.errors} />
                            </div>
                            <div>
                                <label htmlFor="email" className="text-gray-200 text-xs sm:text-sm font-medium mb-2 block">Email Address</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                                    placeholder="john@example.com"
                                    required
                                />
                                <ValidationError prefix="Email" field="email" errors={state.errors} />
                            </div>
                            <div>
                                <label htmlFor="message" className="text-gray-200 text-xs sm:text-sm font-medium mb-2 block">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all resize-none"
                                    placeholder="Your message..."
                                    required
                                />
                                <ValidationError prefix="Message" field="message" errors={state.errors} />
                            </div>
                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-purple-500/50 relative group overflow-hidden disabled:opacity-60"
                            >
                                <span className="absolute inset-0 bg-white/20 rounded-lg transform translate-y-full transition-transform group-hover:translate-y-0" />
                                <span className="relative">{state.submitting ? 'Sending...' : 'Send Message'}</span>
                            </button>
                        </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
