"use client";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

 function Main () {
  const testmonies = [
    {
      image: "livingston.jpeg",
      name: "Livingston",
      content:
        "Dean Hurst Thompson is the financial mentor everyone needs but few are lucky enough to find. Before working with Dean, I was overwhelmed by the sheer amount of information out there about trading and investing. Dean made everything clear and easy to understand. His mentorship has helped me not only learn how to trade but also how to think strategically about my financial future. Under his guidance, I’ve made profitable trades and have significantly increased my savings. Dean’s support has been instrumental in changing the trajectory of my financial life, and I am forever grateful.",
    },
    {
      image: "maria.jpeg",

      name: "Lissa",
      content:
        "I’ve always been cautious about where I put my money, but after meeting Dean Hurst Thompson, I realized that caution alone isn’t enough. Dean taught me how to be strategic with my investments and trading. His mentorship has been a game changer for me. I’ve learned how to analyze financial markets, make informed decisions, and maximize my returns. Thanks to Dean, I’ve seen my portfolio grow steadily, and I’m now more confident in my financial decisions. Dean’s knowledge and mentoring style are truly top-notch. He has genuinely changed my life.",
    },
    {
      image: "tomas_clifford.jpeg",
      name: "Tomas Clifford",
      content:
        "Working with Dean Hurst Thompson has been the best financial decision I’ve ever made. I was initially lost when it came to managing my finances and making investment decisions. Dean’s mentorship transformed my understanding of money management. He taught me how to trade effectively, identify profitable opportunities, and avoid common pitfalls. With his help, I’ve grown my investments significantly and feel much more secure about my financial future. Dean’s approach is practical, insightful, and results-driven. I can’t recommend him enough to anyone looking to improve their financial situation",
    },

    {
      image: "lissa.jpeg",
      name: "Maria Rodriguez",
      content:
        "Dean Hurst Thompson is a financial wizard! I was skeptical about trading and financial planning until a friend recommended Dean. From our first meeting, I knew I was in the right hands. Dean took the time to understand my financial goals and tailored his advice to fit my needs.",
    },
  ];
  return (
    <div id="testmonies" className="px-1.25rem md:px-6.25rem pb-6.25rem gap-8 flex flex-col py-6.25rem">
      <div>
        <h5 className="text-white text-center font-bold font-bricolageGrotesque text-5xl uppercase">
          Testimonials
        </h5>
        <h3 className="text-center text-white font-inter w-full md:w-2/5 mx-auto">
          Do not take my words, what does my  <span className="text-appBlue">clients</span> say about me?
        </h3>
      </div>
      <Carousel responsive={responsive}>
        {testmonies.map((testmony, index) => (
          <div
            className="flex flex-col gap-3 items-center justify-center"
            key={`test_index_${index}`}
          >
            <img
              className="w-20 rounded-full object-contain"
              src={`/images/testmonies/${testmony.image}`}
            />
            <h4 className="text-white font-bricolageGrotesque font-bold text-center">
              {testmony.name}
            </h4>
            <p className="font-inter text-gray-300 text-sm text-center leading-6 w-full md:w-3/5 mx-auto">
              {testmony.content}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Main;