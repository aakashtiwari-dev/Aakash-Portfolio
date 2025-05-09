
import React from 'react';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-background to-[#1A1F2C]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-block bg-pixel-purple/20 px-4 py-2 rounded-lg mb-4">
            <h2 className="font-pixel text-pixel-purple text-sm">PRICING</h2>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Web Development <span className="text-pixel-purple">Plans</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose a plan that suits your business needs. All plans include lifetime support and maintenance options.
          </p>
        </div>
        
        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Basic Plan */}
          <div className="plan-card basic relative overflow-hidden">
            <div className="absolute top-4 right-4 flex space-x-1">
              <span className="led green animate-blink"></span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-pixel-green font-pixel">
                &#91;01&#93; SIMPLE LANDING PAGE
              </h3>
              
              <div className="mb-4 text-center">
                <span className="text-3xl font-bold text-white">₹999</span>
                <span className="text-gray-400 text-sm"> / one-time</span>
              </div>
              
              <div className="border-t border-pixel-green/30 pt-4 mb-6">
                <ul className="space-y-3 text-sm text-gray-200">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-pixel-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    1-Page Modern Design
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-pixel-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Mobile Responsive
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-pixel-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Basic Contact Form
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-pixel-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Fast Loading Speed
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-pixel-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    WhatsApp Button
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-pixel-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Social Media Links
                  </li>
                </ul>
              </div>
              
              <button className="pixel-button w-full bg-pixel-green font-pixel text-xs hover:bg-green-500">
                SELECT PLAN
              </button>
            </div>
          </div>
          
          {/* Standard Plan */}
          <div className="plan-card standard relative overflow-hidden">
            <div className="absolute top-4 right-4 flex space-x-1">
              <span className="led yellow animate-blink"></span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-pixel-yellow font-pixel">
                &#91;02&#93; LANDING PAGE + ADMIN
              </h3>
              
              <div className="mb-4 text-center">
                <span className="text-3xl font-bold text-white">₹1,499</span>
                <span className="text-gray-400 text-sm"> / one-time</span>
              </div>
              
              <div className="border-t border-pixel-yellow/30 pt-4 mb-6">
                <ul className="space-y-3 text-sm text-gray-200">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 mr-2 text-pixel-yellow mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Everything in Simple Landing Page, plus:</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-pixel-yellow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Admin Dashboard
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-pixel-yellow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Editable Text & Images
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-pixel-yellow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Basic Analytics Integration
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-pixel-yellow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Leads Management Panel
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-pixel-yellow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Section-wise Content Control
                  </li>
                </ul>
              </div>
              
              <button className="pixel-button w-full bg-pixel-yellow text-black font-pixel text-xs hover:bg-yellow-400">
                SELECT PLAN
              </button>
            </div>
          </div>
          
          {/* Premium Plan */}
          <div className="plan-card premium relative overflow-hidden">
            <div className="absolute top-4 right-4 flex space-x-1">
              <span className="led red animate-blink"></span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-pixel-red font-pixel">
                &#91;03&#93; FULL WEBSITE + ADMIN
              </h3>
              
              <div className="mb-4 text-center">
                <span className="text-3xl font-bold text-white">₹1,999</span>
                <span className="text-gray-400 text-sm"> / one-time</span>
              </div>
              
              <div className="border-t border-pixel-red/30 pt-4 mb-6">
                <ul className="space-y-3 text-sm text-gray-200">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 mr-2 text-pixel-red mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Everything in previous plans, plus:</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-pixel-red" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Up to 5 Web Pages
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-pixel-red" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Fully Dynamic Content
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-pixel-red" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Custom Admin Panel
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-pixel-red" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    SEO-Friendly Structure
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-pixel-red" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Email-Integrated Contact Form
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-pixel-red" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Blog/Portfolio Section (optional)
                  </li>
                </ul>
              </div>
              
              <button className="pixel-button w-full bg-pixel-red font-pixel text-xs hover:bg-red-500">
                SELECT PLAN
              </button>
            </div>
          </div>
        </div>
        
        {/* Maintenance Plans */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-pixel-purple">🔧</span> Website Maintenance – Clyro Web Services
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Keep your website running smoothly with our maintenance plans. Choose the one that fits your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Starter Plan */}
            <div className="pixel-card group">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-xl font-bold text-pixel-cyan">Starter Plan</h4>
                <span className="text-2xl font-bold text-white">₹1,999<span className="text-sm text-gray-400">/month</span></span>
              </div>
              
              <ul className="space-y-3 text-sm text-gray-300 mb-6">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-pixel-cyan" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Monthly Health Check
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-pixel-cyan" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Bug Fixes (up to 3)
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-pixel-cyan" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Speed Optimization (1×/mo)
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-pixel-cyan" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Basic Security & Backup
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-pixel-cyan" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Uptime Monitoring
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-pixel-cyan" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Email & WhatsApp Support
                </li>
              </ul>
              
              <button className="pixel-button w-full bg-pixel-cyan font-pixel text-xs">
                START NOW
              </button>
            </div>
            
            {/* Grow Plan */}
            <div className="pixel-card group">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-xl font-bold text-pixel-pink">Grow Plan</h4>
                <span className="text-2xl font-bold text-white">₹3,999<span className="text-sm text-gray-400">/month</span></span>
              </div>
              
              <ul className="space-y-3 text-sm text-gray-300 mb-6">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-pixel-pink" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Unlimited Minor Updates
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-pixel-pink" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Weekly Backups
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-pixel-pink" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Advanced Security & Scans
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-pixel-pink" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Performance Reports
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-pixel-pink" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Basic On-Page SEO
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-pixel-pink" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Content Updates (up to 5 pages)
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-pixel-pink" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Priority Support
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-pixel-pink" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Social Media Integration
                </li>
              </ul>
              
              <button className="pixel-button w-full bg-pixel-pink font-pixel text-xs">
                START NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
