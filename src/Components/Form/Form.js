import { Component } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

class Form extends Component {
  static propTypes = {
    sendData: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  inputHandler = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  submitHanlder = (evt) => {
    evt.preventDefault();
    this.props.sendData(this.state);
    this.formReset();
  };

  formReset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const inputName = shortid.generate();
    const inputNumber = shortid.generate();

    return (
      <form onSubmit={this.submitHanlder}>
        <label className={styles.formLabel} htmlFor={inputName}>
          Name
          <input
            id={inputName}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            onChange={this.inputHandler}
            value={this.state.name}
            required
          />
        </label>

        <label className={styles.formLabel} htmlFor={inputNumber}>
          Number
          <input
            id={inputNumber}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            onChange={this.inputHandler}
            value={this.state.number}
            required
          />
        </label>
        <button className={styles.submitBtn} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

export default Form;
