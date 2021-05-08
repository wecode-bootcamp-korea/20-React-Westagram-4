import React from 'react';
import Comment from './components/Comment';
import './Feed.scss';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      commentList: [],
    };
    this.inputElement = React.createRef();
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/jeonyongmin/commentData.json', {
      method: 'GET',
    })
      .then(result => result.json())
      .then(commentData => {
        this.setState({
          commentList: commentData[this.props.number - 1],
        });
      });
  }

  pressEnter = e => {
    const enterApplyingCondition =
      this.inputElement.current.value.length !== 0 && e.charCode === 13;
    enterApplyingCondition && this.addComment();
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
      this.eraseValueAndFocusText
    );
  };

  eraseValueAndFocusText = () => {
    this.inputElement.current.value = '';
    this.inputElement.current.focus();
  };

  handleCommentInput = e => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    const { inputValue, commentList } = this.state;
    const { profileImg, name, feedImg, like, comment } = this.props;
    const conditionOfButtonActivated = inputValue.length > 0;
    const sectionArticleLeftSideButton = [
      {
        id: 1,
        buttonTagClassName: 'sectionArticleLikeButton',
        iTagClassName: 'far fa-heart',
      },
      {
        id: 2,
        buttonTagClassName: 'sectionArticleCommentButton',
        iTagClassName: 'far fa-comment',
      },
      {
        id: 3,
        buttonTagClassName: 'sectionArticleUploadButton',
        iTagClassName: 'far fa-paper-plane',
      },
    ];
    return (
      <>
        <article className="sectionArticleYM">
          <div className="sectionArticleUser">
            <div>
              <img
                alt={`${name}'s profile img`}
                src={profileImg}
                className="sectionArticleUserImg"
              />
              <a href="" className="sectionArticleUsername">
                {name}
              </a>
            </div>
            <button className="sectionArticleModal">
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
          <img
            alt={`${name}'s feed img`}
            src={feedImg}
            className="sectionArticleImg"
          />
          <div className="sectionArticleContainer">
            <div className="sectionArticleIconbar">
              <div className="sectionArticleIconbarLeftSide">
                {sectionArticleLeftSideButton.map(button => {
                  const { id, buttonTagClassName, iTagClassName } = button;
                  return (
                    <button key={id} className={buttonTagClassName}>
                      <i className={iTagClassName}></i>
                    </button>
                  );
                })}
              </div>
              <button className="sectionArticleBookmarkButton">
                <i className="far fa-bookmark"></i>
              </button>
            </div>
            <button className="sectionArticleLikeNumber">{like}</button>
            <div>
              <div className="sectionArticleCommentList">
                <p>
                  <a href="#" className="sectionArticleUserlink">
                    {name}
                  </a>
                  {comment}
                  <button className="sectionArticleShowFullComment">
                    더 보기
                  </button>
                </p>
                <div className="sectionArticleCommentlistScroll">
                  <ul className="sectionArticleComment">
                    {commentList.map(element => {
                      return (
                        <Comment
                          name={element.name}
                          comment={element.comment}
                          key={element.id}
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
              ref={this.inputElement}
            />
            <button
              type="button"
              className={
                conditionOfButtonActivated
                  ? 'sectionArticleCommentUploadActive'
                  : 'sectionArticleCommentUpload'
              }
              disabled={!conditionOfButtonActivated}
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
