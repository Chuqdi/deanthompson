type props = {
  variant: "secondary" | "primary";
  title: string;
  onClick?: () => void;
} & React.ComponentProps<"button">;
function Button({ onClick, variant, title, ...rest }: props) {
  return (
    <button
      onClick={onClick}
      {...rest}
      className={`
            w-full 
            h-[3rem]
            flex justify-center items-center
            font-bricolageGrotesque rounded font-bold
            ${
              variant === "primary"
                ? "bg-appBlue text-white"
                : " bg-white text-black "
            }
            `}
    >
      {title}
    </button>
  );
}

export default Button;
