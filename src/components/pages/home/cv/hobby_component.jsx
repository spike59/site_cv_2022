export const HobbyComponent = (props)=>{
    const {desc,iconClass,svg} = props;

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="hobby_ico">  
            {/* <p>{desc}-{iconClass}-{svg}</p> */}
            {
                iconClass?
                <i className={iconClass}></i>:
                <img src={"images/icones/" + svg} title={desc} />
            }
            </div>
            <div className="text-center"><p>{desc}</p></div>
        </div>
    )
}