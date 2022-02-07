
export const ProfilComponent = (props) => {
    const {title,presentation} = props;


    return (
        <section>
            <div id="test_bg"></div>
            <h2>{title}</h2>
            
            {presentation}
        </section>
    )
}
