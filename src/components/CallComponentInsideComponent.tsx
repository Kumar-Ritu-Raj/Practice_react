import React from "react";

const user = {
  name: "Hello hero",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};
function MyButton() {
  return <button>I'm a button</button>;
}
function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}

export default function CallComponentInsideComponent() {
  const onlyProfile = true;
  return <>{onlyProfile ? <Profile /> : <MyButton />}</>;
}
