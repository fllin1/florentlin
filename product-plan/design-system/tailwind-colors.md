# Tailwind Color Configuration

## Color Choices

- **Primary:** Light Bronze (#d4a373) — Used for buttons, links, key accents, and highlights
- **Secondary:** Tea Green (#ccd5ae) — Used for subtle accents, decorative elements, and secondary highlights
- **Background (Light):** Cornsilk (#fefae0) — Light mode page background
- **Background (Dark):** Dark Stone (#1a1a1a) — Dark mode page background
- **Surface (Light):** Papaya Whip (#faedcd) — Light mode card/surface backgrounds
- **Surface (Dark):** Charcoal (#2a2a2a) — Dark mode card/surface backgrounds
- **Text (Light):** Charcoal (#3d3d3d) — Light mode text color
- **Text (Dark):** Cornsilk (#fefae0) — Dark mode text color

## Tailwind Configuration

Add these colors to your `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#d4a373',
          50: '#faf6f1',
          100: '#f3ede0',
          200: '#e7dac1',
          300: '#dbc7a1',
          400: '#d4a373',
          500: '#c88f55',
          600: '#b07340',
          700: '#8b5a32',
          800: '#6a442a',
          900: '#4d3222',
        },
        secondary: {
          DEFAULT: '#ccd5ae',
          50: '#f7f9f3',
          100: '#eef2e7',
          200: '#dce5cf',
          300: '#ccd5ae',
          400: '#b9c38f',
          500: '#a0ad72',
          600: '#858f5c',
          700: '#6a7149',
          800: '#525839',
          900: '#3d422c',
        },
      },
    },
  },
}
```

## Usage Examples

**Primary button:**
```html
<button class="bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors">
  Primary Action
</button>
```

**Secondary badge:**
```html
<span class="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm">
  Secondary Label
</span>
```

**Text colors:**
```html
<!-- Light mode -->
<p class="text-[#3d3d3d]">Regular text</p>
<p class="text-[#6b6b6b]">Muted text</p>

<!-- Dark mode -->
<p class="dark:text-[#fefae0]">Regular text</p>
<p class="dark:text-[#a0a0a0]">Muted text</p>
```

**Background colors:**
```html
<!-- Page background -->
<div class="bg-[#fefae0] dark:bg-[#1a1a1a]">
  <!-- Content -->
</div>

<!-- Surface/card background -->
<div class="bg-[#faedcd] dark:bg-[#2a2a2a]">
  <!-- Card content -->
</div>
```
