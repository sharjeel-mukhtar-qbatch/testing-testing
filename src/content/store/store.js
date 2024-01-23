import DetailPage from './detailPage/reducer';
import ListPage from './listPage/reducer';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const reducer = combineReducers({ DetailPage, ListPage });
const store = configureStore({ reducer });

export default store;
