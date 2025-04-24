import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ルート変更時に画面の先頭にスクロールするコンポーネント
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // ルートが変更されたとき、画面の先頭にスクロール
    window.scrollTo(0, 0);
  }, [pathname]);

  // このコンポーネントはUIをレンダリングしない
  return null;
};

export default ScrollToTop;
