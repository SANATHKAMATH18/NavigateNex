function Videos() {
  return (
    <div>
      <h2>Here is a short videos to watch before taking the quiz</h2>
      <div>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/cL_L2H406xc?si=r0LT_9rIOqX89MHx'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/RMnKlUko0RQ?si=_RPTXAp_XwvlOGCq'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          allowfullscreen
        ></iframe>
      </div>
    </div>
  )
}

export default Videos
