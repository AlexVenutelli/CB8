<<<<<<< HEAD
const PokemonTypes = ({ pokemonData, classSetting }) => {
  const { classDiv, classParagraph, classImage } = classSetting;

  return (
    <div className={classDiv}>
      {pokemonData.types.map((type, i) => (
        <h3 key={i} className={classParagraph} data-type={type.type.name}>
          {type.type.name}
          <label>
            <img
              className={classImage}
              src={`/typeIcons/${type.type.name}.svg`}
              alt={type.type.name}
            />
          </label>
        </h3>
      ))}
    </div>
  );
};

export default PokemonTypes;
=======
const PokemonTypes = ({ pokemonData, classSetting }) => {
  const { classDiv, classParagraph, classImage } = classSetting;

  return (
    <div className={classDiv}>
      {pokemonData.types.map((type, i) => (
        <h3 key={i} className={classParagraph} data-type={type.type.name}>
          {type.type.name}
          <label>
            <img
              className={classImage}
              src={`/typeIcons/${type.type.name}.svg`}
              alt={type.type.name}
            />
          </label>
        </h3>
      ))}
    </div>
  );
};

export default PokemonTypes;
>>>>>>> 4720cc8bc51b74c79469942bfa8fd0c83d0eb2a6
