export default function ButtonActions ({ children }: {children: React.ReactNode}) {
    return (
        <div className="flex justify-end items-center gap-2">
            {children}
        </div>
    );
}
