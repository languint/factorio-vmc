import { BottomToolbar } from "./components/bars/bottom-toolbar";
import { TopToolbar } from "./components/bars/top-toolbar";

function App() {
  return <div className="App bg-background w-full h-full">
    <TopToolbar />
    <BottomToolbar />
  </div>;
}

export default App;
