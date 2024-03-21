import PropTypes from 'prop-types';

const WelcomeMessage = ({name}) => {

    return (
        <>
            <h1>Hello {name}</h1>
            <h2>Ceci est une demo</h2>
        </>
    );
};

WelcomeMessage.defaultProps = {
    name: 'Formation JS'
};

WelcomeMessage.propTypes = {
    name: PropTypes.string
};

export default WelcomeMessage;