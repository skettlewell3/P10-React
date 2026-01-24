import { useLocation } from "react-router-dom";
import SubjectSelectSVG from "./SubjectSelectSVG";
import ViewTitle from "./ViewTitle";
import ViewTitleBoards from "./ViewTitleBoards";
import ViewTitleClubs from "./ViewTitleClubs";

export default function ViewTitleContainer({ 
    subjectType, 
    setSubjectType, 
    title, 
    activeLens, 
    setActiveLens,
    highlightedClub,
    setHighlightedClub,
    clubs
}) {

  const location = useLocation();
  
  const TitleComponent = location.pathname.includes("boards")
    ? ViewTitleBoards 
    : location.pathname.includes("stats") || location.pathname.includes("review") || location.pathname.includes("predict")
      ? subjectType === "user"
        ? ViewTitle
        : ViewTitleClubs
      : ViewTitle
  ;

  return (
    <div id="titleContainer">
      <TitleComponent 
        title={title}
        activeLens={activeLens}
        setActiveLens={setActiveLens}
        highlightedClub={highlightedClub}
        setHighlightedClub={setHighlightedClub}
        clubs={clubs}
      />
      <SubjectSelectSVG 
        subjectType={subjectType}
        setSubjectType={setSubjectType}
      />
    </div>
  );
}
