# Setting up this project from scratch

## 1. Install Vite using the `lit-ts` template, along with Tailwind and Biome.
```sh
pnpm create vite modal-component --template lit-ts
cd modal-component
pnpm install
pnpm add tailwindcss @tailwindcss/vite
pnpm add --save-dev --save-exact @biomejs/biome
pnpm approve-builds  # Approve esbuild and @biomejs/biome
pnpm biome init --jsonc  # This creates the Biome config
```

## 2. Create `/vite.config.ts`.
Create the `vite.config.ts` in the root of your project, with the following content:
```js
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
});
```

## 3. Import Tailwind into your global CSS file (`/src/index.css` in this case).
```css
@import "tailwindcss";
```

## 4. Add Biome scripts to `/package.json`.
```json
{
  ...
  "scripts": {
    ...
    "format": "pnpm biome format --write",
    "lint": "pnpm biome check",
    "fix": "pnpm biome check --apply"
  }
  ...
}
```

## 5. Run the project.
```sh
pnpm run dev
```

