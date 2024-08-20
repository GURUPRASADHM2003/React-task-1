
import PropTypes from "prop-types"
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



Card.PropTypes = {
  card: {
    plan: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    features: {
      users: PropTypes.string.isRequired,
      storage: PropTypes.string.isRequired,
      Projects: PropTypes.string.isRequired,
      Support: PropTypes.string.isRequired,
      Subdomain: PropTypes.string.isRequired,
      Report: PropTypes.string.isRequired
    }
  }
}
function Card({ card }) {

  return (

    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm">
        <div className="card-header py-3">
          <h4 className="my-0 fw-normal">{card.plan}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">${card.price}<small className="text-muted fw-light">/mo</small></h1>
          <ul className="list-unstyled mt-3 mb-4">
            {
              card.features.map((feature, index) => {
                return <li key={index}> {
                  feature.enable ? (<span> <FontAwesomeIcon icon={faCheck} />   {feature.name} </span>) : (<del>  <FontAwesomeIcon icon={faXmark} />   {feature.name}</del>)}</li>
              })
            }

          </ul>
          <button 
          type="button" 
          
          className={`w-100 btn btn-lg ${
            card.plan == "FREE" && "btn-outline-primary"
          } ${card.plan == "PLUS" && "btn-outline-primary"}
           ${card.plan == "PRO" && "btn-primary"}`} > BUTTON </button>
       
        </div>
      </div>
    </div>
  )
}

export default Card;