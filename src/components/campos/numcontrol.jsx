import React from 'react';

const NumControl = () => {
    return (
        <div class='form-group'>
            <label 
                for='nocontrol' 
                class='form-label col-form-label-sm'>
                No. de Control
            </label>

            <input 
                type='text' 
                class='form-control form-control-sm'
                name='nocontrol' 
                id='nocontrol' 
                required
                placeholder='Capturar su No. de Control'
                title='Capture su No. de Control, Ej: E78020298 ó 78020298'>
            </input>
        </div>
    );
};

export default NumControl;