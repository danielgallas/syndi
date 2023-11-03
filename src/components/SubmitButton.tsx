"use client";

import { useState } from "react";
// import GrabData from "./GrabData";


export default function SubmitButton() {

    const [url, setUrl] = useState("");
    const [showUrl, setShowUrl] = useState(false);


    function handleSubmit(event: any) {
        event.preventDefault();
        setShowUrl(true);
    }

    return (
        <div>
            <form>
                <input name='siteUrl' placeholder='Enter the URL here' onChange={(e) => setUrl(e.target.value)} />
                <button type="submit" onClick={handleSubmit}>Submit</button>
                {/* {showUrl && <GrabData />} */}
            </form>
        </div>
    )
}