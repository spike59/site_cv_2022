import { SkillComponent } from "./skill_component";


export const SkillsComponent = (props) => {
    const { title, skills } = props;
    let skillsComponents = skills.map((skill,id) => {
        return <SkillComponent key={id} name={skill.name} icon={skill.icon}/>
    })

    return (
        <section>
            <h2>{title}</h2>
            <div className="d-flex flex-wrap">
                {skillsComponents}
            </div>
        </section>
    )
}
