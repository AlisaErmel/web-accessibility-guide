---
sidebar_label: "Audio & Video Accessibility"
sidebar_position: 6
---

# Audio and Video Accessibility

Accessible audio and video content ensures that all users — including people with hearing, visual, or cognitive impairments — can understand and interact with media.

---

## Why It Matters

Not all users can:
- Hear audio clearly (or at all)
- See visual content
- Process fast or complex information

Without accessibility features, important information can be **lost or misunderstood**.

---

## Accessibility by User Needs

### 1. People who do not see → **Descriptions**

Audio descriptions explain important visual information in a video.

:::note Note
This is about **Video**, as in audio there is no visual content.
:::

### ✅ Benefits:
- Helps blind or visually impaired users understand visual content  
- Describes actions, scenes, and context not conveyed through audio  

### Example:

![Screenshot from the YouTube video](img/description.JPG)

*A screenshot from the YouTube video*

> *[The man entered the room and shook hands.]*

### 💡 Best Practices:
- Describe only **essential visual details**
- Keep descriptions **clear and concise**
- Synchronize with pauses in dialogue

:::info Link
More information about **Descriptions** can be found here: [Description of Visual Information](https://www.w3.org/WAI/media/av/description/)
:::

---

### 2. People who do not hear → **Captions**

Captions display spoken dialogue and important sounds (e.g., *[music]*, *[applause]*).

:::note Note
For **Audio** and **Video with meaningful audio content**
:::

### Example:

![Screenshot from the YouTube video](img/captions.JPG)

*A screenshot from the YouTube video*

:::danger Attention
Check the **automatic captions**, because they can interpret the information incorrectly.
:::

### ✅ Benefits:
- Supports deaf or hard-of-hearing users  
- Helps users in noisy or quiet environments  
- Improves comprehension for non-native speakers  

### Code Example of adding captions to the video:

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <track src="captions.vtt" kind="subtitles" srclang="en" label="English">
</video>
```

:::info Link
More information about **Captions** can be found here: [Captions/Subtitles](https://www.w3.org/WAI/media/av/captions/)
:::

### 3. People who do not hear and see → **Transcripts**

A transcript is a **complete text version of audio and visual content**, including speech, sounds, and important visual information.

:::note Note
For **Audio** and **Video**, also for people who perceive the text information better.*
:::

### ✅ Benefits:
- Fully accessible for deafblind users via **screen readers** or **braille displays**
- Allows users to read and navigate content at their own pace  
- Ensures all content is available **as text**, not just audio or visuals

### 🧠 How it is accessed:
Deafblind users typically use:
- **Screen readers** (text-to-speech) (for users with some hearing)
- Refreshable **braille displays** (tactile reading) (for users who cannot hear or see at all)

**Audio:**

```html
<audio controls>
  <source src="podcast.mp3" type="audio/mpeg" />
</audio>
```

**Transcript:** 

> *[Intro music]* 
> 
> **Speaker:** Welcome to our podcast about web accessibility. Today we will discuss how to make audio and video content more inclusive...

:::info Link
More information about **Transcripts** can be found here: [Transcripts](https://www.w3.org/WAI/media/av/transcripts/)