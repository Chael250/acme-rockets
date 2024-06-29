/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      screens:{
        "widescreen": { 'raw ': ("min-aspect-height:3/2")},
        "tallscreen": { " raw ": ("min-aspect-height:1/2")}
      }
    },
  },
  plugins: [],
}

