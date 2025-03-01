/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Card } from "../List/List";

type Props = {
    card: Card;
};

export default function card({ card }: Props) {
    const imageSrc = card.images?.large || '';
  
    console.log("Imagem carregada:", imageSrc);
  
    if (!imageSrc) {
      return <p>Imagem não disponível</p>;
    }
	
    return (
        <div className="flex flex-col justify-between items-center rounded-xl p-4 w-64 h-96">
          <img
            src={imageSrc}
            alt={card.name}
            className="w-full h-3/4 rounded-xl object-contain"
          />
          <div className="text-center text-gray-50 text-sm flex flex-col gap-1">
            <p className="font-bold text-lg">{card.name}</p>
            <p><strong>Tipo:</strong> {card.types?.join(', ') || "Unknown"}</p>
            <p><strong>Subtipo:</strong> {card.subtypes?.join(', ') || "None"}</p>
            <p><strong>Raridade:</strong> {card.rarity || "Unknown"}</p>
          </div>
          <Link href={`/card/${card.id}`} className="text-white bg-blue-600 px-4 py-2 rounded-lg font-semibold mt-2 w-full text-center">
            Mais Detalhes
          </Link>
        </div>
      );
}
