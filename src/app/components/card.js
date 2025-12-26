export default function Card({ props }) {
    return (
        <div className="card">
            <img className="object-cover sm:block hidden" src={props.image} alt="Estudiantes de intercambio" />
            <div className="py-10 px-9" style={{backgroundColor: props.bgColor}}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}