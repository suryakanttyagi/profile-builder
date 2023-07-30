import './progressBar.scss';

function ProgressBar({label, status}) {
    return (
        <div className='progressBar'>
            <div className='label'>{label}</div>
            <div className='status'>{status}%</div>
            <div className='container'>
                <div className='progress' style={{width: `${status}%`}}></div>
            </div>
        </div>
    )
}

export default ProgressBar;