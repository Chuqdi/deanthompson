type props = {} & React.ComponentProps<"input">;
export default function Input({ ...rest }: props) {
  return (
    <input
      {...rest}
      className="
w-full h-[3rem] rounded bg-white  p-3 text-black font-bricolageGrotesque
"
    />
  );
}
