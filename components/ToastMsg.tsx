import React from 'react'

function ToastMsg(msg:any) {
  return (
    <div>
        <div className="toast toast-top toast-end">
  <div className="alert alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
    </div>
  )
}

export default ToastMsg