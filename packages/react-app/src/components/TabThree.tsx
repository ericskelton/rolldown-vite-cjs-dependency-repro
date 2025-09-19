// import both chat icons 
import { MyEsmChatIcon } from "react-library";
import ErrorBoundary from "./ErrorBoundary";
// Works
export default function TabThree() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Tab Three, subdependency imported from esm: @material-ui/icons/esm/Chat</h2>
        <ErrorBoundary>
        <MyEsmChatIcon /></ErrorBoundary>
    </div>
  );
}
