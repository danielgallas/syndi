import GrabData from "@/components/GrabData";
import SubmitButton from "@/components/SubmitButton";
import Link from "next/link";
import { redirect } from "next/navigation";

let url2: string = "https://www.bbc.com/portuguese/articles/crgp02rn077o";

export default function Home() {

  async function getUrl(formData: FormData) {
    "use server";
    url2 = formData.get("siteUrl")?.toString() || "";
    if (url2) {
      redirect("/display?query=" + url2)
    }
  }


  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-amber-100">
      <div>
        <form action={getUrl}>
          <input name='siteUrl' placeholder='Enter the URL here' />
          <SubmitButton>Grab it man!</SubmitButton>
        </form>
      </div>
    </main>
  )
}