const ArrowDivider = () => {
  return (
    <div className="flex flex-col items-center mx-auto py-8">
      <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent opacity-40"></div>
      <div className="w-0 h-0 border-l-[2px] border-r-[2px] border-t-[3px] border-l-transparent border-r-transparent border-t-primary opacity-40 -mt-px"></div>
    </div>
  );
};

export default ArrowDivider;