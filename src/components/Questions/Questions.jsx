import './Questions.css';
const Questions = () => {
  return (
    <section className="container">
      <div className="question">
        <h3>Q. How does React Work?</h3>
        <p>
          Ans: Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat magnam, sequi
          deserunt minus ex enim nemo eligendi nesciunt quod voluptas.
        </p>
      </div>
      <div className="question">
        <h3>Q. Difference between props and state.</h3>
        <p>
          <b>Props</b> is an object which can store value of a property that is passed into it, it
          is used for passing data from one component to another. <b>State</b> represents the
          component's local information. <br />
          <br />
          Key difference between these two is, <b>props</b> are immutable meaning it can only be
          read, and not be modified whereas state can be read and write.
        </p>
      </div>
      <div className="question">
        <h3>Q. How does React Work?</h3>
        <p>Ans:</p>
      </div>
    </section>
  );
};
export default Questions;
