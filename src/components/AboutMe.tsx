const AboutMe: React.FC = () => {
    return (
        <div className='bg-success'>
            <div className='row bg-dark py-5'>
                <p className='fs-1 text-light ms-5'>About Me</p>
            </div>
            <div className='row'>
                <div className='col-lg-6 col-12 d-flex flex-column justify-content-center align-items-start '>
                    <p className='fs-3 w-75 ms-5 my-4  mx-auto'>
                        I'm Vitti Grasso. I help people with their financials
                        and I'm a sexy horse.
                    </p>
                    <p className='w-75 ms-5 my-4 mx-auto'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quia unde minima quam, corrupti autem eos
                        similique sed inventore earum nisi perspiciatis, quos
                        exercitationem! Vel perspiciatis consequatur doloremque
                        autem est reprehenderit?
                    </p>
                </div>

                <div className='col-lg-6 col-12 d-flex justify-content-center'>
                    <img src='https://placehold.jp/400x600.png' alt='' />
                </div>
            </div>
            <div className='row bg-warning mx-5 my-5'>
                <div className='col-12 col-md-6 d-flex justify-content-center align-items-start'>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Magni temporibus magnam libero, rem fugiat eos
                        officiis repellat quaerat aliquam qui dolor impedit
                        recusandae inventore repellendus numquam. Eveniet iste
                        sed molestias. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Eius voluptate dolorum adipisci
                        repellendus iste, deleniti omnis esse totam inventore
                        quas officiis qui, at repellat sunt deserunt laborum
                        possimus aliquid eos!
                    </p>
                </div>
                <div className='col-12 col-md-6 d-flex justify-content-center align-items-start'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Soluta laboriosam iste aspernatur veniam expedita
                        vero. Iusto distinctio maxime quidem. Sit accusamus
                        libero illum fuga, impedit sint obcaecati. Distinctio,
                        veritatis doloremque! Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Molestias at, nemo vero
                        tempora praesentium modi optio? Alias facere hic itaque,
                        nesciunt quis voluptatum quisquam autem, dolor in quidem
                        consectetur obcaecati.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default AboutMe;
