import GrabData from "@/components/GrabData";

interface DisplayProps {
    searchParams: { query: string }
}

export default function Display({ searchParams: { query } }: DisplayProps) {

    // const url2 = "https://www.bbc.com/portuguese/articles/c6p63548ye1o"

    return (
        <main className="flex min-h-screen flex-col items-center p-24 bg-amber-100">
            <div>
                {/* {query} */}
                <GrabData urlInput={query} />
            </div>
        </main>
    )
}