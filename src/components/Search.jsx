import React, { useState } from 'react'
import './Search.css'
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Search({hideButtons} = false) {
  const [{}, dispatch] = useStateValue();
  console.log('CHECK HERE', hideButtons)

  const [input, setInput] = useState('')
  const history = useNavigate()

  const search = (e) => {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    })

    history('/search')
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__input--icon" />
        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
        <MicIcon />
      </div>
      {!hideButtons ?
        (<div className="search__buttons">
          <Button onClick={search} variant='outlined' type='submit'>Google Search</Button>
          <span className="button__noCursor"><Button disabled>I'm Feeling Lucky</Button></span>
        </div>) :
        (<div className="search__buttons">
          <Button className='search__buttons--hidden' onClick={search} variant='outlined' type='submit'>Google Search</Button>
          <Button className='search__buttons--hidden' variant='outlined'>I'm Feeling Lucky</Button>
        </div>)}
    </form>
  )
}

export default Search