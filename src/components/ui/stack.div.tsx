import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

interface ToolTipProps {
    children: React.ReactNode
    content: React.ReactNode
}

export default function StackDiv({ children, content }: ToolTipProps) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>{children}</TooltipTrigger>
            <TooltipContent className="bg-foreground text-background">{content}</TooltipContent>
        </Tooltip>
    )
}