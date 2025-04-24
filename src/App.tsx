import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

// レイアウトのインポート
import MainLayout from './layouts/MainLayout'
// スクロール制御コンポーネントのインポート
import ScrollToTop from './components/ScrollToTop'

// 遅延ロードするページコンポーネント
const HomePage = lazy(() => import('./pages/HomePage'))
const StoryPage = lazy(() => import('./pages/StoryPage'))
const QualityPage = lazy(() => import('./pages/QualityPage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))
const GiftPage = lazy(() => import('./pages/GiftPage'))
const ColumnPage = lazy(() => import('./pages/ColumnPage'))
const FaqPage = lazy(() => import('./pages/FaqPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const LpPage = lazy(() => import('./pages/LpPage'))

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div className="flex items-center justify-center h-screen">読み込み中...</div>}>
        <Routes>
          {/* メインレイアウトを適用するルート */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/quality" element={<QualityPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/gift" element={<GiftPage />} />
            <Route path="/column" element={<ColumnPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
          
          {/* 特設LP（ナビゲーションなしのページ） */}
          <Route path="/lp" element={<LpPage />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
