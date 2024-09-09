type props = {
  variant: "secondary" | "primary";
  title: string;
  disabled?: boolean;
  onClick?: () => void;
} & React.ComponentProps<"button">;
function Button({ onClick,disabled, variant, title, ...rest }: props) {
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
              disabled && 'opacity-80 pointer-events-none'
            }
            ${
              variant === "primary"
                ? "bg-appBlue text-white"
                : " bg-white text-black "
            }
            `}
    >
      {disabled?"Loading...":title}
    </button>
  );
}

export default Button;
