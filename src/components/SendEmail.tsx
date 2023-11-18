interface SendEmailProps {
    data: string;
    newData: string;
}

export default function SendEmail({ data, newData }: SendEmailProps) {

    return (
        <div>
            <p className='mb-7'><a href={data}>Click me to e-mail</a></p>
            <p className='mb-7'><a href={"/display/photos?query=" + newData}>Just photos</a></p>
        </div>
    )
}