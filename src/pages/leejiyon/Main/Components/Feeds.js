import React, { Component } from 'react';
import Article from './Article';
import '../../../../styles/leejiyon/common.scss';

class Feeds extends Component {
  state = {
    articleList: [],
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/leejiyon/articledata.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          articleList: data,
        });
      });
  }
  render() {
    return (
      <>
        <div className="feeds">
          {this.state.articleList.map(article => {
            return (
              <Article
                key={`${article.header.headerId}${article.header.alt}`}
                header={article.header}
                articleImg={article.articleImg}
                myComment={article.myComment}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default Feeds;
