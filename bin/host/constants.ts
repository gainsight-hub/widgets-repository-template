import path from "path";
import { fileURLToPath } from "url";

export const VITE_PORT = 5173;

export const TUNNEL_URL_REGEX =
  /https:\/\/[a-z0-9-]+\.trycloudflare\.com/;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const REACT_WIDGET_CWD = path.resolve(__dirname, "../../widgets/react_widget");
