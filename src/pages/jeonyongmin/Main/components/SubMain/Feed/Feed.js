import React from 'react';
import Comment from './components/Comment';
import './Feed.scss';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      buttonColor: false,
      commentList: [],
    };
    this.inputLocation = React.createRef();
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/jeonyongmin/commentData.json', {
      method: 'GET',
    })
      .then(result => result.json())
      .then(data => {
        this.setState({ commentList: data });
      });
  }

  pressEnter = e => {
    if (e.charCode === 13) {
      this.addComment();
    }
  };

  addComment = e => {
    const { commentList, inputValue } = this.state;
    this.setState(
      {
        inputValue: '',
        commentList: [
          ...commentList,
          {
            id: commentList.length + 1,
            name: 'yongmin',
            comment: inputValue,
          },
        ],
      },
      () => {
        this.setState({ buttonColor: false });
        this.inputLocation.current.value = '';
        this.inputLocation.current.focus();
        console.log(this.state);
      }
    );
  };

  handleCommentInput = e => {
    this.setState({ inputValue: e.target.value }, this.validation);
  };

  validation = () => {
    const { inputValue } = this.state;
    const condition = inputValue.length > 0;
    this.setState({ buttonColor: condition });
  };

  render() {
    const { inputValue, buttonColor, commentList } = this.state;
    const conditionOfButtonActivated = inputValue.length > 0;

    return (
      <>
        <article className="sectionArticle">
          <div className="sectionArticleUser">
            <div>
              <img
                src={this.props.profileImg}
                alt="drake profile"
                className="sectionArticleUserImg"
              />
              <a href="" className="sectionArticleUsername">
                {this.props.name}
              </a>
            </div>
            <button className="sectionArticleModal">
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
          <img
            src={this.props.feedImg}
            alt="feed image"
            className="sectionArticleImg"
          />
          <div className="sectionArticleContainer">
            <div className="sectionArticleIconbar">
              <div className="sectionArticleIconbarLeftSide">
                <button className="sectionArticleLikeButton">
                  <i className="far fa-heart"></i>
                </button>
                <button className="sectionArticleCommentButton">
                  <i className="far fa-comment"></i>
                </button>
                <button className="sectionArticleUploadButton">
                  <i className="far fa-paper-plane"></i>
                </button>
              </div>
              <button className="sectionArticleBookmarkButton">
                <i className="far fa-bookmark"></i>
              </button>
            </div>
            <button className="sectionArticleLikeNumber">
              {this.props.like}
            </button>
            <div>
              <div className="sectionArticleCommentList">
                <p>
                  <a href="#" className="sectionArticleUserlink">
                    {this.props.name}
                  </a>
                  {this.props.comment}
                  <button className="sectionArticleShowFullComment">
                    더 보기
                  </button>
                </p>
                <div className="sectionArticleCommentlistScroll">
                  <ul className="sectionArticleComment">
                    {commentList.map((element, index) => {
                      return (
                        <Comment
                          key={element.id}
                          name={element.name}
                          comment={element.comment}
                        />
                      );
                    })}
                  </ul>
                </div>
              </div>
              <p className="sectionArticleSinceCommentTime">42분 전</p>
            </div>
          </div>
          <div className="sectionArticleCommentInputContainer">
            <button>
              <i className="far fa-smile"></i>
            </button>
            <input
              placeholder="댓글 달기..."
              className="sectionArticleCommentInput"
              maxLength="25"
              onChange={this.handleCommentInput}
              onKeyPress={this.pressEnter}
              ref={this.inputLocation}
            />
            <button
              type="button"
              className={
                buttonColor
                  ? 'sectionArticleCommentUploadActive'
                  : 'sectionArticleCommentUpload'
              }
              disabled={conditionOfButtonActivated ? false : true}
              onClick={this.addComment}
            >
              게시
            </button>
          </div>
        </article>
      </>
    );
  }
}

export default Feed;
