/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      label_color_primary: "#FFFFFF",
      label_color_secondary: "#EBEBF5",
      label_color_tertiary: "#A7A7B3",
      label_color_quaternary: "#ebebf52e",
      white: "#ffffff",
      blue: "#22D7FF",
      purple: "#48319D",
      pink: "#8015A7",
      red: "#FF0000",
      black: "#1C1B33",
      plum: "#613690",
      violet: "#8322FF",
      orange: "#ED695E",
      yellow: "#F4BF4F",
      green: "#61C554",
      bgColor: "#2A2C4E",
    },
    extend: {
      backgroundImage: {
        search_bg:
          "linear-gradient(135deg, rgba(15, 85, 232, 0.10) 0%, rgba(157, 223, 243, 0.10) 100%);",
        line_bg:
          "linear-gradient(270deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.10) 50.4%, rgba(255, 255, 255, 0.00) 96.77%)",
        icon_bg: "linear-gradient(to right bottom, #A73EE7, #00EBFF)",
        side_menu_bg: "linear-gradient(168deg, #2A2C4E 1.62%, #1C1B33 95.72%)",
        video_card_bg:
          "linear-gradient(180deg, rgba(72, 49, 157, 0.20) 18.75%, rgba(72, 49, 157, 0.00) 100%)",
        bg_semented:
          "linear-gradient(180deg, rgba(196, 39, 251, 0.00) 0%, rgba(196, 39, 251, 0.20) 100%);",
        active_item:
          "radial-gradient(50% 128.57% at 50% -36.61%, #8015A7 0%, rgba(97, 54, 144, 0.00) 100%)",
        line_item:
          "linear-gradient(270deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.30) 50.4%, rgba(255, 255, 255, 0.00) 96.77%);",
        video_card_bg_1:
          "linear-gradient(180deg, rgba(72, 49, 157, 0.80) 18.75%, rgba(72, 49, 157, 0.10) 100%)",
        banner_bg:
          "linear-gradient(360deg, rgba(72, 49, 157, 0.20) 18.75%, rgba(72, 49, 157, 0.00) 100%)",
      },
      gridTemplateColumns: {
        "layout-main-cols": "1fr 5fr",
        "layout-main-cols-hide-menu": "60px 1fr",
      },
      gridTemplateRows: {
        "layout-main-rows": "1fr 1fr 14fr",
      },
    },
  },
  plugins: [],
};
