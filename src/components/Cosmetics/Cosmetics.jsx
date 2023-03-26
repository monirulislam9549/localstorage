import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
// import { add, multiply } from '../utilities/calculate';
// import add from '../utilities/calculate';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const url = `data.json`
            try {
                const res = await fetch(url)
                const data = await res.json()
                setCosmetics(data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])
    // const cosmetics = [
    //     { id: 1, name: 'Alta', price: 100 },
    //     { id: 2, name: 'palis', price: 200 },
    //     { id: 3, name: 'malis', price: 300 },
    //     { id: 4, name: 'balis', price: 400 },
    //     { id: 5, name: 'nalis', price: 500 },
    // ]
    // const first = 21;
    // const second = 20;
    // const total = add(first, second)
    // const sum = multiply(first, second)
    return (
        <div>
            <h1>Hello From cosmetics</h1>
            <div className='gridP'>
                {/* <p>{total} {sum}</p> */}
                {
                    cosmetics.map(cosmetic => <Cosmetic
                        key={cosmetic.id}
                        cosmetic={cosmetic}
                    ></Cosmetic>)
                }
            </div>
        </div>
    );
};

export default Cosmetics;