import GrabPhoto from "@/components/GrabPhoto";

interface DisplayProps {
    searchParams: { query: string }
}

export default function Photos({ searchParams: { query } }: DisplayProps) {

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <div>
                {/* {query} */}
                <GrabPhoto urlInput={query} />
            </div>
        </main>
    )
}