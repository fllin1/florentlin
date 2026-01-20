# Typography Configuration

## Google Fonts Import

Add to your HTML `<head>` or CSS:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Noto+Sans:wght@400;500;600;700&family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap" rel="stylesheet">
```

Or import in your CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Noto+Sans:wght@400;500;600;700&family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap');
```

## Font Usage

- **Headings:** Zen Kaku Gothic New — Used for page titles, section headers, and emphasis text
- **Body text:** Noto Sans — Used for paragraphs, descriptions, and general content
- **Code/technical:** IBM Plex Mono — Used for code snippets, monospaced text, and technical details

## Tailwind Configuration

Add these font families to your `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        heading: ['Zen Kaku Gothic New', 'sans-serif'],
        body: ['Noto Sans', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
}
```

## Usage Examples

**Headings:**
```html
<h1 class="font-heading text-4xl font-bold">Main Title</h1>
<h2 class="font-heading text-2xl font-medium">Subtitle</h2>
```

Or with inline styles:
```html
<h1 style="font-family: 'Zen Kaku Gothic New', sans-serif">Main Title</h1>
```

**Body text:**
```html
<p class="font-body text-base">Regular paragraph text</p>
```

**Monospace:**
```html
<code class="font-mono text-sm">const code = "example";</code>
```
