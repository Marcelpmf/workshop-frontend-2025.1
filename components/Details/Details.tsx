/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, useState } from 'react'
import { Card } from '../List/List';

export default function Details({ id }: { id: string }) {
  const [data, setData] = useState<Card | null>(null);

  useEffect(() => {
    fetch(`https://api.pokemontcg.io/v2/cards/${id}`)
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Detalhes da API:", responseData);
        setData(responseData.data);
      })
      .catch((error) => console.error("Erro ao buscar detalhes:", error));
  }, [id]);

  if (!data) return <p>Carregando...</p>;

  return (
    <div className="flex flex-col items-center gap-4 bg-slate-300 text-slate-800 font-semibold text-xl p-10 rounded-xl ">
      <img
        src={data.images.large}
        alt={data.name}
        className="w-60 h-60 rounded-xl object-contain"
      />
      <p className="text-2xl font-bold">Nome: {data.name}</p>
      <p><strong>Tipo:</strong> {data.types?.join(', ') || "Unknown"}</p>
      <p><strong>Subtipo:</strong> {data.subtypes?.join(', ') || "None"}</p>
      <p><strong>Raridade:</strong> {data.rarity || "Unknown"}</p>
      <p><strong>HP:</strong> {data.hp || "None"}</p>
      <p><strong>Evolui de: </strong>{data.evolvesFrom || "No other"}</p>
      <p><strong>Resumo: </strong>{data.flavorText || "Does not have"}</p>
    </div>
  );
}
