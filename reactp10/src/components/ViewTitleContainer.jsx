import { useLocation } from "react-router-dom";
import SubjectSelectSVG from "./SubjectSelectSVG";
import ViewTitle from "./ViewTitle";
import ViewTitleBoards from "./ViewTitleBoards";

export default function ViewTitleContainer({ 
    subjectType, 
    setSubjectType, 
    title, 
    activeLens, 
    setActiveLens 
}) {

  const location = useLocation();
  
  const TitleComponent = location.pathname.includes("boards") ? ViewTitleBoards : ViewTitle;

  return (
    <div id="titleContainer">
      <TitleComponent 
        title={title}
        activeLens={activeLens}
        setActiveLens={setActiveLens}
      />
      <SubjectSelectSVG 
        subjectType={subjectType}
        setSubjectType={setSubjectType}
      />
    </div>
  );
}
