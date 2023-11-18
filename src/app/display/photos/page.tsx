interface DisplayProps {
    searchParams: { query: string }
}

export default function Photos({ searchParams: { query } }: DisplayProps) {

    const photos = JSON.parse(query)
    console.log(photos);

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <div>
                {photos.map((item: any, index: number) => {
                    return (
                        <p className='mt-3' key={index}>
                            {/* <Image
                                src={item.urlFinal}
                                alt={item.credit}
                            /> */}
                            <img src={item} alt={"photo"} />
                            <br></br><br></br></p>)
                })}
            </div>
        </main>
    )
}