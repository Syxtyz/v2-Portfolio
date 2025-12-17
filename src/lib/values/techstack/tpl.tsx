import { FaJava } from "react-icons/fa";
import { SiCplusplus, SiGit, SiNpm, SiWireshark } from "react-icons/si";
import { TbBrandCSharp, TbBrandPython } from "react-icons/tb";

export const tplItems = [
    { name: "npm", icon: <SiNpm className="w-8 h-8" /> },
    { name: "git", icon: <SiGit className="w-8 h-8 text-orange-600" /> },
    { name: "Wireshark", icon: <SiWireshark className="w-8 h-8" /> },
    { name: "Java", icon: <FaJava className="w-8 h-8" /> },
    { name: "C++", icon: <SiCplusplus className="w-8 h-8 text-blue-400" /> },
    { name: "C#", icon: <TbBrandCSharp className="w-8 h-8 text-purple-400" /> },
    { name: "Python", icon: <TbBrandPython className="w-8 h-8 text-blue-400" /> }
]