import React from 'react'

const PaginationDot = ({ index, active, onClick }) => {

  const handleClick = (event) => (
   onClick(event, index)
  )

  let styleDot

  if (active) {
    styleDot = Object.assign({}, styles.dot, styles.active);
  } else {
    styleDot = styles.dot;
  }

  return (
    <button type="button" onClick={handleClick} style={styles.button}>
      <div style={styleDot} />
    </button>
  )
}

const styles = {
  button: {
    height: 18,
    width: 18,
    cursor: 'pointer',
    border: 0,
    background: 'none',
    padding: 0,
  },
  dot: {
    backgroundColor: '#e4e6e7',
    height: 12,
    width: 12,
    borderRadius: 6,
    margin: 3,
  },
  active: {
    backgroundColor: '#319fd6',
  },
};

export default PaginationDot