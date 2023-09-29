import React from 'react'

export default function Carousel() {
    return (
        <div>
            <section className="movieCarousel">
                <div id="movieCarousel" className="carousel slide carousel-fade" data-bs-ride="false">
                    <div className="carousel-indicators container">
                        <button type="button" data-bs-target="#movieCarousel" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#movieCarousel" data-bs-slide-to={1} aria-label="Slide 2" />
                        <button type="button" data-bs-target="#movieCarousel" data-bs-slide-to={2} aria-label="Slide 3" />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            {/* <img src="./img/hero-1.jpg" class="d-block w-100" alt="..." /> */}
                            <div className="movieCarousel__overplay" />
                            <div className="carousel-caption container">
                                <div className="col-12 col-lg-9">
                                    <p style={{ fontSize: 40, fontWeight: 'bold' }} className="animate__animated animate__fadeInDown">
                                        FIND YOUR NEXT MATCH
                                    </p>
                                    <h2 className="animate__animated animate__fadeInDown">
                                        PUM CUI STORE
                                    </h2>
                                    <p style={{ fontWeight: 500, color: 'rgba(255, 255, 255, 0.85)' }} className="animate__animated animate__fadeInUp">
                                        There are many variations of passages of Lorem Ipsum
                                        typesetting industry. Lorem Ipsum <br />has been the
                                        industry's standard dummy text ever since the when an unknown
                                        printer took <br />a galley of type and scrambled
                                    </p>
                                    <div className="movieCarousel__trailer animate__animated animate__fadeInUp">
                                        {/* <span>PG</span> */}
                                        <button style={{ fontWeight: 500 }}>
                                            <i className="fa fa-play" /> READ MORE
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            {/* <img src="./img/hero-2.jpg" class="d-block w-100" alt="..." /> */}
                            <div className="movieCarousel__overplay" />
                            <div className="carousel-caption container">
                                <div className="col-12 col-lg-9">
                                    <p className="animate__animated animate__fadeInDown">
                                        ACTION, ADVENTURE, FANTASY
                                    </p>
                                    <h2 className="animate__animated animate__fadeInDown">
                                        End of the World: Part II
                                    </h2>
                                    <p className="animate__animated animate__fadeInUp">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Repudiandae eos repellendus minus ratione impedit corrupti,
                                        reprehenderit voluptates natus nemo maiores! Quae illo
                                    </p>
                                    <div className="movieCarousel__trailer animate__animated animate__fadeInUp">
                                        <span>PG</span>
                                        <button><i className="fa fa-play" />PLAY TRAILER</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            {/* <img src="./img/hero-3.jpg" class="d-block w-100" alt="..." /> */}
                            <div className="movieCarousel__overplay" />
                            <div className="carousel-caption container">
                                <div className="col-12 col-lg-9">
                                    <p className="animate__animated animate__fadeInDown">
                                        ACTION, ADVENTURE, FANTASY
                                    </p>
                                    <h2 className="animate__animated animate__fadeInDown">
                                        End of the World: Part III
                                    </h2>
                                    <p className="animate__animated animate__fadeInUp">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Repudiandae eos repellendus minus ratione impedit corrupti,
                                        reprehenderit voluptates natus nemo maiores! Quae illo
                                    </p>
                                    <div className="movieCarousel__trailer animate__animated animate__fadeInUp">
                                        <span>PG</span>
                                        <button><i className="fa fa-play" />PLAY TRAILER</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
