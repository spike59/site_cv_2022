export const HobbyComponent = (props)=>{
    const {desc,iconClass} = props;

    return (
        <div >  
            <p>{desc}-{iconClass}</p>
            <i className={iconClass}></i>
        </div>
    )
}