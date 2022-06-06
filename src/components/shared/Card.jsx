import PropTypes from 'prop-types'

function Card({children, reverse}) {
//     here we have conditional class
//   return (
//     <div className={`card ${reverse && 'reverse'}`}>
//         {children}
//     </div>
//   )

//     here we have conditional styling
//if you are doing this inline css then delete the card reverse css
    return(
        <div className="card" style={{
            backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
            color: reverse ? '#fff' : 'rgba(0,0,0,0.4)'
        }}>{children}</div>
    )
}

Card.defaultProps={
    reverse:false
}
Card.propTypes={
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card