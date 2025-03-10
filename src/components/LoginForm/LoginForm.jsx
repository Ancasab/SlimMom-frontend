import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { loginUser } from 'redux/auth/authOperations';
import { clearError, selectIsLoading } from 'redux/auth/authSlice';
import { routes } from 'utils/routes';
import { loginSchema } from 'helpers/validation';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  const { handleSubmit, errors, handleChange, values, submitCount } = useFormik(
    {
      initialValues: {
        email: '',
        password: '',
      },
      onSubmit: values => {
        dispatch(clearError());
        dispatch(loginUser(values));
      },
      validationSchema: loginSchema,
    }
  );

  return (
    <>
      <p className={styles.heading}>Log in</p>
      {isLoading && <Loader />}
      <form className={styles.caloriesForm} onSubmit={handleSubmit} noValidate>
        <div className={styles.formWrapper}>
          <label className={styles.labelText}>
            <span className={styles.text}>Email</span>
            <div className={styles.formContainerMain}>
              <div className={styles.formContainerLeft}>
                <div className={styles.labelContainer}>
                  <input
                    type="email"
                    name="email"
                    className={styles.input}
                    onChange={handleChange}
                    value={values.email}
                  />
                </div>
              </div>
            </div>
            {submitCount > 0 && errors.email && (
              <span className={styles.error}>{errors.email}</span>
            )}
          </label>
          <label className={styles.label}>
            <span className={styles.text}>Password</span>
            <input
              type="password"
              name="password"
              className={styles.input}
              onChange={handleChange}
              value={values.password}
            />
            {submitCount > 0 && errors.password && (
              <span className={styles.error}>{errors.password}</span>
            )}
          </label>
        </div>
        <div className={styles.buttonWrapper}>
          <Button type="submit" mainStyle="active">
            Log in
          </Button>
          <Button
            type="button"
            mainStyle="primary"
            handleClick={e => {
              e.preventDefault();
              navigate(routes.register, { replace: true });
            }}
          >
            Register
          </Button>
        </div>
      </form>
    </>
  );
};
