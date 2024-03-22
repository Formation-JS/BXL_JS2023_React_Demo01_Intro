
const GenderDisplay = ({gender, className}) => {
    switch(gender) {
        case 'f':
            return <span className={className}>👩</span>
        case 'm':
            return <span className={className}>👱‍♂️</span>
        default: 
            return <span className={className}>🤖</span>
    }
}

export default GenderDisplay;