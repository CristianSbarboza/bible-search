import { useEffect, useState } from 'react';
import type { currentVerseModel } from '../model/currentVerseModel';
import { Link } from 'react-router';

export function FavoritePage() {
  const [verseshistory, setVersesHistory] = useState<currentVerseModel[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('versesHistory');
    if (stored) {
      try {
        const parsed: currentVerseModel[] = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setVersesHistory(parsed);
        }
      } catch (e) {
        console.error('Erro ao parsear o histórico:', e);
      }
    }
  }, []);

  return (
    <div className="p-5 bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.7)),url('/img/backGroundBible.jpg')] bg-cover bg-center w-screen h-screen">
      <section className='overflow-x-auto flex'>
        <table className='text-white font-bold min-w-3xs border-collapse'>
          <thead>
            <tr>
              <th className='border'>Livro</th>
              <th className='border'>Capitulo - versiculo</th>
              <th className='border'>Texto</th>
            </tr>
          </thead>
          <tbody>
            {verseshistory.map(verse => (
              <tr key={verse.chapter + verse.verse} className='text-center'>
                <td className='border p-2'>{verse.book}</td>
                <td className='border p-2'>
                  {verse.chapter} - {verse.verse}
                </td>
                <td className='border p-2'>{verse.verseText}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <button className='text-white cursor-pointer'>
        <Link to='/'>Pesquisar versiculo</Link>
      </button>
    </div>
  );
}
