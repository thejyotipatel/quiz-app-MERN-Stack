import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <div className='container'>
      <div className='header question-header'>
        <Link className='link' to={'/'}>
          Home
        </Link>
        <Link className='link' to={'/allquestion'}>
          Create Questions
        </Link>
      </div>

      <div className='pages'>
        <Outlet />
      </div>
    </div>
  )
}

export default SharedLayout
