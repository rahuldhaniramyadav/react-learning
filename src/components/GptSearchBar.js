import { useSelector } from "react-redux";
import lang from "../utils/lang";
import { BODY_IMAGE, LOGO } from "../utils/constant";

const GptSearchBar = () => {

  const selLang = useSelector(state => state.lang)

  return (
    <div className="absolute">
      <img className="" src={BODY_IMAGE} alt="Body Image" />
      <form className="w-1/2">
        <input type="text" name="gpt" placeholder={lang[selLang].gptinputplaceholder} />
        <button type="button">{lang[selLang].gptsearch}</button>
      </form>
    </div>
  )
}

export default GptSearchBar;