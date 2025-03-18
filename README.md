# Setting up this project from scratch

## 1. Install Vite using the `lit-ts` template, along with Tailwind.
```sh
pnpm create vite modal-component --template lit-ts
cd modal-component
pnpm install
pnpm approve-builds  # Approve esbuild
pnpm add tailwindcss @tailwindcss/vite
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

## 4. Run the project.
```sh
pnpm run dev
```

