import React, { useState } from "react";

const Home = () => {
  let [state, setstate] = useState("Hello World");

  let [number, setsnumber] = useState(0);

  function handelChange(event) {
    setstate(event.target.value);
  }

  function handelNumber(event) {
    setsnumber(number + 1);
  }

  const obj = {
    name: "Chetan",
    age: 45,
  };

  return (
    <>
      <input name="change" value={state} onChange={handelChange} />
      <Change name={state} />
      <PropsParent name={state} handelChange={handelChange} />
      <Spreadinparent {...obj} />
      <Spreadinchild value={number} handelChange={handelNumber} />
    </>
  );
};

function Change({ name }) {
  return <div>Home: {name}</div>;
}

function PropsParent({ name, handelChange }) {
  return (
    <>
      <input name="child" onChange={handelChange} />
      <div>Home: {name}</div>
    </>
  );
}

function Spreadinparent({ name, age = 10 }) {
  return (
    <>
      <div>
        Home: {name} and Age: {age}
      </div>
    </>
  );
}

function Spreadinchild({ ...others }) {
  return (
    <>
      <button onClick={others.handelChange}> {others.value} </button>
    </>
  );
}

export default Home;
