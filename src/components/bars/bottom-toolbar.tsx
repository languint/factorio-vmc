import { Kbd } from "../ui/kbd";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "../ui/menubar";

export function BottomToolbar() {
  return (
    <Menubar className="rounded-none border-l-0 border-r-0 border-b-0">
      <span></span>
    </Menubar>
  );
}
