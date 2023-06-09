import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
      alt="not found"
      className="notFound-image"
    />
    <h1 className="notFound-heading">Page Not Found</h1>
    <p className="description">
      we are sorry, the page you requested could not be found.
    </p>
  </div>
)

export default NotFound
