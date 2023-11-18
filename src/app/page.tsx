import SubmitButton from "@/components/SubmitButton";
import { redirect } from "next/navigation";

let url: string = "https://www.bbc.com/portuguese/articles/crgp02rn077o";

export default function Home() {

  async function getUrl(formData: FormData) {
    "use server";
    url = formData.get("siteUrl")?.toString() || "";
    if (url) {
      redirect("/display?query=" + url)
    }
  }


  return (
    <main className="flex flex-col items-center p-24">
      <h1 className="text-4xl font-extrabold">Syndi</h1>
      <div className="w-4/5 p-4">
        <form action={getUrl}>
          <input name='siteUrl' placeholder='Enter the URL here' className="input input-bordered w-4/5 m-8" />
          <SubmitButton className="btn btn-primary">Grab photos</SubmitButton>
        </form>
      </div>
    </main>
  )
}