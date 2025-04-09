import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainData from "./MainData";
import SecondaryComponent from "./SecondaryComponent";

const Main = () => {

  const isGpt = useSelector(state => state.isGpt.enableGptPage);

  return(
    <>
      <Header />
      {isGpt ? <GptSearch /> :
      <>
        <MainData />
        <SecondaryComponent /> 
        </>
      }
    </>
  )
}

export default Main;