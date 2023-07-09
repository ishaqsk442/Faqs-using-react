// Write your code here.
import {Component} from 'react'

import './index.css'

const PLUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const MINUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  toggleisActive = () => {
    // const {isActive} = this.state

    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderAnswer = () => {
    const {isActive} = this.state
    const {faqsDetails} = this.props

    const {answerText} = faqsDetails

    if (isActive) {
      return (
        <div>
          <hr className="hori-line" />
          <p>{answerText}</p>
        </div>
      )
    }
    return null
  }

  renderIcon = () => {
    const {isActive} = this.state

    const iconUrl = isActive ? MINUS_IMAGE : PLUS_IMAGE
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button type="button" className="button" onClick={this.toggleisActive}>
        <img src={iconUrl} alt={altText} />
      </button>
    )
  }

  render() {
    const {faqsDetails} = this.props
    const {questionText} = faqsDetails

    return (
      <li className="each-ques">
        <div className="ques-cont">
          <h1 className="head">{questionText}</h1>
          {this.renderIcon()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}
export default FaqItem
