import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-background">
      {/* ヒーローセクション */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=1000&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.85)'
          }}
        ></div>
        <div className="container-custom relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">自然が生み出す<br />自然の精髄</h1>
            <p className="text-xl mb-8">ニュージーランドの谷間で育った谷マヌカの花から生まれる、最高品質のマヌカハニー</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="btn bg-button hover:bg-accent text-white">
                商品を見る
              </Link>
              <Link to="/story" className="btn bg-transparent border-2 border-white hover:bg-white hover:text-text transition-colors">
                私たちのストーリー
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* マヌカハニーの特徴セクション */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16">マルカハニーの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">品質へのこだわり</h3>
              <p>品質を保証するMGO激高値、ご家庭に安心をお届けします</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  <line x1="6" y1="1" x2="6" y2="4"></line>
                  <line x1="10" y1="1" x2="10" y2="4"></line>
                  <line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">天然100%</h3>
              <p>◆農薬不使用◆抜群の自然環境で醴髪された熟成ハチミツ</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">信頼の証明</h3>
              <p>品質と安全を保証する第三者機関による証明も完備</p>
            </div>
          </div>
        </div>
      </section>

      {/* 人気商品セクション */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-4">人気商品</h2>
          <p className="text-center mb-16 max-w-2xl mx-auto">自然の恵みをたっぷり詰め込んだ、最も人気のマヌカハニーをご紹介します</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 商品カード×3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/products01.jpg"
                  alt="マヌカハニー UMF10+"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 flex justify-between items-center">
                  <span className="bg-primary text-text text-sm font-medium py-1 px-3 rounded">MGO 100+</span>
                  <span className="text-sm text-gray-500">250g</span>
                </div>
                <h3 className="text-xl font-bold mb-4">マヌカハニー MGO 100+</h3>
                <p className="text-gray-600 mb-4">日常使いに適したバランスの良いマヌカハニーです</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">¥5,800</span>
                  <Link to="/products" className="btn py-1 px-4">詳細を見る</Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/products02.jpg"
                  alt="マヌカハニー UMF5+"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 flex justify-between items-center">
                  <span className="bg-primary text-text text-sm font-medium py-1 px-3 rounded">MGO 300+</span>
                  <span className="text-sm text-gray-500">250g</span>
                </div>
                <h3 className="text-xl font-bold mb-4">マヌカハニー MGO 300+</h3>
                <p className="text-gray-600 mb-4">高い抵菌作用を持ち、健康維持に最適なハチミツ</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">¥7,800</span>
                  <Link to="/products" className="btn py-1 px-4">詳細を見る</Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/products03.jpg"
                  alt="レワレワハニー"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 flex justify-between items-center">
                  <span className="bg-primary text-text text-sm font-medium py-1 px-3 rounded">MGO 500+</span>
                  <span className="text-sm text-gray-500">250g</span>
                </div>
                <h3 className="text-xl font-bold mb-4">マヌカハニー MGO 500+</h3>
                <p className="text-gray-600 mb-4">最高クラスのMGO含有量を認定されたプレミアムハチミツ</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">¥9,800</span>
                  <Link to="/products" className="btn py-1 px-4">詳細を見る</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="btn bg-button hover:bg-accent text-white">
              全ての商品を見る
            </Link>
          </div>
        </div>
      </section>

      {/* ストーリー紹介セクション */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <img 
                src="/images/top_tomo.png"
                alt="養蜂家 Tomo" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6">自然と共に生きる、<br/>私たちのストーリー</h2>
              <p className="mb-6">ニュージーランドの自然豊かな環境で、養蜂家Tomoが一つ一つ丁寧に育てた蜂の巣からハチミツを収穫します。自然を尊重し、無農薬・抗生物質不使用のマヌカハニーをお届けします。</p>
              <p className="mb-8">私たちのハチミツへの想いと品質へのこだわりが、一つも妥協を許さないマヌカハニーを生み出しています。</p>
              <Link to="/story" className="btn bg-button hover:bg-accent text-white">
                ストーリーを読む
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 品質へのこだわりセクション */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <div className="md:w-1/2">
              <img 
                src="/images/top_qc.jpg" 
                alt="品質検査" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6">品質と安全への<br/>揃えなきこだわり</h2>
              <p className="mb-6">マルカハニーの全ての商品は、信頼できる第三者機関による検査を受け、MGO含有量を証明しています。花の蜂蝙から瓶詰めまで、安心できるトレーサビリティを確保しています。</p>
              <p className="mb-8">マヌカハニーの持つ抵菌作用と健康信頼性を補償するMGO値を保証します。</p>
              <Link to="/quality" className="btn bg-button hover:bg-accent text-white">
                品質と検査について
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQセクションプレビュー */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">よくあるご質問</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 bg-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">マヌカハニーのMGOとは何ですか？</h3>
              <p>MGOはメチルグリオキサールの略で、マヌカハニーに含まれる有効成分です。この成分が高いほど抵菌作用や健康効果が期待できます。</p>
            </div>
            <div className="mb-6 bg-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">マヌカハニーの食べ方を教えてください</h3>
              <p>スプーン一杯を水やお湯に溜らして飲む方法が一般的です。ご飯やパンに塗ったり、ヨーグルトにかけてお楽しみいただけます。</p>
            </div>
            <div className="text-center mt-8">
              <Link to="/faq" className="btn bg-button hover:bg-accent text-white">
                もっと質問を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせ誘導セクション */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">お問い合わせやご質問があればお気軽に</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">商品についてのご質問やギフトのご相談、大量注文などお気軽にお問い合わせください</p>
          <Link to="/contact" className="btn bg-text hover:opacity-90 text-white">
            お問い合わせをする
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
