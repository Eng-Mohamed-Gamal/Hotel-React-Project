import React, { useEffect, useState } from "react";
import Headtitle from "../../Common/HeadTitle/Headtitle";
import { NavLink, useParams } from "react-router-dom";
import Data from "./Data";

export default function SingleDES() {
  const [itemm, setItem] = useState();
  const { id } = useParams();

  useEffect(() => {
    let item = Data.find((item) => item.id === parseInt(id));
    {
      item && setItem(item);
    }
  }, [id]);

  return (
    <div className="singledes">
      <Headtitle></Headtitle>
      {itemm &&
        <div className="img">
          <img src={itemm.img} alt="" />
        </div>}
      <div className="container">
        <button className="clear">
          <NavLink to={"/Destenation"}>Go back</NavLink>{" "}
        </button>

        {itemm && <h1 className="fr">what is {itemm.title} ?</h1>}
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
          voluptas dicta voluptatum quaerat modi nulla quos harum laborum dolore
          veritatis sint itaque dolorem, possimus hic, deleniti, dolorum
          suscipit ipsa necessitatibus nemo voluptate ea iure id? Cumque, enim
          provident? Accusantium maiores dolore molestiae ut atque distinctio
          sed magnam nemo maxime vitae, culpa laboriosam adipisci incidunt quasi
          cumque modi voluptas cum exercitationem labore, eos et eveniet tempora
          explicabo! Distinctio itaque cupiditate similique deserunt id
          veritatis saepe excepturi architecto perspiciatis fugit eius at
          expedita, dolorem eveniet perferendis incidunt illum libero sequi
          deleniti temporibus atque molestiae? Vero ullam tenetur laborum
          perferendis in laudantium exercitationem?
        </p>
      </div>
    </div>
  );
}
