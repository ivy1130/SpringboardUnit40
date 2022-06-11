### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
 - It's a popular, powerful front-end framework. It makes it easy to make reusable “view components," which encapsulate logic and HTML into a class. They often make it easier to build modular applications.

- What is Babel?
 - Babel is a JavaScript transpiler that converts edge JavaScript and JSX into plain old ES5 JavaScript that can run in any browser.
 
- What is JSX?
 - JSX is like HTML embedded in JavaScript.

- How is a Component created in React?
 - You create its own JS file and define a function of that same name that returns some HTML.

- What are some difference between state and props?
 - Props are immutable. State can be changed.

- What does "downward data flow" refer to in React?
 - Downward data flow is the idea that parent components pass data down to their children via props.

- What is a controlled component?
 - A controlled component is a component that renders form elements and controls them by keeping the form data in the component's state.

- What is an uncontrolled component?
 - An uncontrolled component is a component that renders form elements, where the form element's data is handled by the DOM (default DOM behavior).

- What is the purpose of the `key` prop when rendering a list of components?
 - The main purpose of keys is to help React differentiate and distinguish elements from each other.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
 - An array index isn't stable. If you remove or add something to the middle of an array, it'll shift all the indexes and thus keys.

- Describe useEffect.  What use cases is it used for in React components?
 - By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.
 - Fetching data, starting a timer, and manually changing the DOM are all cases it can be used for.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
 - It returns a mutable object with a key of current, whose value is equal to the initial value passed into the hook. The object persists across renders (so it’s like a local variable, but independent of state). Mutating the object does not trigger a re-render.

- When would you use a ref? When wouldn't you use one?
 - You would use a ref for accessing an underlying DOM element and setting up / clearing timers. You wouldn't use one for accessing the DOM and making changes (toggle classes, set text, etc) because React should control the state of the DOM.

- What is a custom hook in React? When would you want to write one?
 - Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated. You'd want to write one when multiple components are usining similar logic.
