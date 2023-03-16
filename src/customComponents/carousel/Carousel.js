import React from 'react'

export default function Carousel({ img1, img2, img3 }) {
    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators mb-0" >
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="2500">
                        <img src={img1} class="d-block w-100" alt="..." style={{ height: "15vw" }} />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={img2} class="d-block w-100" alt="..." style={{ height: "15vw" }} />
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <img src={img3} class="d-block w-100" alt="..." style={{ height: "15vw" }} />
                    </div>
                </div>
                {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button> */}
            </div>

        </div>
    )
}
