/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFD966", // メインカラー：明るめのはちみつイエロー
        accent: "#F2A03D", // アクセントカラー：柔らかめのオレンジ
        background: "#FFF9EC", // 背景色：温かみのあるクリーム系
        button: "#E27D00", // ボタン色：引き締め感のあるオレンジ
        text: "#4A3F35", // テキスト基本色：深めのブラウン
      },
    },
  },
  plugins: [],
}
