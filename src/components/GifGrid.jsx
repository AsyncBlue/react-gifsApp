import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ( { category } ) => {

    const { data: images, loading } = useFetchGifs( category )

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'> { category } </h3>

            { loading && <p className='animate__animated flash'>Loading</p> }   {/* los && evaluan si es true hace esto si no no hace nada */}
           
            <div className='card-grid'>
            
                {
                    images.map( img => 
                        <GifGridItem
                            key={ img.id } 
                            { ...img } />
                    )
                }
            
            </div>
        </>
    )

}
