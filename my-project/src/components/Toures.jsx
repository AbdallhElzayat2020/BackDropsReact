import { tours } from "../data";
import Title from "./Title";

const Toures = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTile="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          const { id, title, date, img, icon, text, location, duration, cost } =
            tour;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt={title} />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className={icon}></i>
                    </span>
                    {location}
                  </p>
                  <p>{duration} days</p>
                  <p>{cost}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Toures;
