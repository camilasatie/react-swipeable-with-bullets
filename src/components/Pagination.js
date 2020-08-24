import React from 'react'
import PaginationDot from './PaginationDot'

const Pagination = ({ index, dots, onChangeIndex }) => {

  const handleClick = (event, index) => {
    onChangeIndex(index)
  }

  const children = []

  for (let i = 0; i < dots; i += 1) {
    children.push(
      <PaginationDot key={i} index={i} active={i === index} onClick={handleClick} />,
    );
  }

  return (
    <div style={styles.root}>
      {children}
    </div>
  )
}

const styles = {
  root: {
    position: 'absolute',
    bottom: '-30px',
    right: 8,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
  },
};

export default Pagination