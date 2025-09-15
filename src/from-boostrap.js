import React from 'react';

export default function FormBootstrap() {
  return (
    <>
      <div className="mt-3 mx-auto p-3" style={{ width: '400px', background: '#ece' }}>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="login">Email</label>
            <input
              type="text"
              id="login"
              name="login"
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="pswd">Password</label>
            <input
              type="password"
              id="pswd"
              name="pswd"
              className="form-control"
            />
          </div>
        </form>
      </div>

      <div className="container mt-3">
        <label htmlFor="select1">Select</label>
        <select className="form-select" id="select1" name="select1">
          <option>Select</option>
          <option>One</option>
          <option>Two</option>
          <option>Three</option>
        </select>
        <br />
        <button className="btn btn-primary">OK</button>
      </div>
    </>
  );
}

