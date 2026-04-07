---
sidebar_label: "NVDA (Screen Reader)"
sidebar_position: 4
---

# NVDA (Screen Reader)

## What is this tool?

**NVDA** is a free screen reader for Windows that allows testing accessibility for visually impaired users.

> This document provides information specifically about **NVDA**, which the author used to validate accessibility in practice.

---

## When to use it?

After the development phase for final accessibility testing.

## How to use it

### 1. Install

Download from:
https://www.nvaccess.org/download/

:::info Link
A detailed explanation **YouTube video** about how to **download** and **use NVDA**: [NVDA Screen Reader Tutorial: How to Use It for Accessibility Testing](https://www.youtube.com/watch?v=aAh1PFsgcBY)
:::

### 2. Start NVDA

Launch the application.

> Once launched, NVDA will immediately start announcing your actions.

### 3. Basic Controls

- `Tab` – navigate elements  
- `Shift + Tab` – go backwards  
- `Insert + ↓` – read all content

> Inside the NVDA application, documentation is available on how to use its features.

### Speech Viewer

NVDA includes a **Speech Viewer** feature, which displays all text that is announced by the screen reader. This allows you to follow the spoken output visually.

**Example:**

```txt
Google Chrome —1 running window
NVDA (Screen Reader) | Accessibility Technical Documentation - Google Chrome  window
NVDA (Screen Reader) | Accessibility Technical Documentation
Preparation
Expand sidebar category 'Preparation'
visited link    Testing
NVDA (Screen Reader)
What is this tool?
 NVDA is a free screen reader for Windows that allows testing accessibility for visually impaired users.
This document provides information specifically about 
NVDA
, which the author used to validate accessibility in practice.
When to use it?
After the development phase for final accessibility testing.
```

The following example shows **real output** from NVDA, demonstrating how it announces content from the beginning of this documentation when using the Speech Viewer.

:::note Note
The **Speech Viewer** is especially useful for **debugging accessibility issues** or for developers who want to see exactly what a visually impaired user hears.
:::

## What to test

- Headings structure  
- Buttons and links  
- Form labels  
- Navigation order

## Limitations

- Requires practice  
- Different screen readers behave differently

## Tips & Best Practices 💡

- Close your eyes while testing  
- Navigate only with keyboard  
- Listen carefully to announcements  