import ViewTitle from "../ViewTitle";
import {CURRENT_WEEK} from '../../config';
import FixtureList from "../Fixtures/FixtureList";

export default function NewsView() {
    return (
        <>
            <ViewTitle title={`Gameweek: ${CURRENT_WEEK}`} />  
            <FixtureList gameweek={CURRENT_WEEK} mode="form" />      
        </>
    )
}