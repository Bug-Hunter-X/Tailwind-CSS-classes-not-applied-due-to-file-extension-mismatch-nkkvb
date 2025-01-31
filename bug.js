```javascript
// tailwind.config.js
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-color': '#abcdef',
      }
    }
  },
  plugins: [],
}
```
This configuration targets only `.js`, `.jsx`, `.ts`, and `.tsx` files. If you have other file types (e.g., `.vue`, `.html`) containing Tailwind directives, they won't be processed and will result in CSS classes not being applied correctly.