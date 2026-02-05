export default function CVPage({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <div className="bg-white text-black w-full h-full">
            {children}
        </div>
    );
}
