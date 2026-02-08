import coderImg from "../assets/coder.png";
const frameWorks = ["Angular", "React", "Vue", "AEM"];
function genRandomFramework(max) {
  return Math.floor(Math.random() * (max + 1));
}
function DynamicComp() {
  const dynamicValue = frameWorks[genRandomFramework(3)];
  return (
    <>
      <img
        src={coderImg}
        alt="coder"
        className="w-50 place-self-center pb-2 min-xl:p-4"
      />
      <p>Dynamic value is here {dynamicValue}</p>
    </>
  );
}
export default DynamicComp;
