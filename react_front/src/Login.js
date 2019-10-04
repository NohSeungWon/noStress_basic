import React from "react";

const Login = props => {
  const { login } = props;
  const refConstructor = [];
  return (
    <div>
      <div ref={e => (refConstructor[0] = e)}>
        <input placeholder="id" ref={e => (refConstructor[1] = e)} />
        <input placeholder="pw" ref={e => (refConstructor[2] = e)} />
        <button
          onClick={e => {
            login(refConstructor);
          }}
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default Login;
