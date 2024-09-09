import Link from "next/link";
import Button from "../common/Button";
import Input from "../common/Input";
import { Icon } from "@iconify/react/dist/iconify.js";

function Main() {
  const socials = [
    {
      icon: "logos:whatsapp-icon",
      link: "https://wa.link/bkbjkt",
      title: "WhatsApp",
    },
    {
      icon: "skill-icons:instagram",
      link: "https://www.instagram.com/dean.h.thompson?igsh=MXNpYTNndmE0b2NtNw==",
      title: "Instagram",
    },
    {
      icon: "logos:telegram",
      link: "https://t.me/+1(571)630-2827",
      title: "+1(571)630-2827",
    },
    {
      icon: "streamline:send-email-solid",
      link: "mailto:me@deanhurstthompson.com",
      title: "me@deanhurstthompson.com",
    },
    {
      icon: "subway:call-1",
      link: "tel:+1(571)630-2827",
      title: "Call me on +1(571)630-2827",
    },
  ];
  return (
    <form
      id="contact"
      className="px-1.25rem md:px-6.25rem bg-[#212121] py-6.25rem w-full"
    >
      <div>
        <h5 className="text-white text-center font-bold font-bricolageGrotesque text-5xl uppercase">
          Contact me
        </h5>
        <h3 className="text-center text-white font-inter w-4/5 md:w-2/5 mx-auto">
         You could write me a direct message or use my social accounts.
        </h3>
      </div>

      <div className="flex flex-col gap-10 md:gap-5 md:flex-row w-full  mx-auto mt-10">
        {socials.map((social, index) => (
          <div className="flex-1 " key={`social_${index}`}>
            <Link
              className="flex items-center flex-col justify-center gap-2"
              href={social.link}
              target="__blank"
            >
              <Icon color="#fff" className="w-12 h-12" icon={social.icon} />
              <h3 className="text-appBlue font-xl font-bricolageGrotesque">
                {social.title}
              </h3>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex gap-4 w-full mt-10">
        <div className="flex-1">
          <label>First name</label>
          <Input placeholder="Please enter your full name" />
        </div>

        <div className="flex-1">
          <label>Last name</label>
          <Input placeholder="Please enter your full name" />
        </div>
      </div>

      <div className="flex gap-4 w-full mt-10">
        <div className="flex-1">
          <label>Email</label>
          <Input type="email" placeholder="Please enter your email address" />
        </div>
      </div>

      <div className="flex gap-4 w-full mt-10">
        <div className="flex-1">
          <label>Message</label>
          <textarea
            placeholder="Enter message here..."
            className="w-full h-[8rem] rounded p-3"
          ></textarea>
        </div>
      </div>

      <div className="mt-4">
        <Button title="Send message" variant="primary" />
      </div>
    </form>
  );
}

export default Main;
