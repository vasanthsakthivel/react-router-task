

const Coursecard = ({title, description, image}) => {
  return (
    <div className="course-card">
      <h3> {title} </h3>
      <img src={image} alt={title} className="course-image"/>
      <p> {description}</p>
    </div>
  )
}

export default Coursecard
