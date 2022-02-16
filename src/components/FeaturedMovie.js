import React from 'react';
import './FeaturedMovie.css';
import { FaPlay, FaPlus, FaSearch } from 'react-icons/fa';

export default ({ item }) => {
    console.log(item);

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres) {
        genres.push( item.genres[i].name );
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">
                        {item.original_name}
                    </div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--description">{item.overview}</div>
                    <div className="featured--buttons">
                        <a href='/watch/${item.id}' className="featured--watchbutton"><FaPlay size={13} /> Assistir</a>
                        <a href='/list/add/${item.id}' className="featured--mylistbutton"><FaPlus size={13} /> Minha lista</a>
                    </div>
                    <div className="featured--genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
                </div>
            </div>
        </section>
    );
}