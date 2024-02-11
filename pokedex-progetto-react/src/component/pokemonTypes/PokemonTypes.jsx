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
