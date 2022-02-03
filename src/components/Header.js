import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title}) => {
  const onClick=()=>{
    console.log('click')
  }
  return (
  <header className='header'>
    <h1 style={headingStyle}>{title}</h1>
    <Button color='green' text='Add' onClick={onClick} />
  </header>
  )
}
Header.defaultProps={
  title:'Task Tracker',
}
Header.propTypes={
  title: PropTypes.string.isRequired,
}
const headingStyle={

}

export default Header;
