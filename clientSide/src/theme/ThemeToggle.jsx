import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex gap-4">
      <Button
        size="sm"
        variant={theme === "light" ? "ghost" : "shadow"}
        onClick={() => setTheme("light")}
      >
        Light
      </Button>
      <Button
        size="sm"
        variant={theme === "dark" ? "ghost" : "shadow"}
        onClick={() => setTheme("dark")}
      >
        Dark
      </Button>
    </div>
  );
};

export default ThemeToggle;
