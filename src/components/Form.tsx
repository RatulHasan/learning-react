import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleForm = () => {
    console.log(formData);
  };

  const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <div>
        <label>Name</label> {formData.name} <br />
        <label>Email</label> {formData.email} <br />
        <label>Password</label> {formData.password}
      </div>
      <form action="">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleFormInput}
          placeholder="Username"
        />{" "}
        <br />
        <input
          type="email"
          name="email"
          onChange={handleFormInput}
          value={formData.email}
          placeholder="Email"
        />{" "}
        <br />
        <input
          type="password"
          name="password"
          onChange={(event) => {
            setFormData({ ...formData, password: event.target.value });
          }}
          value={formData.password}
          placeholder="Password"
        />{" "}
        <br />
        <button onSubmit={handleForm} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
