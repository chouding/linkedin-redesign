import NavigationBar from "@/components/ui/NavigationBar"
import Post from "@/components/ui/Post"

export default function Home() {
  return (
    <div className="flex h-screen">
      <section className="w-60 flex-shrink-0">
        <NavigationBar />
      </section>
      <div className="flex-1 flex flex-col items-center overflow-y-auto h-screen hide-scrollbar bg-linkedin-background p-12">
        <section className="flex justify-center items-start w-full max-w-6xl mx-auto"> 
          <Post />
        </section>
      </div>
    </div>
  )
}
