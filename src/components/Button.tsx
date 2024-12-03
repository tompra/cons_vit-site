import { ButtonProps } from '../utils/props';
import { useModal } from '../context/context';

const Button: React.FC<ButtonProps> = ({ text }) => {
    const { openModal } = useModal();

    return (
        <button type='button' className='btn btn-primary' onClick={openModal}>
            {text}
        </button>
    );
};
export default Button;
