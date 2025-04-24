import { Link } from 'react-router-dom';

const ProductsPage = () => {
  // 商品データ（実際の実装ではAPIやデータベースから取得する）
  const products = [
    {
      id: 1,
      name: "マヌカハニー MGO 100+",
      image: "https://images.unsplash.com/photo-1587049352847-de8ed5d1ec29?q=80&w=500&auto=format&fit=crop",
      mgo: "100+",
      size: "250g",
      price: 5800,
      description: "日常使いに適したバランスの良いマヌカハニーです。朝食やお料理にも使いやすい自然な甘さが特徴です。",
      benefits: ["朝食に最適", "自然な甘さ", "料理との相性◎"]
    },
    {
      id: 2,
      name: "マヌカハニー MGO 300+",
      image: "https://images.unsplash.com/photo-1587049352931-41e3fe58ae13?q=80&w=500&auto=format&fit=crop",
      mgo: "300+",
      size: "250g",
      price: 7800,
      description: "高い抗菌作用を持ち、健康維持に最適なハチミツです。寒い季節のケアや、のどの調子を整えるのに役立ちます。",
      benefits: ["のどのケア", "免疫力サポート", "高い抗菌活性"]
    },
    {
      id: 3,
      name: "マヌカハニー MGO 500+",
      image: "https://images.unsplash.com/photo-1587049352665-bde0b8c3b9b3?q=80&w=500&auto=format&fit=crop",
      mgo: "500+",
      size: "250g",
      price: 9800,
      description: "最高クラスのMGO含有量を認定されたプレミアムハチミツです。特別なケアが必要な時に最適です。",
      benefits: ["最高峰の品質", "プレミアムケア", "特別な贈り物に"]
    },
    {
      id: 4,
      name: "マヌカハニー MGO 100+ 大容量",
      image: "https://images.unsplash.com/photo-1586768426972-8323546273f5?q=80&w=500&auto=format&fit=crop",
      mgo: "100+",
      size: "500g",
      price: 9800,
      description: "ご家族でのご利用に最適な大容量サイズ。毎日の健康習慣にお役立てください。",
      benefits: ["お得な大容量", "ご家族向け", "日常使いに最適"]
    },
    {
      id: 5,
      name: "マヌカハニー MGO 300+ 大容量",
      image: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=500&auto=format&fit=crop",
      mgo: "300+",
      size: "500g",
      price: 12800,
      description: "健康を重視する方に最適な大容量サイズ。抗菌作用の高いMGO 300+を毎日の習慣に。",
      benefits: ["お得な大容量", "健康維持に", "抗菌パワー"]
    },
    {
      id: 6,
      name: "ギフトボックス - MGO 300+",
      image: "https://images.unsplash.com/photo-1575504310902-0a1e59c86c82?q=80&w=500&auto=format&fit=crop",
      mgo: "300+",
      size: "250g",
      price: 8800,
      description: "特別な方への贈り物に最適な高級感あふれるギフトボックス。マヌカハニーの魅力を伝える特別なパッケージです。",
      benefits: ["特別なギフト", "高級感のある箱入り", "メッセージカード付き"]
    }
  ];

  return (
    <div className="bg-background">
      {/* ヒーローセクション */}
      <section className="relative py-20 bg-text text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">商品一覧</h1>
          <p className="text-xl max-w-3xl">自然の恵みたっぷりのマヌカハニー。MGO含有量に応じた様々な製品をご用意しています。</p>
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
                <button className="px-4 py-1 bg-background text-text rounded-full hover:bg-accent transition-colors">MGO 100+</button>
                <button className="px-4 py-1 bg-background text-text rounded-full hover:bg-accent transition-colors">MGO 300+</button>
                <button className="px-4 py-1 bg-background text-text rounded-full hover:bg-accent transition-colors">MGO 500+</button>
                <button className="px-4 py-1 bg-background text-text rounded-full hover:bg-accent transition-colors">ギフト商品</button>
              </div>
            </div>
            <div>
              <select className="px-4 py-2 border rounded-md bg-background">
                <option>人気順</option>
                <option>価格が安い順</option>
                <option>価格が高い順</option>
                <option>MGO値が高い順</option>
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
                    <span className="bg-primary text-text text-sm font-medium py-1 px-3 rounded">MGO {product.mgo}</span>
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
                    <button className="btn py-1 px-4">カートに追加</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 定期購入案内セクション */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1582034986517-30d9ab2a6ef9?q=80&w=500&auto=format&fit=crop" 
                  alt="定期購入" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-4">定期便でさらにお得に</h2>
                <p className="mb-6">毎月自動的にお届けする定期便サービスで、通常価格から10%オフ。さらに送料無料でお届けします。いつでも変更・停止が可能なので安心してご利用いただけます。</p>
                <div className="bg-background p-4 rounded-lg mb-6">
                  <h3 className="text-lg font-bold mb-2">定期便の特典</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>通常価格から10%オフ</li>
                    <li>送料無料</li>
                    <li>数量・お届け周期の変更可能</li>
                    <li>いつでも解約可能</li>
                    <li>優先的に最新ロットをお届け</li>
                  </ul>
                </div>
                <button className="btn bg-button hover:bg-accent text-white">詳しくはこちら</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* よくある質問セクション */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">商品についてよくある質問</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 bg-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">マヌカハニーの賞味期限はどれくらいですか？</h3>
              <p>適切な保存状態（直射日光を避け、常温）であれば、未開封で約2年間の賞味期限があります。開封後は6ヶ月以内にお召し上がりいただくことをおすすめしています。</p>
            </div>
            <div className="mb-6 bg-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">MGOの数値が高いほど良いのですか？</h3>
              <p>MGO値はメチルグリオキサールの含有量を示しており、数値が高いほど抗菌作用などの効果が期待できます。ただし、日常的な健康維持にはMGO100+でも十分な効果があり、ご使用目的に合わせてお選びいただくことをおすすめします。</p>
            </div>
            <div className="mb-6 bg-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">子供でも食べられますか？</h3>
              <p>1歳以上のお子様であれば安心してお召し上がりいただけます。ただし、1歳未満の乳児には、どんなはちみつも与えないようにご注意ください。</p>
            </div>
            <div className="text-center mt-8">
              <Link to="/faq" className="btn bg-button hover:bg-accent text-white">
                もっと質問を見る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
