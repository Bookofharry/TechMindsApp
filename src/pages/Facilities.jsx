import "../App.css";
import Rachael from "../assets/rachael.jpg";
import Instructor from "../assets/instructor.jpeg"
import Class from "../assets/class.jpeg"
import Student from "../assets/testimonials.jpeg"
import Progress from "../compo/progress";
import TechMindsMarqueeShowcase from "../compo/show";
function Facilities() {
  return (
    <div className="p-4 sm:p-6">

        <TechMindsMarqueeShowcase />







        {/* THE PEOPLE AND FACILITIES */}

        <br /><br /><br />
      {/* SVG filter (once on the page) for the goo effect */}
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 18 -7"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>

      <div className="flex w-full flex-col lg:flex-row items-center gap-6">
        {/* Repeat this card as needed */}
        <div className="card bg-base-300 rounded-box p-6 goo-card">
          <div className="relative overflow-hidden rounded-full aspect-square w-56 sm:w-72 md:w-80 lg:w-96 max-w-[90vw] mx-auto">
            <img src={Rachael} alt="Tech Minds facility" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="divider lg:divider-horizontal"></div>

        <div className="card bg-base-300 rounded-box p-6 goo-card">
          <div className="relative overflow-hidden rounded-full aspect-square w-56 sm:w-72 md:w-80 lg:w-90 max-w-[90vw] mx-auto">
            <img src={Class} alt="Tech Minds facility" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="divider lg:divider-horizontal"></div>

        <div className="card bg-base-300 rounded-box p-6 goo-card">
          <div className="relative overflow-hidden rounded-full aspect-square w-56 sm:w-72 md:w-80 lg:w-84 max-w-[90vw] mx-auto">
            <img src={Instructor} alt="Tech Minds facility" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="divider lg:divider-horizontal"></div>

        <div className="card bg-base-300 rounded-box p-6 goo-card">
          <div className="relative overflow-hidden rounded-full aspect-square w-56 sm:w-72 md:w-80 lg:w-78 max-w-[90vw] mx-auto">
            <img src={Student} alt="Tech Minds facility" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Facilities;
