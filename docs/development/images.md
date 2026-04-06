---
sidebar_label: "Images"
sidebar_position: 6
---

# Images and Alt Text 🖼️

Images are an essential part of modern web applications, but they can also create barriers for users with visual impairments if not implemented correctly. Using descriptive alternative text (alt text) ensures that users relying on screen readers or other assistive technologies can understand the content and purpose of images.

---

## What This Section Covers
- Importance of alt text for accessibility
- Guidelines for writing effective alt text
- When alt text is not required
- Best practices for icons and and UI graphics

---

## Importance of Alt Text
- Provides a textual alternative for users who cannot see the image.
- Helps screen readers convey the meaning and function of images.
- Improves accessibility compliance (WCAG 2.1, Level A & AA).

---

## Writing Effective Alt Text

### 1. Informative Images
Describe the **key information** the image provides.

**Image:**

![](img/graph.png)

❌ Bad:
```html
<img src="graph.png" alt="sales graph" />
```

