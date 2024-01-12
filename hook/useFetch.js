import {useState, useEffect} from 'react'
import axios from 'axios'
//import {RAPID_API_KEY} from '@env'

//const rapidApiKey = RAPID_API_KEY

const useFecth = (endpoint, query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    /*
    const options = {
      method: 'GET',
      url: `https://jsearch.p.rapidapi.com/${endpoint}`,
      headers: {
        'X-RapidAPI-Key': 'eb687438acmshfafa65418a0d7a3p1ffcfajsn6733029ddddb', //rapidApiKey
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      },
      params: {...query },
    };
    */

    const options = {
      method: 'GET',
      url: `https://jsearch.p.rapidapi.com/${endpoint}`,
      params: {
        page: '1',
        num_pages: '1'
      },
      headers: {
        'X-RapidAPI-Key': 'c416e2c0fdmsh1513c7abbe45517p180ddejsn6f961f27ae4a',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      },
      params: {...query },
    };

    const fetchData = asyncData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options)
            setData(response.data.data)
            //console.log(response.data.data)
            setIsLoading(false);
        } catch (error) {
            setError(error)
            console.log(error)

            alert('There is an error occurred')
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return {data, isLoading, error, refetch}
}

export default useFecth;

/*
 query: 'Python developer in Texas, USA',
        page: '1',
        num_pages: '1'
*/