import React from 'react';
//import PropTypes from "prop-types";
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

//desestructuramos en return del useefect y obtenemos la prop
//data con el valor de la imagenes (data:img)
//y el loading:loading

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className='animate__animated animate__zoomIn animate__delay-1s'>{category}</h3>
            {/* {loading ? 'Cargando...' : ''} */}
            {/* si loading es true se muestra si es false no se muestra (if rapido) */}
            {loading && <p>Loading ...</p>}

            <div className='card-grid'>
                {
                    
                    images.map(img => 
                    <GifGridItem 
                        key={img.id} 
                            {...img}/>)
                }
            </div>
        </>
    )
}

// GifGridItem.propTypes ={
//     category: PropTypes.string.isRequired
// }