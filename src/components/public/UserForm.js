import React from 'react'

const UserForm = ()=> {
    return (
        <div className="w-25 mx-auto mt-5">
            <h4 className="mb-3">Registrate!</h4>

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
                        />
                    </div>
                    <div className='col-12'>
                        <label htmlFor='address' className='form-label'>
                            clave
                        </label>
                        <input
                            type="text"
                            className='form-control'
                            placeholder='Clave'/>
                    </div>
                    <div className='col-12'>
                        <label htmlFor='password' className='form-label'>
                            Repetir Clave
                        </label>
                        <input
                            type="text"
                            className='form-control'
                            placeholder='Repetir clave'
                        />
                        <div className='form-text list-group-item-danger'>
                            Las claves no son iguales
                        </div>
                    </div>
                    <hr className='my-4'/>

                    <button
                        className='w-100 btn btn-primary btn-lg'
                        type="suit">
                            REgistarme
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UserForm;
