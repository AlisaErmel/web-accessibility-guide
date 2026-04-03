---
sidebar_label: "Choice of the Tools"
sidebar_position: 4
---

# Choice of the tools

To ensure your web application is accessible, it is essential to use the **right tools** for evaluating it and to apply them at the appropriate stages of development. This guide explains **how to select and use accessibility tools effectively, when to apply them, and how they were tested** in practice.

---

## Choosing Accessibility Tools 🛠️

When selecting tools for accessibility testing, consider the following aspects:

1. **Scope of the tool** – Does it test code, design, or simulate real user interaction?  
2. **Stage of application development** – Is it most useful during development or after completion?  
3. **Type of accessibility issues** – Does it detect visual, auditory, motor, cognitive, or technical issues?  
4. **Integration with workflow** – Can it be easily incorporated into development and continuous testing?

Based on these criteria, the following categories were used:

---

:::note Note
**Tested** below indicates that the author applied these tools in a self-developed web application. 😉
:::

### 1. Automated Testing Tools ⚡

- **Purpose:** Detect code-level accessibility violations automatically.  
- **When to use:** During development for early detection of issues.  
- **Why:** Saves time, provides instant feedback, and helps maintain consistent accessibility in code.  
- **Tested:** Applied to React components and full web pages to verify WCAG compliance and best practices.  
- **Examples:**
  - `@axe-core/react` – library / React extension for in-code testing  
  - `Lighthouse` – built-in browser DevTools audit tool  

:::info More info about example tools
- **@axe-core/react** – [GitHub repository and installation instructions](https://github.com/dequelabs/axe-core-npm/tree/develop/packages/react)  
- **Lighthouse** – [Official documentation](https://developer.chrome.com/docs/lighthouse/overview)  
:::

---

### 2. Assistive Technology Testing 🖥️

- **Purpose:** Simulate the experience of users relying on assistive technologies.  
- **When to use:** Post-development, as a final check of user experience.  
- **Why:** Confirms that content is readable and navigable for visually impaired users.  
- **Tested:** Used on completed pages to ensure content is announced correctly and navigation is logical.  
- **Examples:**
  - `NVDA` – separate Windows application / screen reader  
  - `Windows Narrator` – built-in Windows screen reader  
  - `VoiceOver` – built-in iOS and macOS screen reader
  - `ZoomText` – Windows application for screen magnification and reading (not free)💶
  - `JAWS` – Windows application / screen reader (commercial; not free)💶

:::info More info about example tools
- **NVDA** - [NVDA Website](https://www.nvaccess.org/download/)
- **ZoomText** - [ZoomText website](https://vispero.com/zoomtext-screen-magnifier-software/)
- **JAWS** - [JAWS website](https://vispero.com/jaws-screen-reader-software/)
:::

---

### 3. Design Accessibility Tools 🎨

- **Purpose:** Evaluate visual aspects of the interface for accessibility.  
- **When to use:** During design and development.  
- **Why:** Ensures sufficient contrast, focus visibility, and color-blind compatibility before implementation.  
- **Tested:** Applied to UI mockups and live components to validate color schemes and focus indicators.  
- **Examples:**
  - `Stark` – browser extension / Figma plugin for color contrast and focus simulation

:::info More info about example tools
- **Stark** - [Stark Website For Developers](https://www.getstark.co/for-developers/)
:::

---

### 4. Web Accessibility Evaluation Tools🔍

- **Purpose:** Visually highlight accessibility issues on the web page.  
- **When to use:** Post-development for a final overview.  
- **Why:** Offers visual feedback that is easy for developers and designers to understand.  
- **Tested:** Used on full pages to detect remaining errors and alerts after development.  
- **Examples:**
  - `WAVE evaluation tool` – browser extension / web application

:::info More info about example tools
- **WAVE** - [WAVE Website](https://wave.webaim.org/)
:::

---

### 5. Component Development & Isolation Tools 🧩

- **Purpose:** Build and test individual UI components in isolation.  
- **When to use:** During development.  
- **Why:** Allows testing accessibility in small, manageable parts before integrating into the full application.  
- **Tested:** Components were developed and reviewed separately for keyboard navigation, focus management, and ARIA attributes.  
- **Examples:**
  - `Storybook` – standalone UI component development environment

:::info More info about example tools
- **Storybook** - [Storybook Website](https://storybook.js.org/)
::: 

---

### 6. Manual Testing 👨‍💻

- **Purpose:** Detect usability and interaction issues that automated tools may miss.  
- **When to use:** Both during development and post-development.  
- **Why:** Captures cognitive, navigation, and interaction problems that affect real users.  
- **Tested:** Pages and components were navigated manually, verifying keyboard accessibility, logical tab order, and content clarity.  
- **Examples:** Direct interaction with the web application by navigating with keyboard, reading with screen readers, and testing focus order.

---

## Applying Tools at the Right Stage ⏱️

### During Development

Use tools that integrate into coding and design workflows:

- `@axe-core/react`  
- `Lighthouse`  
- `Storybook`  
- `Stark`  
- **Manual testing** – Use `Tab` / `Shift + Tab` to check **focus visibility and tab order**.  
  *See [Focus Management](/docs/development/focus.md) for more information.* 

**Benefits:**

- Detect issues early in smaller sections of code  
- Fix problems quickly before they propagate  
- Maintain consistent accessibility throughout the application

:::tip Good to remember
**During development** refers to the process of creating a single page of the website, where regular checks help prevent a large number of accessibility issues later.
:::

---

### Post-Development

Use tools that review the **final product**:

- `NVDA / Windows Narrator/etc.`  
- `WAVE evaluation tool`  

**Benefits:**

- Simulate real user interactions  
- Identify remaining issues visually  
- Ensure accessibility standards are fully met before deployment

---

## Key Idea 💡

Choosing the right tool depends on the **type of issue**, the **stage of development**, and the **integration into workflow**.  

Testing with a combination of automated tools, assistive technologies, design evaluation, and manual checks ensures that accessibility issues are detected, corrected, and **maintained consistently** throughout the application.