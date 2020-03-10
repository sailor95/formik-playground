import React from 'react';
import { useFormik } from 'formik';

import './App.css';

const App = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email Address{' '}</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </form>
      </header>
    </div>
  );
}

export default App;
