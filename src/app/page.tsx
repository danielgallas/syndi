import GrabData from "@/components/GrabData";
import SubmitButton from "@/components/SubmitButton";
import GetQuotes from "@/components/Test";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-amber-100">
      {/* <h1 className='font-black'>Syndi it!</h1> */}
      {/* <GetQuotes /> */}

      <GrabData urlInput="https://www.bbc.com/portuguese/articles/cxe32kvjxm5o" />
    </main>
  )
}