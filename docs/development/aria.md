---
sidebar_label: "ARIA"
sidebar_position: 3
---

# ARIA – Accessible Rich Internet Applications 🔊

After creating a proper page structure, the next step in web accessibility is enhancing elements with additional semantic information for assistive technologies. This is done using **ARIA** attributes.

:::note  
**ARIA (Accessible Rich Internet Applications)** is a set of HTML attributes that provide additional semantic information to assistive technologies, such as screen readers. It helps users with disabilities understand and interact with web interfaces, especially when native HTML elements are insufficient.
:::

**Guidelines for using ARIA:**

- ✅ Prefer **native HTML elements** (`<button>`, `<nav>`, `<form>`).  
- ✅ Use ARIA **only when semantic HTML is insufficient**.  
- ✅ Ensure ARIA roles and properties are **accurate and meaningful**.  
- ❌ Avoid overusing or misapplying ARIA—it can confuse screen readers.

---

## Common ARIA Attributes

### 🏷️ `role`
Defines the purpose of an element for assistive technologies.  

```html
<div role="navigation">
  <a href="/home">Home</a>
  <a href="/about">About</a>
</div>
```
Here, the `<div>` explicitly declares its role as navigation. This is necessary because `<div>` has no semantic meaning by default.

:::caution[Attention]
Do not change native semantics unnecessarily (e.g., avoid adding `role="button"` to a `<button>`).
:::

### 🏷️ `aria-hidden`
Indicates whether an element should be ignored by screen readers (`true` or `false`).

```html
<div aria-hidden="true">
  🔥 Decorative emoji
</div>
```
The emoji is purely decorative and ignored by screen readers.

### 🏷️ `aria-expanded`
Specifies the current state of expandable content, like accordions or menus (`true` or `false`).

```html
<button aria-expanded="false" aria-controls="menu1">
  Show Menu
</button>
<div id="menu1" hidden>
  <a href="/item1">Item 1</a>
  <a href="/item2">Item 2</a>
</div>
```
When the button is pressed, `aria-expanded` should toggle to `true` and the `hidden` attribute should be removed via JavaScript.

### 🏷️ `aria-label`
Provides an accessible name for elements **without visible text** (e.g., icon buttons).

```html
<button aria-label="Close menu">
  ✖️
</button>
```
The button contains only an icon, but screen readers announce it as “Close menu.”

### 🏷️ `aria-labelledby`

References the ID of an existing element that contains descriptive text.

```html
<h2 id="profile-heading">User Profile</h2>
<section aria-labelledby="profile-heading">
  <p>Name: Jane Doe</p>
  <p>Email: jane@example.com</p>
</section>
```
Screen readers announce the section using the heading text “User Profile.”

### 🏷️ `aria-live`

Used for dynamic content updates, allowing screen readers to announce changes in real time.

```html
<p aria-live="polite" id="cart-count">Items in cart: 2</p>
```
When the cart count changes, screen readers politely notify the user of the updated value.

:::info[Link]
These attributes represent the most commonly used ARIA patterns in modern web applications. Additional attributes (e.g., `aria-describedby`, `aria-pressed`) may be used in more complex interactive components.

More ARIA labels here: **[ARIA: aria-label attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)**
:::

:::caution[Attention]
Incorrect use of ARIA can reduce accessibility, so it is often summarized as: ***“No ARIA is better than bad ARIA.”***
:::

:::tip[Tools to Test]
Developers can **verify ARIA attributes** using accessibility tools such as:

- `@axe-core/react` – [GitHub repository](https://github.com/dequelabs/axe-core-npm/tree/develop/packages/react)  
  *Detects missing or incorrect ARIA roles, properties, and attributes directly in React components during development.*

- `Lighthouse` – [Official documentation](https://developer.chrome.com/docs/lighthouse/overview)  
  *Audits ARIA roles, labels, and accessibility violations across the entire page, providing structured feedback.*

- **Screen readers** like `NVDA` – [Download NVDA](https://www.nvaccess.org/download/); [NVDA User Guide](https://download.nvaccess.org/documentation/userGuide.html)  
  *Simulates how assistive technologies announce ARIA attributes, ensuring that roles, labels, and states are interpreted correctly.*

- `WAVE evaluation tool` – [WAVE Website](https://wave.webaim.org/)  
  *Visually highlights ARIA roles, properties, and errors in the rendered page, helping developers spot missing or misused attributes.*

These tools help ensure that **roles, aria-labels, aria-labelledby, aria-hidden, and aria-expanded** are correctly implemented and understood by assistive technologies.
:::

## Key Idea 💡

* **ARIA complements, not replaces, semantic HTML** and improves accessibility for dynamic and interactive components.
* Use **`aria-label`** for elements without visible text.
* Use **`aria-labelledby`** to reference existing labels.
* Use **`aria-live`** for real-time updates and dynamic content.
* Use **`role`** to define element purpose when native HTML is insufficient.
* Use **`aria-hidden`** to hide content from screen readers.
* Use **`aria-expanded`** to indicate the state of expandable content.