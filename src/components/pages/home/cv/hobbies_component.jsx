import { TitleComponent } from "../../../display/title_component";
import { HobbyComponent } from "./hobby_component";


export const HobbiesComponent = (props) => {
    const { title, list } = props;
    let hobbyComponents = list.map((item,id) => {
        return <HobbyComponent key={id} desc={item.desc} iconClass={item.iconClass} svg={item.svg}/>
    })

    return (
        <section>
            <TitleComponent title={title} size="8.5"/>
            <div className="d-flex flex-wrap justify-content-around">
            
                {hobbyComponents}
            </div>
        </section>
    )
}
