import { useState, FormEvent, ChangeEvent } from 'react';

const ContactPage = () => {
  // u30d5u30a9u30fcu30e0u306eu72b6u614bu7ba1u7406
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    agreement: false
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // u5165u529bu30d5u30a3u30fcu30ebu30c9u306eu5909u66f4u30cfu30f3u30c9u30e9
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // u30d5u30a9u30fcu30e0u9001u4fe1u30cfu30f3u30c9u30e9
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // u5b9fu969bu306eu5b9fu88c5u3067u306fu3001u3053u3053u3067APIu30eau30afu30a8u30b9u30c8u3092u884cu3046
    setFormSubmitted(true);
  };

  return (
    <div className="bg-background">
      {/* u30d2u30fcu30edu30fcu30bbu30afu30b7u30e7u30f3 */}
      <section className="relative py-20 bg-text text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">u304au554fu3044u5408u308fu305b</h1>
          <p className="text-xl max-w-3xl">u5546u54c1u306bu95a2u3059u308bu3054u8ceau554fu3001u3054u610fu898bu3001u3054u8981u671bu306au3069u3001u304au6c17u8efdu306bu304au554fu3044u5408u308fu305bu304fu3060u3055u3044u3002u5f53u30b5u30a4u30c8u306eu30b5u30fcu30d3u30b9u5411u4e0au306bu6d3bu7528u3055u305bu3066u3044u305fu3060u304du307eu3059u3002</p>
        </div>
      </section>

      {/* u304au554fu3044u5408u308fu305bu30bbu30afu30b7u30e7u30f3 */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-background p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">u96fbu8a71u3067u306eu304au554fu3044u5408u308fu305b</h3>
                <p className="mb-2">u5e73u65e5 9:00uff5e17:00</p>
                <a href="tel:0120-xxx-xxx" className="text-button hover:text-accent transition-colors font-bold">0120-XXX-XXX</a>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">u30e1u30fcu30ebu3067u306eu304au554fu3044u5408u308fu305b</h3>
                <p className="mb-2">u304au6c17u8efdu306bu30e1u30fcu30ebu304fu3060u3055u3044</p>
                <a href="mailto:info@marukahoney.com" className="text-button hover:text-accent transition-colors font-bold">info@marukahoney.com</a>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">SNSu3067u306eu304au554fu3044u5408u308fu305b</h3>
                <p className="mb-2">u5404SNSu304bu3089u3082u304au554fu3044u5408u308fu305bu53efu80fd</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-button hover:text-accent transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-button hover:text-accent transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="text-button hover:text-accent transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {formSubmitted ? (
              <div className="bg-background p-12 rounded-lg shadow-md text-center">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-4">u304au554fu3044u5408u308fu305bu3042u308au304cu3068u3046u3054u3056u3044u307eu3059</h2>
                <p className="mb-6">u30e1u30c3u30bbu30fcu30b8u3092u53d7u3051u4ed8u3051u307eu3057u305fu3002u901au5e38u30011uff5e2u55b6u696du65e5u4ee5u5185u306bu3054u8fd4u4fe1u3044u305fu3057u307eu3059u3002</p>
                <button 
                  className="btn bg-button hover:bg-accent text-white"
                  onClick={() => setFormSubmitted(false)}
                >
                  u65b0u3057u3044u304au554fu3044u5408u308fu305bu3092u3059u308b
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-background p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">u304au554fu3044u5408u308fu305bu30d5u30a9u30fcu30e0</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">u304au540du524d <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">u30e1u30fcu30ebu30a2u30c9u30ecu30b9 <span className="text-red-500">*</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block mb-2 font-medium">u96fbu8a71u756au53f7</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block mb-2 font-medium">u4ef6u540d <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium">u304au554fu3044u5408u308fu305bu5185u5bb9 <span className="text-red-500">*</span></label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    rows={6} 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>

                <div className="mb-8">
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="agreement" 
                      name="agreement" 
                      checked={formData.agreement}
                      onChange={handleChange}
                      required 
                      className="mt-1 mr-2" 
                    />
                    <label htmlFor="agreement" className="text-sm">
                      <a href="#" className="text-button hover:text-accent transition-colors">u30d7u30e9u30a4u30d0u30b7u30fcu30ddu30eau30b7u30fc</a>u306bu540cu610fu3057u307eu3059 <span className="text-red-500">*</span>
                    </label>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn bg-button hover:bg-accent text-white"
                >
                  u9001u4fe1u3059u308b
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQu30bbu30afu30b7u30e7u30f3 */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">u3088u304fu3042u308bu3054u8ceau554f</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">u304au554fu3044u5408u308fu305bu306eu8fd4u4fe1u306fu3069u308cu304fu3089u3044u3067u3059u304buff1f</h3>
              <p>u539fu5247u30011uff5e2u55b6u696du65e5u4ee5u5185u306bu3054u8fd4u4fe1u3044u305fu3057u307eu3059u3002u7e41u5fd9u671fu3084u304au554fu3044u5408u308fu305bu5185u5bb9u306bu3088u3063u3066u306fu3001u3054u8fd4u4fe1u307eu3067u306bu304au6642u9593u3092u3044u305fu3060u304fu5834u5408u304cu3054u3056u3044u307eu3059u3002</p>
            </div>
            <div className="mb-6 bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">u96fbu8a71u3067u306eu304au554fu3044u5408u308fu305bu306fu53efu80fdu3067u3059u304buff1f</h3>
              <p>u306fu3044u3001u5e73u65e5u306e9:00uff5e17:00u306eu9593u3067u304au53d7u3051u3057u3066u304au308au307eu3059u3002u4e0au8a18u306eu304au554fu3044u5408u308fu305bu7528u96fbu8a71u756au53f7u306bu304au304bu3051u304fu3060u3055u3044u3002</p>
            </div>
            <div className="mb-6 bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">u6cd5u4ebau5411u3051u306eu5927u53e3u6ce8u6587u306fu53efu80fdu3067u3059u304buff1f</h3>
              <p>u306fu3044u3001u6cd5u4ebau69d8u5411u3051u306eu5927u53e3u6ce8u6587u3082u627fu3063u3066u304au308au307eu3059u3002u304au554fu3044u5408u308fu305bu30d5u30a9u30fcu30e0u306eu4ef6u540du306bu300cu6cd5u4ebau5411u3051u304au554fu3044u5408u308fu305bu300du3068u660eu8a18u306eu4e0au3001u5fc5u8981u4e8bu9805u3092u3054u8a18u5165u304fu3060u3055u3044u3002u5f53u793eu62c5u5f53u8005u3088u308au3054u9023u7d61u3044u305fu3057u307eu3059u3002</p>
            </div>
            <div className="text-center mt-8">
              <a href="/faq" className="btn bg-button hover:bg-accent text-white">
                u3082u3063u3068u8ceau554fu3092u898bu308b
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
