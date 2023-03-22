import React, { useEffect, useState } from 'react'
import RickAndMortyService from "../../services/RickAndMorty.Service";
import Card from './Card';
import { Pagination } from 'react-bootstrap';


export const Cards = () => {

    const [mascotas, setMascotas] = useState([]);

    useEffect(() => {
        RickAndMortyService.getAllCharacters()
           
            .catch((Error) => console.log(Error));
    }, [mascotas])

    const [infoPage, setInfoPage] = useState({});
    const [itemPagination, setItemPagination] = useState([]);



    const GetList = (page, url) => {
        let uri =
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

    const cardsList = mascotas.map((m) => <Card mascota={m} key={m.id} />)
    return (
        <div>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {cardsList}
                    </div>
                </div>
            </div>
            <div>
                <Pagination>
                    <Pagination.Prev/>
                    {itemPagination.map((item) => {
                        return item;
                    })}
                    <Pagination.Next />
                </Pagination></div>
        </div>

    )
}


