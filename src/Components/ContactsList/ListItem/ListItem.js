import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

class ListItem extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const { contacts, onClick } = this.props;
    return contacts.map((item) => (
      <li className={styles.listItem} key={item.id}>
        <p className={styles.itemText}>
          {item.name}: {item.number}
        </p>
        <button
          className={styles.deleteBtn}
          type="button"
          onClick={() => onClick(item.id)}
        >
          Delete
        </button>
      </li>
    ));
  }
}

export default ListItem;
