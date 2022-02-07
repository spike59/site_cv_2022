export const TitleComponent = (props) => {
    const { title,size } = props;
    let textSize = size|| "8"
    // function getTextWidth(text, font) {
    //     const canvas = document.createElement('canvas');
    //     const context = canvas.getContext('2d');

    //     context.font = font || getComputedStyle(document.body).font;

    //     return context.measureText(text).width;
    // }
    // let text_width = getTextWidth(title) / 4.5;
    // console.log("width", text_width);
    // let size = title.length * 1.35;
    // console.log("l", size);
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