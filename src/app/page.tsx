import Post from "@/components/ui/Post"
import Messages from "@/components/ui/Messages"

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col items-center overflow-y-auto h-screen hide-scrollbar bg-linkedin-background px-20 py-12">
        <section className="flex justify-center items-start w-full max-w-8xl mx-auto hide-scrollbar"> 
          <Post />
        </section>
      </div>
      {/* <Messages /> */}
    </div>
  )
}
