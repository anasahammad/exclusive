

const ContactForm = () => {
  return (
    <div style={{boxShadow: '0px 1px 13px 0px rgba(0, 0, 0, 0.05)'}} className="md:w-[60%]  px-8 py-[40px]  rounded-sm">
      <form>
        <div className="grid grid-cols-1 gap-4 mb-8">
            <div className='flex flex-col md:flex-row gap-2'>
            <input type="text" placeholder="Your Name *" className="border-2 bg-[#F5F5F5] p-2 rounded-md" />
          <input type="email" placeholder="Your Email *" className="border-2 bg-[#F5F5F5] p-2 rounded-md" />
          <input type="tel" placeholder="Your Phone *" className="border-2 bg-[#F5F5F5] p-2 rounded-md" />
            </div>
          <textarea placeholder="Your Message" className="border-2 bg-[#F5F5F5] p-2 rounded-md" rows={7}></textarea>
        </div>
       <div className='flex justify-end'>
       <button type="submit" className="bg-[#DB4444] hover:bg-red-600 text-white font-bold py-4 px-12  rounded-md">
          Send Message
        </button>
       </div>
      </form>
    </div>
  );
};
export default ContactForm;