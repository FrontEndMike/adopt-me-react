import React from 'react'

const Loader: React.FC = () => {
  return (
    <>
      <div className="my-8 flex justify-center">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default Loader
