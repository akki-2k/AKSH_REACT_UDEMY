function ReusableComp(props) {
  return (
    <>
      <div className="clientComp flex-col flex items-center">
        <img src={props.image} className="w-25" />
        <h5>{props.value}</h5>
        <p>{props.description}</p>
      </div>
    </>
  );
}
export default ReusableComp;
