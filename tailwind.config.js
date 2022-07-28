/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "br":"hsl(12, 88%, 59%)",
        "db":"hsl(228, 39%, 23%)",
        "dgb":"hsl(227, 12%, 61%)",
        "vdb":"hsl(233, 12%, 13%)",
        "vpr":"hsl(13, 100%, 96%)",
        "vlg":" hsl(0, 0%, 98%)"
      }
    },
  },
  plugins: [],
}