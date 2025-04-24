import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 bg-background shadow-sm">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-text">
              マルカハニー
            </Link>

            {/* モバイルメニューボタン */}
            <button 
              className="lg:hidden p-2" 
              onClick={toggleMenu}
              aria-label="メニュー"
            >
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
              >
                {isMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </>
                )}
              </svg>
            </button>

            {/* デスクトップメニュー */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Link to="/" className="text-text hover:text-accent transition-colors">トップ</Link>
              <Link to="/story" className="text-text hover:text-accent transition-colors">ストーリー</Link>
              <Link to="/products" className="text-text hover:text-accent transition-colors">商品</Link>
              <Link to="/quality" className="text-text hover:text-accent transition-colors">品質</Link>
              <Link to="/gift" className="text-text hover:text-accent transition-colors">ギフト</Link>
              <Link to="/faq" className="text-text hover:text-accent transition-colors">FAQ</Link>
              <Link to="/contact" className="text-text hover:text-accent transition-colors">お問い合わせ</Link>
              <Link to="/products" className="btn">購入する</Link>
            </nav>
          </div>

          {/* モバイルメニュー */}
          <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} py-4`}>
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-text hover:text-accent transition-colors" onClick={toggleMenu}>トップ</Link>
              <Link to="/story" className="text-text hover:text-accent transition-colors" onClick={toggleMenu}>ストーリー</Link>
              <Link to="/products" className="text-text hover:text-accent transition-colors" onClick={toggleMenu}>商品</Link>
              <Link to="/quality" className="text-text hover:text-accent transition-colors" onClick={toggleMenu}>品質</Link>
              <Link to="/gift" className="text-text hover:text-accent transition-colors" onClick={toggleMenu}>ギフト</Link>
              <Link to="/faq" className="text-text hover:text-accent transition-colors" onClick={toggleMenu}>FAQ</Link>
              <Link to="/contact" className="text-text hover:text-accent transition-colors" onClick={toggleMenu}>お問い合わせ</Link>
              <Link to="/products" className="btn w-full text-center" onClick={toggleMenu}>購入する</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* フッター */}
      <footer className="bg-text text-white py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">マルカハニー</h3>
              <p className="mb-2">ニュージーランド産の最高品質マヌカハニー</p>
              <div className="flex space-x-4 mt-4">
                {/* SNSアイコン */}
                <a href="#" className="text-white hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">リンク</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-primary transition-colors">トップ</Link></li>
                <li><Link to="/story" className="hover:text-primary transition-colors">ストーリー</Link></li>
                <li><Link to="/products" className="hover:text-primary transition-colors">商品</Link></li>
                <li><Link to="/quality" className="hover:text-primary transition-colors">品質</Link></li>
                <li><Link to="/gift" className="hover:text-primary transition-colors">ギフト</Link></li>
                <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">お問い合わせ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">お問い合わせ</h3>
              <p className="mb-2">お気軽にお問い合わせください</p>
              <Link to="/contact" className="btn bg-primary text-text hover:bg-accent mt-2">お問い合わせフォーム</Link>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>© 2025 マルカハニー All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
