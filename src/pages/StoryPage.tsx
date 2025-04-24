const StoryPage = () => {
  return (
    <div className="bg-background">
      {/* ヒーローセクション */}
      <section className="relative py-20 bg-text text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">私たちのストーリー</h1>
          <p className="text-xl max-w-3xl">養蜂家Tomo氏の情熱と技術が生み出す、ニュージーランドの大自然の恵みをそのままに</p>
        </div>
      </section>

      {/* トモ氏の紹介 */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1551861568-c0ffe0aa1136?q=80&w=500&auto=format&fit=crop" 
                alt="養蜂家 Tomo" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">養蜂家 Tomo</h2>
              <p className="mb-4">20年以上の養蜂経験を持つTomo（トモ）は、10代の頃から自然との共存を大切にした養蜂に魅了されました。日本で養蜂の基礎を学んだ後、より純粋な環境を求めてニュージーランドへ渡り、マヌカの花が咲き誇る谷間で養蜂場を始めました。</p>
              <p className="mb-4">「ミツバチたちが自然のままに生き、自然のままに蜜を集める。それが最高品質のはちみつを生み出す秘訣です」というトモの哲学は、すべての製品に反映されています。</p>
              <p>農薬や抗生物質を一切使用せず、ミツバチたちが健やかに活動できる環境づくりにこだわっています。この姿勢が評価され、ニュージーランド養蜂協会からも高い評価を受けています。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 環境と養蜂場について */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">ニュージーランドの豊かな自然環境</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1469362102473-8622cfb973cd?q=80&w=500&auto=format&fit=crop" 
                alt="ニュージーランドの風景" 
                className="rounded-lg shadow-lg w-full h-64 object-cover mb-6"
              />
              <h3 className="text-xl font-bold mb-3">手つかずの大自然</h3>
              <p>マルカハニーの養蜂場があるのは、ニュージーランド南島の人里離れた谷間。工業地帯や交通量の多い道路から隔離された、清浄な環境です。この地域は、厳しい環境保護規制によって守られた手つかずの自然が広がっています。</p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=500&auto=format&fit=crop" 
                alt="マヌカの花" 
                className="rounded-lg shadow-lg w-full h-64 object-cover mb-6"
              />
              <h3 className="text-xl font-bold mb-3">マヌカの花々</h3>
              <p>ニュージーランド固有の植物であるマヌカは、夏の初めに白い花を咲かせます。この花から採取される蜜は、特有の抗菌作用を持つメチルグリオキサール（MGO）を高濃度に含んでいます。マルカハニーの養蜂場は、このマヌカの花が豊富に咲く地域に戦略的に配置されています。</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-center">養蜂場へのこだわり</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 21h10"></path>
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  </svg>
                </div>
                <h4 className="font-bold mb-2">適切な間隔</h4>
                <p className="text-sm">養蜂箱同士の距離を十分に取ることで、ミツバチたちの縄張り争いを防ぎ、ストレスなく活動できる環境を提供しています。</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </div>
                <h4 className="font-bold mb-2">無農薬・抗生物質不使用</h4>
                <p className="text-sm">化学物質を一切使用せず、ミツバチの生態を尊重した自然な養蜂を行うことで、純粋なマヌカハニーを生産しています。</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="8"></circle>
                    <line x1="3" y1="3" x2="21" y2="21"></line>
                  </svg>
                </div>
                <h4 className="font-bold mb-2">低温処理</h4>
                <p className="text-sm">はちみつを瓶詰めする際も、有効成分を損なわないよう低温でゆっくりと処理。自然の恵みをそのままお届けします。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 収穫から瓶詰めまでのプロセス */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">蜂蜜ができるまで</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="relative">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary text-3xl font-bold">1</div>
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-primary z-0"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">マヌカの花が咲く</h3>
              <p className="text-sm">ニュージーランドの夏、マヌカの白い花が咲き誇ります。短い開花期間の中でミツバチたちが忙しく蜜を集めます。</p>
            </div>
            
            <div className="text-center">
              <div className="relative">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary text-3xl font-bold">2</div>
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-primary z-0"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">ミツバチの採蜜活動</h3>
              <p className="text-sm">ミツバチたちはマヌカの花から蜜を集め、巣に持ち帰ります。この過程で蜜に酵素を加え、熟成させていきます。</p>
            </div>
            
            <div className="text-center">
              <div className="relative">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary text-3xl font-bold">3</div>
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-primary z-0"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">丁寧な収穫</h3>
              <p className="text-sm">熟成した蜜蝋で密閉された巣板から、慎重に蜜を抽出します。ミツバチたちの活動を妨げないよう、十分な蜜を巣に残します。</p>
            </div>
            
            <div className="text-center">
              <div className="relative">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary text-3xl font-bold">4</div>
              </div>
              <h3 className="text-xl font-bold mb-3">検査と瓶詰め</h3>
              <p className="text-sm">収穫したはちみつは第三者機関でMGO濃度を検査後、清潔な環境で瓶詰めされます。最小限の処理で自然のままの品質を保ちます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 理念と価値観 */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">マルカハニーの想い</h2>
            <div className="text-xl italic text-text mb-10 px-4 py-6 border-l-4 border-primary bg-white rounded shadow-sm">
              「自然が創り出す奇跡を、一切の妥協なく、そのままの姿でお届けしたい。ミツバチたちとともに生きる喜びを皆様と分かち合えることが、私たちの最大の幸せです。」
              <div className="mt-4 text-right text-base font-bold">- 養蜂家 Tomo</div>
            </div>
            <p className="mb-8">マルカハニーは単なる商品ではなく、ニュージーランドの豊かな自然環境と、そこに生きるミツバチたち、そして情熱を持った養蜂家の物語です。私たちは自然との調和を大切にし、持続可能な養蜂に取り組むことで、最高品質のマヌカハニーを皆様にお届けします。</p>
            <div className="flex justify-center">
              <a href="/products" className="btn">商品を見る</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StoryPage;
