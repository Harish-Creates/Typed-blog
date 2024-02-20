import { Card } from "@nextui-org/react";
import "./App.css";
import ThemeToggle from "./theme/ThemeToggle";

function App() {
  return (
    <>
      <Card className="h-[75vh] m-20 flex flex-row justify-center items-center">
        <ThemeToggle />
      </Card>
    </>
  );
}

export default App;
