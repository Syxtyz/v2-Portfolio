import { LiaHtml5 } from "react-icons/lia";
import { RiNextjsLine } from "react-icons/ri";
import { SiReact } from "react-icons/si";
import { TbBrandJavascript, TbBrandTypescript } from "react-icons/tb";

export const FrontendItem = [
    { name: "HTML", icon: <LiaHtml5 className="w-8 h-8 text-orange-600" /> },
    { name: "JavaScript", icon: <TbBrandJavascript className="w-8 h-8 text-yellow-400" /> },
    { name: "TypeScript", icon: <TbBrandTypescript className="w-8 h-8 text-blue-500" /> },
    { name: "React", icon: <SiReact className="w-8 h-8 text-blue-400" /> },
    { name: "React Native", icon: <SiReact className="w-8 h-8 text-blue-400 " /> },
    { name: "Next.js", icon: <RiNextjsLine className="w-8 h-8" /> },
]