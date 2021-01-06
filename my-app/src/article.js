import React,{useState} from 'react';
import './styles/article.css'

const Article = ({ article, deleteArticle, enableEditMode, isEditMode, updateArticle }) => {
  const [heading, setHeading] = useState(article.heading)
  const [articleDetails, setArticleDetails] = useState(article.articleDetails)

  const handleHeadingChanged = (event) => setHeading(event.target.value)
  const handleArticleDetailsChanged = (event) => setArticleDetails(event.target.value)

  const handleEditOrUpdateButtonClicked = () => {
    if(isEditMode) {
      updateArticle(heading, articleDetails);
    } else {
      enableEditMode(true);
    }
  }

  return (
    <div className="display-article">
      <div className="article-header">
        <div className="label">
          {isEditMode ? <input value={heading} onChange={handleHeadingChanged}/> : article.heading}
        </div>
      </div>
      <div className="article-details">
        {isEditMode ? <input value={articleDetails} onChange={handleArticleDetailsChanged}/> : article.articleDetails}
      </div>
      <div className="actions">
        <div className="action-item" onClick={handleEditOrUpdateButtonClicked}>{isEditMode ? 'Update' : 'Edit'}</div>
        <div className="action-item" onClick={deleteArticle}>Delete</div>
      </div>
    </div>
  );
}

export default Article;
