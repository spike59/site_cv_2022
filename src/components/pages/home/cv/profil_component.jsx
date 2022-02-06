
export const ProfilComponent = (props) => {
    const {title,presentation} = props;


    return (
        <>  
            <h2>{title}</h2>
            {presentation}
        </>
    )
}
