import Button from "../common/Button";
import Input from "../common/Input";

function Main () {
  return (
    <form id="contact" className="px-1.25rem md:px-6.25rem bg-[#212121] py-6.25rem w-full">
      <div>
        <h5 className="text-white text-center font-bold font-bricolageGrotesque text-5xl uppercase">
          Contact me
        </h5>
        <h3 className="text-center text-white font-inter w-4/5 md:w-2/5 mx-auto">
          You could reach out to be by{" "}
          <span className="text-appBlue">writing</span> me a message
        </h3>
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
          <textarea placeholder="Enter message here..." className="w-full h-[8rem] rounded p-3"></textarea>
        </div>
      </div>

      <div className="mt-4">
        <Button title="Send message" variant="primary" />
      </div>
    </form>
  );
}

export default Main;