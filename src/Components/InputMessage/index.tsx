import { Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import React from "react";
import "./inputMessage.scss";

interface Values {
  message: string;
}

const InputMessage = () => {
  const InputShema = Yup.object().shape({
    message: Yup.string().required("Обезательное поле"),
  });

  return (
    <div className="form-message">
      <Formik
        initialValues={{
          message: "",
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          console.log(values);
          setSubmitting(false);
        }}
        validateOnBlur
        validationSchema={InputShema}
      >
        {({ errors, touched, dirty, isValid }) => (
          <Form>
            <Field
              id={"message"}
              name={"message"}
              as="textarea"
              className={
                !isValid && !dirty
                  ? "form-message__input form-message__input_error"
                  : "form-message__input"
              }
            />
            {errors.message && touched.message ? (
              <div className="error">{errors.message}</div>
            ) : null}
            <button
              type="submit"
              className="form-message__btn"
              disabled={!isValid && !dirty}
            >
              Отправить
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InputMessage;
