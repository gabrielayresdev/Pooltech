import emailjs from "@emailjs/browser";

export const sendEmail = (formRef: React.RefObject<HTMLFormElement>) => {
  if (formRef.current) {
    let successful = false;
    emailjs
      .sendForm(
        "service_3rs4zko",
        "template_r7hh5sj",
        formRef.current,
        "OQgsMMeFDCVxaSIwJ"
      )
      .then(
        () => {
          successful = true;
        },
        (error) => {
          console.log(error);
          successful = false;
        }
      );
    return successful;
  } else return false;
};
