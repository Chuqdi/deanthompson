import { Icon } from "@iconify/react/dist/iconify.js";
import useNavbar from "../hooks/useNavbar";
import Link from "next/link";

 function Main ({ close }: { close: () => void }) {
  const options = useNavbar();
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 bg-black p-1.25rem">
      <div className="flex items-center justify-between">
        <h4 className="text-white font-bricolageGrotesque text-2xl">
          DEAN .H. THOMPSON
        </h4>
        <button onClick={close}>
          <Icon color="#fff" className="w-12 h-12" icon="fluent-mdl2:cancel" />
        </button>
      </div>

      <div className="flex flex-col gap-4 mt-8">
        {options.map((option, index) => (
          <Link key={`options_${index}`} onClick={close} className="text-white h-[3rem] flex justify-center items-center  border-b-[#a1a1a1] text-base font-inter text-center border-b-[1px]" href={option.link}>{option.label}</Link>
        ))}
      </div>
    </div>
  );
}

export default Main;