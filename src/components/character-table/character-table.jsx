const CharacterTableHeader = () => (
    <thead>
        <tr>
            <th>Nom</th>
            <th>Date de naissance</th>
            <th>Sexe</th>
        </tr>
    </thead>
);

const CharacterTableRow = ({ firstname, lastname, birthdate, gender }) => (
    <tr>
        <td>{firstname} {lastname}</td>
        <td>{birthdate}</td>
        <td>{gender}</td>
    </tr>
);

const CharacterTable = ({characters}) => {

    const charactersJSX = characters.map(
        character => <CharacterTableRow {...character}  />
    );

    return (
        <>
            <p>Liste des personnages</p>
            <table>
                <CharacterTableHeader />
                <tbody>
                    {charactersJSX}
                </tbody>
            </table>
        </>
    )
}

export default CharacterTable;