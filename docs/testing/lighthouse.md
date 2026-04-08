---
sidebar_label: "Lighthouse"
sidebar_position: 3
---

# Lighthouse

**Lighthouse** is a built-in browser tool that audits web pages for accessibility and performance.

---

## When to use it?

During the development phase and after deployment for verification.

## How to use it

1. Open your website in Chrome  
2. Open DevTools (`Ctrl+Shift+I`)  
3. Go to **Lighthouse tab**  
4. Click **Analyze page load**. You can select specific audits, such as Accessibility, if you do not want to run a full audit.

**Example:**

![Example of the Lighthouse evaluation](img/lighthouse.jpg)

This screenshot shows the possible results of a Lighthouse evaluation. The same report also includes a detailed section indicating which tests your application passed and which failed (if any).

## Understanding Results

- Score: 0–100  
- Highlights accessibility issues  
- Provides improvement suggestions

## Limitations

- Automated only  
- Cannot simulate real users

## Tips & Best Practices 💡

- Run audits regularly  
- Focus on repeated issues  
- Do not rely only on score

:::info[Link]
More information: **[Introduction to Lighthouse](https://developer.chrome.com/docs/lighthouse/overview)**
:::