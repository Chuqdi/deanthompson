import { Icon } from '@iconify/react';




function Main () {
  const options = [
    {
      title: "INVESTMENT ADVISER",
      description:
        "An investment adviser is paid for providing advice about securities to clients. In addition, some investment advisers manage investment portfolios and offer financial planning services.",
      icon: "fluent:person-info-20-regular",
    },
    {
      title: "DIGITAL CURRENCY TRADING",
      description:
        "Unlike other digital trading firms, customer education is our priority. We curate educational materials and relevant news contents, from time to time for our clients and also supply them with daily crypto signals, so they can trade for themselves and yield returns on investment.",
      icon: "mdi:help-network-outline",
    },
    {
      title: "FINANCIAL CONSULTING",
      description:
        "On first contact, we analyze your financial situation we analyze your financial situation, and we have series of consultation sessions to determine your best path to financial freedom while achieving your retirement goals.",
      icon: "mdi:airplane-find",
    },
    
  ];
  return (
    <div className="flex flex-col md:flex-row items-start gap-8 px-1.25rem md:px-6.25rem pb-6.25rem">
      {options.map((option, index) => (
        <SingleOption
          isMiddle={index === 1}
          option={option}
          key={`resume_${index}`}
        />
      ))}
    </div>
  );
}

function SingleOption({
  option,
  isMiddle,
}: {
  option: { title: string; description: string; icon: string };
  isMiddle: boolean;
}) {
  return (
    <div
      className={`flex shadow-lg flex-col gap-3 items-center justify-center flex-1 cursor-pointer  rounded p-4 transition-all ${
        isMiddle ? "bg-appBlue text-white hover:bg-white hover:text-black mt-0 md:-mt-10" : "bg-white text-black hover:bg-appBlue hover:text-white"
      }`}
    >
       <Icon className={`${isMiddle?'':''} w-10 h-10`} icon={option.icon} />
      <h4
        className={`font-bricolageGrotesque text-xl text-center font-bold`}
      >
        {option.title}
      </h4>
      <p className="font-inter text-center">
        {option.description}
      </p>
    </div>
  );
}

export default Main;
