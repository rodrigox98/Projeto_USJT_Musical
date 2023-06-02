import React from 'react';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import "./search.css"

import { HiMagnifyingGlass } from "react-icons/hi2"

class Search extends React.Component {
  state = {
    nomeArtista: '',
    songs: [],
  };

  handleClick = () => {
    const { nomeArtista } = this.state;
    this.setState({ nomeArtista: '' }, async () => {
      const songs = await searchAlbumsAPI(nomeArtista);
      this.setState({
        songs,
        nomeArtista: '',
      });
    });
  };
  
  render() {
    const { nomeArtista, songs } = this.state;
    console.log(songs)
    const MIN_LENGTH = 2;
    return (
      <div class='body'>
        <div className="content">
          <nav>
            <form className="form">
              <div>
                <input
                  type="text"
                  placeholder="Nome do Artista"
                  value={ nomeArtista }
                  onChange={ ({ target }) => this.setState({
                    nomeArtista: target.value,
                  })}
                />
                <HiMagnifyingGlass/>
              </div>
              <button
                type="submit"
                onClick={ this.handleClick }
                disabled={ nomeArtista.length < MIN_LENGTH }
                >
              </button>
            </form>
          </nav>
        </div>
        <div className="content_second">
          {songs.map(({
            artistName,
            collectionId,
            trackName,
            artworkUrl100,
            previewUrl
          }) => (
            <div className="container_search">
              <div key={ collectionId } className="container_block">
                <div className="artist">
                  <img src={ artworkUrl100 } alt={ artistName } className="song_img"/>
                  <h2>{ trackName }</h2>
                  <p>{ artistName }</p>
                </div>
                <div className="audio">
                  <audio src={ previewUrl } controls>
                    <track kind="captions" />
                    O seu navegador não suporta o elemento
                    {' '}
                    <code>audio</code>
                  </audio>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Search;
