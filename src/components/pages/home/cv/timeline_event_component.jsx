export const TimelineEventComponent = (props) => {
    function descToLines(text){
        return (
            <div>
                {text.split("\n").map((i,key) => {
                    return <div key={key}>{i}</div>;
                })}
            </div>);
    }
    
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
                <div className="ms-2">
                    <h2>{year}</h2>
                    <p>{descToLines(desc)}</p>
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
                <div className="ms-2">
                    <h2>{year}</h2>
                    <p>{descToLines(desc)}</p>
                </div>
            </div>
        )
    }
}