import { AreaChart, Bell, Copy, LayoutGrid, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "dark");
    }
  }, []);

  useEffect(() => {
    // select html elem
    const html = document.querySelector("html");
    //add or remove class dark in html elem according to theme in localstorage.
    if (localStorage.getItem("theme") === "dark") {
      html?.classList.add("dark");
      setTheme("dark");
    } else {
      html?.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    if (localStorage.getItem("theme") === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };
  return (
    <div className="top-4 absolute inset-x-4 h-12 rounded-xl text-background bg-primary dark:bg-secondary-background cursor-auto z-[10000]">
      <div className=" px-4 flex h-full items-center justify-between">
        <div className="flex items-center gap-4">
          <AreaChart className="hover:opacity-60 cursor-pointer" />
          <Bell className="hover:opacity-60 cursor-pointer" />
          <Copy className="hover:opacity-60 cursor-pointer" />
          <Link to="streams" className="hover:opacity-60 cursor-pointer">
            <LayoutGrid />
          </Link>
        </div>
        <div
          onClick={handleThemeSwitch}
          className="hover:opacity-60 cursor-pointer"
        >
          {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
