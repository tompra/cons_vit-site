import Button from './Button';
const Greeting = () => {
    return (
        <div className='row d-flex justify-content-end '>
            <div className='col-lg-6 col-12'>
                <img
                    src='https://picsum.photos/seed/picsum/700/600'
                    alt='random'
                />
            </div>
            <div className='col-lg-6 col-12 my-5'>
                <p className='fs-6 fw-bold mb-2'>Vitti Grasso</p>
                <p className='fs-1 lh-base'>
                    Helping you to take a your business forward{' '}
                </p>
                <p className='lh-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    dolore distinctio fugiat eveniet illo saepe maiores quasi
                    tenetur. Animi esse id dignissimos tempore. Voluptatum quo
                    libero eum dolores aut hic?
                </p>
                <Button text="Let's work together >>" />
            </div>
        </div>
    );
};
export default Greeting;
