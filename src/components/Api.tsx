import { useEffect, useState } from "react";
import React from "react";

interface valueType {
  id: string;
  avatar: string;
  name: string;
  address: string;
  balance: number;
  vehicle: string;
  mob_no: string;
}

export default function Api() {
  const [value, setValue] = useState<valueType[]>([]);

  useEffect(() => {
    async function getData() {
      const url = "https://66e32cd0494df9a478e4858d.mockapi.io/api/products/product"
      try {
        const response = await fetch(
          url
        );

        const data = await response.json();
        setValue(data);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);

  const deleteById = async (id: string) => {
    try {
      const response = await fetch(
        `https://66e32cd0494df9a478e4858d.mockapi.io/api/products/product/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setValue((prevValues) => prevValues.filter((user) => user.id !== id));
      } else {
        console.error("Failed to delete user.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const deleteAll = async () => {
    try {
      await Promise.all(
        value.map(async (user) => {
          await deleteById(user.id);
        })
      );
    } catch (error) {
      console.error("Error deleting all users:", error);
    }
  };

  return (
    <div>
      <div className="header">
        <span className="mycontacts">My Contacts</span>
        <button className="delete" onClick={deleteAll}>
          Delete All
        </button>
      </div>
      {value &&
        value.map((values: valueType) => {
          return (
            <div className="main_card" key={values.id}>
              <div className="image">
                <img src={values.avatar} alt="Image" />
              </div>
              <div className="content">
                <span className="elements">
                  <span>Account Name:</span>
                  <input value={values.name} readOnly />
                </span>
                <span className="elements">
                  <span>Street Address:</span>
                  <input value={values.address} readOnly />
                </span>
                <span className="elements_balance">
                  <span className="elements">
                    <span>Balance:</span>
                    <input value={values.balance} readOnly />
                  </span>
                  <span className="elements">
                    <span>Vehicle:</span>
                    <input value={values.vehicle} readOnly />
                  </span>
                  <span className="elements">
                    <span>Mobile Number:</span>
                    <input value={values.mob_no} readOnly />
                  </span>
                </span>
              </div>
              <button onClick={() => deleteById(values.id)}>Delete</button>
            </div>
          );
        })}
    </div>
  );
}
