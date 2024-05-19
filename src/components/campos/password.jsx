import React from 'react';

const Password = () => {
    return (
        <div className='form-group'>
            <label htmlFor='password' className='form-label col-form-label-sm'>
                Contraseña
            </label>
            <input
                type='password'
                className='form-control form-control-sm'
                name='password'
                id='password'
                required
                placeholder='Capture su Contraseña, es libre a su criterio'
                title='Capture su Contraseña, es libre a su criterio pero debe escribir algo'
            />
        </div>
    );
};

export default Password;