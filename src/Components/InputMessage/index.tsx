import { Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import React, { FC } from "react";
import "./inputMessage.scss";

interface IValues {
  message: string;
}

interface IInputMessage {
  sendMessage: (value: string) => void;
}

const InputMessage: FC<IInputMessage> = ({ sendMessage }) => {
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
          values: IValues,
          { setSubmitting, resetForm }: FormikHelpers<IValues>
        ) => {
          sendMessage(values.message);
          setSubmitting(false);
          resetForm();
        }}
        validateOnBlur
        validationSchema={InputShema}
      >
        {({ errors, touched, dirty, isValid, handleBlur }) => (
          <Form>
            <Field
              id={"message"}
              name={"message"}
              as="textarea"
              onBlur={handleBlur}
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
