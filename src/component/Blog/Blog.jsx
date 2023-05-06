import { useContext, useState } from "react";
import "./Blog.css";
import Dropdown from "react-bootstrap/Dropdown";
import group from "../../assets/groupadd.png";
import author3 from "../../assets/author3.png";
import author4 from "../../assets/author4.png";
import blog3 from "../../assets/blog3.png";
import { BlogPost, RecoGroup } from "../../FakeData";
import { BsThreeDots, BsFillShareFill } from "react-icons/bs";
import { BiCalendarEvent } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { AiFillEye } from "react-icons/ai";
import { MdOutlineThumbUpOffAlt, MdWorkOutline } from "react-icons/md";
import { RiPencilFill } from "react-icons/ri";
import { MdErrorOutline } from "react-icons/md";
import { AuthContext } from "../Context/UserContext";

const Blog = () => {
  const [activeBlog, setActiveBlog] = useState("allPost");
  const [filterSelect, setFilterSelect] = useState("All");
  const { user } = useContext(AuthContext);
  return (
    <section className="container pt-5 ">
      <div className="d-sm-block d-none">
        <div className="row blog ">
          <div className="col-md-8 col-sm-7">
            <ul className="blog-tabs">
              <li
                className={activeBlog === "allPost" && "active"}
                onClick={() => setActiveBlog("allPost")}
              >
                All Post
              </li>
              <li
                className={activeBlog === "event" && "active"}
                onClick={() => setActiveBlog("event")}
              >
                Event
              </li>
              <li
                className={activeBlog === "education" && "active"}
                onClick={() => setActiveBlog("education")}
              >
                Education
              </li>
              <li
                className={activeBlog === "job" && "active"}
                onClick={() => setActiveBlog("job")}
              >
                Job
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-5">
            <div className=" justify-content-end d-flex">
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  variant="secondary"
                  className="write-btn"
                >
                  Write Post
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark">
                  <Dropdown.Item href="#/action-1" active>
                    Dropdown
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <button className="join-btn">
                <img src={group} alt="" /> Join Group
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="d-sm-none d-block">
        <div className="row  ">
          <div className="col-6 d-flex align-items-center">
            <p className=" post-st">Posts(368)</p>
          </div>
          <div className=" col-6">
            <Dropdown className="d-flex">
              <Dropdown.Toggle
                id="dropdown-basic"
                className="drowdown-btn ms-auto"
                variant="none"
              >
                Filter : {filterSelect}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  href="#/action-1"
                  onClick={() => setFilterSelect("Event")}
                >
                  Event
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-2"
                  onClick={() => setFilterSelect("Education")}
                >
                  Education
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-3"
                  onClick={() => setFilterSelect("Job")}
                >
                  Job
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          {activeBlog === "allPost" && (
            <>
              {BlogPost.map((blog, idx) => (
                <div key={idx} className="blog-card">
                  <div className="card-top">
                    <div className="thumb">
                      <img src={blog.blogThumbnail} alt="" />
                    </div>
                  </div>
                  <div className="card-bottom">
                    <p className="category">{blog.category}</p>
                    <div className="d-flex justify-content-between ">
                      <h2 className="title">{blog.title}</h2>
                      <button className="menu_icon">
                        {" "}
                        <BsThreeDots />
                      </button>
                    </div>
                    <p className="subtitle">{blog.subTitle}</p>
                    <div className="author-info d-flex justify-content-between align-items-center">
                      <div className="d-flex justify-content-between align-items-center">
                        <img src={blog.authorThumbnail} alt="" />
                        <span className="author-name">{blog.authorName}</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="views">
                          <AiFillEye />
                          <span>1.4k views</span>
                        </div>
                        <button className="share">
                          <BsFillShareFill />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
          <div className="blog-card">
            <div className="card-top">
              <div className="thumb">
                <img src={blog3} alt="" />
              </div>
            </div>
            <div className="card-bottom">
              <p className="category">🗓️ Meetup</p>
              <div className="d-flex justify-content-between ">
                <h2 className="title">
                  Finance & Investment Elite Social Mixer @Lujiazui
                </h2>
                <button className="menu_icon">
                  {" "}
                  <BsThreeDots />
                </button>
              </div>
              <div className="details d-flex gap-5">
                <div className="date">
                  <BiCalendarEvent />
                  Fri, 12 Oct, 2018
                </div>
                <div className="location">
                  <IoLocationOutline />
                  Ahmedabad, India
                </div>
              </div>
              <button className="visit-btn">Visit Website</button>
              <div className="author-info d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-between align-items-center">
                  <img src={author3} alt="" />
                  <span className="author-name">Ronal Jones</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="views">
                    <AiFillEye />
                    <span>1.4k views</span>
                  </div>
                  <button className="share">
                    <BsFillShareFill />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-card">
            <div className="card-bottom">
              <p className="category">💼️ Job</p>
              <div className="d-flex justify-content-between ">
                <h2 className="title">Software Developer</h2>
                <button className="menu_icon">
                  {" "}
                  <BsThreeDots />
                </button>
              </div>
              <div className="details d-flex gap-5">
                <div className="date">
                  <MdWorkOutline />
                  Software Developer
                </div>
                <div className="location">
                  <IoLocationOutline />
                  Noida, India
                </div>
              </div>
              <button className="visit-btn text-success">
                Apply on Timesjobs
              </button>
              <div className="author-info d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-between align-items-center">
                  <img src={author4} alt="" />
                  <span className="author-name">Joseph Gray</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="views">
                    <AiFillEye />
                    <span>1.4k views</span>
                  </div>
                  <button className="share">
                    <BsFillShareFill />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex justify-content-end flex-column">
            <div className="mylocation d-flex justify-content-between ms-auto">
              <div className="location">
                <IoLocationOutline className="location-ico" />
                <input type="text" placeholder="Noida, India" />
                <button className="edit">
                  <RiPencilFill />
                </button>
              </div>
            </div>
            <div className="report ms-auto">
              <MdErrorOutline />
              <span>
                Your location will help us serve better and extend a
                personalised experience.
              </span>
            </div>
          </div>

          {user && (
            <div className="recomanded d-sm-block d-none">
              <div className="reco-title">
                <h4>
                  <MdOutlineThumbUpOffAlt />
                  Recommended Groups
                </h4>
              </div>
              <ul>
                {RecoGroup.map((group, index) => (
                  <li key={index}>
                    <div className="profile">
                      <img src={group.pp} alt="" />
                      <p className="name">{group.name}</p>
                    </div>
                    <button className="folowbtn">Follow</button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
