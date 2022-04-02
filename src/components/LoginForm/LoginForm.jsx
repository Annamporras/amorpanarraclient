import { useContext, useState } from "react"
import authService from '../../services/auth.service'
import { Form, Button, Card, Container } from 'react-bootstrap'
import './LoginForm.css'
import { useNavigate } from "react-router-dom"
import { AuthContext } from '../../context/Auth.context'
import { MessageContext } from '../../context/UserMessage.context'

const LoginForm = () => {

    const [loginForm, setloginForm] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const { setShowMessage, setMessageInfo } = useContext(MessageContext)
    const { storeToken, authenticateUser } = useContext(AuthContext)


    const handleInputChange = e => {
        const { name, value } = e.target
        setloginForm({
            ...loginForm,
            [name]: value
        })
    }

    function handleSubmit(e) {

        e.preventDefault()

        authService
            .login(loginForm)
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser()
                setShowMessage(true)
                setMessageInfo({ title: 'Éxito', desc: 'Sesión iniciada correctamente' })
                navigate('/')
            })
            .catch(err => {
                setloginForm({
                    email: '',
                    password: ''
                })
                setShowMessage(true)
                setMessageInfo({ title: 'Ha habido un error', desc: 'email o contraseña incorrecta' })
                console.log(err)
            })
    }

    return (
        <Card >
            <Container>

                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3 mt-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={loginForm.email} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" name="password" value={loginForm.password} onChange={handleInputChange} />
                    </Form.Group>
                    < div className="d-grid gap-2 mb-3" >
                        <Button variant="warning" type="submit">Iniciar sesión</Button>
                    </div>


                </Form>

            </Container>
        </Card>
    )
}

export default LoginForm