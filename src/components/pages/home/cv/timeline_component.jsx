import { TitleComponent } from "../../../display/title_component";
import { TimelineEventComponent } from "./timeline_event_component";


export const TimelineComponent = (props) => {
    const { title ,size, list} = props;
    let timeComponents = list.map((item,id) => {
        return <TimelineEventComponent key={id} year={item.year} desc={item.desc} list={item.list}/>
    })

    return (
        <section className="mb-3">
            <TitleComponent title={title}  size={size}/>
            <div className="d-flex flex-column">
                {timeComponents}
            </div>
        </section>
    )
}
