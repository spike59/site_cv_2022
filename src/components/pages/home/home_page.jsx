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
                {/* <div className="d-flex flex-wrap justify-content-around"> */}
                <div className="row">
                    <div className="col-12 col-md-4 mb-3">
                        <ProfilComponent {...profil} />
                    </div>
                    <div className="col-12 col-md-8 mb-3">
                        <SkillsComponent {...skills} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 mb-3">
                        <TimelineComponent {...experiences} />
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                        <TimelineComponent {...formations} />
                    </div>
                </div>
                <div className="row">
                    <HobbiesComponent {...hobbies} />
                    <div></div>
                </div>
            </Suspense>
        </div>
    );
}
export default HomePage