import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterHerMoney = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col className="col lg-5">
          <h3 className="fw-bold">HerMoney.</h3>
          <p className="desc">Pusat Belajar Keuangan untuk Perempuan. Dapatkan akses ke berbagai kursus dan bootcamp yang dirancang khusus untuk membantu Anda mengelola keuangan dengan lebih baik.</p>
          <div className="nomor mb-1 mt-4">
            <Link className="text-decoration-none">
            <i className="fa-brands fa-whatsapp"></i>
            <p>+62 088-8333-3677</p>
            </Link>
          </div>
          <div className="email">
            <Link className="text-decoration-none">
            <i className="fa-regular fa-envelope"></i>
            <p className="m-0">HerMoney@gmail.com</p>
            </Link>
          </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
          <h5 className="fw-bold">Menu</h5>
          <Link to="">Home</Link>
          <Link to="kelas">Kelas</Link>
          <Link to="testimonial">Testimonial</Link>
          <Link to="faq">FAQ</Link>
          <Link to="syaratketen">Syarat & Ketentuan</Link>
          </Col>
          <Col className="col lg-4 mt-lg-0 mt-5">
          <h5 className="fw-bold mb-3">Subscribe untuk info course lainya! </h5>
          <div className="subscribe">
            <input type="text" placeholder="subscribe!!!" />
            <button className="btn btn-success rounded-end rounded-0">Subscribe</button>
          </div>
          <div className="social mt-3">
            <i className="fa-brands fa-facebook" ></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()} By <span className="fw-bold"> HerMoney</span>, All Right Reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterHerMoney;