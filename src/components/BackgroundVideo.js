import { useSelector } from "react-redux";
import useMainVideo from "./hooks/useMainVideo";

const BackgroundVideo = ({id}) => {
  useMainVideo(id);
  const video = useSelector(state => state.movies?.mainMovie);

  return(
    <div className="absolute w-screen">
      <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/8B1EtVPBSMw?si="+video?.key+"&autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
      </div>
  )
}

export default BackgroundVideo;