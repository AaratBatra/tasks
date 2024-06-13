const Button = ({ content }: { content: string }) => {
  return (
    <button className="bg-red-500 px-6 py-3 rounded text-lg sm:text-xl lg:text-2xl w-[100%] hover:bg-red-600">
      {content}
    </button>
  );
};

export default Button;
