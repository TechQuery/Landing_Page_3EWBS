import teachers from "../data/teachers.json";

export type Teacher = (typeof teachers)[0]["teachers"][0];

export const TeacherCard = ({ name, avatar, title }: Teacher) => (
  <div className="card card-cascade mb-1">
    <img
      className="img-fluid"
      src={`img/teachers/${avatar}`}
      alt="teacher photo"
    />
    {name && <h4 className="card-title my-4 font-weight-bold ">{name}</h4>}

    {title && <p className="py-2">{title}</p>}
  </div>
);
