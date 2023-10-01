import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../Providers/AuthProvider';

const useCart = () => {

    // TODO: There is no use of it

    const {user} = useContext(AuthContext);

    const {refetch, data:cart=[] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async() =>{
            const response = await fetch(`http://localhost:5000/`)
        }
    })

    return (
        <div>
            
        </div>
    );
};

export default useCart;