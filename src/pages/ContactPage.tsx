import { useState, FormEvent, ChangeEvent } from 'react';

const ContactPage = () => {
  // フォームの状態管理
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    agreement: false
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // 入力フィールドの変更ハンドラ
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // フォーム送信ハンドラ
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // 実際の実装では、ここでAPIリクエストを行う
    setFormSubmitted(true);
  };

  return (
    <div className="bg-background">
      {/* ヒーローセクション */}
      <section className="relative py-20 bg-text text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">お問い合わせ</h1>
          <p className="text-xl max-w-3xl">商品に関するご質問、ご意見、ご要望など、お気軽にお問い合わせください。当サイトのサービス向上に活用させていただきます。</p>
        </div>
      </section>

      {/* お問い合わせセクション */}
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
                <h3 className="text-lg font-bold mb-2">電話でのお問い合わせ</h3>
                <p className="mb-2">平日 9:00～17:00</p>
                <a href="tel:0120-xxx-xxx" className="text-button hover:text-accent transition-colors font-bold">0120-XXX-XXX</a>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">メールでのお問い合わせ</h3>
                <p className="mb-2">お気軽にメールください</p>
                <a href="mailto:info@marukahoney.com" className="text-button hover:text-accent transition-colors font-bold">info@marukahoney.com</a>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">SNSでのお問い合わせ</h3>
                <p className="mb-2">各SNSからもお問い合わせ可能</p>
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
                <h2 className="text-2xl font-bold mb-4">お問い合わせありがとうございます</h2>
                <p className="mb-6">メッセージを受け付けました。通常、1～2営業日以内にご返信いたします。</p>
                <button 
                  className="btn bg-button hover:bg-accent text-white"
                  onClick={() => setFormSubmitted(false)}
                >
                  新しいお問い合わせをする
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-background p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">お問い合わせフォーム</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">お名前 <span className="text-red-500">*</span></label>
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
                    <label htmlFor="email" className="block mb-2 font-medium">メールアドレス <span className="text-red-500">*</span></label>
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
                  <label htmlFor="phone" className="block mb-2 font-medium">電話番号</label>
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
                  <label htmlFor="subject" className="block mb-2 font-medium">件名 <span className="text-red-500">*</span></label>
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
                  <label htmlFor="message" className="block mb-2 font-medium">お問い合わせ内容 <span className="text-red-500">*</span></label>
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
                      <a href="#" className="text-button hover:text-accent transition-colors">プライバシーポリシー</a>に同意します <span className="text-red-500">*</span>
                    </label>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn bg-button hover:bg-accent text-white"
                >
                  送信する
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQセクション */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">よくあるご質問</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">お問い合わせの返信はどれくらいですか？</h3>
              <p>原則、1～2営業日以内にご返信いたします。繁忙期やお問い合わせ内容によっては、ご返信までにお時間をいただく場合がございます。</p>
            </div>
            <div className="mb-6 bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">電話でのお問い合わせは可能ですか？</h3>
              <p>はい、平日の9:00～17:00の間でお受けしております。上記のお問い合わせ用電話番号におかけください。</p>
            </div>
            <div className="mb-6 bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">法人向けの大口注文は可能ですか？</h3>
              <p>はい、法人様向けの大口注文も承っております。お問い合わせフォームの件名に「法人向けお問い合わせ」と明記の上、必要事項をご記入ください。当社担当者よりご連絡いたします。</p>
            </div>
            <div className="text-center mt-8">
              <a href="/faq" className="btn bg-button hover:bg-accent text-white">
                もっと質問を見る
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
