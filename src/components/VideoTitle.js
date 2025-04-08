const VideoTitle = ({title, overview}) => {
  return(
    <div className="text-white pt-36 px-12 absolute bg-gradient-to-r from-black w-screen aspect-video bg-black-100 opacity-100 z-50">
      <h1 className="font-bold py-2">{title}</h1>
      <p className="w-1/4">{overview}</p>
      <div className="my-4">
        <button className="p-4 px-12 rounded-2xl text-xl text-white bg-gray-400 hover:bg-gray-600">Play</button>
        <button className="p-4 px-12 rounded-2xl text-xl text-white bg-gray-400 mx-2 hover:bg-gray-600">Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;