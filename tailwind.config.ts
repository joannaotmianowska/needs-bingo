import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        text: ['Lora', 'serif'],
        textItalic: ['Lora-italic', 'serif'],
        extra: ['Amatic', 'sans-serif'],
        extraBold: ['Amatic-Bold', 'sans-serif'],
      },
      colors: {
        'my-green': '#A8B59F',
        'my-beige': '#E8DBC6',
        'my-rose': '#D2B2B8',
        'my-yellow': '#D9C18D'
      }
    },
  },
  plugins: [],
} satisfies Config;
