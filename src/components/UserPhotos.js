import React from 'react'

const UserPhotos = (props) => {

  const albumTitle = props.location.state.albumTitle
  const listOfUserPhotos = props.location.state.listOfUserPhotos


  const photos = listOfUserPhotos && listOfUserPhotos.length ? listOfUserPhotos.map((photoInfo, index) => {
    return (
      <li className='photoCards'>
        <div className='photoDisplay'>
          <img src={photoInfo.url} alt={photoInfo.title} />
        </div>
        <div className='albumInfoContainer'>
          <p>{index}. {photoInfo.title}</p>
        </div>
      </li>
    )
  }) : <div>loading...</div>

  return (
    <>
      <h2 className='contentTitle'>{albumTitle} <span>(album title)</span></h2>
      <ul className='contentList'>
        {photos}
      </ul>
    </>
  )
}
export default UserPhotos
