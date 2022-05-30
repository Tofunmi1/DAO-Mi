import React from 'react'

type modal = {
 renderContent: () => any 
}

export const Modal = ({renderContent}:modal) => {
  return (
    <div>
     {renderContent()}
    </div>
  )
}
