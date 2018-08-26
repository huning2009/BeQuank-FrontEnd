import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./Body.module.less";

import ReactMarkdown from "react-markdown";

const BodyProps = {
  articleContent: PropTypes.string.isRequired
};

const DefaultBodyProps = {};

class Body extends PureComponent {
  render() {
    const { articleContent } = this.props;
    return (
      <div className={styles.articleBody}>
        <ReactMarkdown className={styles.typo} source={articleContent} />
      </div>
    );
  }
}

Body.propTypes = BodyProps;

Body.defaultProps = DefaultBodyProps;

export default Body;
