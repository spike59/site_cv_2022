
export const HeadComponent = (props) => {
    const {name,title,avatar_image} = props;

    return (
        // <div className="d-flex justify-content-evenly mb-3">
        <>
            {/* <div className="col-1"></div> */}
            <div className="col-6 text-center" id="avatar">
                <div className="avatar ">
                    <p id="site_web">adam.kassir.fr</p>
                    <img src={"images/avatars/" + avatar_image} alt="" />
                </div>              
            </div>
            <div className="col-6 text-center special_font" id="main_title">
                <h1 id="main_title_name">{name}</h1>
                <h2 id="main_title_job">{title[0]}</h2>
                <i id="main_title_qualit">{title[1]}</i>
            </div>
            {/* <div className="col-1"></div> */}
        </>
        // </div>
    )
}
