export const TimelineEventComponent = (props) => {
    const { year, desc,list } = props;
    if (list){
        let listItems = list.map((item,id)=>{
            return (
            <li key={id} className="time_li">
                <p>{item.year}</p>
                <p>{item.desc}</p>
            </li>
            )
        })
        return (
            <div className="d-flex">
                <div className="timeline">
                    <div className="circle"></div>
                    <div className="v_ligne"></div>
                </div>
                <div >
                    <h2>{year}</h2>
                    <p>{desc}</p>
                    <ul>
                        {listItems}
                    </ul>
                </div>
            </div>
        )
    }else
    {
        return (
            <div className="d-flex">
                <div className="timeline">
                    <div className="circle"></div>
                    <div className="v_ligne"></div>
                </div>
                <div >
                    <h2>{year}</h2>
                    <p>{desc}</p>
                </div>
            </div>
        )
    }
}