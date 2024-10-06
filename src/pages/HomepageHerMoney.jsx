import {Container, Row, Col} from "react-bootstrap";
import HeroImage from "../assets/img/Hero HerMoney.png";

const HomepageHerMoney = () => {
  return (
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
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <col>
            <h1>Kelas Terbaru</h1>
            <p>Kuasai Keuanganmu, Raih Kebebasan Finansial!</p>
            </col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomepageHerMoney;