import { useState, useEffect } from "react";

const Contador =()=>{   
    const [contador, setContador] = useState(0);

    const handlecontador = () =>{
        setContador(contador +1);
    };
    const handlecontadorReducir = () =>{
        setContador(contador -1);
    };
    // Esta funcion especial se ejecuta cuando el componete
    // se haya montado
    // []
    useEffect(() => {
        setContador(12);
    }, []);

    // Esta funcion especiual se ejecuta cuando haya cambiado
    // el valor de contador
    // [contador]
    useEffect(() => {
        if (contador === 15){
            alert('contador es 15')
        }
    }, [contador]);

    // esta funcion especiaal se ejecuta cuando el compoente
    // se desmonta
    useEffect(() => {
        return() =>{
            console.log('El componente de desmonto');
        }
    },[]);

    return(
        <>
            <h4>Componente Contador</h4>
            <h5>{contador}</h5>
            <div>
                <button onClick={handlecontador}>Aumentar</button>
                <button onClick={handlecontadorReducir}>Reducir</button>
            </div>
        </>
    );

};

export default Contador;