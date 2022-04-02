import { Container, Row, Col, Image } from "react-bootstrap"
import './AboutUs.css'

const AboutUs = () => {

    return (
        <>
            <Container className='aboutUs'>
                <h2 className='titleAboutUs'>Nuestra historia</h2>
                <hr />
                <Row className='align-items-center'>
                    <Col className='aboutText' md={{ offset: 1, span: 5 }}>
                        <p>Somos la cuarta generación de un negocio tradicional familiar fundado en 1886 donde elaboramos la panadería como antaño. Es decir, nuestra panadería se elabora mezclando harina, agua y sal. Sólo trabajamos con productos 100% naturales y ecológicos de primera calidad.</p>
                        <p>Nos dedicamos en exclusiva a repartir a domicilio nuestros productos recién horneados para que puedas degustarlos con tu familia.</p>
                        <p>¡Nuestra masa madre está esperando para convertirse en pan! Sólo tienes que realizar el pedido en nuestra web y lo recibirás en 24h-48h en tu domicilio. Realizamos el reparto en Madrid capital.</p>
                    </Col>
                    <Col md={{ offset: 1, span: 4 }}>

                        <Image className='rounded' style={{ width: '100%' }} src='https://res.cloudinary.com/dabjtydsw/image/upload/v1646926642/20210722_093603_c467gi.webp' />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AboutUs