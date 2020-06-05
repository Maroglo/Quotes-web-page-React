import ImageToggleOnScroll from "./ImgToggleOnScroll";

const PlacesDetail = React.memo( ({
                           id,
                           firstName,
                           lastName,
                           favorite,
                           quote,
                           onHeartFavoriteHandler
                       }) => {
    console.log(`SpeakerDetail:${id} ${firstName} ${lastName} ${favorite}`);
    return (
        <div className="card col-4 cardmin">
            <ImageToggleOnScroll
                className="card-img-top"
                primaryImg={`./static/static/img/black/Place-${id}.jpg`}
                secondaryImg={`./static/static/img/Place-${id}.jpg`}
                alt="{firstName} {lastName}"
            />
            <div className="card-body">
                <h4 className="card-title">
                    <button
                        data-sessionid={id}
                        className={favorite ? "heartredbutton" : "heartdarkbutton"}
                        onClick={e => {
                            onHeartFavoriteHandler(e, !favorite);
                        }}
                    />
                    <span>
            {firstName} {lastName}
          </span>
                </h4>

                <span>{quote}</span>
            </div>
        </div>
    );
});

export default PlacesDetail;