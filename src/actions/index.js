export const signUp = (firstName, lastName, email, password) => {
  return (dispatch) => {
    fetch("http://streaming.nexlesoft.com:4000/api/auth/signup", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        firstName: "huy",
        lastName: "aka",
        email: "tmh.pug18@gmail.com",
        password: "Onepiece2302!",
      }),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      // Converting to JSON
      .then((response) => response.json)
      .then((json) => dispatch({ type: "SIGNUP", data: json }));
  };
};
