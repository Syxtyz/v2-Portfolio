import { SiFramer, SiMui, SiReact, SiShadcnui, SiTailwindcss } from "react-icons/si";
import { TbBrandCss3 } from "react-icons/tb";

export const UIUXItems = [
    { name: "CSS", icon: <TbBrandCss3 className="w-8 h-8 text-blue-400"/> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="w-8 h-8 text-teal-400" /> },
    { name: "MUI", icon: <SiMui className="w-8 h-8 text-blue-500" /> },
    { name: "Shadcn/UI", icon: <SiShadcnui className="w-8 h-8 bg-neutral-200 dark:bg-black p-1 rounded" /> },
    { name: "React Icons", icon: <SiReact className="w-8 h-8 text-red-400" /> },
    { name: "Framer Motion", icon: <SiFramer className="w-8 h-8 text-pink-500" /> }
]