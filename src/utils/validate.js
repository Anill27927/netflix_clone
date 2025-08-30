export const checkValidata = (email, password) => {
  const IsEmailVaild = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  const IsPasswordVaild =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
      password
    );
  if (!IsEmailVaild) return "Email is not valid";
  if (!IsPasswordVaild) return "Password is not vaild";

  return null;
};
