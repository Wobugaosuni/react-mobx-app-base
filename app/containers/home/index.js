import React from 'react';
import {Link} from 'react-router-dom';
import {observer} from 'mobx-react';

import StoreHome from './store-home';
import './index.styl';

const store = new StoreHome();

@observer
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div role="containers:Home">
        <Link to="/todo">{store.title}</Link>
      </div>
    );
  }

}

export default Home;
