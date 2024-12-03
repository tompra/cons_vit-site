interface ButtonProps {
    text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
    return (
        <button type='button' className='btn btn-primary'>
            {text}
        </button>
    );
};
export default Button;
