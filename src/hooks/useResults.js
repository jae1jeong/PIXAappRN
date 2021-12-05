import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default category => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async () => {
    try {
      const response = await yelp.get(`&category=${category}`);
      setResults(response.data.hits);
    } catch (err) {
      console.log(err);
      setErrorMessage('something went wrong');
    }
  };

  useEffect(() => {
    searchApi();
  }, []);

  return [searchApi, results, errorMessage];
};
