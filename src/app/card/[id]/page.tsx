'use client'
import { use } from 'react';
import Details from '../../../../components/Details/Details';

interface CardParams{
    params: Promise<{id: string}>
}

export default function Character({ params }:CardParams) {
  const { id } = use(params);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-24 py-4 bg-slate-900">
      <h1 className='font-bold text-4xl mb-8 text-white'>Carta ID: "{id}"</h1>
      <Details id={id}/>

    </main>
  )
}