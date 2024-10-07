import { Container, Row, Col } from "react-bootstrap";

const SyaketenPage = () => {
  return (
    <div className="syaratketen">
      <div className="syarat-ketentuan min-vh-100">
        <Container>
          <Row>
            <Col>
            <h1 className="fw-bold text-center mb-2">Syarat & Ketentuan</h1>
            <p className="text-center">Dengan mengikuti course ini, Anda setuju untuk mematuhi syarat dan ketentuan yang berlaku. Syarat lengkap dapat Anda baca pada tautan berikut:</p>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
            <p className="pt-2">
            Dengan mengikuti kursus ini, Anda akan mendapatkan akses ke materi pembelajaran yang berkualitas, bimbingan dari mentor berpengalaman, dan kesempatan untuk berinteraksi dengan peserta lain. Untuk memastikan kelancaran program, kami mohon Anda untuk memperhatikan syarat dan ketentuan yang berlaku, termasuk jadwal kelas, kebijakan pembayaran, dan ketentuan penggunaan materi.
            </p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
            <h4 className="fw-bold">1. Pendaftaran dan Pembayaran</h4>
            <p> Pendaftaran: Pendaftaran dilakukan secara online melalui website  HerMoney.
              Pembayaran: Pembayaran dapat dilakukan melalui metode pembayaran yang tersedia,transfer bank, kartu kredit, e-wallet. Peserta wajib menyelesaikan pembayaran sebelum atau pada tanggal yang telah ditentukan.
              Bukti Pembayaran: Peserta wajib mengirimkan bukti pembayaran setelah melakukan pembayaran.</p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
            <h4 className="fw-bold">2. Akses Materi Kursus</h4>
            <p>Akses: Setelah pembayaran terkonfirmasi, peserta akan mendapatkan akses ke materi kursus melalui platform pembelajaran online HerMoney.
              Durasi Akses: Akses materi kursus berlaku selama 6 bulan sejak tanggal aktivasi akun.
              Materi Kursus: Materi kursus meliputi  video pembelajaran, modul PDF, kuis, tugas, forum diskusi.
              Hak Cipta: Semua materi kursus merupakan hak cipta milik HerMoney. Peserta dilarang menyalin, menyebarkan, atau mengkomersialkan materi kursus tanpa izin tertulis.</p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
            <h4 className="fw-bold">3. Jadwal dan Kehadiran</h4>
            <p>Jadwal: Jadwal kelas, sesi live, atau pertemuan virtual akan diinformasikan melalui email dan platform pembelajaran.
            Kehadiran: Peserta diharapkan untuk mengikuti semua sesi kelas atau pertemuan virtual. Jika ada halangan, peserta wajib menginformasikan kepada penyelenggara.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default SyaketenPage;