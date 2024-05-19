import React from 'react';
import NumControl from '../campos/numcontrol.jsx';
import Password from '../campos/password.jsx';

function IndexMain() {
    return (
        <div class="row">
        <div class="col-md-6 centrado w-100 d-flex flex-column justify-content-center align-items-center">
            <div class="card">
                <div class="card-header bg-dark text-white">
                    <h3 class="text-center">Modulo de Alumnos</h3>
                </div>
                <div class="card-body">
                    <form action="" method="" class="ancho">
                        <div class="d-flex justify-content-end mb-2">
                            <a href="" class="btn btn-primary btn-sm">Registro</a>                            
                        </div>

                        <NumControl />
                        <Password />
                        
                        <div class="d-flex flex-row justify-content-end my-2">
                            <input type="submit" class="btn btn-success btn-sm align-itself-end" 
                            name ="btnLogin" value="Solicitar Entrada"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}
export default IndexMain;