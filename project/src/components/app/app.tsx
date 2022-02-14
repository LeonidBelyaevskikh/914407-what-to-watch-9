import Main from '../main/main';

type Film = {
  name: string,
  genre: string,
  releaseDate: number,
}
type AppProps = {
  promoFilm: Film,
  films: string[],
};

function App({promoFilm, films}: AppProps): JSX.Element {
  return <Main promoFilm={promoFilm} films={films}/>;
}

export default App;
