import "./skillBadge.scss";

function SkillBadge({ title, subTitle, subTitleImage, label }) {
  return (
    <div className="skillBadge text-center">
      <h1 className="number">{title}</h1>
      {subTitleImage && (
        <div title={label}>
          <img src={subTitleImage} alt={label} />
        </div>
      )}
      <div className="topic">{subTitle}</div>
    </div>
  );
}

export default SkillBadge;
