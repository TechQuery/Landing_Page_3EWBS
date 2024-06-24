import students from "../data/students.json";

export type Student = (typeof students)[0];

export const StudentCard = ({ name, avatar, title, desc }: Student) => (
  <div className="card card-cascade col-lg-4 col-md-12 mb-4">
    <div className="view overlay z-depth-1-half">
      <img
        className="img-fluid"
        src={`img/students/${avatar}`}
        alt="student photo"
      />
      <div className="mask rgba-black-strong" />
    </div>

    <h4 className="card-title my-3 font-weight-bold">
      {name}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI4MzY0NDQxMg==&scene=126&bizpsid=0#wechat_redirect"
      >
        <i className="fab fa-weixin"></i>
      </a>
    </h4>
    <p className="grey-text">{title}</p>
    <p className="grey-text">{desc}</p>
  </div>
);
