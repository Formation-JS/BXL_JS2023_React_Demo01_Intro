import PropTypes from 'prop-types';
import duck from './duck.jpg';
import style from './profil-info.module.css';

const ProfilInfo = ({ firstname, lastname }) => {

    return (
        <div className={style['example-demo']}>
            <p>{firstname} {lastname}</p>
            <img src={duck} alt={`Image de ${lastname}`} />
        </div>
    );
};

ProfilInfo.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired
};


export default ProfilInfo;