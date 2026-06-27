# Original User Request

## Initial Request — 2026-06-18T07:18:16Z

Update all local and international locations to include additional regional details: Timezone, Local Currency, Weather, Local Fruits, Local Vegetables, Famous/Most Consumed Fruits & Vegetables, and International Dialing Codes. Integrate these details into the Local Directory user interface dashboard.

Working directory: /Users/apple/Downloads/nutritioncolours
Integrity mode: demo

## Requirements

### R1. Location Database Schema Update
Extend the database interfaces (`LocationNode` in `locationsData.ts` and `InternationalCountryNode` in `internationalData.ts`) and regenerate all entries (1,690 clinics) using a deterministic generator mapping:
* **Timezone** (e.g., `"Asia/Kolkata (IST, UTC+5:30)"`)
* **Local Currency** (e.g., `"INR (Indian Rupee, ₹)"`)
* **Weather & Climate** (e.g., `"Tropical monsoon, warm winters, hot summers"`)
* **Local Fruits** (regional native fruits, e.g. mango, papaya)
* **Local Vegetables** (regional native vegetables, e.g. okra, eggplant)
* **Famous Produce** (`famousProduce`: array of strings containing the most consumed/popular fruits & vegetables in the region, e.g., `["Banana", "Potato", "Tomato", "Onion"]`)
* **International Dialing Codes** (e.g. `+91`)

### R2. UI Dashboard Integration
Modify the demographics panel in `LocalDirectory.tsx` to render these new regional, environmental, and dietary details clearly and responsively.

## Acceptance Criteria

### Verification Guardrails
- [ ] TypeScript checks pass: `npx tsc --noEmit` yields 0 errors.
- [ ] All 39 static and dynamic routes load with 0 exceptions or blank page states under `check_site_routes.js` audit.
- [ ] UI displays Timezone, Currency, Weather, Dialing Prefix, Local Produce, and Famous/Staple Produce on both local and international clinic view pages.
