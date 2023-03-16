import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useUserForm } from './../../hooks/Custom.hooks';

const UserForm = ()=> {

    const {form,setForm, handleChange } = useUserForm();
    const [areEquals, setAreEquals] = useState(true);
    const [passwordConfirmation, setPasswordConfirmation] = useState();

    const handlePasswordConfirmation=(e)=>{
        setPasswordConfirmation(e.target.value);
    }

    useEffect(()=>{
        const {password}= form;
        setAreEquals(password===passwordConfirmation)
    },[passwordConfirmation]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        console.log(form);
    }
    return (
        <div className="w-25 mx-auto mt-5">
            <h4 className="mb-3">Humano Regístrate!</h4>

            <form className="need-validation" noValidate>
                <div className="rpw g-3">

                    <div className="col-12">
                        <label htmlFor="email" className='form-label'>
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder='you@example.com'
                            name='email'
                            onChange={handleChange}/>
                    </div>
                    <div className='col-12'>
                        <label htmlFor='address' className='form-label'>
                            clave
                        </label>
                        <input
                            type="text"
                            className='form-control'
                            placeholder='Clave'
                            name='password'
                            onChange={handleChange}/>
                    </div>
                    <div className='col-12'>
                        <label htmlFor='password' className='form-label'>
                            Repetir Clave
                        </label>
                        <input
                            type="text"
                            className='form-control'
                            placeholder='Repetir clave'
                            onChange={handlePasswordConfirmation}
                        />
                        {!areEquals &&(
                            <div className='form-text list-group-item-danger'>
                            Las claves no son iguales
                        </div>
                        )}
                        
                    </div>
                    <hr className='my-4'/>

                    <button
                        disabled={!areEquals}
                        className='w-100 btn btn-primary btn-lg'
                        type="suit"
                        onClick={handleSubmit}>
                            Registrarme
                    </button>
                    <button
                                type="button"
                                className="btn btn-sm"
                            >
                                <Link to={"/"} className="mt-3 btn btn-primary btn-lg">
                                    Volver
                                </Link>
                            </button>
                </div>
            </form>
        </div>
    )
}

export default UserForm;
