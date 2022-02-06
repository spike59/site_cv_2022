
export const HeadComponent = (props) => {
    const {name,title,avatar_image} = props;

    return (
        <div className="d-flex justify-content-evenly">
            {/* <div className="col-1"></div> */}
            <div className="avatar ">
                <img src={"images/avatars/" + avatar_image} alt="" />                
            </div>
            <div className="text-center">
                <h1>{name}</h1>
                <h2>{title[0]}</h2>
                <h2>{title[1]}</h2>
            </div>
            {/* <div className="col-1"></div> */}
        </div>
    )
}
