export const SkillComponent = (props)=>{
    const {name,icon} = props;

    return (
        <div className="skill mb-1">  
            <img src={"images/icones/" + icon} title={name} />
        </div>
    )
}