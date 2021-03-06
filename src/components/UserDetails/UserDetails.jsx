import { useContext } from 'react'
import { AuthContext } from '../../context/Auth.context'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { MessageContext } from "../../context/UserMessage.context"
import usersService from '../../services/user.service'
import './UserDetails.css'


const UserDetails = ({ userDetails }) => {
    const { username, userlastname, email, phone, address, role } = userDetails
    const { user } = useContext(AuthContext)

    const { setShowMessage, setMessageInfo } = useContext(MessageContext)
    const { user_id } = useParams()

    const deleteProfile = () => {
        usersService
            .deleteUser(user_id)
            .then(() => {
                setShowMessage(true)
                setMessageInfo({ title: 'Hecho!', desc: 'Usuario eliminado' })
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Row>
                <Col md={{ offset: 3, span: 6 }}>
                    <Card>
                        <Card.Body>
                            <Card.Title><h1>{username} {userlastname}</h1></Card.Title>
                            <hr />
                            <Card.Title>Dirección</Card.Title>
                            <Card.Text>Calle {address.street.name} {address.street.number}, {address.postCode} {address.city}, {address.country}</Card.Text>
                            <hr />
                            <Card.Title>Contacto</Card.Title>
                            <Card.Text>Teléfono: {phone}</Card.Text>
                            <Card.Text>email: {email}</Card.Text>
                            <hr />
                            {
                                (user?.role === 'ADMIN') &&
                                <>
                                    <Card.Title>Rol</Card.Title>
                                    <Card.Text>{role}</Card.Text>
                                    <hr />
                                </>
                            }
                        </Card.Body >
                        <Container>
                            <Card.Body>
                                <Link to='/perfiles'>
                                    <Button className='btn btn-outline-warning buttonUser' variant="light" size='sm'><img style={{ width: '28px' }} src='https://res.cloudinary.com/dabjtydsw/image/upload/v1646946851/arrow-left-c_icon-icons.com_50470_fqfgzk.png' /></Button>
                                </Link>
                                <Link to={`/perfiles/editar/${user_id}`}><Button style={{ width: '30%' }} className='btn btn-outline-dark' variant="light">Editar</Button></Link>
                                {(user?.role === 'ADMIN') &&
                                    <Button style={{ width: '30%' }} className='btn btn-outline-danger buttonUser' variant="light" onClick={() => deleteProfile()}>Eliminar</Button>
                                }
                            </Card.Body>
                        </Container>
                    </Card>
                </Col>
            </Row>
        </Container >
    )
}

export default UserDetails