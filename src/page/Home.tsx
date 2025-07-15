import { useState } from "react"
import { DefaultInput } from "../components/DefaultInput"
import { DefaultSelect } from "../components/DefaultSelect"
import { BibleBooks } from "../utils/BlibleBooks"
import { GetApi } from "../services/GetApi"

export function Home(){

    const [bookName, setBookName] = useState('Gênesis')
    const [bookChapter, setBookChapter] = useState('1')
    const [bookVerse, setBookVerse] = useState('')

    const [apiResult, setApiResult] = useState<string | null>(null)


    const selectedBook = BibleBooks.find(book => book.name === bookName);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault()

        if(Number(bookVerse) < 1) return

        try {
            const response = await GetApi(bookName, bookChapter, bookVerse)

            if(!response){
                setApiResult(null)
                return
            }

            setApiResult(response)
        } catch (error) {
            setApiResult(null)
        }
        
    }

    async function nextVerse() {



        const verse = Number(bookVerse) + 1
        setBookVerse(String(verse))

        try {
            const response = await GetApi(bookName, bookChapter, String(verse))

            if(!response){
                setApiResult(null)
                return
            }

            setApiResult(response)
        } catch (error) {
            setApiResult(null)
        }

    }

    async function backVerse() {
        const verse = Number(bookVerse) - 1

        if(verse < 1) return
        setBookVerse(String(verse))

        try {
            const response = await GetApi(bookName, bookChapter, String(verse))

            if(!response){
                setApiResult(null)
                return
            }

            setApiResult(response)
        } catch (error) {
            setApiResult(null)
        }

    }


    return(
        <div className="p-5">
            <form onSubmit={handleSubmit} className="flex flex-col p-10 items-center gap-10">
                <DefaultSelect value={bookName} onChange={e => setBookName(e.target.value)} labelText="Livro:">
                    {BibleBooks.map((book, index)=>(
                        <option value={book.name} key={index} className="text-xs">{book.name.toUpperCase()}</option>
                    ))}   
                </DefaultSelect>

                <section className="flex gap-10 w-full justify-center">
                    {selectedBook && (
                        <DefaultSelect value={bookChapter} onChange={e => setBookChapter(e.target.value)} labelText="Capítulo: ">
                        {selectedBook.chapters.map((chapter) => (
                            <option value={chapter} key={chapter}>{chapter}</option>
                        ))}
                        </DefaultSelect>
                )}

                {selectedBook && (
                    <DefaultInput type="number" placeholder="Versiculo" labelText="Versiculo:" value={bookVerse} onChange={e => setBookVerse(e.target.value)} className="w-[5rem]"/>
                )}
                </section>

                <DefaultInput type="submit" value='Buscar' className="p-2 rounded-lg bg-blue-950 text-white"/>
            </form>

            {apiResult && (
                <section  className="items-center flex justify-center gap-5 mt-[2rem]">
                    <button onClick={backVerse} className="p-2 rounded-lg bg-green-950 text-white">Anterior</button>
                    <button onClick={nextVerse} className="p-2 rounded-lg bg-green-500 text-white">Proximo</button>
                </section>
            )}

            <section  className="items-center flex justify-center mt-[2rem] ">
                {apiResult && <p className="text-2xl">{apiResult}</p>}
            </section>
        </div>
    )
}