export default function NavBarFooter() {
    return (
        <footer id="footerNav">
            <nav id="navBarFooter">                
                <a href="#" className="footerItem" id="navNews">
                    <img src="/assets/svg/newsSVG.svg" alt="news"  class="icon"/>
                    News
                </a> 
                <a href="#" className="footerItem" id="navStats">
                    <img src="/assets/svg/tabletSVG.svg" alt="stats"  class="icon"/>
                    Stats
                </a> 
                
                <a href="#" id="navPredict" class="footerCenter">
                    Predict
                    <img src="/assets/svg/predictsvg.svg" alt="predict" class="icon" />
                </a>
                                
                <a href="#" className="footerItem" id="navReview">
                    <img src="/assets/svg/pointsheetsvg.svg" alt="review"  class="icon"/>
                    Review
                </a> 
                <a href="#" className="footerItem" id="navBoards">
                    <img src="/assets/svg/trophySVG.svg" alt="boards"  class="icon"/>
                    Boards
                </a> 
            </nav>
        </footer>
    );
}