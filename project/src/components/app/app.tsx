import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

import Main from '../main/main';
import SignIn from '../sing-in/sing-in';
import MyList from '../my-list/my-list';
import MoviePage from '../movie-page/movie-page';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../loading-screen/loading-screen';

import {useAppSelector} from '../../hooks';

import { Review } from '../../types/reviews';

type AppProps = {
  reviews: Review[];
}

function App({reviews}: AppProps): JSX.Element {
  const { films, isDataLoaded } = useAppSelector((state) => state);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main/>}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyList films={films}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePage films={films} reviews={reviews}/>}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview films={films}/>}
        />
        <Route
          path={AppRoute.Player}
          element={<Player films={films}/>}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
