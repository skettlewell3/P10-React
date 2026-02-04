import { useLocation } from "react-router-dom";
import SubjectSelectSVG from "./SubjectSelectSVG";
import ViewTitle from "./ViewTitle";
import ViewTitleBoards from "./ViewTitleBoards";
import ViewTitleClubs from "./ViewTitleClubs";

export default function ViewTitleContainer({ 
    variant = "default",
    subjectType, 
    setSubjectType, 
    title, 
    activeLens, 
    setActiveLens,
    highlightedClub,
    setHighlightedClub,
    clubs
}) {

  let TitleComponent;

  switch (variant) {
    case "boards":
      TitleComponent = ViewTitleBoards;
    break;

    case "clubs": 
      TitleComponent = ViewTitleClubs;
    break;
    
    default:
      TitleComponent = ViewTitle;    
  }
 
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
