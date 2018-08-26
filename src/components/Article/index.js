import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.less";

import Title from "./Title";
import Body from "./Body";
import Profile from "./Profile";

const ArticleProps = {
  titleContent: PropTypes.string,
  date: PropTypes.string,
  authorName: PropTypes.string,
  backgroundImgURL: PropTypes.string,

  articleContent: PropTypes.string,

  profilePictureURL: PropTypes.string,
  profileContent: PropTypes.object,
  contactURLs: PropTypes.object,

  style: PropTypes.object
};

const DefaultArticleProps = {
  titleContent: "",
  date: "",
  author: "",
  backgroundImgURL: "",

  articleContent: "",

  profilePictureURL: "",
  profileContent: {
    authorName: "",
    introduction: ""
  },
  contactURLs: {
    facebookURL: "#",
    twitterURL: "#",
    weiboURL: "#",
    myWebsiteURL: "#"
  }
};

class Article extends PureComponent {
  render() {
    const {
      style,
      titleContent,
      date,
      author = {},
      backgroundImgURL,
      articleContent,
      tutorialType,
      profilePictureURL,
      profileContent,
      contactURLs
    } = this.props;

    const { username, nickname, avatar, bio } = author;

    return <div className={styles.article}>
        <Title titleContent={titleContent} date={date} authorName={nickname} backgroundImgURL={backgroundImgURL} tutorialType={tutorialType} />
        <Body articleContent={articleContent} />
        <Profile profilePictureURL={avatar} profileContent={{
          authorName: nickname,
          introduction: bio
        }} />
      </div>;
  }
}

Article.propTypes = ArticleProps;

Article.defaultProps = DefaultArticleProps;

export default Article;
