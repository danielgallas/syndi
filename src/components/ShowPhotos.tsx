interface ShowPhotosProps {
    data: Array<object>;
}

export default function ShowPhotos({ data }: ShowPhotosProps) {
    return (
        <div className='p-1'>
            {data.map((item: any, index: number) => {
                return (
                    <p className='mt-3' key={index}><img src={item.urlFinal} alt={item.credit} /><br></br><br></br></p>)
            })}
        </div>
    )
}