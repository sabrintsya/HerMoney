// Import File here
import {Container, Row, Col} from "react-bootstrap";
import HeroImage from "../assets/img/Hero HerMoney.png";
import { kelasTerbaru } from "../data/index";

const HomepageHerMoney = () => {
  return (
    // Homepage HerMoney
    <div className="homepage">
      <header className="w-100 min-vh-100">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
            <h1 className="mb-4">Rencanakan <br /> <span>Keuanganmu </span> <br /> untuk Masa Depan!
            </h1>
            <p className="mb-4">"Kursus ini akan mengajarkan Anda cara merencanakan keuangan secara efektif, sehingga Anda dapat mencapai tujuan finansial dan hidup lebih tenang di masa depan."</p>
            <button className="btn btn-success btn-lg rounded-1 mx-3 mb-xs-0 mb-2">Lihat Kelas</button>
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
              return <Col key={kelas.id}>
                <img src={kelas.image} alt="img-kelas" className="mb-5 rounded-top" />
                <div className=" star mb-2">
                <i className={kelas.star1}></i>
                <i className={kelas.star2}></i>
                <i className={kelas.star3}></i>
                <i className={kelas.star4}></i>
                <i className={kelas.star5}></i>
                </div>
            </Col>;
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomepageHerMoney;