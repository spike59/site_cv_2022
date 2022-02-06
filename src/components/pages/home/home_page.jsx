import { Suspense } from "react";
import { HeadComponent} from "./cv/head_component";
import { ProfilComponent} from "./cv/profil_component";
import { SkillsComponent } from "./cv/skills_component";
import { TimelineComponent } from "./cv/timeline_component";

const HomePage = (props) => {
    const {head,profil,skills,experiences,formations} = props;
    return (
        <div className="container">
            <Suspense fallback={<div>blabla1</div>}>
                <HeadComponent {...head}/>
                <ProfilComponent {...profil}/>
                <SkillsComponent {...skills}/>
                <TimelineComponent {...experiences}/>
                <TimelineComponent {...formations}/>
            </Suspense>
        </div>
    );
}
export default HomePage