import React from "react"
import { Card } from "./components/card/card";
import "./app.css"
function App() {
  const [input, setinput] = React.useState({ name: "", age: "", phone: "" })
  const [data, setdata] = React.useState([])
  const change = (e) => {


    setinput((p) => ({
      ...p, [e.target.name]: e.target.value,
      id: data.length + 1
    }));


  };

  const submit = (e) => {
    e.preventDefault();

    setdata([...data, input])
    setinput({ name: "", age: "", phone: "" })
  }
  const editData = (item) => {

    setdata((p) => p.map((el) => el.id === item.id ? item : el))
  }
  const deleteItem =(id)=>{
setdata((p)=>p.filter((el)=>el.id !==id))
  }
  return (
    <div className="App">
      <form className="form_box" onSubmit={submit}>
        <input required
          onChange={change}
          value={input.name}
          autoComplete="off"
          type="text"
          placeholder="Name"
          name="name" />
        <input required
          onChange={change}
          value={input.age}
          autoComplete="off"
          type="Number"
          placeholder="Age"
          name="age" />
        <input required
          onChange={change}
          value={input.phone}
          autoComplete="off"
          type="Number"
          placeholder="Phone"
          name="phone" />
        <button className="button_s" type="submit">Submit</button>
      </form>
      {data?.map((p) => (
        <Card deleteItem={deleteItem} editData={editData} key={p.id} {...p} />
      ))}
    </div>
  )
}

export default App























// import React from "react"
// import { Card } from "./components/card/card";
// import { Form } from "./components/form/form";
// function App() {
//   const [input, setinput] = React.useState({ name: "", age: "", phone: "" })
//   const [data, setdata] = React.useState([])
 

//   const submit = (e) => {
//     e.preventDefault();

//     setdata([...data, input])
//     setinput({ name: "", age: "", phone: "" })
//   }
//   const editData = (item) => {

//     setdata((p) => p.map((el) => el.id === item.id ? item : el))
//   }
//   const deleteItem =(id)=>{
// setdata((p)=>p.filter((el)=>el.id !==id))
//   }
//   return (
//     <div className="App">
//     <Form  input={input} setinput={setinput} submit={submit}/>
//       {data?.map((p) => (
//         <Card deleteItem={deleteItem} editData={editData} key={p.id} {...p} />
//       ))}
//     </div>
//   )
// }

// export default App
