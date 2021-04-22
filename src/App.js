import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';
import NavBar from './components/Navbar';
import Header from './components/Header';

const APIKEY = '12d47eadb7bade3dfdef75db545e889f';
const APIURL = "https://api.themoviedb.org/3/search/movie";

function fetchMovies(search) {
  return fetch(APIURL + '?api_key=' + APIKEY + '&query=' + search)
        .then(response => response.json());
} 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      count: 0
    }
  }

  searchMovies = (search = '') => {
      if(search.length < 3) {
        return
      }
      fetchMovies(search).then(response => {
        this.setState({
          movies : response.results,
          count: response.total_results
        });
      }); 
  }
  componentDidMount() {
    this.searchMovies('django')
  }
  render() {
    return (
      <React.Fragment>
        <NavBar logo={logo} onSearchMovie={this.searchMovies} clickScrolling={this.scroll}/>
        <Header logo={logo} clickScrolling={this.scroll}/>
        <main className="container">
          <MovieList movies={this.state.movies}/>
        </main>
      </React.Fragment>
      
    );
  }

  scroll = () => {
    window.scrollTo({
      top: 600,
      left: 0,
      behavior: 'smooth'
  });
  }
}

export default App;