import React from 'react';
import { HiPhone, HiMail } from 'react-icons/hi'; // Importing phone and email icons from react-icons

const ContactInfo = () => {
  return (
    <div style={{boxShadow: '0px 1px 13px 0px rgba(0, 0, 0, 0.05)'}} className="w-[36%] bg-white px-[34px] pt-[40px] pb-[51px]  rounded-sm">
      <div className="flex items-start space-x-4">
        <HiPhone className="bg-[#DB4444] text-white rounded-full p-1" size="24" />
        <div className='font-poppins'>
          <h3 className="text-lg font-semibold ">Call To Us</h3>
          <p className="mb-6">We are available 24/7, 7 days a week.</p>
          <p className="">Phone: +8801608005838</p>
        </div>
      </div>

      <hr className='my-8 w-[300px] flex justify-center items-center'/>
      <div className="flex items-start space-x-4 mt-4">
      <HiMail className="bg-[#DB4444] text-white rounded-full flex justify-center items-center p-1" size="24" />


        <div className='space-y-4'>
          <h3 className="text-lg font-semibold ">Write To Us</h3>
          <p className="">Fill out our form and we will contact you within 24 hours.</p>
          <p className="">Emails: customer@exclusive.com</p>
          <p className="">Emails: support@exclusive.com</p>
        </div>
      </div>
    </div>
  );
};
export default ContactInfo;