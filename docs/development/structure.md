---
sidebar_label: "Structure of the Page"
sidebar_position: 2
---

# Structure of the Page <span aria-hidden="true">🧱</span>

A clear and consistent page structure is essential for building accessible web applications. Assistive technologies, such as **screen readers**, **keyboard-only navigation**, and **braille displays**, rely on the underlying HTML structure to interpret and present content to users. Proper structure also improves the overall user experience for all users.

---

## Why Structure Matters

Proper structuring ensures that:

- Content is **logically organized** and **easy to follow**  
- **Screen readers** and other assistive technologies can correctly interpret relationships between elements  
- Users can quickly **navigate** between different sections of a page  
- The overall **user experience** is more predictable and understandable  

:::note[Note]
Following proper heading hierarchy and semantic structure supports WCAG’s **Perceivable** and **Operable** principles, making content accessible to a wider audience. [Introduction to Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/intro#understanding-the-four-principles-of-accessibility)
:::

---

## Semantic HTML

Using **semantic HTML elements** is a key best practice for accessibility. These elements provide meaning to the content and create recognizable **landmarks** for assistive technologies, reducing the need for additional ARIA attributes in many cases.

:::note[Note]
**Semantic elements** are HTML tags that clearly describe their purpose and the type of content they contain. Examples include:

- `<header>` – page or section header  
- `<main>` – primary page content  
- `<section>` – grouped content for a specific topic  
- `<nav>` – navigation links  
- `<footer>` – page footer  

Non-semantic elements like `<div>` and `<span>` do not convey meaning and should be used sparingly.
:::

**Example:**

```html
<header>
  <h1>Website Title</h1>
</header>

<main>
  <p>Main content goes here</p>
</main>
```

## `<section>` vs `<div>`

Understanding the difference between `<section>` and `<div>` is important for building accessible page structures.

- - **`<section>`** is a **semantic element** used to group related content around a specific topic. It typically includes a heading and creates a meaningful landmark for assistive technologies when used appropriately.

:::tip[Best practice]
1. A **`<section>`** should always have a **heading** (e.g., `<h2>` – `<h6>`) to clearly define its purpose.
2. Semantic elements like **`<section>`** can reduce the need for **extra ARIA attributes**, because assistive technologies can already interpret their purpose.

Learn more about **ARIA** in the [ARIA section of this documentation](./aria)
:::

- **`<div>`** is a **non-semantic element** used only for grouping or styling content. It does not provide any information about the purpose of the content.

:::caution[Attention]
When using `<div>` for layout, additional ARIA attributes (like `role="region"`) may be needed to make it accessible.
:::

**Example using `<section>` (recommended):**

```html
<section>
  <h2>Contact Information</h2>
  <p>Email: example@email.com</p>
</section>
```
Assistive technologies can recognize this as a distinct section of the page, allowing users to navigate to it more easily.

**Example using `<div>` (less accessible):**

```html
<div style="border: 1px solid #ccc; padding: 16px;">
  <h2>Contact Information</h2>
  <p>Email: example@email.com</p>
</div>
```
In this example, the `<div>` is used for styling purposes. While it looks visually structured, it does not provide any semantic meaning, so assistive technologies cannot identify it as a distinct section.

Assistive technologies cannot identify this as a distinct section unless additional ARIA attributes (like `role="region"`) are added.

:::tip[Best Practice]
Use **`<section>`** (or other semantic elements) whenever the content has a clear purpose or topic. Use **`<div>`** only when no suitable semantic element exists.
:::

## Heading Hierarchy

**Headings** define the structure of content. A clear hierarchy helps users understand the relationship between sections and improves navigation for screen reader users.

**Example:**

```html
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection</h3>
```

:::caution[Attention]
Avoid skipping levels (e.g., jumping from `<h1>` to `<h3>`), as this can confuse assistive technologies.
:::

:::tip[Good to know]
Proper heading hierarchy also helps maintain a **logical tab order** for keyboard navigation.
:::

## Navigation

**Navigation** should be clearly defined so users can move easily between pages or sections.

**Example:**

```html
<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>
```

## Simple Structure Example:

```html live
<body>
  <header>
    <h1>Page Title</h1>
  </header>

  <main>
    <section>
      <h2>Introduction</h2>
      <p>This section introduces the topic.</p>
    </section>

    <section>
      <h2>Details</h2>
      <p>This section provides more detailed information.</p>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 Accessible App</p>
  </footer>
</body>
```

:::tip[Tools to Test]
Developers can **verify page structure** using accessibility tools such as:

- `Stark` – [Stark Accessibility Checker Chrome Extension](https://chromewebstore.google.com/detail/stark-accessibility-check/fkfaapnmfippddbeemjjbclenphooipm)  
  *Checks headings, landmarks, and semantic structure in both design mockups and web pages.*

- `Lighthouse` – [Introduction to Lighthouse](https://developer.chrome.com/docs/lighthouse/overview)  
  *Audits page for proper heading hierarchy, ARIA landmarks, and navigation structure.*

- **Screen readers** like `NVDA` – [Download NVDA](https://www.nvaccess.org/download/); [NVDA 2025.3.3 User Guide](https://download.nvaccess.org/documentation/userGuide.html)  
  *Simulates real user navigation through headings, regions, and landmarks to verify logical structure.*

These tools help ensure that **headings, landmarks, and navigation** are correctly interpreted by assistive technologies.
:::

## Key Idea <span aria-hidden="true">💡</span>
- **Consistent page** structure is essential for accessibility and usability.
- **Semantic HTML** improves clarity for users and assistive technologies by creating meaningful landmarks.
- **Logical heading hierarchy** allows screen readers to navigate content efficiently.
- **Proper navigation and landmarks** help all users, including keyboard-only and screen reader users.
- Using semantic elements **can reduce the amount of ARIA needed**, which will be covered in the next section of the documentation.