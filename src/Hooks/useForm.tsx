import { useState } from 'react';

export const useForm = <T extends Record<string, any>>(initState: T) => {
    const [state, setState] = useState<T>(initState);

    const onChange = <K extends keyof T>(value: T[K], field: K) => {
        setState((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const setFormValue = (form: T) => {
        setState(form);
    };

    return {
        ...state,
        form: state,
        onChange,
        setFormValue,
    };
};
