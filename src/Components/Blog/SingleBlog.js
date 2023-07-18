import React, { useEffect, useState  } from "react";
import Headtitle from "../../Common/HeadTitle/Headtitle";
import { useParams , NavLink } from "react-router-dom";
import Data from "./Data";

export default function SingleBlog() {
  const [blog, setBlog] = useState();
  const { ip } = useParams();

  useEffect(() => {
    let Blog = Data.find((Blog) => Blog.id === parseInt(ip));
    {
      Blog && setBlog(Blog);
    }
  }, [ip]);

  return (
    <div className="singleBlog">
      <Headtitle></Headtitle>
      {blog && (
        <div className="img">
          <img src={blog.img} alt="" />
        </div>
      )}
      <div className="container">
        <button  className="clear" >
          <NavLink to={"/Blog"}>Go back</NavLink>
        </button>

        {blog && <h1 className="fr">what is {blog.title} ?</h1>}
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
