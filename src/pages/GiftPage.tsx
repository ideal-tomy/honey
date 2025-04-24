import { Link } from 'react-router-dom';

const GiftPage = () => {
  // ギフトの種類
  const giftTypes = [
    {
      id: 1,
      title: "ご家族への贈り物",
      image: "https://images.unsplash.com/photo-1544985361-b420d7a77043?q=80&w=500&auto=format&fit=crop",
      description: "健康を気遣うご家族への贈り物として、自然の恵みがたっぷり詰まったマヌカハニーはいかがでしょうか。日々の健康維持をサポートする贈り物として喜ばれます。"
    },
    {
      id: 2,
      title: "お世話になった方へ",
      image: "https://images.unsplash.com/photo-1575504310902-0a1e59c86c82?q=80&w=500&auto=format&fit=crop",
      description: "お世話になった方への感謝の気持ちを込めて。特別なマヌカハニーギフトは感謝の気持ちを伝えるのに最適です。高品質な味わいと効能が相手に伝わります。"
    },
    {
      id: 3,
      title: "季節の贈り物",
      image: "https://images.unsplash.com/photo-1513267048331-5611cad62e41?q=80&w=500&auto=format&fit=crop",
      description: "お中元やお歳暮、母の日や父の日など、季節の贈り物としてマヌカハニーをお選びいただけます。美しい包装と高級感のある見た目で特別感を演出します。"
    }
  ];

  // ギフトセット
  const giftSets = [
    {
      id: 1,
      name: "マヌカハニー スタンダードギフト",
      image: "https://images.unsplash.com/photo-1587049352847-de8ed5d1ec29?q=80&w=500&auto=format&fit=crop",
      price: 6800,
      content: "MGO 100+ (250g) × 1本",
      description: "マヌカハニーの魅力を伝える基本的なギフトセット。高品質なマヌカハニーを美しいギフトボックスに入れてお届けします。"
    },
    {
      id: 2,
      name: "マヌカハニー プレミアムギフト",
      image: "https://images.unsplash.com/photo-1582034986517-30d9ab2a6ef9?q=80&w=500&auto=format&fit=crop",
      price: 10800,
      content: "MGO 300+ (250g) × 1本、オリジナル木製スプーン付き",
      description: "上質なマヌカハニーとオリジナル木製スプーンがセットになった特別なギフト。大切な方への贈り物に最適です。"
    },
    {
      id: 3,
      name: "マヌカハニー ラグジュアリーギフト",
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=500&auto=format&fit=crop",
      price: 15800,
      content: "MGO 500+ (250g) × 1本、MGO 300+ (100g) × 1本、オリジナル木製スプーン、ハニーディッパー付き",
      description: "最高級のマヌカハニーを含む豪華なギフトセット。特別な方への贈り物や記念日のプレゼントとして喜ばれること間違いなしです。"
    },
    {
      id: 4,
      name: "マヌカハニー バラエティギフト",
      image: "https://images.unsplash.com/photo-1587049352378-aa9580d41a64?q=80&w=500&auto=format&fit=crop",
      price: 12800,
      content: "MGO 100+ (100g) × 1本、MGO 300+ (100g) × 1本、MGO 500+ (100g) × 1本",
      description: "3種類のMGO値の違うマヌカハニーを楽しめるバラエティセット。様々な効能や味わいの違いを体験できる特別なギフトです。"
    }
  ];

  return (
    <div className="bg-background">
      {/* ヒーローセクション */}
      <section className="relative py-20 bg-text text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">ギフト特集</h1>
          <p className="text-xl max-w-3xl">大切な人への贈り物に、自然の恵みがたっぷり詰まったマヌカハニーを。健康と幸せを届ける特別なギフトをご用意しています。</p>
        </div>
      </section>

      {/* ギフトに最適な理由 */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">マヌカハニーがギフトに選ばれる理由</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">健康と美容への贈り物</h3>
              <p>高い抗菌作用と栄養価を持つマヌカハニーは、健康と美容を気遣う方への贈り物として最適です。自然の恵みをそのままに届けられます。</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">高品質と安全性の証</h3>
              <p>MGO含有量の証明や第三者機関による検査など、品質と安全性が保証された特別な蜂蜜は、贈り物としての価値も高く評価されています。</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <rect x="7" y="7" width="3" height="9"></rect>
                  <rect x="14" y="7" width="3" height="5"></rect>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">特別感と希少性</h3>
              <p>ニュージーランドで限られた時期にしか採取できない希少なマヌカハニー。その特別感と自然の恵みを大切な方に贈ることで、想いが伝わります。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ギフトシーン紹介 */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">様々なギフトシーン</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {giftTypes.map(type => (
              <div key={type.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-60 overflow-hidden">
                  <img 
                    src={type.image} 
                    alt={type.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ギフトセット紹介 */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-4">ギフトセット</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">大切な方への贈り物に最適な、特別なパッケージでお届けするマヌカハニーギフトセット。様々なシーンに合わせてお選びいただけます。</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {giftSets.map(set => (
              <div key={set.id} className="flex flex-col md:flex-row bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="md:w-1/3 h-60 md:h-auto overflow-hidden">
                  <img 
                    src={set.image} 
                    alt={set.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-2">{set.name}</h3>
                  <div className="mb-2 text-sm bg-primary inline-block px-2 py-1 rounded text-text font-medium">
                    内容：{set.content}
                  </div>
                  <p className="text-gray-600 mb-4">{set.description}</p>
                  <div className="mt-auto flex justify-between items-center">
                    <span className="text-lg font-bold">¥{set.price.toLocaleString()}</span>
                    <button className="btn py-1 px-4">詳細を見る</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ギフトラッピングサービス */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=500&auto=format&fit=crop" 
                  alt="ギフトラッピング" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-4">ギフトサービス</h2>
                <p className="mb-6">マルカハニーでは、大切な方への贈り物をより特別なものにするために、様々なギフトサービスをご用意しています。美しいラッピングやメッセージカード、のし対応など、お客様のご要望に合わせてご対応いたします。</p>
                <div className="bg-background p-4 rounded-lg mb-6">
                  <h3 className="text-lg font-bold mb-2">ギフトサービス内容</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><span className="font-medium">ギフトラッピング</span>：美しい和紙や洋風の包装紙からお選びいただけます</li>
                    <li><span className="font-medium">メッセージカード</span>：あなたの気持ちを伝えるカードをお付けします</li>
                    <li><span className="font-medium">のし対応</span>：慶事・弔事どちらにも対応可能です</li>
                    <li><span className="font-medium">ギフトボックス</span>：高級感のある特製ボックスをご用意</li>
                    <li><span className="font-medium">送料無料</span>：5,000円以上のご購入で送料無料</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 mb-4">※ギフトサービスをご希望の場合は、注文時に備考欄にご記入ください。追加料金が発生する場合があります。</p>
                <button className="btn bg-button hover:bg-accent text-white">ギフトについてもっと詳しく</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 法人ギフト */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-4">法人ギフト</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">取引先への贈り物や社内イベント、記念品など法人様向けのギフトも承っております。まとまった数量でのご注文や、オリジナルギフトのご相談も可能です。</p>
          
          <div className="flex flex-col md:flex-row gap-8 items-center bg-background p-8 rounded-lg">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">法人様向けサービス</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-primary mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <div>
                    <h4 className="font-bold">大量注文割引</h4>
                    <p className="text-sm">10個以上のご注文で5%オフ、30個以上で10%オフの特別割引をご用意しています。</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-primary mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <div>
                    <h4 className="font-bold">オリジナルギフト作成</h4>
                    <p className="text-sm">ご予算やご要望に合わせたオリジナルギフトセットの作成も承ります。</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-primary mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <div>
                    <h4 className="font-bold">複数発送対応</h4>
                    <p className="text-sm">一括注文・複数発送も承ります。送付先リストを提供いただくだけで手続き完了。</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-primary mt-1">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <div>
                    <h4 className="font-bold">請求書対応</h4>
                    <p className="text-sm">法人様には請求書払いにも対応しております。（審査が必要な場合があります）</p>
                  </div>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/contact" className="btn bg-button hover:bg-accent text-white">
                  法人ギフトについて問い合わせる
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1579208030886-b937da9f63a2?q=80&w=500&auto=format&fit=crop" 
                alt="法人ギフト" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせ誘導セクション */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">ギフトに関するご質問</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">ギフトラッピングや法人向けサービス、カスタマイズなど、ご不明な点がございましたらお気軽にお問い合わせください。</p>
          <Link to="/contact" className="btn bg-text hover:opacity-90 text-white">
            お問い合わせをする
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GiftPage;
