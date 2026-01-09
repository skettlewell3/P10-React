import FooterLink from "./FooterLink";
import FooterCenter from "./FooterCenter";

export default function FooterNav({ handleSubmit }) {
  return (
    <footer id="footerNav">
      <nav id="navBarFooter">
        <FooterLink
          label="News"
          icon="/assets/svg/newsSVG.svg"
          to="/news"
          disabled
        />
        <FooterLink
          label="Stats"
          icon="/assets/svg/tabletSVG.svg"
          to="/stats"
        />
        <FooterCenter
          label="Predict"
          icon="/assets/svg/predictsvg.svg"
          to="/predict"
          handleSubmit={handleSubmit}
        />
        <FooterLink
          label="Review"
          icon="/assets/svg/pointsheetsvg.svg"
          to="/review"
        />
        <FooterLink
          label="Boards"
          icon="/assets/svg/trophySVG.svg"
          to="/boards"
        />
      </nav>
    </footer>
  );
}
