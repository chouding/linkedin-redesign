import NavigationBar from "@/components/ui/NavigationBar"
import Feed from "@/components/ui/Feed"
import Post from "@/components/ui/Post"

export default function Home() {
  return (
    <div className="flex">
      {/* Navigation Bar */}
      <section className="w-60 flex-shrink-0">
        <NavigationBar />
      </section>
      <section className="flex flex-1 justify-center items-start pt-12"> 
        <Post />
      </section>
      {/* Feed */}
      <section>
        <Feed />
      </section>
    </div>
  )
}
