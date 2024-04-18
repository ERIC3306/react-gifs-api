//Custom Hook, hook(funcion que retorna algo) creado por nosostros

import { useEffect, useState } from 'react';            //useEffect, se utiliza para disparar efectos secundarios(Proceso que se ejecuta cuando algo sucede) 
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {           //Functional component recibe props
                                                        //Hook recibe un objeto o argumentos posicionales(desestructuracion del objeto)
 
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);           //Obtiene la imagen y la coloca en el arreglo de images       
        setIsLoading(false);            //Si se obtiene una imagen isLoading es FALSE
    }
    
    useEffect( () => {      
        getImages();        //Se manda a llamar el efecto que se quiere disparar(callback/funcion)
    }, []);                 //[], Lista de dependencias (condiciones para volver a ejecutar el callback)
                            //como esta vacio, significa que solo se dispara cuando se crea/construye el componenete

    return {
        images,
        isLoading
    }

}