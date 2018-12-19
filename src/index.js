/** @jsx h */
import { Component } from 'preact'
export default class Formay extends Component {
  constructor(props) {
    super(props)
    this.state = { ...props.state, errors: {} }
  }
  updateValue = event => {
    this.setState(_ => ({
      [event.target.name]: event.target.value // name is required
    }))
  }
  onSubmit = e => {
    e.preventDefault()
    const { errors, ...elseState } = this.state
    const errs = this.props.validation(elseState)
    if (Object.keys(errs).length) {
      return this.setState(_ => ({
        errors: errs
      }))
    } else {
      this.setState(
        _ => ({
          errors: {}
        }),
        () => this.props.onSubmit(elseState)
      )
    }
  }
  render() {
    const { children, render, state, ...elseProps } = this.props
    const { errors, ...elseState } = this.state
    return render({
      ...elseProps,
      state: elseState,
      errors,
      updateValue: this.updateValue,
      onSubmit: this.onSubmit
    })
  }
}
