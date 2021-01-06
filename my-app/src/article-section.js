import React from 'react';
import Sidebar from './sidebar';
import Article from './article';
import './styles/article-section.css';

const ArticleSection = ({ articles, selectedArticle, selectArticle, deleteArticle, enableEditMode, isEditMode, updateArticle }) => {
  let listOfArticles = Object.entries(articles).map((article) => {
    return {id: article[1].id, heading: article[1].heading, path: article[1].path};
  });
  return (
    <div className={'article-section'}>
      <Sidebar list={listOfArticles} selectArticle={selectArticle}/>
      <Article article={selectedArticle}
               deleteArticle={deleteArticle}
               enableEditMode={enableEditMode}
               isEditMode={isEditMode}
               updateArticle={updateArticle}/>
    </div>
  );
};

export default ArticleSection;
