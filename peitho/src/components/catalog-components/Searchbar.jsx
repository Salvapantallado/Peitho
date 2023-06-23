import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';

export default function Searchbar() {
    const [searchInput, setSearchInput] = useState("");
    const SFC = useSelector((state) => state.allProducts)

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        
    }

    useEffect(() => {
        if(searchInput.length > 0) {
            SFC.map((x) => x).filter((searchedItems) => {
            return searchedItems.name.match(searchInput);
        })
    }
    }, [searchInput])

    console.log(searchInput, "SEARCH");

    return(
        <>
        <div className='searchbar'>
            <input
                type='text'
                placeholder='Buscar prenda...'
                onChange={handleChange}
                value={searchInput} />

            <table>
                <tr>
                <th>image</th>
                <th>name</th>
                </tr>

                {SFC.map((item, index) => {
                    return (<div key={index}>
                        <tr>
                        <td>{item.image[0]}</td>
                        <td>{item.name}</td>
                        </tr>
                    </div>)
                })}
            </table>
        </div>
        </>
    )


}