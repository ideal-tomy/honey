import { useState } from 'react';
import { Link } from 'react-router-dom';

// FAQエントリーの型定義
interface FaqEntry {
  question: string;
  answer: string;
}

// FAQデータの型定義
interface FaqDataType {
  [category: string]: FaqEntry[];
}

const FaqPage = () => {
  // FAQカテゴリー
  const categories = [
    '商品について', 
    '保存方法・賞味期限', 
    '配送・お届けについて', 
    '購入方法・支払い', 
    'その他'
  ];

  // 選択されたカテゴリー
  const [selectedCategory, setSelectedCategory] = useState('商品について');

  // FAQデータ
  const faqData: FaqDataType = {
    '商品について': [
      {
        question: 'マヌカハニーのMGOとは何ですか？',
        answer: 'MGOはメチルグリオキサールの略で、マヌカハニーに含まれる有効成分です。この数値が高いほど抗菌作用や健康効果が高いとされています。マルカハニーでは、MGO100+、300+、500+と数値ごとに商品を提供しています。'
      },
      {
        question: 'マヌカハニーとふつうのはちみつの違いは？',
        answer: 'マヌカハニーはニュージーランドに自生するマヌカの木から採取されるはちみつで、一般的なはちみつには含まれないメチルグリオキサール（MGO）という有効成分を豊富に含んでいます。この成分による抗菌作用や健康効果が、通常のはちみつと大きく異なる点です。'
      },
      {
        question: 'マヌカハニーの効能・効果について教えてください',
        answer: 'マヌカハニーには抗菌作用、抗炎症作用、整腸作用などが科学的に証明されています。風邪予防や喉のケア、胃腸の調子を整えるのに役立つとされています。ただし、医薬品ではないため、効能・効果を保証するものではありません。'
      },
      {
        question: 'どのMGO値の商品を選べばいいですか？',
        answer: '日常的な健康維持であればMGO100+が適しています。より高い効果を求める場合や、特別なケアが必要な時はMGO300+やMGO500+がおすすめです。初めての方はMGO100+から試されることをおすすめします。'
      },
      {
        question: 'マヌカハニーの食べ方を教えてください',
        answer: 'スプーン一杯をそのまま舐めたり、水やお湯に溶かして飲んだりするのが一般的です。また、ヨーグルトやトーストにかけて、朝食として楽しむ方法もあります。喉のケアには、お湯に溶かしてゆっくり飲むのがおすすめです。'
      }
    ],
    '保存方法・賞味期限': [
      {
        question: 'マヌカハニーの賞味期限はどれくらいですか？',
        answer: '未開封の場合、適切な保存状態（直射日光を避け、常温）で約2年間です。開封後は6ヶ月以内にお召し上がりいただくことをおすすめします。賞味期限は商品パッケージに記載されています。'
      },
      {
        question: '保存方法について教えてください',
        answer: '直射日光を避け、冷暗所または常温で保存してください。冷蔵庫での保存も可能ですが、結晶化が進みやすくなります。結晶化しても品質に問題はなく、湯煎などで溶かして使用できます。'
      },
      {
        question: 'はちみつが固まってしまいました。食べられますか？',
        answer: 'はちみつが固まる（結晶化する）のは自然な現象で、品質には問題ありません。結晶化したはちみつは湯煎で容器ごと温めると元の状態に戻ります。40℃以下のお湯で温めることをおすすめします。'
      }
    ],
    '配送・お届けについて': [
      {
        question: '配送料について教えてください',
        answer: '5,000円以上のご購入で送料無料となります。5,000円未満の場合は全国一律800円の送料を頂戴しております。'
      },
      {
        question: '注文から何日で届きますか？',
        answer: 'ご注文確定後、通常1～3営業日以内に発送いたします。お届けは発送後、地域によって1～3日程度かかります。繁忙期や天候不良の場合は遅れる可能性がございます。'
      },
      {
        question: '海外発送は行っていますか？',
        answer: '現在、一部の国・地域へ発送可能です。海外発送をご希望の場合は、お問い合わせフォームよりご連絡ください。国によって配送料や規制が異なります。'
      }
    ],
    '購入方法・支払い': [
      {
        question: '支払い方法は何がありますか？',
        answer: 'クレジットカード（VISA、MasterCard、JCB、American Express）、銀行振込、コンビニ決済、PayPayに対応しております。'
      },
      {
        question: '定期購入はできますか？',
        answer: 'はい、定期購入サービスをご用意しています。1ヶ月、2ヶ月、3ヶ月の周期からお選びいただけます。定期購入は通常価格から10%オフとなり、送料無料の特典がございます。マイページからいつでも周期変更・停止が可能です。'
      },
      {
        question: '注文後のキャンセルはできますか？',
        answer: '発送前であればキャンセル可能です。お問い合わせフォームよりすぐにご連絡ください。発送後のキャンセルはお受けできませんので、商品到着後、返品の手続きをお願いいたします。'
      }
    ],
    'その他': [
      {
        question: '子供でも食べられますか？',
        answer: '1歳以上のお子様であれば安心してお召し上がりいただけます。ただし、1歳未満の乳児には、どんなはちみつも与えないようにご注意ください。'
      },
      {
        question: '妊娠中・授乳中でも食べられますか？',
        answer: 'マヌカハニーは自然食品であり、妊娠中・授乳中の方も基本的にお召し上がりいただけます。ただし、体調や状況には個人差がありますので、心配な方はかかりつけの医師にご相談されることをおすすめします。'
      },
      {
        question: 'アレルギーがありますが大丈夫ですか？',
        answer: 'はちみつはアレルギー物質として認定されていませんが、稀にアレルギー反応を示す方もいらっしゃいます。はちみつアレルギーの方はご使用をお控えください。初めて食べる際は少量からお試しすることをおすすめします。'
      }
    ]
  };

  return (
    <div className="bg-background">
      {/* ヒーローセクション */}
      <section className="relative py-20 bg-text text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">よくあるご質問</h1>
          <p className="text-xl max-w-3xl">マヌカハニーに関する疑問や不安を解消するためのFAQページです。お探しの答えが見つからない場合は、お気軽にお問い合わせください。</p>
        </div>
      </section>

      {/* FAQ検索セクション */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="relative mb-10">
              <input 
                type="text" 
                placeholder="質問を検索..." 
                className="w-full py-3 px-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>

            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map(category => (
                <button 
                  key={category}
                  className={`px-4 py-2 rounded-full ${selectedCategory === category ? 'bg-primary text-text' : 'bg-background text-text'} hover:bg-accent transition-colors`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQリストセクション */}
      <section className="py-12 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">{selectedCategory}</h2>
            <div className="space-y-6">
              {faqData[selectedCategory].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">お探しの答えが見つかりませんでしたか？</h3>
              <p className="mb-6">その他のご質問やお問い合わせは、お気軽にお問い合わせフォームよりご連絡ください。</p>
              <Link to="/contact" className="btn bg-button hover:bg-accent text-white">
                お問い合わせをする
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqPage;
