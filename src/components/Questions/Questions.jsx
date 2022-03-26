import './Questions.css';
const Questions = () => {
  return (
    <section className="container">
      <div className="question">
        <h3>Q. How does React Work?</h3>
        <p>
          Ans: React is a library focusing on UI, consist of several component which are built on
          using JSX(JavaScript XML), it is HTML like but not HTML. React renders those components
          and creates a virtual DOM.
          <br />
          Whenever a state in the app gets changed react compares the new DOM with the previous DOM
          and updates only the necessary part of the site. <br />
          React uses Diffing algorithm for checking which part or state of the app has changed,
          making it very performant.
        </p>
      </div>
      <div className="question">
        <h3>Q. Difference between props and state.</h3>
        <p>
          Ans: <b>Props</b> is an object which can store value of a property that is passed into it,
          it is used for passing data from one component to another as an argument. <b>State</b>
          represents the component's local information. <br />
          <br />
          Key difference between these two is, <b>props</b> are immutable meaning it can only be
          read, and not be modified whereas state can be read and write both.
        </p>
      </div>
      <div className="question">
        <h3>Q. How useState works?</h3>
        <p>
          Ans: <b>useState</b> in a component takes any primitive value(string/array/object, null
          etc.) as a default value and returns two things, a reducer state or we can say the current
          state value, and an action dispatcher using which we can change the value of that
          particular state.
          <b>useState</b> works asynchronously to change the state. And most importantly, it uses
          the concept of{' '}
          <b>
            <em>closure</em>
          </b>{' '}
          to modify/set/get the value.
        </p>
      </div>
    </section>
  );
};
export default Questions;
