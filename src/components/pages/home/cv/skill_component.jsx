export const SkillComponent = (props)=>{
    const {name,icon} = props;

    return (
        // <div className="col-2 d-flex flex-column skill">
        <div className="skill">  
            {/* <p className="text-center">{name}</p> */}
            <img src={"images/icones/" + icon} title={name} />
        </div>
    )
}