import { TitleComponent } from "../../../display/title_component";

export const ProfilComponent = (props) => {
    const {title,presentation} = props;


    return (
        <section>
            <TitleComponent title={title}/>
            <div className="section_content">{presentation}</div>
        </section>
    )
}
