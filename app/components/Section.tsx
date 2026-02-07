export default function Section({ title, children }: { title: string, children: React.ReactNode}) {
    return (
        <section className="px-16 mb-8">
            <h1 className="text-2xl font-normal border-b-1 border-black py-2">
                {title}
            </h1>
            {children}
        </section>
    )
}
