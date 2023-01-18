import React from "react";
import "./card.css"
export const Card = ({ name, phone, age, id, editData, deleteItem }) => {
  const [changeinput, setChangeinput] = React.useState(false)
  const [input, setinput] = React.useState({ name, age, phone })

  const change = (e) => {
    setinput((p) => ({
      ...p, [e.target.name]: e.target.value,
      id,
    }));


  };
  const submit = (e) => {
    e.preventDefault();

    editData(input)
    setChangeinput(false)
  }
  return (
    <>
      {!changeinput ? (

        <div className="value_box">
          <p className="value">Name: {name}</p>
          <p className="value">Age: {age}</p>
          <p className="value">Tel: {phone}</p>
          <button className="button_s edit" onClick={() => setChangeinput(!changeinput)}>edit</button>
          <button className="button_s delete" onClick={() => deleteItem(id)}>delete</button>
        </div>
      ) : (
        <form className="card_form" onSubmit={submit}>
          <h1 className="title_edit">EDIT</h1>
          <input className="input1"
            onChange={change}
            defaultValue={input.name}
            autoComplete="off"
            type="text"
            placeholder="name"
            name="name" />
          <br />
          <input className="input1"
            onChange={change}
            defaultValue={input.age}
            autoComplete="off"
            type="text"
            placeholder="Age"
            name="age" />
          <br />
          <input className="input1"
            onChange={change}
            defaultValue={input.phone}
            autoComplete="off"
            type="text"
            placeholder="Phone"
            name="phone" />{" "}
          <br />
          <button className="button_s save" type="submit">Save</button>
          <button className="button_s cancel" type="button" onClick={() => setChangeinput(false)}>Cancel</button>
        </form>)
      }
    </>
  )
}













// import React from "react";
// import { Form } from "../form/form";
// export const Card = ({ name, phone, age, id, editData, deleteItem }) => {
//   const [changeinput, setChangeinput] = React.useState(false)
//   const [input, setinput] = React.useState({ name, age, phone })

//   const change = (e) => {
//     setinput((p) => ({
//       ...p, [e.target.name]: e.target.value,
//       id,
//     }));


//   };
//   const submit = (e) => {
//     e.preventDefault();

//     editData(input)
//     setChangeinput(false)
//   }
//   return (
//     <>
//       {!changeinput ? (

//         <div>
//           <h2>{name}</h2>
//           <p>{phone}</p>
//           <p>{age}</p>
//           <button onClick={() => setChangeinput(!changeinput)}>edit</button>
//           <button onClick={() => deleteItem(id)}>delete</button>
//         </div>
//       ) : (
//         <Form idProp={id} input={input} setinput={setinput} submit={submit}/>
//         )
//       }
//     </>
//   )
// }