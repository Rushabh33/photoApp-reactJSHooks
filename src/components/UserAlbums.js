import React from 'react'
import { Link } from 'react-router-dom'

const UserAlbums = (props) => {

  const listOfUserAlbums = props.location.state.listOfUserAlbums
  const listOfUserPhotos = props.location.state.listOfUserPhotos
  const userName = props.location.state.userName

  const albums = listOfUserAlbums && listOfUserAlbums.length ? listOfUserAlbums.map((albumInfo, index) => {
    return (
      <li className='contentCards'>
        <Link className='linkRoute' to={{
          pathname: '/photos',
          state: {
            albumTitle: albumInfo.title,
            listOfUserPhotos: listOfUserPhotos[index] // 50 songs
          }
        }}>
          <div className='albumThumbnail'>
            <img src={listOfUserPhotos[index][0].thumbnailUrl} alt={listOfUserPhotos[index][0].title} />
          </div>
          <div className='albumInfoContainer'>
            <p className='albumNumber'>Album number {index}</p>
            <p>{albumInfo.title}</p>
          </div>
        </Link>
      </li>
    )
  }) : <div>loading...</div>

  return (
    <>
      <h2 className='contentTitle'>{userName}</h2>
      <ul className='contentList'>
        {albums}
      </ul>
    </>
  )
}

export default UserAlbums
