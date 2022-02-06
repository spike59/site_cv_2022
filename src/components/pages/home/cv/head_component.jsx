
export const HeadComponent = (props) => {
    const {name,title,avatar_image} = props;

    return (
        <div className="row">
            <div className="col-3">
                <img src={"images/avatars/" + avatar_image} alt="" />                
            </div>
            <div className="col-9 text-center">
                <h1>{name}</h1>
                <h2>{title[0]}</h2>
                <h2>{title[1]}</h2>
            </div>
        </div>
    )
}
