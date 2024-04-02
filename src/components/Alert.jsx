import React, { Component } from 'react'

//icons
import { AiOutlineClose } from 'react-icons/ai'

export class Alert extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       success: false,
       error: false,
       content: ''
    }
  }
  showSucess = (_content) => {
    this.setState({
      success: true,
      error: false,
      content: _content
    })
  }

  showError = (_content) => {
    this.setState({
      success: false,
      error: true,
      content: _content
    })
  }
  
  render() {
    return (
      <>
        {
          this.state.success &&
          <div className="p-2 bg-green-200 rounded-lg flex-b">
            {this.state.content}
            <AiOutlineClose className='w-5 h-5' 
              onClick={()=>this.setState({
                success: false
              })} 
            />
          </div>
        }
          {
          this.state.error &&
          <div className="p-2 bg-red-200 rounded-lg flex-b text-sm">
            {this.state.content}
            <AiOutlineClose className='w-4 h-4' 
              onClick={()=>this.setState({
                error: false
              })} 
            />
          </div>
        }
      </>
    )
  }
}

export default Alert
