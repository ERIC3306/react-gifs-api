import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    
    //REGLA DE ORO, NO COLOCAR HOOKS(useState) DENTRO DE CONDICIONALES
    const [ categories, setCategories ] = useState([ 'Zelda' ]);    //Define el useState como un arreglo    
                                                                        //setCategories, funcion que nos permite modificar el arreglo de categorias
    
    const onAddCategory = ( newCategory ) => {      //onAddCategory, genera un evento 
        if ( categories.includes(newCategory) ) return;     //Si la categoria no incluye(no existe) inserta la nueva categoria, si la incluye no hace nada
        setCategories([ newCategory, ...categories ]);      //Aniade una nueva categoria al inicio de la copia del arreglo de categories
                                                            //Para aniadirla al final [...categories, 'newCategory']
    }
    
    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>
            
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }       //Aniade una nueva categoria al arreglo de categories y lo imprime en el DOM
            />

            {/* Listado de Gif */}
            { 
                categories.map( ( category ) => (       //Al utilizar un map, se necesita de un key
                    <GifGrid 
                        key={ category } 
                        category={ category } />
                ))
            }
        </>
    )
}