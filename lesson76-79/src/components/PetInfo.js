function PetInfo(props) {
  const { animal, age } = props;
  return (
    //Для того чтобы добавить код JS в JSX код, необходимо добавить {}
    <h1>
      My {animal} is {age} years old
    </h1>
  );
}

export default PetInfo;
