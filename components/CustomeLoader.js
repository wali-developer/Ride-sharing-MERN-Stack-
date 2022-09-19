
import { Audio, LineWave, Puff } from 'react-loader-spinner'

const CustomeLoader = ({ color }) => {

    return (
        <div
            className="d-flex align-items-center fixed top-0 left-0 w-100 h-100"
            style={{
                zIndex: '999',
                justifyContent: 'center',
                position: 'fixed',
                background: '#f8f8f8'
            }}
        >
            <Puff
                height="130"
                width="130"
                color={color ? color : '#4f56ff'}
                ariaLabel='loading'
            />
        </div>
    );
};

export default CustomeLoader;
