import React from 'react'
import './Movie.css'
const MovieCard = ({movie}) => {
  return (
    <div className='body'>
    <div className="bg">
     
    </div>
    <div className="nft">
      <div className="main">
        <img className="tokenImage" src={movie.PosterURL}  alt="NFT" />
        <h2>{movie.Title} </h2>
        <p className="description">{movie.Description} </p>
        <div className="tokenInfo">
        
          <div className="duration">
            <ins></ins>
            <p>{movie.Rate}</p>
          </div>
        </div>
        <hr />
        <div className="creator">
          <div className="wrapper">
            <img src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" alt="Creator" />
          </div>
          <p><ins></ins> Trailer</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MovieCard