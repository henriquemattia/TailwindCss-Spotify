import { Shuffle, SkipBack, Play, SkipForward, RepeatIcon, Mic2, LayoutList, Laptop2, Volume1, Maximize2 } from "lucide-react";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        {/* Musica tocando no mommento */}
        <div className="flex items-center gap-3">
          <Image src="/album.jpeg" className="w-full" width={56} height={56} alt="Capa de albumCapa de album" />
          <div className="flex flex-col">
            <strong className="font-normal">Rope</strong>
            <span className="text-xs text-zinc-400">Foo Figthers</span>
          </div>
        </div>

        {/* Player */}
        <div className="flex flex-col items-center">
          {/* Buttons Player */}
          <div className="flex items-center gap-3 ">
            <Shuffle size={20} className=" text-zinc-200" />
            <SkipBack size={20} className=" text-zinc-200" />

            <button className="h-10 w-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
              <Play />
            </button>

            <SkipForward size={20} className=" text-zinc-200" />
            <RepeatIcon size={20} className=" text-zinc-200" />
          </div>
          {/* Slider Player */}
          <div className="flex items-center gap-2 mt-4">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="h-1 w-40 bg-zinc-200 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">2:14</span>
          </div>
        </div>
        {/*  */}
        <div className="flex items-center gap-4">
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />

          <div className="flex items-center gap-2">
            <Volume1 size={24} />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="h-1 w-10 bg-zinc-200 rounded-full"></div>
            </div>
          </div>

          <Maximize2 size={20} />
        </div>
      </footer>
    )
}