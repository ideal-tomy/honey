import { Link } from 'react-router-dom';

const LpPage = () => {
  // 商品データ
  const featuredProduct = {
    name: "マヌカハニー MGO 300+",
    regularPrice: 7800,
    salePrice: 6800,
    image: "https://images.unsplash.com/photo-1587049352931-41e3fe58ae13?q=80&w=500&auto=format&fit=crop",
    benefits: [
      "抗菌作用で健康をサポート",
      "栄養豊富なスーパーフード",
      "100%ニュージーランド産",
      "第三者機関による品質保証",
      "無農薬・抗生物質不使用"
    ]
  };

  // 証言データ
  const testimonials = [
    {
      id: 1,
      name: "佐藤 美香",
      rating: 5,
      comment: "毎日朝食に取り入れています。風邪をひきにくくなったような気がします。家族の健康維持に欠かせない一品です。",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "田中 健太",
      rating: 5,
      comment: "のどの調子が悪い時に重宝しています。甘さも控えめで食べやすく、MGO300+の効果を実感しています。リピート確定です。",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "山本 由美",
      rating: 5,
      comment: "自然由来の甘さで安心して使えます。ヨーグルトにかけて毎朝食べています。お肌の調子も良くなった気がします。",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-background">
      {/* ヒーローセクション */}
      <section className="relative h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=1000&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.5)'
          }}
        ></div>
        <div className="container-custom relative z-10 text-white">
          <div className="max-w-2xl">
            <span className="inline-block bg-primary text-text px-4 py-2 rounded-full text-sm font-bold mb-6">数量限定特別価格</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">天然の奇跡<br />マヌカハニー</h1>
            <h2 className="text-2xl md:text-3xl mb-6">ニュージーランドの原生林から<br />あなたの健康生活をサポート</h2>
            <p className="text-xl mb-8">高い抗菌活性で知られるMGO300+。毎日の健康維持に。</p>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg inline-block mb-8">
              <p className="text-lg font-medium">今なら初回限定</p>
              <div className="flex items-center">
                <span className="text-2xl line-through opacity-70">¥7,800</span>
                <span className="mx-2">→</span>
                <span className="text-4xl font-bold text-primary">¥6,800</span>
              </div>
              <p className="text-sm">さらに送料無料！</p>
            </div>
            <a href="#order" className="btn bg-button hover:bg-accent text-white text-lg px-8 py-3">
              今すぐ購入する
            </a>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">マヌカハニーが選ばれる理由</h2>
            <p className="text-xl max-w-3xl mx-auto">一般的なはちみつとは一線を画す、ニュージーランド産マヌカハニーの特別な力</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-primary text-text text-3xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-4">抗菌作用</h3>
              <p>マヌカハニーに含まれるMGO（メチルグリオキサール）は強力な抗菌作用を持ち、様々な細菌に対して効果を示すことが科学的に証明されています。</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-primary text-text text-3xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-4">品質保証</h3>
              <p>すべての商品は第三者機関による厳格な検査を受け、MGO含有量を正確に測定・表示。品質と安全性を確保した製品だけをお届けします。</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-primary text-text text-3xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-4">自然そのままの力</h3>
              <p>農薬や抗生物質を一切使用せず、ミツバチたちが健やかに活動できる環境で採取した100%自然のマヌカハニーをそのままの姿でお届けします。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 商品紹介セクション */}
      <section id="product" className="py-20 bg-background">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src={featuredProduct.image} 
                alt={featuredProduct.name} 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="md:w-1/2">
              <span className="inline-block bg-primary text-text px-3 py-1 rounded-full text-sm font-bold mb-4">人気No.1</span>
              <h2 className="text-3xl font-bold mb-4">{featuredProduct.name}</h2>
              <div className="flex items-center mb-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">758件のレビュー</span>
              </div>
              <p className="mb-6">MGO300+のマヌカハニーは、その高い抗菌作用と栄養価で健康維持をサポート。毎日のひとさじが、あなたの健康生活に違いをもたらします。</p>
              <ul className="mb-8 space-y-2">
                {featuredProduct.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E27D00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 flex-shrink-0 mt-1">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="text-2xl line-through opacity-70">¥{featuredProduct.regularPrice.toLocaleString()}</span>
                  <span className="mx-2">→</span>
                  <span className="text-3xl font-bold text-button">¥{featuredProduct.salePrice.toLocaleString()}</span>
                </div>
                <p className="text-sm text-green-600">★初回限定★ 送料無料 さらに特製スプーンプレゼント</p>
              </div>
              <a href="#order" className="btn bg-button hover:bg-accent text-white text-lg w-full py-3 text-center">
                今すぐ購入する
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MGO説明セクション */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">MGOって何？</h2>
            <p className="text-xl max-w-3xl mx-auto">マヌカハニーの力の秘密を解き明かします</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1587049352665-bde0b8c3b9b3?q=80&w=500&auto=format&fit=crop" 
                alt="MGOとは" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">メチルグリオキサール（MGO）</h3>
              <p className="mb-4">メチルグリオキサールは、マヌカハニー特有の有効成分で、その抗菌作用が科学的に証明されています。一般的なはちみつには含まれていない、マヌカハニー独自の成分です。</p>
              <p className="mb-4">MGOの数値が高いほど、抗菌活性が高く、より効果的に健康をサポートします。MGO300+は、健康意識の高い方に特におすすめの濃度です。</p>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-bold mb-2">MGO値の目安：</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-20 font-medium">MGO 100+</span>
                    <span className="flex-1 ml-4">日常的な健康維持に</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-20 font-medium">MGO 300+</span>
                    <span className="flex-1 ml-4">積極的な健康管理に</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-20 font-medium">MGO 500+</span>
                    <span className="flex-1 ml-4">最高レベルの効果を求める方に</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お客様の声セクション */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">お客様の声</h2>
            <p className="text-xl max-w-3xl mx-auto">実際にご使用いただいたお客様からの喜びの声をご紹介します</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={star <= testimonial.rating ? "#FFD700" : "#E2E8F0"} stroke="#FFD700" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 購入セクション */}
      <section id="order" className="py-20 bg-primary">
        <div className="container-custom">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">今だけの特別オファー</h2>
              <p className="text-xl">初めての方限定！マヌカハニー MGO 300+ がお得に</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="md:w-1/2">
                <div className="bg-background p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">マヌカハニー MGO 300+</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg">通常価格</span>
                    <span className="text-xl line-through">¥7,800</span>
                  </div>
                  <div className="flex justify-between items-center mb-4 text-button">
                    <span className="text-lg font-bold">特別価格</span>
                    <span className="text-3xl font-bold">¥6,800</span>
                  </div>
                  <div className="flex justify-between items-center mb-4 text-green-600">
                    <span>割引額</span>
                    <span className="font-bold">¥1,000 お得！</span>
                  </div>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E27D00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 flex-shrink-0 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      初回限定価格
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E27D00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 flex-shrink-0 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      送料無料
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E27D00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 flex-shrink-0 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      特製木製スプーン付き
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E27D00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 flex-shrink-0 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      30日間返金保証
                    </li>
                  </ul>
                  <p className="text-sm text-center mb-4">※数量限定につき、なくなり次第終了となります</p>
                </div>
              </div>
              <div className="md:w-1/2">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">お名前 <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">メールアドレス <span className="text-red-500">*</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-2 font-medium">電話番号 <span className="text-red-500">*</span></label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="block mb-2 font-medium">お届け先住所 <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="address" 
                      required 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block mb-2 font-medium">数量 <span className="text-red-500">*</span></label>
                    <select 
                      id="quantity" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="1">1個 (¥6,800)</option>
                      <option value="2">2個 (¥13,600)</option>
                      <option value="3">3個 (¥20,400)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="payment" className="block mb-2 font-medium">お支払い方法 <span className="text-red-500">*</span></label>
                    <select 
                      id="payment" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="credit">クレジットカード</option>
                      <option value="bank">銀行振込</option>
                      <option value="convenience">コンビニ決済</option>
                    </select>
                  </div>
                  <button 
                    type="submit" 
                    className="btn bg-button hover:bg-accent text-white text-lg w-full py-3 mt-4"
                  >
                    今すぐ購入する
                  </button>
                  <p className="text-sm text-center">※クリックすると注文が確定します</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ セクション */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">よくあるご質問</h2>
            <p className="max-w-2xl mx-auto">お客様からよくいただくご質問にお答えします</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="mb-6 bg-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">マヌカハニーの食べ方を教えてください</h3>
              <p>スプーン一杯をそのまま舐めたり、水やお湯に溶かして飲んだりするのが一般的です。また、ヨーグルトやトーストにかけて、朝食として楽しむ方法もあります。のどのケアには、お湯に溶かしてゆっくり飲むのがおすすめです。</p>
            </div>
            <div className="mb-6 bg-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">子供でも食べられますか？</h3>
              <p>1歳以上のお子様であれば安心してお召し上がりいただけます。ただし、1歳未満の乳児には、どんなはちみつも与えないようにご注意ください。</p>
            </div>
            <div className="mb-6 bg-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">賞味期限はどれくらいですか？</h3>
              <p>未開封の場合、適切な保存状態（直射日光を避け、常温）で約2年間です。開封後は6ヶ月以内にお召し上がりいただくことをおすすめしています。</p>
            </div>
            <div className="text-center mt-8">
              <Link to="/faq" className="btn bg-button hover:bg-accent text-white">
                もっと質問を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 注文促進セクション */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">あなたの健康生活、今日から始めませんか？</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">今なら初回限定価格＆送料無料！数量限定のため、お早めにご注文ください。</p>
          <a href="#order" className="btn bg-text hover:opacity-90 text-white text-lg px-8 py-3">
            今すぐ購入する
          </a>
        </div>
      </section>

      {/* フッター */}
      <footer className="py-8 bg-text text-white text-sm">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <p>© 2025 マルカハニー All Rights Reserved.</p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/">トップページ</Link>
              <Link to="/products">商品一覧</Link>
              <Link to="/faq">よくある質問</Link>
              <Link to="/contact">お問い合わせ</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LpPage;
