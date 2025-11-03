import { useTheme } from "../theme-provider";
import { Kbd } from "../ui/kbd";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarShortcut,
  MenubarTrigger,
} from "../ui/menubar";
import { Separator } from "../ui/separator";

export function TopToolbar() {
  const { theme, setTheme } = useTheme();

  return (
    <Menubar className="rounded-none border-l-0 border-r-0 border-t-0">
      <MenubarMenu>
        <MenubarTrigger>Project</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New
            <MenubarShortcut>
              <Kbd>Ctrl + N</Kbd>
            </MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Save
            <MenubarShortcut>
              <Kbd>Ctrl + S</Kbd>
            </MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <Separator orientation="vertical" className="mx-4" />
      <MenubarMenu>
        <MenubarTrigger>Themes</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value={theme}>
            <MenubarRadioItem value="dark" onClick={() => setTheme("dark")}>Dark</MenubarRadioItem>
            <MenubarRadioItem value="light" onClick={() => setTheme("light")}>Light</MenubarRadioItem>
            <MenubarRadioItem value="system" onClick={() => setTheme("system")}>System</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
