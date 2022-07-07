import { useState } from "react";


type ReturnType<T> = [
    T | undefined,
    (value :T ) =>void
];

export const useLocalStorage = <T,>(key:string, initial:T):ReturnType<T> => {

    const [storeValue, setStoreValue] = useState<T|undefined>(() => {
        try{
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initial;
        }
        catch(e){
            return initial;
        }
    });

    const setLocalStorage = (value:T) => {
        try{
            window.localStorage.setItem(key, JSON.stringify(value));
            setStoreValue(value);
        } catch (e){
            console.error(e);
        }
    }

    return [storeValue, setLocalStorage];

}