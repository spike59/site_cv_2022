import { TitleComponent } from "../../../display/title_component";
import { SkillComponent } from "./skill_component";


export const SkillsComponent = (props) => {
    const { title, size,skills } = props;
    let skillsComponents = skills.map((skill,id) => {
        return <SkillComponent key={id} name={skill.name} icon={skill.icon}/>
    });

    const perLine = 4;
    const lines = Math.ceil(skillsComponents.length / perLine);
    let skillsLines = [];
    for (let i= 0;i<lines;i++){ 
        skillsLines[i] = [];
        for (let j=0;j<perLine;j++){
            skillsLines[i].push(skillsComponents[j+i*perLine]);
        }
    }
    let skillsLinesComponents = skillsLines.map((line,id)=>{
        return(          
            <div key={id} className="d-flex flex-wrap justify-content-evenly">
                {line}
            </div>               
        )
    })
    
    return (
        <section>
            <TitleComponent title={title} size={size}/>
            {skillsLinesComponents}
        </section>
    )
}