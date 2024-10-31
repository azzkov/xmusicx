import React, { useState, useEffect } from 'react';
import Player from './Player';

const SuasMusicas = ({ onUpdateVisualizacoes }) => {
    const [musicas, setMusicas] = useState([]);
    const [novaMusica, setNovaMusica] = useState(null);
    const [nomeMusica, setNomeMusica] = useState('');

    // Carrega músicas do Local Storage quando o componente é montado
    useEffect(() => {
        const storedMusicas = JSON.parse(localStorage.getItem('musicas')) || [];
        setMusicas(storedMusicas);
        // Atualiza o total de visualizações
        const totalVisualizacoes = storedMusicas.reduce((total, musica) => total + musica.visualizacoes, 0);
        onUpdateVisualizacoes(totalVisualizacoes);
    }, [onUpdateVisualizacoes]);

    const adicionarMusica = () => {
        if (novaMusica && nomeMusica) {
            const visualizacoesAleatorias = Math.floor(Math.random() * 10000) + 99999;
            const musicData = {
                nome: nomeMusica,
                arquivo: URL.createObjectURL(novaMusica),
                visualizacoes: visualizacoesAleatorias,
            };
            const novasMusicas = [...musicas, musicData];
            setMusicas(novasMusicas);
            onUpdateVisualizacoes(visualizacoesAleatorias); // Atualiza as visualizações totais

            // Salva as músicas no Local Storage
            localStorage.setItem('musicas', JSON.stringify(novasMusicas));

            setNomeMusica('');
            setNovaMusica(null);
        } else {
            alert("Por favor, insira um nome e selecione um arquivo de música.");
        }
    };

    // Função para calcular a soma das visualizações
    const calcularTotalVisualizacoes = () => {
        return musicas.reduce((total, musica) => total + musica.visualizacoes, 0);
    };

    // Função para deletar uma música
    const deletarMusica = (index) => {
        const novasMusicas = musicas.filter((_, i) => i !== index);
        setMusicas(novasMusicas);

        // Atualiza o Local Storage
        localStorage.setItem('musicas', JSON.stringify(novasMusicas));

        // Atualiza o total de visualizações
        const totalVisualizacoes = novasMusicas.reduce((total, musica) => total + musica.visualizacoes, 0);
        onUpdateVisualizacoes(totalVisualizacoes);
    };

    return (
        <div className="container">
            <div className="box" style={{ maxWidth: '600px', margin: 'auto' }}>
                <h1 className="title has-text-centered">Suas Músicas</h1>
                <div className="field">
                    <label className="label">Nome da Música</label>
                    <div className="control">
                        <input 
                            type="text" 
                            value={nomeMusica} 
                            onChange={(e) => setNomeMusica(e.target.value)} 
                            placeholder="Nome da Música"
                            className="input"
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Arquivo de Música</label>
                    <div className="control">
                        <input 
                            type="file" 
                            accept="audio/*" 
                            onChange={(e) => setNovaMusica(e.target.files[0])} 
                            className="input"
                        />
                    </div>
                </div>
                <div className="control">
                    <button onClick={adicionarMusica} className="button is-primary is-fullwidth">Adicionar Música</button>
                </div>

                {musicas.length > 0 ? (
                    musicas.map((musica, index) => (
                        <div key={index} className="box mt-4">
                            <Player musica={musica.arquivo} />
                            <p className="has-text-weight-bold">{musica.nome}</p>
                            <p>Visualizações: {musica.visualizacoes}</p>
                            {/* Botão para deletar a música */}
                            <button onClick={() => deletarMusica(index)} className="button is-danger is-small">Deletar</button>
                        </div>
                    ))
                ) : (
                    <p>Nenhuma música adicionada ainda.</p>
                )}

                {/* Exibe o total de visualizações */}
                {musicas.length > 0 && (
                    <div className="mt-4">
                        <h3 className="subtitle has-text-centered">
                            Total de Visualizações: {calcularTotalVisualizacoes()}
                        </h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SuasMusicas;