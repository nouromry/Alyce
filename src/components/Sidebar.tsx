"use client";
import { pageRoutes } from "@/lib/constants";
import { LogOut, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [toggle, setToggle] = useState(false);

  const handleLogout = () => {
    toast.success("Déconnexion réussie");
    router.push("/");
  };

  return (
    <>
      <nav className="hidden w-fit min-h-fit sm:flex flex-col justify-start rounded-3xl items-center bg-primary px-4 py-6 gap-6 m-4 drop-shadow-xl ">
        <Link href="/" className="flex lg:hidden w-full">
          <Image src="/logos/alyceLogo.png" width={80} height={80} alt="logo" />
        </Link>
        <Link href="/" className="hidden lg:flex">
          <Image
            src="/logos/alyceLogo.png"
            width={180}
            height={180}
            alt="logo"
          />
        </Link>
        <div className="flex flex-col items-center justify-center w-full gap-4">
          {pageRoutes.map((page, index) => (
            <Link
              href={page.route}
              key={index}
              className={`${
                pathname === page.route
                  ? "bg-light text-darkGrey"
                  : " text-darkGrey"
              } group rounded-xl flex items-center justify-start gap-4 w-full py-4 px-6  cursor-pointer app_transition `}
            >
              <page.icon size={26} />
              <span className="hidden lg:flex font-semibold truncate">
                {page.title}
              </span>
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="group rounded-xl flex items-center justify-start gap-4 w-full py-3 px-5 border-2 border-light text-darkGrey  cursor-pointer app_transition"
          >
            <LogOut size={26} />
            <span className="hidden lg:flex font-bold truncate">
              Se Déconnecter
            </span>
          </button>
        </div>
      </nav>

      <nav className="sm:hidden w-full h-fit fixed z-[50] flex flex-row justify-between items-center px-4 py-6 bg-light">
        <Link href="/" className="flex lg:hidden">
          <Image src="/logos/alyceLogo.png" width={70} height={70} alt="logo" />
        </Link>
        <div className="sm:hidden w-[35px] h-[35px] relative flex justify-center items-center ">
          <ChevronDown
            onClick={() => setToggle(true)}
            className="w-[100%] h-[100%] "
            color="#234189"
          />

          {toggle && (
            <div className="lg:hidden fixed z-[5] w-full h-fit flex justify-end items-end flex-col bg-primary text-darkGrey py-6 pb-16 right-0 inset-y-0 text-center">
              <div className="w-[35px] h-[35px] flex justify-center items-center rounded-full mx-4 my-2">
                <X
                  className="w-[100%] h-[100%] text-darkGrey "
                  onClick={() => setToggle(false)}
                />
              </div>

              <ul className="h-full w-full flex justify-center items-center flex-col m-0 px-8 list-none gap-8 select-none cursor-pointer ">
                {pageRoutes.map((page, index) => (
                  <Link
                    href={page.route}
                    key={index}
                    className={`${
                      pathname === page.route ? "bg-light text-primary" : ""
                    } group rounded-xl flex items-center justify-start gap-4 w-full py-4 px-6  cursor-pointer  `}
                  >
                    <page.icon size={26} />
                    <span className="flex font-bold truncate">
                      {page.title}
                    </span>
                  </Link>
                ))}
                <li
                  onClick={handleLogout}
                  className="group rounded-xl flex items-center justify-start gap-4 w-full py-4 px-6 border border-light text-darkGrey cursor-pointer "
                >
                  <LogOut size={26} />
                  <span className="flex font-bold truncate">Logout</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
