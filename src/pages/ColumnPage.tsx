import { Link } from 'react-router-dom';

const ColumnPage = () => {
  // コラム記事データ
  const articles = [
    {
      id: 1,
      title: "マヌカハニーの効果的な使い方",
      image: "https://images.unsplash.com/photo-1587049352847-de8ed5d1ec29?q=80&w=500&auto=format&fit=crop",
      category: "健康・美容",
      date: "2025年3月15日",
      excerpt: "マヌカハニーの効果を最大限に引き出す方法や、日常生活での取り入れ方についてご紹介します。朝食やスキンケアなど様々なシーンでの活用法をお伝えします。"
    },
    {
      id: 2,
      title: "ニュージーランドの養蜂文化",
      image: "https://images.unsplash.com/photo-1471943311424-646960669fbc?q=80&w=500&auto=format&fit=crop",
      category: "文化・歴史",
      date: "2025年2月28日",
      excerpt: "ニュージーランドにおける養蜂の歴史と文化について解説。マオリの人々と蜂蜜の関わりから現代の養蜂家まで、豊かな養蜂文化をご紹介します。"
    },
    {
      id: 3,
      title: "マヌカハニーとUMF・MGOの関係",
      image: "https://images.unsplash.com/photo-1587049352931-41e3fe58ae13?q=80&w=500&auto=format&fit=crop",
      category: "品質・成分",
      date: "2025年2月10日",
      excerpt: "マヌカハニーの品質指標であるUMF（ユニーク・マヌカ・ファクター）とMGO（メチルグリオキサール）の違いと関係性について詳しく解説します。"
    },
    {
      id: 4,
      title: "季節の変わり目に取り入れたいはちみつレシピ",
      image: "https://images.unsplash.com/photo-1612690657435-5c586c926a93?q=80&w=500&auto=format&fit=crop",
      category: "レシピ・活用法",
      date: "2025年1月25日",
      excerpt: "季節の変わり目は体調を崩しやすい時期。そんな時に役立つ、マヌカハニーを使った簡単レシピと活用法をご紹介します。家族の健康維持にお役立てください。"
    },
    {
      id: 5,
      title: "知って得する！はちみつの保存方法",
      image: "https://images.unsplash.com/photo-1594961081992-5c487852b728?q=80&w=500&auto=format&fit=crop",
      category: "知識・豆知識",
      date: "2025年1月15日",
      excerpt: "はちみつの正しい保存方法についてご紹介します。結晶化の対処法や、鮮度を保つためのコツなど、はちみつを長く美味しく楽しむための知識が満載です。"
    },
    {
      id: 6,
      title: "マヌカの花が咲く季節 - ニュージーランドの夏",
      image: "https://images.unsplash.com/photo-1614952879625-db7241034571?q=80&w=500&auto=format&fit=crop",
      category: "文化・歴史",
      date: "2024年12月20日",
      excerpt: "ニュージーランドの夏（12月〜2月）に咲くマヌカの花とその生態について。養蜂家たちが大切に守り続ける自然環境とハチミツ採取の様子をお届けします。"
    }
  ];

  // カテゴリー一覧（重複なし）
  const categories = [...new Set(articles.map(article => article.category))];

  return (
    <div className="bg-background">
      {/* ヒーローセクション */}
      <section className="relative py-20 bg-text text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">コラム</h1>
          <p className="text-xl max-w-3xl">マヌカハニーや養蜂の世界、健康や美容に関する情報など、役立つ知識をお届けします。</p>
        </div>
      </section>

      {/* コンテンツセクション */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-8">
            {/* メインコンテンツ */}
            <div className="md:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {articles.map(article => (
                  <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="bg-primary text-text text-xs font-medium py-1 px-2 rounded">{article.category}</span>
                        <span className="text-xs text-gray-500">{article.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{article.excerpt}</p>
                      <Link to={`/column/${article.id}`} className="text-button hover:text-accent transition-colors font-medium">
                        続きを読む
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* ページネーション */}
              <div className="mt-12 flex justify-center">
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-white text-text rounded-md hover:bg-primary transition-colors">
                    前へ
                  </button>
                  <button className="px-4 py-2 bg-primary text-text rounded-md">
                    1
                  </button>
                  <button className="px-4 py-2 bg-white text-text rounded-md hover:bg-primary transition-colors">
                    2
                  </button>
                  <button className="px-4 py-2 bg-white text-text rounded-md hover:bg-primary transition-colors">
                    3
                  </button>
                  <button className="px-4 py-2 bg-white text-text rounded-md hover:bg-primary transition-colors">
                    次へ
                  </button>
                </div>
              </div>
            </div>

            {/* サイドバー */}
            <div className="md:w-1/3">
              <div className="bg-white rounded-lg p-6 shadow-md mb-8">
                <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">カテゴリー</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-button hover:text-accent transition-colors flex justify-between items-center">
                      <span>すべて</span>
                      <span className="bg-background text-text text-xs px-2 py-1 rounded-full">{articles.length}</span>
                    </a>
                  </li>
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a href="#" className="text-button hover:text-accent transition-colors flex justify-between items-center">
                        <span>{category}</span>
                        <span className="bg-background text-text text-xs px-2 py-1 rounded-full">
                          {articles.filter(article => article.category === category).length}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md mb-8">
                <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">人気の記事</h3>
                <ul className="space-y-4">
                  {articles.slice(0, 3).map(article => (
                    <li key={article.id} className="flex space-x-3">
                      <div className="flex-shrink-0 w-16 h-16 overflow-hidden rounded">
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm mb-1 leading-tight">{article.title}</h4>
                        <span className="text-xs text-gray-500">{article.date}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold mb-4">最新情報をお届け</h3>
                <p className="mb-4 text-sm">マヌカハニーに関する最新情報や限定特典をお届けします。メールマガジンにご登録ください。</p>
                <form>
                  <input 
                    type="email" 
                    placeholder="メールアドレス" 
                    className="w-full mb-3 px-4 py-2 rounded-md"
                  />
                  <button className="btn w-full">登録する</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ColumnPage;
