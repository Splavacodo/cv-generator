export default function SectionContentList({ children }: { children: React.ReactNode}) {
    return (
        <ul className="pl-4 flex flex-col">
            {children}
        </ul>
    );
}
