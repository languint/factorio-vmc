import { Kbd } from "../ui/kbd";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "../ui/menubar";

export function TopToolbar() {
  return (
    <Menubar className="rounded-none">
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
