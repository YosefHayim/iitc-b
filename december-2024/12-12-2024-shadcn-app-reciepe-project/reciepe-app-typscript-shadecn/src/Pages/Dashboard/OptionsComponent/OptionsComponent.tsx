const boldText = "font-bold";

const OptionsComponent: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="flex flex-row justify-between w-full items-center">
      <h2 className={boldText}>{name}</h2>
    </div>
  );
};

export default OptionsComponent;
