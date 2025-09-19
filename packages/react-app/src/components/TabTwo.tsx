import { MyChatIcon } from "react-library";
import ErrorBoundary from "./ErrorBoundary";
// Works with vite, not with rolldown-vite
export default function TabTwo() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Example Two (directly from cjs through dependency)</h2>
      <ErrorBoundary>
        <MyChatIcon />
      </ErrorBoundary>
    </div>
  );
}
