import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';
import styled from 'styled-components';

import './Movie.css';

const Contenedor= styled.div`
   text-align: center;
   margin-top:100px;

`

class Movie extends React.Component {
   componentDidMount(){
    let {id}=this.props.match.params
    console.log(id)
    console.log(this.props)
    this.props.getMovieDetail(id)
   }


    render() {
        return (
            <Contenedor>
            <div className="movie-detail">
                <h1>Detalle de la pelicula</h1>
                <h2>{this.props.detail.Title}</h2>
                <h3>Actores: {this.props.detail.Actors}</h3>
                <img src={this.props.detail.Poster}></img>
            </div>
            </Contenedor>
        );
    }
}



export default connect((state)=>({detail:state.movieDetail}),{getMovieDetail})(Movie);