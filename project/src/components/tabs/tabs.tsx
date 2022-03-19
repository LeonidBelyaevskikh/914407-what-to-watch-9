import Details from './details';
import Overview from './overview';
import Reviews from './reviews';

import {TabNames} from '../../const';
import {Link} from 'react-router-dom';
import {Film} from '../../types/films';
import {Review} from '../../types/reviews';
import {useState} from 'react';

type TabsProps = {
  film: Film,
  reviews: Review[]
}

function Tabs({film,reviews}: TabsProps): JSX.Element {

  const [activeTab, setActiveTab] = useState<string>(TabNames.Overview);
  const handleClick = (name: string) => {
    setActiveTab(name);
  };

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {Object.keys(TabNames).map((tab) => (
            <li
              key={tab}
              className="film-nav__item"
              onClick={() => handleClick(tab)}
            >
              <Link to={'#'} className="film-nav__link">{tab}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {activeTab === TabNames.Details && <Details film={film}/>}
      {activeTab === TabNames.Overview && <Overview film={film}/>}
      {activeTab === TabNames.Reviews && <Reviews reviews={reviews}/>}
    </>
  );
}
export default Tabs;
