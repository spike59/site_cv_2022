import { TitleComponent } from "../../../display/title_component";

export const ProfilComponent = (props) => {
    const {title,presentation,infos} = props;


    return (
        <section>
            <TitleComponent title={title}/>
            <div className="section_content">{presentation}</div>
            <div className="row">
                <div className="col-4 info">
                    <i className="fas fa-car-side"></i>
                    <p>{infos.auto}</p>
                </div>
                <div className="col-8 info">
                    <i className="fas fa-at"></i>
                    <p>{infos.mel}</p>
                </div>
                <div className="col-4 info">
                    <i className="fas fa-mobile-alt"></i>
                    <p>{infos.tel}</p>
                </div>
                <div className="col-8 info">
                    <i className="fas fa-map-marker-alt"></i>
                    <p>{infos.adress}</p>
                </div>
            </div>
        </section>
    )
}
