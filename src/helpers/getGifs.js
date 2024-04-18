//Obtiene los Gifs desde la API (id, titulo,url)

export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=d0vbywU2az0zVa2CpKWU9kTuH4TAmKho&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}