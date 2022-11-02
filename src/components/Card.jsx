export default function Card(props) {
  return (
    <section className="card">
      <img src={props.imageUrl} alt="" className="card-img" />
      <div className="content">
        <p className="location">📍 {props.location.toUpperCase()}</p>
        <a className="location-link" href={props.googleMapsUrl}>
          View on Google Maps
        </a>
        <h1 className="card-title">{props.title}</h1>
        <h4 className="dates">
          {props.startDate} - {props.endDate}
        </h4>
        <p className="description">{props.description}</p>
      </div>
    </section>
  );
}
