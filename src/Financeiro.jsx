// src/Financeiro.jsx
import React from 'react';

const Financeiro = () => {
    return (
        <div className="container">
            <div className="box" style={{ maxWidth: '600px', margin: 'auto' }}>
                <h1 className="title has-text-centered">Financeiro</h1>
                <p className="has-text-centered">Aqui você pode gerenciar o quantitativo de pagamentos trimestrais de distribuição. </p>
                <div className="notification is-warning has-text-centered">
                    <strong>Em breve!</strong> Aguarde.
                </div>
                <div className="box" style={{ maxWidth: '600px', margin: 'auto' }}>

                    <div className="notification is-danger has-text-centered">
                        <strong>Bloqueado Juridicamente.</strong>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Financeiro;