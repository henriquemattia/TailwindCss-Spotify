import { Play } from "lucide-react";
import Image from "next/image";

import donaDeMIm from '../../public/TopPlaylists/DonaDeMim.jpeg'
import adele from '../../public/TopPlaylists/Adele.jpeg'
import edSheeran from '../../public/TopPlaylists/EdSheeran.jpeg'
import menosEmais from '../../public/TopPlaylists/MenosEmais.jpeg'
import semRezenha from '../../public/TopPlaylists/SemResenha.jpeg'
import wiu from '../../public/TopPlaylists/Wiu.jpeg'

export function TopPLaylists() {
    const playlists = [
        {
            src: donaDeMIm,
            music: 'Nois é da roça',
        },
        {
            src: adele,
            music: 'Hello',
        },
        {
            src: edSheeran,
            music: 'Photograph',
        },
        {
            src: menosEmais,
            music: 'Pot-Pourri: Fatalmente / Separação',
        },
        {
            src: semRezenha,
            music: 'Gatilho (Pagode) - Acústico',
        },
        {
            src: wiu,
            music: 'Coração de Gelo',
        },
    ]
    return (
        <div className="grid grid-cols-3 gap-4 mt-4">
            {playlists.map((music, i) => {
                return (
                    <a key={i} href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                        <Image src={music.src} width={104} height={104} alt="Capa de albumCapa de album" />
                        <strong>{music.music}</strong>
                        <button className="h-12 w-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                            <Play />
                        </button>
                    </a>
                )
            })}
        </div>
    )
}