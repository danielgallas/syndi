// "use client";

import GrabData from "@/components/GrabData";
import { useState } from "react";

export default function Home() {

  // const [url, setUrl] = useState();
  // const [submit, setSubmit] = useState(false);

  const url = "https://www.bbc.com/portuguese/articles/c6p63548ye1o"

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-amber-100">
      <div>
        {/* <form>
          <input name='siteUrl' placeholder='Enter the URL here' onChange={(e) => setUrl(e.target.value)} />
          <button type="submit" onClick={setSubmit(true)}>Submit</button>
        </form> */}
        <GrabData urlInput={url} />
      </div>

      {/* <h1 className='font-black'>Syndi it!</h1> */}
      {/* <GetQuotes /> */}

    </main>
  )
}