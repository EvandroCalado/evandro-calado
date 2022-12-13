import { useState } from "react";
import client from "../../sanity";
import useValidation from "../Hooks/useValidation";
import Box from "../Ui/box";
import InputField from "../Ui/InputField";
import Spinner from "../Ui/Spinner";
import styles from "./Footer.module.scss";

const Footer = ({ footer }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDataSent, setIsDataSent] = useState(false);
  const [hasError, setHasError] = useState(false);

  const {
    value: name,
    isTouched: isNameTouched,
    setValue: setName,
    setIsTouched: setIsNameTouched,
    inputHasError: nameHasError,
  } = useValidation((value) => value !== "");

  const {
    value: email,
    isTouched: isEmailTouched,
    setValue: setEmail,
    setIsTouched: setIsEmailTouched,
    inputHasError: emailHasError,
  } = useValidation((value) => value.includes("@") && value.includes("."));

  const {
    value: message,
    isTouched: isMessageTouched,
    setValue: setMessage,
    setIsTouched: setIsMessageTouched,
    inputHasError: messageHasError,
  } = useValidation((value) => value.length >= 30);

  const isFormTouched = isNameTouched && isEmailTouched;
  const isFormValid =
    !nameHasError &&
    !emailHasError &&
    !messageHasError &&
    !isLoading &&
    isFormTouched;

  const submitForm = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const contactData = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };
    try {
      await client.create(contactData);
      setIsLoading(false);
      setIsDataSent(true);
    } catch (error) {
      setIsLoading(false);
      setHasError(true);
      console.log(error);
    }
  };

  return (
    <footer className={styles.footer_wrapper} id="footer">
      <div className={styles.footer}>
        <div className={styles.box}>
          <Box text="Contato" />
        </div>
        <h2>{footer.title}</h2>
        {!isDataSent ? (
          <form onSubmit={submitForm}>
            <InputField
              id="name"
              onChange={setName}
              onBlur={setIsNameTouched}
              hasError={nameHasError}
              label="Nome"
            />
            <InputField
              id="email"
              onChange={setEmail}
              onBlur={setIsEmailTouched}
              hasError={emailHasError}
              label="Email"
            />
            <InputField
              id="message"
              onChange={setMessage}
              onBlur={setIsMessageTouched}
              hasError={messageHasError}
              label="Mensagem"
              isTextArea={true}
            />

            <button className="btn btn-primary" disabled={!isFormValid && true}>
              {isLoading ? <Spinner /> : "Enviar"}
            </button>
            {hasError && <span className="error">Alguma coisa deu errado...</span>}
          </form>
        ) : (
          <h3 className="sucess">Obrigado por entrar em contato !</h3>
        )}
        <span className={styles.copy}>{footer.copy}</span>
      </div>
    </footer>
  );
};

export default Footer;
