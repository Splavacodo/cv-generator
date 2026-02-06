export default function ButtonActions ({ children }: {children: React.ReactNode}) {
    return (
        <div className="ml-auto flex justify-center items-center">
            {children}
        </div>
    );
}
