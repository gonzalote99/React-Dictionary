import React, {useState} from 'react';
import axios from 'axios';
import './Dictionary.css';
import Results from './Results';
import Photos from './Photos';

export default function Dictionary(props)  {
  let[keyword, setKeyword] = useState(props.defaultKeyword);
  let[results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);


  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
    setKeyword('');
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey = "563492ad6f91700001000001f65adbcb4681495ab80b8486ebf83c2d";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=12`;
    let headers = {Authorization: `Bearer ${pexelsApiKey}`};
    axios.get(pexelsApiUrl, {headers: headers})
    .then(handlePexelsResponse);
              
                             
  }


  function handleSubmit(event) {
    event.preventDefault();
    search();
  }


  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if(loaded) {
    return(
      <div className='Dictionary'>
      <section>
      <h2>search word</h2>
        <form onSubmit={handleSubmit}>
          <input type='search' autoFocus={true}
             placeholder='search' onChange={handleKeywordChange} value={keyword} defaultValue={props.defaultKeyword}
            />
        </form>
        <div className='hint'>suggested words: silcence,fez</div>
      </section>
        <Results results={results} />
        <Photos photos={photos} />
      
      </div>
    );
  } else {
    load();
    return 'loading';
  }
}