function ReusableComp() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">OUR CLIENTS</h1>
      <div className="clientContainer flex-col">
        <img src={props.image} alt={props.name} />
        <p>{props.clientName}</p>
      </div>
    </>
  );
}
