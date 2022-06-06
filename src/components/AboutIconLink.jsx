import {FaQuestion} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='about-link'>
        <Link to="/about">
        {/* alternative way for above to
        <Link 
            to={{
                pathname:'/about',
                search: '?sort=name',//params
                hash:'#hello',
            }}> */}
            <FaQuestion size={30}/>
        </Link>
    </div>
  )
}

export default AboutIconLink