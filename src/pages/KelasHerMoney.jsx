import {Container, Row, Col} from "react-bootstrap";
import { semuaKelas } from "../data";

const KelasHerMoney = () => {
  return (
    <div className="kelas min-vh-100">
      <Container>
        <Row>
          <Col>
          <h1 className="fw-bold text-center">Semua Kelas</h1>
          <p className="text-center">Kuasi Keuanganmu, Raih Kebebasan Finansial!</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default KelasHerMoney;