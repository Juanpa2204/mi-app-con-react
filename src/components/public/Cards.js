import React, { useEffect, useState } from 'react';
import RickAndMortyService from '../../services/RickAndMorty.Service';
import Card from './Card';
import Page from './Pagination';
import SearchBar from "./SearchBar";

export const Cards = () => {
    const [mascotas, setMascotas] = useState([]);
    const [infoPage, setInfoPage] = useState({});
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        RickAndMortyService.getAllCharacters()
            .then((data) => {
                setMascotas(data.results);
                setInfoPage(data.info);
            })
            .catch((error) => console.log(error));
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



    const handleSearch = (event) => {
        event.preventDefault();
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredMascotas = mascotas.filter(
        (mascota) =>
            mascota.name.toLowerCase().includes(searchTerm) ||
            mascota.status.toLowerCase().includes(searchTerm)
    );


    const cardsList = filteredMascotas.map((m) => <Card mascota={m} key={m.id} />);

    return (
        <div className="album bg-secondary">
            <div className='SearchBar position-absolute top-0 end-0 py-5'>
                <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
            </div>
            <div className="container p-5">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {cardsList}
                </div>
            </div>
            <div className="py-4 Pagination">
                <Page infoPage={infoPage} GetList={GetList} />
            </div>
        </div>
    );
};
