import ContactSection from "./ContactSection";
import AddressSection from "./AddressSection";
import HoursSection from "./HoursSection";
import ModalCardHeader from "./ModalCardHeader";
import LogoSection from "./LogoSection";

const sectionComponents = {
    contact: ContactSection,
    address: AddressSection,
    hours: HoursSection,
};

export default function BusinessModal({ Business, handleCloseModal }) {
    if (!Business) {
        console.warn("BusinessModal called with undefined Business");
        return null;
    }

    return (
        <div id="teamModalCard">
            <div class="modalCardBody">
                <ModalCardHeader
                    closeModal={handleCloseModal}
                />
                <LogoSection logo={Business.img} alt={Business.alt} title={Business.title}/>
                {Business.modalLayout.map((sectionName, i) => {
                    const SectionComponent = sectionComponents[sectionName.replace("Section", "").toLowerCase()];
                    if (!SectionComponent) return null;

                    if (sectionName === "HoursSection") {
                        return <SectionComponent key={i} hours={Business.hours} />;
                    } else if (sectionName === "AddressSection") {
                        return <SectionComponent key={i} address={Business.address} />;                        
                    } else if (sectionName === "ContactSection") {
                        return (
                            <SectionComponent 
                                key={i}
                                email={Business.email}
                                tel={Business.tel}
                                web={Business.web}
                            />
                        );
                    }
                    return null;
                })}
            </div>
        </div>        
    );
}
