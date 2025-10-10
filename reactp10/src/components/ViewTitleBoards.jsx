import LensSelect from "./GwNav/LensSelect";

export default function ViewTitleBoards({ title, activelens, setActiveLens }) {
    return (
        <div id="viewTitleBoards">
            {String(title).toUpperCase()}
            <LensSelect 
                activeLens={activelens}
                setActiveLens={setActiveLens}
            />
        </div>
    )
}