const APIKEY="20233114"

export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
  }
  
  export function getMovies(titulo) {
    return async function(dispatch) {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${titulo}`);
        const payload = await response.json();
        dispatch({ type: "GET_MOVIES", payload });
    };
  }

  export function getMovieDetail(id){
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&i=${id}`)
          .then(response => response.json())
          .then(json => {
            dispatch({ type: "GET_MOVIES_DETAIL", payload: json });
          });
      };

  }
  export function removeMovieFavorite(id){
    return { type: "REMOVE_MOVIE_FAVORITE",payload:id };
  }