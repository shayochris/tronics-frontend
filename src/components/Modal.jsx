import React, { Component } from 'react'

//icons
import {AiOutlineClose} from 'react-icons/ai'

export class Modal extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      show: false,
      component: '',
      size: 'sm:w-[50%]'
    }
  }
  showModal = (_component,_size) =>{
    this.setState({
      show: true,
      component: _component,
    })
    if(_size === 'small'){
      this.setState({
        size: 'sm:w-[30%]'
      })
    }
    else if(_size === 'large'){
      this.setState({
        size: 'sm:w-[70%]'
      })
    }else{
      this.setState({
        size: 'sm: w-[50%]'
      })
    }
  }

  hideModal = () =>{
    this.setState({
      show: false
    })
  }
  
  render() {
    return (
      <>
        {this.state.show ? (
          <div className='fixed top-0 left-0 w-full h-screen bg-black/50 z-10 flex-c'>
            <div className={`bg-white w-[90%] ${this.state.size} mx-auto p-2 rounded-lg divider-y-2`}>
              <div className="flex justify-end items-center">
                <AiOutlineClose 
                  className="w-5 h-5" 
                  onClick={this.hideModal}
                />
              </div>
              {this.state.component}
            </div>
          </div>
        ) : (
          <div className='hidden' ></div>
        )}
      </>
    )
  }
}

export default Modal
