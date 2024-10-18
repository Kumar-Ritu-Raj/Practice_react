import React from "react";
import UseState from "./components/UseState.tsx";
import ReactMemo from "./components/ReactMemo.tsx";
import UseCallback from "./components/UseCallback.tsx";
import CreateContextShowEachValue from "./components/CreateContextShowEachValue.tsx";
import UseEffect from "./components/UseEffect.tsx";
import UseRef from "./components/UseRef.tsx";
import CallComponentInsideComponent from "./components/CallComponentInsideComponent.tsx";
import UseReducer from "./components/UseReducer.tsx";
import Card from "./components/Card.tsx";
import QRCodeComponent from "./components/QRCodeComponent.tsx";

import "./App.css";
import { ReactForm } from "./components/ReactForm.tsx";

export const MyContext = React.createContext();
const people = [
  { name: "Alice", age: 25, occupation: "Engineer" },
  { name: "Bob", age: 30, occupation: "Designer" },
  { name: "Charlie", age: 35, occupation: "Teacher" },
  { name: "David", age: 28, occupation: "Doctor" },
  { name: "Eve", age: 22, occupation: "Developer" },
  { name: "Frank", age: 33, occupation: "Artist" },
  { name: "Grace", age: 26, occupation: "Writer" },
  { name: "Hank", age: 29, occupation: "Photographer" },
  { name: "Ivy", age: 31, occupation: "Musician" },
  { name: "Jack", age: 27, occupation: "Chef" },
];

export default function App() {
  return (
    <div className="App">
      <Card title="Api Example">
        {/* <Api /> */}
        <ReactForm />
      </Card>
      <Card title="CallComponentInsideComponent">
        <CallComponentInsideComponent />
      </Card>
      <Card title="UseState">
        <UseState />
      </Card>
      <Card title="ReactMemo">
        <ReactMemo />
      </Card>
      <Card title="UseCallback">
        <UseCallback />
      </Card>
      <MyContext.Provider value={people}>
        <Card title="CreateContextShowEachValue">
          <CreateContextShowEachValue />
        </Card>
      </MyContext.Provider>
      <Card title="UseEffect">
        <UseEffect />
      </Card>
      <Card title="UseRef">
        <UseRef />
      </Card>
      <Card title="UseReducer">
        <UseReducer />
      </Card>
      <Card title="QR Code Example">
        <QRCodeComponent />
      </Card>
    </div>
  );
}
