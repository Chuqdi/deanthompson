"use client"
import { useRouter } from "next/navigation";
import Button from "../common/Button";

function  Main() {
  const router = useRouter();
  return (
    <div className="flex flex-col-reverse md:flex-row  px-1.25rem md:px-6.25rem items-center py-6.25rem gap-16 ">
      <div className="flex-[1.5] flex-col gap-8 flex">
        <h5 className="text-base font-inter text-white w-3/5">Dean Hurst Thompson</h5>
        <h3 className="text-white font-bricolageGrotesque text-5xl">
          I’m a Financial Adviser & Broker
        </h3>
        <p className="text-white font-inter text-sm">
        With 55 states Registeration and license and over 21 years experience working as a financial consultant, Digital Assets Manager/Stockbroker and investment advisor for individuals and some of the top trading firms in Wall Street.
        </p>
        <Button onClick={()=>router.push("/#experience")} variant="secondary" title="Check resume" />
      </div>

      <img alt="Dean Hurst Thompson" className=" rounded-[20rem] w-full md:w-[10rem] h-auto flex-1 " src="/images/DeanHurstThompson.jpeg" />
    </div>
  );
}

export default Main;