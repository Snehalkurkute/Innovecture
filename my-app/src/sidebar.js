import React  from 'react';
import './styles/sidebar.css';
import Header from './header';
import {
  Link,
} from "react-router-dom";

const Sidebar = ({list, selectArticle}) => {
  return (
    <div className="sidebar">
      <Header/>
      {list.map(({ id, heading, path }) =>
        <Link to ={path}>
        <div className={'list-item'} onClick={() => selectArticle(id)}>{heading}</div>
        </Link>)}
    </div>
  );
};

export default Sidebar;
