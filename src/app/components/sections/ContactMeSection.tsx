"use client";
import Link from "next/link";
import Button from "../common/Button";
import Input from "../common/Input";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FormEvent, useState } from "react";
//@ts-ignore
import { useAlert } from "react-alert";
import axios from "axios";
import { BACKEND_URL } from "@/app/config";

function Main() {
  const [loading, setLoading] = useState(false);
  const alert = useAlert();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });
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

  // path(ROOT_URL + "test_email", SendTestEmail.as_view()),
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { first_name, last_name, email, message } = formData;
    if (first_name && last_name && email && message) {
      setLoading(true);
      axios
        .post(`${BACKEND_URL}test_email`, formData)
        .finally(() => {
          setLoading(false);
          alert.success("Message sent successfully");
          setFormData({
            first_name: "",
            last_name: "",
            email: "",
            message: "",
          });
        });
      return;
    }
    alert.error("Please enter all fields");
  };
  return (
    <form
      onSubmit={onSubmit}
      id="contact"
      className="px-1.25rem md:px-6.25rem bg-[#212121] py-6.25rem w-full"
    >
      <div className="flex flex-col gap-6">
        <div
          style={{
            backgroundImage: "url(/images/DeanHurstThompson2.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
          className="w-full h-[30rem]"
        />

        <h3 className="text-center text-white font-inter w-full  ">
          I{"'"}m Dean Hurst Thompson, a financial advisor With over 24 years of
          experience in financial consulting, digital assets management, and
          stockbroking for some of the most prestigious firms on Wall Street, I
          bring a wealth of expertise to help clients achieve financial success.
          My extensive research and carefully crafted strategies have
          consistently delivered exceptional results across all market
          conditions. In 2016, I pioneered a tailored investment program for
          private investors, focusing on emerging markets and innovative
          financial solutions. This program has been a cornerstone in my clients
          {"'"} portfolios, boasting a remarkable 99% success rate. My
          commitment to transparency, ethical practices, and personalized
          service has enabled me to help over 1,000 individuals build and
          safeguard their financial futures, transforming their dreams into
          reality. Whether you{"'"}re looking to grow your wealth, diversify
          your portfolio, or secure a more prosperous future, I offer a proven
          track record of delivering results. My passion for financial success
          goes beyond numbers—it{"'"}s about empowering my clients with the
          knowledge and confidence to thrive in an ever-changing financial
          landscape.
        </h3>

        <h5 className="text-white text-center font-bold font-bricolageGrotesque text-5xl uppercase">
          Hire me
        </h5>
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

      <div className="flex flex-col md:flex-row gap-4 w-full mt-10">
        <div className="flex-1">
          <label>First name</label>
          <Input
            required
            value={formData.first_name}
            name="first_name"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            placeholder="Please enter your first name"
          />
        </div>

        <div className="flex-1">
          <label>Last name</label>
          <Input
            required
            value={formData.last_name}
            name="last_name"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            placeholder="Please enter your last name"
          />
        </div>
      </div>

      <div className="flex gap-4 w-full mt-10">
        <div className="flex-1">
          <label>Email</label>
          <Input
            required
            value={formData.email}
            name="email"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            type="email"
            placeholder="Please enter your email address"
          />
        </div>
      </div>

      <div className="flex gap-4 w-full mt-10">
        <div className="flex-1">
          <label>Message</label>
          <textarea
            placeholder="Enter message here..."
            className="w-full h-[8rem] rounded p-3"
            value={formData.message}
            name="message"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          ></textarea>
        </div>
      </div>

      <div className="mt-4">
        <Button disabled={loading} title="Send message" variant="primary" />
      </div>
    </form>
  );
}

export default Main;
