import { Link } from 'react-router-dom';

const QualityPage = () => {
  return (
    <div className="bg-background">
      {/* ヒーローセクション */}
      <section className="relative py-20 bg-text text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">品質と検査情報</h1>
          <p className="text-xl max-w-3xl">マルカハニーが提供するマヌカハニーの品質と安全性をお約束する、厳格な検査と独自の品質基準について</p>
        </div>
      </section>

      {/* MGO紹介セクション */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="/images/products01.jpg"
                alt="マヌカハニーのMGO活性" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">MGO（メチルグリオキサール）とは</h2>
              <p className="mb-4">マヌカハニーの最も重要な有効成分であるMGO（メチルグリオキサール）は、その抗菌作用や健康効果の源です。この成分は一般的なはちみつには含まれておらず、マヌカの花から採取されたはちみつに特有の成分です。</p>
              <p className="mb-4">MGOの含有量はマヌカハニーの品質を示す重要な指標となり、数値が高いほど抗菌力や効能が高いことを示します。マルカハニーでは、すべての商品にMGO含有量を明記し、第三者機関による検査で数値を確認しています。</p>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div className="bg-background p-4 rounded-lg">
                  <div className="text-xl font-bold mb-2">MGO 100+</div>
                  <p className="text-sm">日常的な健康維持に</p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <div className="text-xl font-bold mb-2">MGO 300+</div>
                  <p className="text-sm">積極的な健康管理に</p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <div className="text-xl font-bold mb-2">MGO 500+</div>
                  <p className="text-sm">最高レベルの効果を求める方に</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UMF紹介セクション */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="/images/products04.jpg"
                alt="UMF認証" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">UMF（ユニーク・マヌカ・ファクター）</h2>
              <p className="mb-4">UMFとは「Unique Manuka Factor（ユニーク・マヌカ・ファクター）」の略称で、マヌカハニーの品質を保証する国際的な認証システムです。この認証は、マヌカハニーに含まれる特定の成分（レプトスペリン、DHA、MGOなど）の含有量に基づいて付与されます。</p>
              <p className="mb-4">UMF協会が認定した検査機関による厳格な検査を経て、品質が証明されたマヌカハニーのみがUMFマークを表示することを許可されています。数値が高いほど、より高品質であることを示します。</p>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-xl font-bold mb-2">UMF 5+</div>
                  <p className="text-sm">基本的な品質保証</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-xl font-bold mb-2">UMF 10+</div>
                  <p className="text-sm">高い品質の証明</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-xl font-bold mb-2">UMF 15+ 以上</div>
                  <p className="text-sm">最高級の品質</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 検査工程 */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">厳格な品質検査工程</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-primary text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-4">採取段階での検査</h3>
              <p>養蜂場ごとに採取したはちみつのサンプルを採取し、初期検査を実施。この段階で純度や基本的な品質チェックを行います。</p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-primary text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-4">第三者機関による検査</h3>
              <p>国際的に認定された独立検査機関にて、MGO濃度やその他の栄養成分、不純物の有無などを徹底的に分析します。</p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-primary text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-4">認証と品質保証</h3>
              <p>検査結果に基づき、MGO値を確定。すべての製品にロット番号を付与し、トレーサビリティを確保します。</p>
            </div>
          </div>

          <div className="bg-text text-white p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-center">マルカハニー品質保証</h3>
            <p className="text-center mb-6">私たちは以下の品質基準を満たす製品のみを出荷しています</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-primary">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <p>国際基準に適合した検査施設での品質検査</p>
              </div>
              <div className="flex items-start space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-primary">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <p>全ての商品に対する純度検査の実施</p>
              </div>
              <div className="flex items-start space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-primary">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <p>MGO含有量の正確な測定と表示</p>
              </div>
              <div className="flex items-start space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-primary">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <p>農薬や抗生物質の不使用を確認</p>
              </div>
              <div className="flex items-start space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-primary">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <p>安全な製造環境の維持と確認</p>
              </div>
              <div className="flex items-start space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-primary">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <p>採取から出荷までの全工程のトレーサビリティ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* マヌカハニーの特性と効果 */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">マヌカハニーの特性と効果</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">抗菌作用</h3>
              <p>マヌカハニーに含まれるMGOには強力な抗菌作用があり、様々な細菌に対して効果を示すことが科学的に証明されています。この特性により、のどや口内のケアに適しています。</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  <line x1="6" y1="1" x2="6" y2="4"></line>
                  <line x1="10" y1="1" x2="10" y2="4"></line>
                  <line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">整腸作用</h3>
              <p>マヌカハニーに含まれる成分は腸内環境を整える働きがあると言われています。プレバイオティクス効果により良好な腸内細菌のバランスをサポートし、消化器系の健康維持に貢献します。</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">抗酸化作用</h3>
              <p>マヌカハニーには豊富な抗酸化物質が含まれており、体内の酸化ストレスから細胞を守る働きがあります。これにより、全身の健康維持や免疫力の向上にも貢献しています。</p>
            </div>
          </div>

          <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-center">科学的根拠に基づく品質</h3>
            <p className="mb-6">マルカハニーでは、最新の科学的研究と分析方法を用いて、マヌカハニーの品質と効能を確認しています。ニュージーランドの研究機関との連携により、常に最新の知見を取り入れ、より安全で効果的な製品開発に努めています。</p>
            <p>各製品のMGO含有量は、ニュージーランドの公認検査機関によって厳格に測定され、その数値を正確に表示しています。この透明性が、マルカハニーの品質への信頼の基盤となっています。</p>
          </div>
        </div>
      </section>

      {/* 製品紹介セクション */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-8">品質にこだわった製品ラインナップ</h2>
          <p className="mb-12 max-w-3xl mx-auto">厳格な品質基準を満たした、マルカハニーの製品をご覧ください。あなたのライフスタイルや目的に合わせて、最適なマヌカハニーをお選びいただけます。</p>
          
          <Link to="/products" className="btn bg-button hover:bg-accent text-white">
            商品一覧を見る
          </Link>
        </div>
      </section>
    </div>
  );
};

export default QualityPage;
