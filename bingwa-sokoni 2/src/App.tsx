import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary">Bingwa Sokoni</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-primary">Home</a>
              <a href="#" className="text-gray-700 hover:text-primary">Products</a>
              <a href="#" className="text-gray-700 hover:text-primary">About</a>
              <a href="#" className="text-gray-700 hover:text-primary">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Welcome to</span>
                  <span className="block text-primary">Bingwa Sokoni</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Your one-stop shop for all your needs. Discover amazing products at competitive prices.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10">
                      Shop Now
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-primary/10 hover:bg-primary/20 md:py-4 md:text-lg md:px-10">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <i className="fas fa-shipping-fast text-3xl text-primary mb-4"></i>
              <h3 className="text-lg font-medium text-gray-900">Fast Delivery</h3>
              <p className="mt-2 text-gray-500">Quick and reliable shipping to your doorstep</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <i className="fas fa-shield-alt text-3xl text-primary mb-4"></i>
              <h3 className="text-lg font-medium text-gray-900">Secure Shopping</h3>
              <p className="mt-2 text-gray-500">Your transactions are safe with us</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <i className="fas fa-headset text-3xl text-primary mb-4"></i>
              <h3 className="text-lg font-medium text-gray-900">24/7 Support</h3>
              <p className="mt-2 text-gray-500">Always here to help you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
