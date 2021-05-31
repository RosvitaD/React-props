import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2> {props.name} </h2>
      <img src={props.img} alt="avatar_img" />
      <p> {props.tel} </p>
      <p> {props.email} </p>
      <p>{props.about}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1> My Contacts </h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b @beyonce.com"
    />

    <Card
      name="Karkle"
      img="https://image.shutterstock.com/image-photo/pine-trees-on-edge-dune-260nw-1670726566.jpg"
      email="www.karkle.com"
      about="Yra etnokultūrinis parkas, informacinė ekspozicija apie gintaro istoriją, vaikų poilsiavietė, paplūdimiai, išlikusios senos sodybos, kuršių kapinės. Kaimo pietvakariuose yra unikali molinga jūros pakrantės atodanga, garsusis Olando kepurės skardis (24 m virš jūros). Yra turizmo centras „Žiogelis“."
    />
    <Card
      name="Dino parkas"
      img="https://lh3.googleusercontent.com/proxy/7ftVE4eV7DGdZ2QX_wmzUEGVFjSMmj7fu5wXnYxouW2stQ_cGRT_R5njoR1nYnBxWo5fRvfk1gV-hmBzvFMxBGEoS_icMIbqTJCc2cGM7hZ0rQfwF3Lm8gFV-UEMeTmKClKSPM3EPOGcxBMgTjFdAg"
      tel="+370 595494"
      email="dino@dino.lt"
    />

    <input id="fName" />
  </div>,
  document.getElementById("root")
);
