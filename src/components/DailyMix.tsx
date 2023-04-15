import Image from "next/image";

import mix1 from '../../public/DailyMix/daily1.jpeg'
import mix2 from '../../public/DailyMix/daily2.jpeg'
import mix3 from '../../public/DailyMix/daily3.jpeg'
import mix4 from '../../public/DailyMix/daily4.jpeg'
import mix5 from '../../public/DailyMix/daily5.jpeg'
import mix6 from '../../public/DailyMix/daily6.jpeg'

export function DailyMix() {
    const mix = [
        {
            src: mix1,
            title: 'Daily Mix 1',
            singers: 'Wallons, COIN, girl in red and more'
        },
        {
            src: mix2,
            title: 'Daily Mix 2',
            singers: 'Wallons, COIN, girl in red and more'
        },
        {
            src: mix3,
            title: 'Daily Mix 3',
            singers: 'Wallons, COIN, girl in red and more'
        },
        {
            src: mix4,
            title: 'Daily Mix 4',
            singers: 'Wallons, COIN, girl in red and more'
        },
        {
            src: mix5,
            title: 'Daily Mix 5',
            singers: 'Wallons, COIN, girl in red and more'
        },
        {
            src: mix6,
            title: 'Daily Mix 6',
            singers: 'Wallons, COIN, girl in red and more'
        },
    ]

    return (
        <div className="grid grid-cols-6 gap-4 mt-4">
            {mix.map((music, i) => {
                return (
                    <a key={i} href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                        <Image src={music.src} className="w-full" width={120} height={120} alt="Capa de albumCapa de album" />
                        <strong className="font-semibold">{music.title}</strong>
                        <span className="text-sm text-zinc-400">{music.singers}</span>
                    </a>
                )
            })}
        </div>
    )
}