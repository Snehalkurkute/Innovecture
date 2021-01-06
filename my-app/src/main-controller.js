import React, { useState } from 'react';
import ArticleSection from './article-section';
import Articles from './mock/mock-data-for-articles';
import Login from './login';
import Routing from './routing';
import  {Redirect
} from "react-router-dom";

const MainController = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [articles, setArticles] = useState(Articles)
  const [activeArticle, setActiveArticle] = useState(Articles[0].id)
  const [editMode, setEditMode] = useState(false)
  const handleDeleteArticle = () => {
    let newArticleList = articles.filter((article) => article.id !== activeArticle)
    setArticles(newArticleList)
    setActiveArticle(newArticleList[0].id)
  }

  const updateArticle = (heading, articleDetails) => {
    let newArticleList = articles.map((article) => {
      if (article.id === activeArticle) {
        article.heading = heading;
        article.articleDetails = articleDetails
      }
      return article
    })
    setEditMode(false)
    setArticles(newArticleList)
  }

  const selectedArticle = articles.find((article) => article.id === activeArticle)
  const sectionData = {
    articles: articles,
    selectedArticle: selectedArticle,
    selectArticle: setActiveArticle,
    deleteArticle: handleDeleteArticle,
    enableEditMode: setEditMode,
    isEditMode: editMode,
    updateArticle: updateArticle
  }

  let viewToRender = isLoggedIn ? <Redirect to={'/a'} /> :
    <Login handleLoginIn={setIsLoggedIn} />

  return (
    <>
      <Routing sectionData={sectionData}
               isLoggedIn = {isLoggedIn}
      />
      {viewToRender}
    </>
  )


}

export default MainController;
