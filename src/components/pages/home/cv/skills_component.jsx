import { TitleComponent } from "../../../display/title_component";
import { SkillComponent } from "./skill_component";


export const SkillsComponent = (props) => {
    const { title, size,skills } = props;
    let skillsComponents = skills.map((skill,id) => {
        return <SkillComponent key={id} name={skill.name} icon={skill.icon}/>
    })

    return (
        <section>
            <TitleComponent title={title} size={size}/>
            <div className="d-flex flex-wrap justify-content-around">
                {skillsComponents}
            </div>
        </section>
    )
}
