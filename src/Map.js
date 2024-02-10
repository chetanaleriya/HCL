import { Link } from "react-router-dom"
import map from "./map.jpg"
function Map()
{
    return(
        <div>
             <Link to="https://maps.app.goo.gl/fj1rVLnQ2YMmGA4D6"><img src={map} width="100%" height={700}></img></Link>
        </div>
    )
}
export default Map