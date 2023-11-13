import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CityItem";
import Message from "./Message";

export default function CountryList({ isLoading, cities }) {
  if (isLoading) return <Spinner />;

  const countries = cities.reduce((a, city) => {
    if (!a.map((el) => el.city).includes(city.country))
      return [...a, { country: city.country, emoji: city.emoji }];
  }, []);

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map." />
    );
  return (
    <ul className={styles.countryList}>
      {countries.map((country, index) => (
        <CountryItem country={country} key={index} />
      ))}
    </ul>
  );
}
