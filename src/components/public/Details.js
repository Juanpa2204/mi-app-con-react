import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import RickAndMortyService from '../../services/RickAndMorty.Service';

const Details = () => {

    const [mascota, setMascota] = useState({});
    const {id} = useParams();

    useEffect(() => {
        RickAndMortyService.getCharactersById(id)
            .then((data) => setMascota(data))
    }, [id])

    return (
        <div className="row m-3">
            <div className="col-md-12">
                <div className="card flex-md-row mb-4 box-shadow h-md-250">
                    <div className="card-body d-flex flex-column align-items-start">
                        <strong className="d-inline-block mb-2 text-success">
                            {mascota.species}
                        </strong>
                        <h3 className="mb-0 text-dark">{mascota.name}</h3>
                        <div className="mb-1 text-muted">
                            {new Date(mascota.created).toLocaleDateString()}
                        </div>
                        <div className="mb-1 text-muted"></div>
                    </div>
                    <p>
                        soy un details
                    </p>
                    <Link to={"/"} className="mt-3 btn btn-primary btn-lg">
                        Volver
                    </Link>
                    <img
                    className="h-100 d-inline-block rounded card-img-right flex-auto d-none d-md-block m-4"
                    height="auto"
                    src={mascota.image}
                    alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Details;
