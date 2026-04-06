---
sidebar_label: "Typography Selection"
sidebar_position: 6
---

# Typography Selection ✍️

This section describes the principles and rationale behind choosing the font family for the web application, focusing on accessibility and user experience.

---

## Why Typography Matters

Fonts influence how users **perceive and interact** with content. The right typeface can:

- Improve **readability** and reduce cognitive load  
- Create a **friendly and calm atmosphere**  
- Reduce **confusion between similar characters**  

When designing for accessibility, typography is especially important for users with **cognitive or visual disabilities**, who may be sensitive to overly complex or visually aggressive typefaces.

---

## How to Choose an Accessible Font

When selecting a font for a web application, several key factors should be considered to ensure readability and accessibility:

### 1. Simplicity and Clarity
Choose fonts with **clean and simple shapes**. Avoid overly decorative or complex typefaces that may reduce readability.

| Good (Clean Font) | Bad (Too Decorative Font) |
|------------------|----------------------|
| ![Clean](img/clean.JPG) | ![Decorative](img/decorative.JPG) |
| *Comic Relief from Google Fonts ([link](https://fonts.google.com/specimen/Comic+Relief))* | *Butcherman from Google Fonts ([link](https://fonts.google.com/specimen/Butcherman))* |

### 2. Character Distinction
Ensure that characters are **clearly distinguishable**, especially commonly confused ones such as `i`, `l`, `1`, `0`, and `O`.

:::info Concrete Examples
See **[Avoiding Character Confusion](#avoiding-character-confusion-)** for more details.
:::

### 3. Spacing and Proportions
Fonts should have **adequate spacing between letters (kerning)** and balanced proportions. Crowded text can significantly reduce readability.

| Good (Proper Spacing) | Bad (Crowded Text) |
|----------------------|-------------------|
| ![Good spacing](img/good_spacing.JPG) | ![Bad spacing](img/bad_spacing.JPG) |
| Clear kerning, easy to read | Letters too close, hard to read |

### 4. Emotional Perception
Fonts can influence how users feel. Prefer **neutral or friendly-looking fonts** with smooth shapes rather than aggressive or overly stylized ones.

| Positive / Friendly | Aggressive / Sharp |
|-----------------------|----------------------|
| ![Friendly font](img/friendly.JPG) | ![Aggressive font](img/agressive.JPG) |
| *Coiny from Google Fonts ([link](https://fonts.google.com/specimen/Coiny))* | *Eater from Google Fonts ([link](https://fonts.google.com/specimen/Eater))* |

### 5. Readability at Different Sizes
The font should remain **legible at both small and large sizes**, especially on different devices and screen resolutions.

![Example of readable font](img/readability.JPG)

*Carter One font from the Google Fonts: [Carter One](https://fonts.google.com/specimen/Carter+One)*

### 6. Consistency Across the Interface
Use a limited number of fonts and maintain **consistent typography** throughout the application to avoid confusion. Inconsistent fonts can make the interface look cluttered, reduce readability, and negatively affect the user experience.

When defining fonts in CSS, always include **fallback fonts** in case the primary font fails to load or is not available on the user’s system. This ensures that text remains readable and the layout doesn’t break. For example:

```css
/* File: index.css */
:root {
    font-family: "Sour Gummy", Arial, sans-serif;
}
```

- `"Sour Gummy"` is the primary font used in the design.
- `Arial` is a widely available system font that acts as a backup.
- `sans-serif` is the generic font family, which guarantees that even if the previous fonts fail, the text will still render correctly.

---

## Avoiding Character Confusion 🔠

To ensure readability and minimize misinterpretation, pay special attention to characters that are **commonly confused**. Below are some of the most critical groups of characters, demonstrated using the two example fonts: `Noto Sans Mono` and `Oi`.

---

### 1. Letters r, n, m

Certain letters can be **easily misread** when closely spaced. For example, `rn` can sometimes look like `m`.

| Good Example | Bad Example |
|-------------|------------|
| ![Good Example](img/rn_good.JPG) | ![Bad Example](img/rn_bad.JPG) |
| *Noto Sans Mono font from the Google Fonts: [link](https://fonts.google.com/noto/specimen/Noto+Sans+Mono)* | *Oi font from the Google Fonts: [link](https://fonts.google.com/specimen/Oi)* |

---

### 2. Characters i, !, l, 1

Symbols like lowercase `i`, exclamation mark `!`, lowercase `l`, and numeral `1` are visually similar in many fonts. Distinguishing these characters improves **clarity in text and code**.

| Good Example | Bad Example |
|-------------|------------|
| ![Good Example](img/l_good.JPG) | ![Bad Example](img/l_bad.JPG) |
| *Noto Sans Mono font from the Google Fonts: [link](https://fonts.google.com/noto/specimen/Noto+Sans+Mono)* | *Oi font from the Google Fonts: [link](https://fonts.google.com/specimen/Oi)* |

---

### 3. Letters and numbers o, c, 0, O, C

The numeral `0`, uppercase `O`, lowercase `o`, and letters `C`/`c` are often confused. In “Noto Sans Mono,” the `0` has a diagonal line to differentiate it from `O`, reducing errors.

| Good Example | Bad Example |
|-------------|------------|
| ![Good Example](img/o_good.JPG) | ![Bad Example](img/o_bad.JPG) |
| *Noto Sans Mono font from the Google Fonts: [link](https://fonts.google.com/noto/specimen/Noto+Sans+Mono)* | *Oi font from the Google Fonts: [link](https://fonts.google.com/specimen/Oi)* |

---

### 4. Characters 5, S and 2, Z

Certain letters and numbers can be easily confused due to their similar shapes. For example, the numeral `5` may resemble the letter `S`, and `2` can look similar to `Z` in some fonts. This can lead to misinterpretation, especially in contexts such as passwords, codes, or data entry.

| Good Example | Bad Example |
|-------------|------------|
| ![Good Example](img/sz_good.JPG) | ![Bad Example](img/sz_bad.JPG) |
| *Noto Sans Mono font from Google Fonts: [link](https://fonts.google.com/noto/specimen/Noto+Sans+Mono)* | *Oi font from Google Fonts: [link](https://fonts.google.com/specimen/Oi)* |

---

## Design Recommendations for Accessible Typography 📝

- Use **minimalistic and visually comfortable fonts**  
- Ensure **distinct letterforms**, especially for numbers and symbols  
- Maintain **adequate letter spacing** for readability  
- Test typography for **users with cognitive or visual challenges**  
- Avoid overly decorative fonts that may **interfere with comprehension**

:::info Link
You can read more about **Typography** in **Google Fonts Articles**: [Choosing Type](https://fonts.google.com/knowledge/choosing_type)
:::

---

## Key Idea 💡

Choosing the right typeface supports **inclusive and user-friendly interfaces** by:

- Reducing the risk of confusion between similar symbols  
- Creating a visually balanced and comfortable reading experience  
- Enhancing **clarity and accessibility** across diverse user groups  

Typography should **reinforce content comprehension**, not distract from it.