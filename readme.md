# Formay

A dead simple form library for Preact with only 1.4kB (gzipped).

## Installation

```sh
npm install formay
```

## Example

[Example on codesandbox](https://codesandbox.io/s/q3xl2l1r09).

```js
/** @jsx h */
import { h, Component } from "preact";
import Formay from "formay";
export default class SignUpForm extends Component {
  render() {
    return (
      <Formay
        state={{
          email: "",
          nickname: ""
        }}
        validation={state => {
          let errors = {};
          const { nickname, email } = state;
          if (nickname.trim() === "") {
            errors["nickname"] = "can't be blank";
          }
          if (email.trim() === "") {
            errors["email"] = "can't be blank";
          }
          return errors;
        }}
        onSubmit={(values, setState) => {
          window.alert(JSON.stringify(values));
          // we can call setState from form here.
        }}
        render={({ state, errors, updateValue, onSubmit }) => (
          <form onSubmit={onSubmit}>
            <input
              type="text"
              value={state.nickname}
              onChange={updateValue}
              name="nickname"
            />
            {errors["nickname"] ? <span>{errors["nickname"]}</span> : undefined}
            <input
              type="text"
              value={state.email}
              onChange={updateValue}
              name="email"
            />
            {errors["email"] ? <span>{errors["email"]}</span> : undefined}
            <input type="submit" value="Sign up" />
          </form>
        )}
      />
    );
  }
}
```