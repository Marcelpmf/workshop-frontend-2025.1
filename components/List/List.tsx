/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'; 

export interface Card {
  id: string;
  name: string;
  images: {small: string; large: string };
  types: string[];
  subtypes: string[];
  rarity: string;
  hp: string;  
  evolvesFrom: string;
  flavorText: string;
}

export default function List() {
  const [data, setData] = useState<Card[]>([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // quantidade de cartas que vao aparecer na Home

  useEffect(() => {
    fetch('https://api.pokemontcg.io/v2/cards/')
      .then((response) => response.json())
      .then((data) => setData(data.data)) 
      .catch((error) => console.log(error));
  }, []);

// reseta a pagina quando pesquisa pq valores nao estavam sendo pesquisados corretamente ao passar de pagina
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const filteredData = data.filter((card) =>
    card.name.toLowerCase().includes(search.toLowerCase())
  );

// divisao em paginas para nao afetar o carregamento do site
   const totalPages = Math.ceil(filteredData.length / itemsPerPage);
   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <h1 className="font-bold text-4xl mb-8 text-white">Pokemon TCG Cards</h1>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        className="flex flex-col bg-center p-2 px-4 rounded-xl text-zinc-400 font-bold w-60 border-3"
        placeholder="Procure por cartas"
      />
      <div className="flex flex-row flex-wrap justify-around gap-10 py-8">
        {currentData.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>

      <div className="flex justify-center mt-15 space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-gray-800 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <span className="text-white font-bold ">Página {currentPage} de {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="bg-gray-800 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Próximo
        </button>
      </div>
    </>
  );
}
