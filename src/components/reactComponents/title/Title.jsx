import "./Title.scss";

const Title = (props) => {

    return(
        <>
        <div className="title">
            <h2>{props.backTitle}</h2>
                <h3>{props.title}</h3>
            <div className="hr"></div>
        </div>
        </>
    )
};
export default Title;
