// import { Link } from 'react-router-dom';

const ProductsPage = () => {
  // 商品データ（実際の実装ではAPIやデータベースから取得する）
  const products = [
    {
      id: 1,
      name: "マヌカハニー UMF10+",
      image: "/images/products01.jpg",
      umf: "10+",
      size: "150g",
      price: 8000,
      description: "最高峰のUMF10+マヌカハニー。特別なケアが必要な時に最適です。",
      benefits: ["最高峰の品質", "プレミアムケア", "特別な贈り物に"],
      baseUrl: "https://shinydrop888.base.shop/"
    },
    {
      id: 2,
      name: "マヌカハニー UMF5+",
      image: "/images/products02.jpg",
      umf: "5+",
      size: "150g",
      price: 5500,
      description: "日常使いに適したバランスの良いマヌカハニーです。",
      benefits: ["朝食に最適", "自然な甘さ", "料理との相性◎"],
      baseUrl: "https://shinydrop888.base.shop/"
    },
    {
      id: 3,
      name: "レワレワハニー",
      image: "/images/products03.jpg",
      size: "150g",
      price: 5500,
      description: "ニュージーランドの自然が育んだ純粋なレワレワハニー。",
      benefits: ["自然な甘さ", "日常使いに最適", "料理との相性◎"],
      baseUrl: "https://shinydrop888.base.shop/"
    },
    {
      id: 4,
      name: "カヌカハニー",
      image: "/images/products04.jpg",
      size: "150g",
      price: 4000,
      description: "独特の風味が特徴のカヌカハニー。",
      benefits: ["独特の風味", "日常使いに最適", "料理との相性◎"],
      baseUrl: "https://shinydrop888.base.shop/"
    },
    {
      id: 5,
      name: "ポフツカワハニー",
      image: "/images/products05.jpg",
      size: "150g",
      price: 4000,
      description: "ニュージーランドの自然が育んだ純粋なポフツカワハニー。",
      benefits: ["自然な甘さ", "日常使いに最適", "料理との相性◎"],
      baseUrl: "https://shinydrop888.base.shop/"
    }
  ];

  return (
    <div className="bg-background">
      {/* ヒーローセクション */}
      <section className="relative py-20 bg-text text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">商品一覧</h1>
          <p className="text-xl max-w-3xl">助産師が届ける、家族の毎日に大自然の生はちみつ。自然豊かなニュージーランドで、自ら養蜂・採蜜した高品質な生はちみつをお届けします。</p>
        </div>
      </section>

      {/* フィルターセクション */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold">商品カテゴリー</h2>
              <div className="mt-2 flex flex-wrap gap-2">
                <button className="px-4 py-1 bg-primary text-text rounded-full hover:bg-accent transition-colors">すべて</button>
                <button className="px-4 py-1 bg-background text-text rounded-full hover:bg-accent transition-colors">UMF 10+</button>
                <button className="px-4 py-1 bg-background text-text rounded-full hover:bg-accent transition-colors">UMF 5+</button>
                <button className="px-4 py-1 bg-background text-text rounded-full hover:bg-accent transition-colors">レワレワハニー</button>
                <button className="px-4 py-1 bg-background text-text rounded-full hover:bg-accent transition-colors">カヌカハニー</button>
                <button className="px-4 py-1 bg-background text-text rounded-full hover:bg-accent transition-colors">ポフツカワハニー</button>
              </div>
            </div>
            <div>
              <select className="px-4 py-2 border rounded-md bg-background">
                <option>人気順</option>
                <option>価格が安い順</option>
                <option>価格が高い順</option>
                <option>UMF値が高い順</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* 商品一覧セクション */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 flex justify-between items-center">
                    {product.umf && (
                      <span className="bg-primary text-text text-sm font-medium py-1 px-3 rounded">UMF {product.umf}</span>
                    )}
                    <span className="text-sm text-gray-500">{product.size}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {product.benefits.map((benefit, index) => (
                      <span key={index} className="text-xs bg-background px-2 py-1 rounded">{benefit}</span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">¥{product.price.toLocaleString()}</span>
                    <a 
                      href={product.baseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn py-1 px-4 bg-primary text-text hover:bg-accent transition-colors"
                    >
                      購入へ
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 商品の特徴セクション */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-4 tracking-wide">商品の特徴</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-12 rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-yellow-50 p-8 rounded-2xl shadow-md flex flex-col items-start border border-yellow-100">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500 text-2xl mr-2">🍯</span>
                <h3 className="text-xl font-bold">高品質な生はちみつへのこだわり</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>・非加熱・無添加・農薩不使用</li>
                <li>・最低限2回の濾過のみで、酵素・栄養・香りをしっかりキープ</li>
                <li>・ニュージーランド政府の品質証明書取得済み</li>
                <li>・空輸一択：温度・湿度を厳しく管理し、フレッシュなままお届け</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-8 rounded-2xl shadow-md flex flex-col items-start border border-yellow-100">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500 text-2xl mr-2">👨‍👩‍👧‍👦</span>
                <h3 className="text-xl font-bold">家族みんなの健康を支える"食べるケア"</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>・お子様からご年配の方まで、家族全員に嬉しい自然の力</li>
                <li>・抗酸化・整腸・抗菌作用など、毎日の健康維持をサポート</li>
                <li>・忙しい妊婦さんや子育てママにとって、"毎日の一匙"で内側から整える習慣を提案</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 修正テキスト.mdの説明文セクション（1～7をメリハリあるデザインで分割） */}
      <section className="py-20 bg-white border-t">
        <div className="container-custom mx-auto space-y-16">
          {/* 1. シンプルなテキスト＋大きめ見出し */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-700">1. 「命と向き合う助産師」から、「自然と向き合う養蜂家」へ</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              助産師として「健康・安心・命」に向き合ってきた経験が、蜂蜜づくりにも活きています。<br/>
              「食が身体をつくる」ことを深く理解しているからこそ、自然の恵みを選び抜いています。<br/>
              医療現場での経験があるからこそ、妊婦さんや赤ちゃんにも安心してすすめられる品質をお届けできます。
            </p>
          </div>

          {/* 2. 画像＋テキスト横並び */}
          <div className="flex flex-col md:flex-row items-center gap-8 bg-yellow-50 rounded-2xl p-8 shadow-md">
            <img src="/images/products01.jpg" alt="養蜂イメージ" className="w-full md:w-1/3 rounded-xl object-cover" />
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2 text-yellow-800">2. 自然豊かなニュージーランドで、自ら養蜂・採蜜</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>養蜂家として、現地で自ら手を動かしながら自然と向き合う日々。</li>
                <li>養蜂現場の風景や作業写真とともに、「顔が見えるはちみつ」をお届けします。</li>
                <li>採蜜から輸出・輸入まで、一貫した品質管理を自らの手で。</li>
                <li>フェアトレード・環境に配慮した養蜂スタイルで、社会貢献にも繋がる蜂蜜を。</li>
              </ul>
            </div>
          </div>

          {/* 3. カード形式 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-8 border-yellow-400">
            <div className="flex items-center mb-2"><span className="text-yellow-500 text-2xl mr-2">✨</span><h3 className="text-xl font-bold">3. 「高品質な生はちみつ」への徹底したこだわり</h3></div>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>非加熱・無添加・農薩不使用。</li>
              <li>最低限2回の濾過のみで、酵素・栄養・香りをしっかりキープ。</li>
              <li>ニュージーランド政府の品質証明書（例：MPI）取得済み、輸出入時も政府検査クリアで安全性を徹底。</li>
              <li>空輸一択：温度・湿度を厳しく管理し、フレッシュなままお客様のもとへお届けします。</li>
            </ul>
          </div>

          {/* 4 & 5. 2カラム横並び・同じデザイン */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 4 */}
            <div className="bg-yellow-100 rounded-xl p-8 h-full flex flex-col">
              <h3 className="text-xl font-bold mb-2 text-yellow-900">4. 家族みんなの健康を支える"食べるケア"</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 flex-1">
                <li>お子様からご年配の方まで、家族全員に嬉しい自然の力。</li>
                <li>抗酸化・整腸・抗菌作用など、毎日の健康維持をサポート。</li>
                <li>忙しい妊婦さんや子育てママにとって、「毎日の一匙」で内側から整える習慣を提案。</li>
              </ul>
            </div>
            {/* 5 */}
            <div className="bg-yellow-100 rounded-xl p-8 h-full flex flex-col">
              <h3 className="text-xl font-bold mb-2 text-yellow-900">5. "健康的な美しさ"を育てるはちみつ習慣</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 flex-1">
                <li>美容目的の方にも嬉しい、低GI・ミネラル豊富な天然甘味料。</li>
                <li>忙しい現代人にも続けやすい、"無理なく続くナチュラルケア"。</li>
                <li>「身体を整える食習慣」が、健康と美を同時に叶える。</li>
              </ul>
            </div>
          </div>

          {/* 6. 横並び小カード（アイコン付き） */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-900">6. 商品・容器へのこだわりと楽しみ方のご提案</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow p-4 flex items-center gap-3">
                <span className="text-yellow-500 text-2xl">🌸</span>
                <span className="text-gray-700">採れる花の種類や季節による風味の違いを楽しめる、個性あふれる生はちみつ。</span>
              </div>
              <div className="bg-white rounded-xl shadow p-4 flex items-center gap-3">
                <span className="text-yellow-500 text-2xl">🧴</span>
                <span className="text-gray-700">食べ方、スキンケアにちょい足し提案。</span>
              </div>
              <div className="bg-white rounded-xl shadow p-4 flex items-center gap-3">
                <span className="text-yellow-500 text-2xl">🥃</span>
                <span className="text-gray-700">日本製のガラス瓶を使用し、サステナブルで品質保持に優れた容器を採用。</span>
              </div>
              <div className="bg-white rounded-xl shadow p-4 flex items-center gap-3">
                <span className="text-yellow-500 text-2xl">🎁</span>
                <span className="text-gray-700">環境にも優しく、プレゼントにもふさわしい上質なパッケージです。</span>
              </div>
            </div>
          </div>

          {/* 7. 枠線＋背景色＋ギフトアイコン強調 */}
          <div className="border-2 border-yellow-400 bg-yellow-50 rounded-2xl p-8 flex flex-col items-center">
            <span className="text-4xl mb-2">🎁</span>
            <h3 className="text-xl font-bold mb-2 text-yellow-900">7. 価格と希少価値の理由</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-left">
              <li>UMFやMGOなどのグレード表示を明確にし、健康価値と希少性を両立。</li>
              <li>政府認証、輸送管理、品質保持コストを正直に伝えることで、価格の信頼性も確保。</li>
              <li>「特別な人への贈り物」としても選ばれる品質です。</li>
            </ul>
          </div>
        </div>
      </section>

      {/* お客様の声セクション */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">お客様の声</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <p className="text-gray-600 mb-4">"今まで食べていた蜂蜜と全然違う！濃厚なのにすっきりしていてクセになる味わい。"</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-gray-600 mb-4">"自然な甘さが広がって、花粉の味がする。"</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-gray-600 mb-4">"疲れが溜まりにくくなって、なんとなく元気でいられる日が増えました。"</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
