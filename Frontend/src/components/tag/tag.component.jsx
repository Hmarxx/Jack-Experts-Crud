import PropTypes from 'prop-types';

import './tag.component.css';

const Tag = ({ value, backgroundColor, color }) => {
  return (
    <div className="tag" style={{
      backgroundColor,
      color
    }}>{value}</div>
  )
}

Tag.propTypes = {
  value: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default Tag;
