import Button from './Button';

const BookCall = () => {
    return (
        <div className='container bg-warning py-4 border-top border-primary border-4 '>
            <div className='row align-items-center'>
                <div className='d-flex flex-column'></div>
                <p className='fs-1'>
                    If you have any question, just book a call
                </p>
                <p className='lh-lg'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Magnam eius sapiente soluta ea, minus animi doloribus
                    recusandae. Vel, mollitia quam nesciunt, voluptatem
                    doloremque tenetur atque sapiente facilis, dolores accusamus
                    temporibus.
                </p>
            </div>
            <div className='d-flex flex-row justify-content-center'>
                <Button text="Let's get in touch" />
            </div>
        </div>
    );
};

export default BookCall;
