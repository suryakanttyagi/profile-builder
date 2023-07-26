import './cardBadge.scss';

function CardBadge({title, subTitle, subTitleImage}) {
    return (
        <div className="cardBadge text-center">
            <h1 className='number'>{title}</h1>
            {
                subTitleImage && <img src={subTitleImage}/>
            }
            <div className='topic'>{subTitle}</div>
        </div>
    )
}

export default CardBadge;