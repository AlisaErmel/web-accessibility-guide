---
sidebar_label: "Focus Management"
sidebar_position: 4
---

# Focus Management 🎯

**Focus** is a key concept in web accessibility that ensures users can clearly identify which element on a page is currently active or ready for interaction.

:::note Note
In technical terms, **focus is the state in which a user interface element is selected and can receive input**, typically triggered by keyboard navigation, mouse interaction, or assistive technologies.
:::

Accessible focus design improves usability, navigation, and overall user experience.

---

## Why Focus Matters

Not all users interact with a website using a mouse. Many rely on:

- **Keyboard navigation**  
- **Screen readers**  
- **Assistive technologies**  

Without visible focus indicators, users may lose track of their position on the page, making interaction difficult or impossible.

:::note Note
According to accessibility guidelines (WCAG), interactive elements must provide a **clearly visible focus indicator** to support keyboard navigation. [Focus Visible (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)
:::

---

## Interaction Scenarios

When implementing focus, multiple interaction methods must be considered:

1. **Mouse hover** ➜ [`:hover`](#hover)
2. **Focus state (active element)** ➜ [`:focus`](#focus)
3. **Keyboard navigation** ➜ [`:focus-visible`](#focus-visible)
4. **Users with colour vision deficiencies** ➜ [Accessibility for Colour-Blind Users](#colour-blind)

All scenarios should provide clear and consistent visual feedback.

---

## Keyboard Navigation ⌨️

Keyboard navigation is the primary mechanism that makes focus essential.

Users navigate interfaces using:

- `Tab` ➜ move forward  
- `Shift + Tab` ➜ move backward  
- `Enter` ➜ activate element

:::tip Tip
More information about **keyboard shortcuts** and keyboard navigation: [Keyboard Accessibility](https://webaim.org/techniques/keyboard/)
:::

### Live Example 🎮

Try navigating the form below using your keyboard:

- Press `Tab` to move between elements  
- Press `Shift + Tab` to go backwards  
- Press `Enter` to activate the button  

```html live
function DemoForm() {
  const [msg, setMsg] = React.useState("");
  const inputStyle = {
    display: "block",
    marginBottom: "10px",
    padding: "8px",
    width: "100%"
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setMsg("✅ Form submitted successfully!");
      }}
      style={{ maxWidth: "300px" }}
    >
      <input type="email" defaultValue="user@example.com" required style={inputStyle} />
      <input type="password" defaultValue="password123" required style={inputStyle} />
      <button type="submit" style={{ padding: "8px 12px", cursor: "pointer" }}>
        Submit
      </button>

      {msg && <p style={{ marginTop: "10px" }}>{msg}</p>}
    </form>
  );
}
```

**Explanation:**

When navigating this form using the `Tab` key, focus moves in the following order:

1. Email input  
2. Password input  
3. Submit button  

Each element receives a visible focus indicator (provided by the browser or custom CSS), allowing users to clearly understand their current position.

---

## Hover vs Focus 🖱️

It is important to distinguish between these states:

- **`:hover`** → triggered by mouse movement  
- **`:focus` / `:focus-visible`** → triggered by interaction or keyboard navigation  

:::caution Attention
**Focus must always remain visible**, even when a mouse is not used.
:::

---

## `:hover` {#hover}

Hover effects provide immediate feedback for mouse users by indicating that an element is interactive.

```css
.button:hover {
  background-color: #e0e0e0;
}
```

### Live Example 🎮 

Hover over the button below.

```html live
function HoverButton() {
  const [hover, setHover] = React.useState(false);

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: "10px 20px",
        backgroundColor: hover ? "#b2b0b0" : "#f0f0f0",
        border: "none",
        cursor: "pointer",
      }}
    >
      Hover me
    </button>
  );
}
```

## `:focus` {#focus}

The focus state indicates that an element is selected and ready for interaction.

```css
.ui-input:focus {
  outline: none;
  border-color: #0033cc;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
}
```

:::caution Attention
The **default browser outline** is removed (`outline: none`), but it is replaced with a custom visual indicator (border and shadow).

Removing outlines without providing an alternative leads to inaccessible interfaces.
:::

**Best practices:**
- Always provide a visible focus indicator
- Replace default outline if removed
- Use multiple visual cues (colour + shadow + movement)

### Live Example 🎮

Focus on the input field below.

```html live
function FocusInput() {
  const [focused, setFocused] = React.useState(false);

  return (
    <input
      type="text"
      placeholder="Focus me"
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        padding: "10px",
        width: "200px",
        border: focused ? "3px solid #0033cc" : "3px solid #ccc",
        boxShadow: focused ? "0 0.5rem 1rem rgba(0, 0, 0, 0.2)" : "none",
        outline: "none",
      }}
    />
  );
}
```

## `:focus-visible` (Recommended) {#focus-visible}

The `:focus-visible` pseudo-class allows developers to display focus indicators only when needed, typically for keyboard users.

```css
.add-button:focus-visible {
  outline: 0.25rem solid #005fcc;
}
```

**Benefits:**
- Improves accessibility for keyboard users
- Reduces unnecessary visual feedback for mouse users
- Ensures consistent behavior across browsers

### Live Example 🎮

- Use **Tab** to navigate and see the focus indicator appear only for keyboard users.  
- Use **Shift + Tab** to go backward and **Enter** to activate the button.


```html live
function FocusVisibleDemo() {
  const [usingKeyboard, setUsingKeyboard] = React.useState(false);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "250px" }}
      onKeyDown={(e) => e.key === "Tab" && setUsingKeyboard(true)}
      onMouseDown={() => setUsingKeyboard(false)}
    >
      <input
        placeholder="Start here"
        style={{ padding: "8px", border: "1px solid #ccc" }}
      />

      <button
        style={{
          padding: "8px 12px",
          border: "2px solid #ccc",
          backgroundColor: "#f0f0f0",
          cursor: "pointer",
          outline: "none",
          transition: "all 0.2s",
        }}
        onFocus={(e) => {
          if (usingKeyboard) e.currentTarget.style.border = "3px solid #005fcc";
        }}
        onBlur={(e) => {
          e.currentTarget.style.border = "2px solid #ccc";
        }}
      >
        Focus me
      </button>
    </div>
  );
}
```

## Accessibility for Colour-Blind Users 🎨 {#colour-blind}

Relying only on colour is insufficient for accessibility.

**❌ Incorrect:**

Only changing the colour

**✅ Correct:**

Combine multiple indicators:
- Border
- Shadow
- Background change
- Icons or text

```css
.button:focus {
  border-color: #005fcc;
  box-shadow: 0 0 0 3px rgba(0, 95, 204, 0.5);
}
```

This ensures that focus remains visible even in grayscale or low-contrast perception.

## Pointer Feedback 👆

Mouse pointer styles also communicate interactivity:

- Default pointer → non-interactive element
- Pointer (hand) → clickable element

These behaviours should remain consistent across the application.

## ⚠️ Common Mistakes
- Removing focus outlines without replacement
- Using only colour as an indicator
- Ignoring keyboard navigation
- Inconsistent focus styles across components