// Write your code here.

import {Component} from 'react'

import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    console.log(faqsList)
    return (
      <div className="main">
        <div className="faqs-cont">
          <h1 className="main-head">FAQs</h1>
          <ul className="faqs-list">
            {faqsList.map(eachItem => (
              <FaqItem key={eachItem.id} faqsDetails={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
