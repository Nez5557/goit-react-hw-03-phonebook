import { Component } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

class Filter extends Component {
  static defaultProps = {
    value: "",
  };

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
  };
  render() {
    const inputId = shortid.generate();
    const { onChange, value } = this.props;
    return (
      <label className={styles.filterLabel} htmlFor={inputId}>
        Search
        <input
          id={inputId}
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </label>
    );
  }
}

export default Filter;
