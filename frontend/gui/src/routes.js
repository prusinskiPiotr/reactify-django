import React from 'react';
import { Route } from 'react-router-dom';

import ArticleList from './containers/ArticleListView';


const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ArticleList} />
        <Route exact path='/:articleID' component={ArticleList} />
    </div>
);

export default BaseRouter
