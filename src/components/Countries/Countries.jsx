import { useEffect, useState } from "react";
import axios from "axios";

function Countries() {
  const [countriesData, setCountriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  //making an http request to fetch the countries data
  //   async function getCountriesData() {
  //     const url = "https://restcountries.com/v3.1/all";
  //     try {
  //       const response = await fetch(url);
  //       if (!response.ok) {
  //         throw new Error(`Response status: ${response.status}`);
  //       }

  //       const json = await response.json();
  //       setCountriesData(json);
  //       setIsLoading(false);
  //       console.log(json);
  //     } catch (error) {
  //       setIsLoading(false);
  //       setIsError(true);
  //       console.error(error.message);
  //     }
  //   }

  async function getCountriesData() {
    const url = "https://restcountries.com/v3.1/all";
    try {
      const response = await axios.get(url); // returns the response
      const data = response?.data;
      setCountriesData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  }

  //For making API Call to an External API
  // 1. The url of the api (the endpoint)
  // 2. We can use either the fetch API or Axios to make the http request
  // 3. We can use the useEffect hook to make that API call after the page is loading

  //useEffect usage for making an api call
  useEffect(() => {
    getCountriesData();
  }, [countriesData]);

  return (
    <>
      <h1>Counties List</h1>
      <p>list of different countries</p>
      {isLoading && <p>Loading....</p>}
      {isError && (
        <p style={{ color: "red" }}>
          Something went wrong. Please try again later.
        </p>
      )}

      {countriesData.map((country) => {
        return (
          <>
            <p>
              <b>Name of the country:</b> {country.name.common}
            </p>
            <p>
              <b>Population:</b> {country.population}
            </p>
            <img src={country.flags.png} alt="" />
          </>
        );
      })}
    </>
  );
}

export default Countries;
