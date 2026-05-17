export default function Sending() {
    return (
        <span className="flex items-center gap-1">
            Sending
            <span className="flex gap-0.5">
                <span className="animate-bounce [animation-delay:0ms]">.</span>
                <span className="animate-bounce [animation-delay:150ms]">.</span>
                <span className="animate-bounce [animation-delay:300ms]">.</span>
            </span>
        </span>
    )
}