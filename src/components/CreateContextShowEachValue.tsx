import React, { useContext, useState } from 'react';
import { MyContext } from '../App';

export default function CreateContextShowEachValue() {

    const people = useContext(MyContext);

  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextPerson = () => {
    if (currentIndex < people.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <div className="useStateShowEachValue">
      <button onClick={showNextPerson}>Show Next Person</button>
      <p>Name: {people[currentIndex].name}</p>
      <p>Age: {people[currentIndex].age}</p>
      <p>Occupation: {people[currentIndex].occupation}</p>
    </div>
  );
}
