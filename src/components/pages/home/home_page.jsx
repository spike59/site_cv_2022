import { Suspense } from "react";
import { HeadComponent } from "./cv/head_component";
import { ProfilComponent } from "./cv/profil_component";
import { SkillsComponent } from "./cv/skills_component";
import { TimelineComponent } from "./cv/timeline_component";
import { HobbiesComponent } from "./cv/hobbies_component";

const HomePage = (props) => {
    const { head, profil, skills, experiences, formations, hobbies } = props;
    return (
        <div className="container">
            <Suspense fallback={<div>blabla1</div>}>
                <HeadComponent {...head} />
                <div className="d-flex flex-wrap justify-content-around">
                    <div className="">
                        <ProfilComponent {...profil} />
                    </div>
                    <div className="">
                        <SkillsComponent {...skills} />
                    </div>
                </div>
                <div className="d-flex flex-wrap justify-content-around">
                    <div className="">
                        <TimelineComponent {...experiences} />
                    </div>
                    <div className="">
                        <TimelineComponent {...formations} />
                    </div>
                </div>
                <div className="d-flex flex-wrap justify-content-around">
                    
                    <HobbiesComponent {...hobbies} />
                    <div></div>
                </div>
            </Suspense>
        </div>
    );
}
export default HomePage