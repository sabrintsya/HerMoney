import {Container, Row, Col} from "react-bootstrap";
import { semuaKelas } from "../data/index";
import FaqHerMoney from "../components/FaqHerMoney";

const KelasHerMoney = () => {
  return (
    <div className="kelas-page">
      <div className="kelas min-vh-100">
      <Container>
        <Row>
          <Col>
          <h1 className="fw-bold text-center">Semua Kelas</h1>
          <p className="text-center">Kuasi Keuanganmu, Raih Kebebasan Finansial!</p>
          </Col>
        </Row>
        <Row>
        {semuaKelas.map((kelas) => {
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
          <Row>
            <Col className="text-center">
            <button className="btn btn-success rounded-6 btn-lg" onClick={() => navigate("/kelas")} > Lihat Semua Kelas  <i className="fa-solid fa-chevron-right ms-5"></i></button>
            </Col>
          </Row>
      </Container>
    </div>
    <FaqHerMoney />
    </div>
  );
};

export default KelasHerMoney;