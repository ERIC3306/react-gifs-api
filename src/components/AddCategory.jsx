import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {     //Recibe un valor(onNewCategory) de GifExperteApp

    const [ inputValue, setInputValue ] = useState('');     //Definimos el useState como una cadena vacia

    const onInputChange = ({ target }) => {     //Desestructuramos para no colocar event.target.value
        setInputValue( target.value );          //Nos modifica la cadena inputValue y lo coloca en el target del evento, (muestra las modificaciones de texto del input desde la consola)
    }

    const onSubmit = ( event ) => {                 //Ejecuta una accion en el submit al hacer ENTER
        event.preventDefault();                     //Previene el efecto por defecto del evento (realizar refresh de la pagina)
        if( inputValue.trim().length <= 1) return;  //si el inputValue tiene menos de un caracter, para la ejecucion de la funcion

        setInputValue('');                      //Limpia la cadena del inputValue
        onNewCategory( inputValue.trim() );     //Manda el valor de inputValue al arreglo categories
        // setCategories( categories => [ inputValue, ...categories ]);     //Es equivalente al codigo de arriba
    }

    return (
        <form onSubmit={ onSubmit }>            {/* es igual a onSubmit = {(event) => onSubmit(event)} */}      
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }      //onChange, Evento que nos permite mofificar el input
                                                //es igual a onChange = {(event) => onInputChange(event)}
            />
        </form>
    )
}