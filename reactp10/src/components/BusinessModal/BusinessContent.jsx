import LogoSection from "./LogoSection";
import ContactSection from "./ContactSection"
import AddressSection from "./AddressSection"
import HoursSection from "./HoursSection"

const sectionComponents = {
    contact: ContactSection,
    address: AddressSection,
    hours: HoursSection,
};

export default function BusinessContent({ Business }) {
    if (!Business) {
        console.warn("BusinessContent called with undefined Buisness");
        return null;
    }

    return (
        <>
            <LogoSection
                logo={Business.img}
                alt={Business.alt}
                title={Business.title}
            />

            {Business.modalLayout.map((sectionName, i) =>{

                const key = sectionName
                    .replace("Section", "")
                    .toLowerCase()
                ;

                const SectionComponent = sectionComponents[key];
                if (!SectionComponent) return null;

                switch (sectionName) {
                    case "HoursSection":
                        return (
                            <SectionComponent  
                                key={i}
                                hours={Business.hours}
                            />
                        );                    
                    case "AddressSection":
                        return (
                            <SectionComponent   
                                key={i}
                                address={Business.address}
                            />
                        );
                    case "ContactSection" :
                        return (
                            <SectionComponent   
                                key={i}
                                email={Business.email}
                                tel={Business.tel}
                                web={Business.web}
                            />
                        );
                    default: 
                        return null;                    
                }
            })}
        </>
    )
}