import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Home = props => {
  const jwtToken = Cookies.get('jwt_token')
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }
  if (jwtToken === undefined) {
    return <Redirect to="/ebank/login" />
  }
  return (
    <div className="home-container">
      <div className="header-cont-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <button type="button" onClick={onClickLogout} className="logout-button">
          Logout
        </button>
      </div>
      <div className="container-2">
        <h1 className="home-heading">Your Flexibility, Our Excellence</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
          className="debit-card"
        />
      </div>
    </div>
  )
}

export default Home
