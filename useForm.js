import { useState } from "react";

export const useForm = ( initialState = {}) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () =>{
        setValues(initialState);
    }

    const handleInputChange = ({target})=>{ //puedo desestructurar el evento y extraer de este mismo el target

        setValues({
            ...values,
            [target.name]: target.value
        })
    };

    return [ values, handleInputChange, reset];
}
