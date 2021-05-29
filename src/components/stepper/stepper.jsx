import React, { Component } from 'react'
import {
  Form,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardFooter
} from 'reactstrap'
import './styles.css'
import On from './onboarding'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Step5 from './Step5'
import { PageHeader } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import MultiStepProgressBar from './MultiStepProgressBar'

class stepper extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentStep: 1
    }

    this.handleChange = this.handleChange.bind(this)

    this._next = this._next.bind(this)
    this._prev = this._prev.bind(this)
  }

  handleChange (event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert()
  }

  _next () {
    let currentStep = this.state.currentStep

    currentStep = currentStep >= 4 ? 5 : currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  _prev () {
    let currentStep = this.state.currentStep

    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  get previousButton () {
    let currentStep = this.state.currentStep
    if (currentStep !== 1) {
      return (
        <Button color='secondary float-left' onClick={this._prev}>
          Previous
        </Button>
      )
    }

    return null
  }

  get nextButton () {
    let currentStep = this.state.currentStep
    if (currentStep < 5) {
      return (
        <Button color='primary float-right' onClick={this._next}>
          Next
        </Button>
      )
    }
    return null
  }

  get submitButton () {
    let currentStep = this.state.currentStep
    if (currentStep > 4) {
      return <Button color='primary float-right'>Submit</Button>
    }
    return null
  }

  render () {
    return (
      <div className="onboarding-page">
        <PageHeader className='site-page-header' />,
        <Form onSubmit={this.handleSubmit}>
          <Card>
            <CardBody>
              <CardTitle>
                <MultiStepProgressBar currentStep={this.state.currentStep} />
              </CardTitle>
              <CardText />
              <Step1
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
              />
              <Step2
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
              />
              <Step4
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
              />
              <Step5
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
              />
              <Step3
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
              />
            </CardBody>
            <CardFooter>
              {this.previousButton}
              {this.nextButton}
              {this.submitButton}
            </CardFooter>
          </Card>
        </Form>
      </div>
    )
  }
}

export default stepper
