import './skillBadge.scss';

function SkillBadge({title, subTitle, subTitleImage}) {
    return (
        <div className="skillBadge text-center">
            <h1 className='number'>{title}</h1>
            {
                subTitleImage && <img src={subTitleImage}/>
            }
            <div className='topic'>{subTitle}</div>
        </div>
    )
}

export default SkillBadge;