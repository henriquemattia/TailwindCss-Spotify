import { Footer } from "@/components/Footer"
import { Sidebar } from "@/components/SIdebar"
import { TopPLaylists } from "@/components/TopPLaylists"
import { DailyMix } from "@/components/DailyMix"
import { ChevronLeft, ChevronRight, } from "lucide-react"

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">

        <Sidebar />  {/* LATERAL ESQUERDA // NAVBAR */}

        <main className="flex-1 p-6">

          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          {/* 6 Playlists no topo */}
          <h1 className="font-semibold text-3xl mt-10">Good afternoon</h1>
          <TopPLaylists />

          {/* PLaylists feitas pelo Ususário */}
          <h2 className="font-semibold text-2xl mt-10">Made for Henrique Fernandes</h2>
          <DailyMix />

        </main>
      </div>
      <Footer />
    </div>
  )
}
