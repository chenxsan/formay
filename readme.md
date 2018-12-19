# Formay

A dead simple form library for Preact with only 1.4kB (gzipped).

## Example

```js
/** @jsx h */
import { h, Component } from 'preact'
import Formay from 'formay'
export default class SignUpForm extends Component {
  render () {
    return (
      <Formay
        state={
          'email': '',
          'nickname': ''
        }
        validation={state => {
          let errors = {}
          const {nickname, email} = state
          if (nickname.trim() === '') {
            errors['nickname'] = "can't be blank"
          }
          if (email.trim() === '') {
            errors['email'] = "can't be blank"
          }
          return errors
        }}
        render={{state, errors, updateValue, onSubmit} => (
          <form onSubmit={onSubmit}>
            <input type='text' value={state.nickname} onChange={updateValue} name='nickname' />
            <input type='text' value={state.email} onChange={updateValue} name='email' />
            <input type='submit' value='Sign up' />
          </form>
        )}
      />
    )
  }
}
```