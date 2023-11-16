interface SendEmailProps {
    data: string;
    url: string;
}

export default function SendEmail({ data, url }: SendEmailProps) {

    return (
        <div>
            <p className='mb-7'><a href={data}>Click me to e-mail</a></p>
            <p className='mb-7'><a href={"/display/photos?query=" + url}>Just photos</a></p>
        </div>
    )
}