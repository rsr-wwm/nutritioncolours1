<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/dd46ceee-4150-4de5-bd10-15169f79543a

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Optional: set `VITE_CONTACT_ENDPOINT` in `.env.local` to a POST endpoint for contact form submissions
3. Run the app:
   `npm run dev`

## AI tools

The browser AI tools use a Gemini API key entered in the Clinical Assistant settings and stored locally in the current browser. For production, route AI requests through a protected backend endpoint instead of exposing shared API keys in client code.
