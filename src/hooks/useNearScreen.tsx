import { RefObject, useEffect, useRef, useState } from 'react';


type ReturnType = [
    boolean, 
    RefObject<HTMLDivElement>
];

export const useNearScreen = ():ReturnType => {

    //Creo el estado para mostrar el componente cuando esté en el Viewport
    const [show, setShow] = useState<boolean>(false)

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {

        //Creo una promesa para que me valide si el navegador tiene el intersection Observer
        Promise.resolve(

            typeof window.IntersectionObserver !== 'undefined'
            ?
            // Si el navegador lo tiene, entonces lo llamo directamente
            window.IntersectionObserver
            :
            // Si el navegador no lo tiene, hago la importación dinamica del intersection observer
            import('intersection-observer')
        )
        //Luego resuelvo la promesa
            .then(()=> {
                //Creo el objeto observer de intersection. 
                const observer = new window.IntersectionObserver((entries) => {
                    const { isIntersecting } = entries[0];
                    //Si el elemento esta en el viewport, entonces muestro el componente
                    if (isIntersecting) {
                        setShow(true);
                        //una vez que está en el Viewport, desconecto el observador
                        observer.disconnect();
                    }
                })
                if (ref.current) {
                    observer.observe(ref.current);
                }
            })

    }, [ref]);

    return [show, ref];
}