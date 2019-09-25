import React from "react";

function Comments({ comments }) {
  return (
    <>
      {comments.map(comment => (
        <div className="comment-wrapper" key={comment.id}>
          <img
            src={comment.author.avatar}
            sizes="32px"
            alt=""
            className="user-avatar"
          />
          <div className="comment-content">
            <p className="text-content">
              <span className="user-name">{comment.author.name}</span>
               {comment.content}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

function Post({ author, date, content, comments }) {
  return (
    <>
      <div className="post">
        <div className="post-creator">
          <a href="#" className="div-block w-inline-block">
            <img src={author.avatar} alt="" className="user-avatar" />
          </a>
          <div className="post-creator-text">
            <h1 className="user-name">{author.name}</h1>
            <div className="post-date">{date}</div>
          </div>
        </div>
        <div className="post-content-wrapper">
          <p className="text-content">{content}</p>
        </div>
        {comments.length > 0 && (
          <div>
            <div className="separator-line" />
            <div className="comments-container">
              <Comments comments={comments} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Post;
