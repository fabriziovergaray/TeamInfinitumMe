import React, { useEffect, useState } from 'react';
import teamInfinitum from '../Api/teamInfinitum';
import { CursosDisponiblesResponse } from '../Interfaces/appInterfaces';

interface CursosState {
    curso: CursosDisponiblesResponse[];
}

const useCursosDisponibles = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [cursosState, setCursosState] = useState<CursosState>({
        curso: [],
    });

    const getCursos = async () => {
        const cursos = teamInfinitum.get<CursosDisponiblesResponse[]>('/curriculum/idiomas');

        const response = await Promise.all([
            cursos,
        ]);

        setCursosState({
            curso: response[0].data,
        });

        setIsLoading(false);
    };

    useEffect(() => {
        getCursos();
    }, []);

    return {
        ...cursosState,
        isLoading,
    };
};


export default useCursosDisponibles;
