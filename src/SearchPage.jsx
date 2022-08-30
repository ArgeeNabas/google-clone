import React from 'react'
import './SearchPage.css'
import { useStateValue } from './components/StateProvider'
import useGoogleSearch from './useGoogleSearch'
// import Response from "./response"
import { Link } from 'react-router-dom'
import Search from './components/Search';
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    console.log(data)
    console.log('RIGHT HERE', process.env.REACT_APP_API_KEY)

    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" className='searchPage__logo' alt="" />
                </Link>
                <div
                    className="searchPage__headerBody">
                    <Search hideButtons/>
                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                                <SearchIcon />
                                <Link to="/all"><span className="link__noCursor">All</span></Link>
                            </div>
                            <div className="searchPage__option">
                                <DescriptionIcon />
                                <Link to="/news"><span className="link__noCursor">News</span></Link>
                            </div>
                            <div className="searchPage__option">
                                <ImageIcon />
                                <Link to="/all"><span className="link__noCursor">Images</span></Link>
                            </div>
                            <div className="searchPage__option">
                                <LocalOfferIcon />
                                <Link to="/shopping"><span className="link__noCursor">Shopping</span></Link>
                            </div>
                            <div className="searchPage__option">
                                <RoomIcon />
                                <Link to="/maps"><span className="link__noCursor">Maps</span></Link>
                            </div>
                            <div className="searchPage__option">
                                <MoreVertIcon />
                                <Link to="/more"><span className="link__noCursor">More</span></Link>
                            </div>
                        </div>
                        <div className="searchPage__optionsRight">
                            <div className="searchPage__option">
                                <Link to="/settings"><span className="link__noCursor">Settings</span></Link>
                            </div>
                            <div className="searchPage__option">
                                <Link to="/tools"><span className="link__noCursor">Tools</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {true && (
                <div className="searchPage__results">
                    <p className="searchPage__resultCount">
                        About {data?.searchInformation.formattedTotalResults} results (
                        {data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>

                    {data?.items.map((item) => (
                        <div
                            className="searchPage__result">
                            <a href={item.link}>
                                {item.pagemap?.cse_image?.
                                    length > 0 && item.pagemap?.
                                        cse_image[0]?.src && (
                                        <img
                                            className="searchPage__resultImage"
                                            src={
                                                item.pagemap?.
                                                    cse_image[0]?.src
                                            }
                                        />
                                    )}
                                {item.displayLink}
                            </a>
                            <a className="searchPage__resultTitle" href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className="searchPage__resultSnippet">{item.snippet}</p>
                        </div>
                    ))}
                </div>
            )}

        </div>
    )
}

export default SearchPage