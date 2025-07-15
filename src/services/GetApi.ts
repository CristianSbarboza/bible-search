const url = 'https://bible-api.com/'

export async function GetApi(book: string, chapter: string, verse: string){
    try {
        const response = await fetch(`${url}/${book}+${chapter}:${verse}?translation=almeida`)
        const data = await response.json()

        if(data){
            const verse = data.text
            return verse
        }
    } catch (error) {
        return error
    }
}