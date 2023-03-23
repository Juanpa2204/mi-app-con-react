import React, { useEffect, useState } from 'react';
import RickAndMortyService from '../../services/RickAndMorty.Service';
import Card from './Card';
import Page from './Pagination';

export const Cards = () => {
    const [mascotas, setMascotas] = useState([]);
    const [infoPage, setInfoPage] = useState({});

    useEffect(() => {
        RickAndMortyService.getAllCharacters().then((data) => {
            setMascotas(data.results);
            setInfoPage(data.info);
        }).catch((error) => console.log(error));
    }, []);

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

    const cardsList = mascotas.map((m) => <Card mascota={m} key={m.id} />);

    return (
        <div>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {cardsList}
                    </div>
                </div>
            </div>
            <div className="Pagination">
                <Page infoPage={infoPage} GetList={GetList} />
            </div>
        </div>
    );
};