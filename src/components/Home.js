import React from 'react'
import {Link, useRouteMatch} from 'react-router-dom'

const HomePage = () => {
    const { url } = useRouteMatch()

    return(
        <div>
          <h1>You favorite food delivered while coding</h1>
          <Link to={`${url}pizza`}>
              <button id = 'order-pizza'>order-pizza</button>
          </Link>
    
        </div>
    );
};

export default HomePage;