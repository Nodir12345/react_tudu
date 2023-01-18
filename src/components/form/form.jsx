import React from "react";
export const Form = ({submit,idProp,input, setinput})=>{
  const change = (e) => {
    setinput((p) => ({
      ...p, [e.target.name]: e.target.value,
      id: idProp  ? idProp : new Date(),
    }));


  };
  return(
    <form onSubmit={submit}>
        <input
          onChange={change}
          value={input.name}
          autoComplete="off"
          type="text"
          placeholder="name"
          name="name" />
        <input
          onChange={change}
          value={input.age}
          autoComplete="off"
          type="text"
          placeholder="name"
          name="age" />
        <input
          onChange={change}
          value={input.phone}
          autoComplete="off"
          type="text"
          placeholder="name"
          name="phone" />
        <button type="submit">{idProp ? "Save": "Submit"}</button>
        {idProp?
          <button type="button" onClick={() => setChangeinput(false)}>Cancel</button>
          : ""
        
      }
      </form>
  )
}