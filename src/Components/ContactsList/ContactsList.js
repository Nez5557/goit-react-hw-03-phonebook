import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

class ConctactsList extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children } = this.props;
    return <ul className={styles.contactsList}>{children}</ul>;
  }
}

export default ConctactsList;
