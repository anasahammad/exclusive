import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";


const Contact = () => {
    return (
        <div className="py-12">
           <div className="container mx-auto ">
      <div className="flex flex-col md:flex-row justify-between">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
        </div>
    );
};

export default Contact;