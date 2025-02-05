import { TbMovie } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

export const Footer = () => {
  return (
    <div className="bg-[#4238ca] h-[280px] mt-[50px] text-white">
      <div className="max-w-[1280px] m-auto flex justify-between py-[40px]">
        <div>
          <div className="flex items-center gap-[10px] mb-[12px]">
            <TbMovie className="w-[20px] h-[20px]" />
            <p className="text-white italic text-[16px] font-bold">Movie Z</p>
          </div>
          <p className="text-[14px]">© 2024 Movie Z. All Rights Reserved.</p>
        </div>
        <div className="flex gap-[96px]">
          <div>
            <p className="text-[14px] ">Contact Information</p>
            <div className="flex items-center gap-[12px] mt-[12px]">
              <MdOutlineEmail className="w-[16px] h-[16px]" />
              <div>
                <p className="text-[14px]">Email:</p>
                <p className="text-[14px]">support@movieZ.com</p>
              </div>
            </div>
            <div className="flex items-center gap-[12px] mt-[24px]">
              <FiPhone className="w-[16px] h-[16px]" />
              <div>
                <p className="text-[14px]">Phone:</p>
                <p className="text-[14px]">+976 (11) 123-4567</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-[14px]">Follow us</p>
            <div className="flex mt-[12px] gap-[12px]">
              <p className="text-[14px]">Facebook</p>
              <p className="text-[14px]">Instagram</p>
              <p className="text-[14px]">Twitter</p>
              <p className="text-[14px]">Youtube</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
