import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Articles from './mock/mock-data-for-articles';
import ArticleSection from './article-section';

const Routing = ({ sectionData, isLoggedIn }) => {
  let ArticlesView = <div className="main-controller">
    <ArticleSection articles={sectionData.articles}
                    selectedArticle={sectionData.selectedArticle}
                    selectArticle={sectionData.selectArticle}
                    deleteArticle={sectionData.deleteArticle}
                    enableEditMode={sectionData.enableEditMode}
                    isEditMode={sectionData.isEditMode}
                    updateArticle={sectionData.updateArticle}
    />
  </div>

  return (
    <Switch>
      {Articles.map((route) => (
        <Route
          path={route.path}
          exact={true}
          render={() => ArticlesView}
        />
      ))}
    </Switch>
  )

}

export default Routing


