function Card({ children, reverse }) {
  Card.defaultProps = {
    reverse: false,
  }
  
  return (
    <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  )
  
}

export default Card
