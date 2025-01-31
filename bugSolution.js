```javascript
// tailwind.config.js
module.exports = {
  content: [ "./src/**/*.{html,js,jsx,ts,tsx,vue}"], // Include all relevant extensions
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
This updated configuration includes `.html` and `.vue` files (modify as needed for your project). Now, Tailwind will correctly process and apply classes from all specified file types.