import CharacterCard from './CharacterCard';

const CharactersList = (props) => {
    const listCharacter = props.filteredCharacter.map((eachCharacter) => {
      return (
        <CharacterCard
          eachCharacter={eachCharacter}
          key={eachCharacter.id}
        ></CharacterCard>
      );
    });

  
  return (
    <section>
      <ul className="character-list">{listCharacter}</ul>
    </section>
  );
};

export default CharactersList;