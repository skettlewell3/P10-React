import SubjectSelect from "./SubjectSelect";
import ViewTitle from "./ViewTitle";

export default function ViewTitleContainer( {subjectType, setSubjectType, title} ) {
    return (
        <div id="titleContainer">
            <ViewTitle title={title}/>
            <SubjectSelect 
                subjectType={subjectType}
                setSubjectType={setSubjectType}
            />
        </div>
    )
}