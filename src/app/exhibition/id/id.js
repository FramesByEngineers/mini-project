import Image from "next/image";
import { useSearchParams } from "next/navigation";

const Id = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  console.log(id)
  return <div>{id}</div>;
};

export default Id;
