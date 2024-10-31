import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('edubrasil');
    const [password, setPassword] = useState('62995464355');
    const navigate = useNavigate(); // Inicializando o hook

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para autenticar o usuário
        console.log('Login:', { username, password });
        
        // Simulação de autenticação bem-sucedida
        if (username && password) {
            onLogin(); // Chama a função de login ao enviar
            navigate('/'); // Redireciona para a Home após login
        }
    };

    return (
        <div className="container">
            <div className="box" style={{ maxWidth: '400px', margin: 'auto', marginTop: '100px' }}>
                <h1 className="title has-text-centered">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label">Usuário</label>
                        <div className="control">
                            <input 
                                type="text" 
                                className="input" 
                                placeholder="Digite seu nome de usuário"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Senha</label>
                        <div className="control">
                            <input 
                                type="password" 
                                className="input" 
                                placeholder="Digite sua senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="control">
                        <button type="submit" className="button is-primary is-fullwidth">Entrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;