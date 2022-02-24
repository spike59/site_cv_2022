export const TitleComponent = (props) => {
    const { title,size } = props;
    let textSize = size|| "8"
    return (
        <div className="section_title mb-3">
            <div className="title_box">
                <div className="title_deco " style={{ width: textSize.toString() + "em" }}>
                {/* <div className="title_deco " > */}
                    <p className="p_test"></p>
                </div>
                <h2>{title}</h2>
            </div>
        </div>
    )
}