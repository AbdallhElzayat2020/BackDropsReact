const Title = ({ title, subTile }) => {
  return (
    <div className="section-title">
      <h2>
        {title} <span>{subTile}</span>
      </h2>
    </div>
  );
};
export default Title;
