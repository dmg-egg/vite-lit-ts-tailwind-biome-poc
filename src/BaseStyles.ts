import { unsafeCSS } from "lit";
import type { CSSResult } from "lit";
import styles from "./BaseStyles.css?inline"; // `?inline` is key, see https://github.com/umbopepato/rollup-plugin-postcss-lit?tab=readme-ov-file#usage-with-vite

const BaseStyles: CSSResult = unsafeCSS(styles);

export default BaseStyles;
