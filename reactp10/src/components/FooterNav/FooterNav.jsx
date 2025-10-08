import FooterLink from "./FooterLink";
import FooterCenter from "./FooterCenter";

export default function FooterNav({ activeView, setActiveView, handleSubmit }) {
  return (
    <footer id="footerNav">
      <nav id="navBarFooter">
        <FooterLink
          label="News"
          icon="/assets/svg/newsSVG.svg"
          id="navNews"
          activeView={activeView}
          setActiveView={setActiveView}
        />
        <FooterLink
          label="Stats"
          icon="/assets/svg/tabletSVG.svg"
          id="navStats"
          activeView={activeView}
          setActiveView={setActiveView}
        />
        <FooterCenter
          label="Predict"
          icon="/assets/svg/predictsvg.svg"
          id="navPredict"
          activeView={activeView}
          setActiveView={setActiveView}
          handleSubmit={handleSubmit}
        />
        <FooterLink
          label="Review"
          icon="/assets/svg/pointsheetsvg.svg"
          id="navReview"
          activeView={activeView}
          setActiveView={setActiveView}
        />
        <FooterLink
          label="Boards"
          icon="/assets/svg/trophySVG.svg"
          id="navBoards"
          activeView={activeView}
          setActiveView={setActiveView}
        />
      </nav>
    </footer>
  );
}