import Image from "next/image";

const MediumCard = ({ img, title }) => {
  return (
    <div>
      <div className=" cursor-pointer relative h-80 w-80 hover:scale-105  transition duration-300 ease-out">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default MediumCard;
