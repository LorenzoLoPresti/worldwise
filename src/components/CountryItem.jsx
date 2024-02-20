import styles from "./CountryItem.module.css";
import { flagemojiToPNG } from "./Form";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji && flagemojiToPNG(country.emoji)}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
