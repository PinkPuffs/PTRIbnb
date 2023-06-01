/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./frontend/**/*.{ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {},
  },
  plugins: [],
};

/**
 * In order for you to not have to buildcss every time, you add watch to the end of your build command
 * src:https://kinsta.com/blog/tailwind-css/
 *
 * Command from package.json: "buildcss-watch": "tailwindcss build frontend/styles.css -o frontend/tailwind.css --watch",
 *
 *
 * so open a in a new terminal and run the above script
 */
