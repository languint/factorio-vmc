import { Kbd } from "../ui/kbd";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "../ui/menubar";

export function TopToolbar() {
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
            Export
            <MenubarShortcut>
              <Kbd>Ctrl + E</Kbd>
            </MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
