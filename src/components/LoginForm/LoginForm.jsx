import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6).max(16).required(),
});

const initialValues = {
  login: '',
  password: '',
};

const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          Login
          <Field type="text" name="login" id="login" />
          <ErrorMessage name="login" />
        </label>
        <label htmlFor="password">
          Password
          <Field type="password" name="password" id="password" />
          <ErrorMessage name="password" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
