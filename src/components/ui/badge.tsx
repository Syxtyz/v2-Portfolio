export function Badge({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-secondary w-fit rounded-4xl p-1 px-2 text-xs font-semibold">
            {children}
        </div>
    )
}