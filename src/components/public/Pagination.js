import React, { useEffect, useState } from 'react'
import { Pagination } from 'react-bootstrap';


export const Paginattion = () => {
    const [mascota, setMascotas] = useState({});
    const [infoPage, setInfoPage] = useState({});
    const [itemPagination, setItemPagination] = useState([]);

    
     
    const GetList = (page, url) => {
        let uri=
            page === null
                ? url
                : `https://rickandmortyapi.com/api/character/?page=${page}`;

        fetch(uri)
            .then((response) => response.json())
            .then((data) => {
                setMascotas(data.results);
                setInfoPage(data.info);
            });
    };

    useEffect(() => {
        GetList(0, null);
    }, []);

    useEffect(() => {
        let items = []
        for (let i = 1; i < infoPage.pages; i++) {
            items.push(
                <Pagination.Item 
                    key={i} 
                    onClick={(e) => { 
                        GetList(parseInt(e.target.text), null);
                    }}
                >
                    {i}
                </Pagination.Item>
                );
        }
        setItemPagination(items);
    }, [infoPage])

    return (
        <Pagination>
            <Pagination.Prev/>
                {itemPagination.map((item)=>{
                    return item;
                })}
            <Pagination.Next />
        </Pagination>
    )
};
