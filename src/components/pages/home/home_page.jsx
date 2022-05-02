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
                <div className="row align-items-center mb-3 " id="head">
                    <HeadComponent {...head} />
                </div>
                {/* <div className="d-flex flex-wrap justify-content-around"> */}
                <div className="row">
                    <div className="col-12 col-md-6 mb-3" id="profil">
                        <ProfilComponent {...profil} />
                    </div>
                    <div className="col-12 col-md-6 mb-3" id="skills">
                        <SkillsComponent {...skills} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 mb-3" id="exps">
                        <TimelineComponent {...experiences} />
                    </div>
                    <div className="col-12 col-md-6 mb-3" id="formation">
                        <TimelineComponent {...formations} />
                    </div>
                </div>
                <div className="row" id="hobbies">
                    <HobbiesComponent {...hobbies} />
                </div>
            </Suspense>
        </div>
    );
}
export default HomePage