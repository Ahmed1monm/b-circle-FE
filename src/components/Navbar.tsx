import * as React from "react";
import { Menu, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [state, setState] = React.useState(false);

  const scrollTop = useScrollTop();
  return (
    <nav
      className={cn(
        "dark:bg-[#1f1f1f] fixed top-0 left-0 right-0 z-50 bg-background p-6 flex items-center",
        scrollTop && "shadow-sm border-b"
      )}
    >
      <Link to="/" className="text-lg font-semibold">
        <Logo />
      </Link>
      <div className="md:ml-auto justify-end flex items-center gap-x-6 w-full">
        <Link to="/circles" className="text-lg font-semibold">
          Circles
        </Link>
        <Link to="/" className="text-lg font-semibold">
          Articles
        </Link>

        <ModeToggle />
      </div>
    </nav>
  );
}
