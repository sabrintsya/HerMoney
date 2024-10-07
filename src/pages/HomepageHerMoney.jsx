// Import React boostrap
import {Container, Row, Col} from "react-bootstrap";
import HeroImage from "../assets/img/Hero HerMoney.svg";

import { kelasTerbaru, dataSwiper } from "../data/index";
import {useNavigate} from "react-router-dom";

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import FaqHerMoney from "../components/FaqHerMoney";


const HomepageHerMoney = () => {
  let navigate = useNavigate();

  return (
    // Homepage HerMoney
    <div className="homepage">
      <header className="w-100 min-vh-100">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
            <h1 className="mb-4">Rencanakan <br /> <span>Keuanganmu </span> <br /> untuk Masa Depan!
            </h1>
            <p className="mb-4">"Kursus ini akan mengajarkan Anda cara merencanakan keuangan secara efektif, sehingga Anda dapat mencapai tujuan finansial dan hidup lebih tenang di masa depan."</p>
            <button className="btn btn-success btn-lg rounded-1 mx-3 mb-xs-0 mb-2 " onClick={() => navigate("/kelas")}>
              Lihat Kelas</button>
            <button className="btn btn-outline-success btn-lg rounded-1 mb-xs-0 mb-2">Lihat Promo</button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
            <img src={HeroImage} alt="HerMoney-img" />
            </Col>
          </Row>
        </Container>
      </header>

      {/* Homepage Kelas HerMoney */}
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
            <h1 className="text-center fw-bold">Kelas Terbaru</h1>
            <p className="text-center">Kuasai Keuanganmu, Raih Kebebasan Finansial!</p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((kelas) => {
              return (
               <Col key={kelas.id} className="shadow rounded">
                <img src={kelas.image} alt="img-kelas" className="mb-5 rounded-top" />
                <div className=" star mb-2 px-3">
                <i className={kelas.star1}></i>
                <i className={kelas.star2}></i>
                <i className={kelas.star3}></i>
                <i className={kelas.star4}></i>
                <i className={kelas.star5}></i>
                </div>
                <h5 className="mb-5 px-3 text-success">{kelas.title}</h5>
                <div className="ket d-flex justify-content-between">
                  <p className="m-0 text-success font-weight-bold">{kelas.price}</p>
                  <button className="btn btn-success rounded-1">{kelas.buy}</button>
                </div>
            </Col>
            );
            })}
          </Row>

          {/* Button navigate ke class */}
          <Row>
            <Col className="text-center">
            <button className="btn btn-success rounded-6 btn-lg" onClick={() => navigate("/kelas")} > Lihat Semua Kelas  <i className="fa-solid fa-chevron-right ms-5"></i></button>
            </Col>
          </Row>
        </Container>

        {/* Homepage Testimonial HerMoney */}
        <div className="testimonial py-5">
          <Container>
            <Row>
              <Col>
              <h1 className="text-center my-5 font-weight-bold">Testimonial</h1>
              </Col>
            </Row>
            <Row>
            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {dataSwiper.map((data)=> {
          return(
             <SwiperSlide key={data.id} className="shadow-sm">
              <p className="desc">{data.desc}</p>
              <div className="people">
                <img src={data.image} alt="image testimonial" />
                <div>
                  <h5 className="mb-1">{data.name}</h5>
                  <p className="m-0 font-weight-bold">{data.skill}</p>
                </div>
              </div>
             </SwiperSlide>
          );
        })}
       
      </Swiper>
      {/* Homepage Testimonial HerMoney */}
            </Row>
          </Container>
        </div>
         {/* Homepage FAQ HerMoney */}
      <FaqHerMoney />
      {/* Homepage FAQ HerMoney */}
      </div>
    </div>
  );
}

export default HomepageHerMoney;