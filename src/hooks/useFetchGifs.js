import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect( () => { // el hook useEffect no puede tener async ya que espera codigo sincrono

        getGifs( category )         // solo se ejecuta esta instruccion cuando el componente es renderizado por primera vez
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
            })
        
    }, [ category ] )       // mandamos en el array las dependencias, ya que si la categoria cambia podriamos querer volver a ejecutar este efecto

    return state

}