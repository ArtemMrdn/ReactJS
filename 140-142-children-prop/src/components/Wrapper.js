function Wrapper(props) {
  console.log(props);
  const style = {
    backgroundColor: props.color,
    width: "250px",
    margin: "20px auto",
    padding: "20px ",
  };
  return <div style={style}>{props.children}</div>; //т.е мы просто взяли все что передается чеерез свойтсво children и добавили между открывающим тегом div и закрывающим
}

export default Wrapper;
