
export const ProfilComponent = (props) => {
    const {title,presentation} = props;


    return (
        <section>  
            <h2>{title}</h2>
            {presentation}
        </section>
    )
}
