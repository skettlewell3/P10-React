import SubjectSelect from "./SubjectSelect";
import ViewTitle from "./ViewTitle";
import ViewTitleBoards from "./ViewTitleBoards";

export default function ViewTitleContainer( {subjectType, 
    setSubjectType, 
    title, 
    activeLens, 
    setActiveLens, 
    activeView
} ) {   
    const TitleComponent = activeView === "boards" ? ViewTitleBoards : ViewTitle

    return (
        <div id="titleContainer">

            <TitleComponent 
                title={title}
                activeLens={activeLens}
                setActiveLens={setActiveLens}
            />
            <SubjectSelect 
                subjectType={subjectType}
                setSubjectType={setSubjectType}
            />
        </div>
    )
}