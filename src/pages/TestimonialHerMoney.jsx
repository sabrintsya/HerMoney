import {Container, Row, Col} from "react-bootstrap";
import { testimonial } from "../data/index";
import FaqHerMoney from "../components/FaqHerMoney";


const TestimonialHerMoney = () => {
  return (
    <div className="testimonial-page">
      <div className="testimonial">
        <Container>
          <Row >
            <Col>
            <h1 className="text-center fw-bold">Semua Testimonial</h1>
            <p className="text-center">"Dengar langsung dari mereka yang sudah merasakan perubahannya! Testimoni para peserta akan menginspirasi Anda untuk meraih kemandirian finansial. Mereka akan berbagi kisah sukses mereka dalam mengelola keuangan, mencapai tujuan finansial, dan meningkatkan rasa percaya diri."</p>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-1">
          {testimonial.map((data)=> {
          return(
             <Col key={data.id} className="mb-5 ">
              <p className="desc shadow-sm">{data.desc}</p>
              <div className="people">
                <img src={data.image} alt="image testimonial" />
                <div>
                  <h5 className="mb-1">{data.name}</h5>
                  <p className="m-0 font-weight-bold">{data.skill}</p>
                </div>
              </div>
             </Col>
          );
        })}
          </Row>
        </Container>
      </div>
      <FaqHerMoney />
    </div>
  );
}

export default TestimonialHerMoney;