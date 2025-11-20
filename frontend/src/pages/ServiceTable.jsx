import React from "react";



const ROUTES = [
  {
    route: "Dehradun → Delhi (Direct)",
    distanceKm: 260,
    approxFareINR: "₹4,500 - ₹6,000",
    stops: "Rishikesh, Haridwar, Roorkee, Meerut, Ghaziabad",
    highlights: "Rishikesh (rafting), Haridwar (Ganga Aarti), Mussoorie (hillstation)"
  },
  {
    route: "Dehradun → Rishikesh",
    distanceKm: 45,
    approxFareINR: "₹700 - ₹1,200",
    stops: "Rishikesh",
    highlights: "River rafting, Laxman Jhula, Beatles Ashram"
  },
  {
    route: "Dehradun → Mussoorie",
    distanceKm: 35,
    approxFareINR: "₹600 - ₹1,000",
    stops: "Mussoorie",
    highlights: "Mall Road, Kempty Falls, Lal Tibba"
  },
  {
    route: "Dehradun → Haridwar",
    distanceKm: 55,
    approxFareINR: "₹800 - ₹1,300",
    stops: "Haridwar",
    highlights: "Har Ki Pauri, Mansa Devi (religious)"
  },
  {
    route: "Dehradun → Dhanaulti (via Mussoorie)",
    distanceKm: 60,
    approxFareINR: "₹900 - ₹1,400",
    stops: "Mussoorie, Dhanaulti",
    highlights: "Eco Park, quiet hill views"
  },
  {
    route: "Dehradun → Tehri (Lake)",
    distanceKm: 100,
    approxFareINR: "₹1,800 - ₹2,500",
    stops: "Rishikesh, Tehri",
    highlights: "Tehri Dam, boating"
  },
  {
    route: "Dehradun → Chakrata",
    distanceKm: 100,
    approxFareINR: "₹2,000 - ₹3,000",
    stops: "Mussoorie, Kempty",
    highlights: "Pine forests, trekking points"
  },
  {
    route: "Dehradun → Roorkee",
    distanceKm: 70,
    approxFareINR: "₹1,000 - ₹1,500",
    stops: "Roorkee",
    highlights: "FRI, IIT Roorkee nearby temples"
  },
  {
    route: "Dehradun → Kalsi (Ashokan Rock Edict)",
    distanceKm: 40,
    approxFareINR: "₹800 - ₹1,200",
    stops: "Kalsi",
    highlights: "Historical Ashokan edict"
  },
  {
    route: "Dehradun → Sahastradhara / Robber's Cave",
    distanceKm: 12,
    approxFareINR: "₹250 - ₹500",
    stops: "Sahastradhara, Robber's Cave",
    highlights: "Sulphur springs, picnic spots"
  },
  {
    route: "Dehradun → Tapkeshwar Temple",
    distanceKm: 7,
    approxFareINR: "₹200 - ₹400",
    stops: "Tapkeshwar",
    highlights: "Cave temple, natural water drip"
  }
];

export default function ServiceFareTable() {
  return (
    <section className="service-fare-section py-5">
      <div className="container">
        <h2 className="text-center mb-3">Service & Fare — Popular Routes</h2>
        <p className="text-center text-muted mb-4">
          Approx. fares & distances. Final fare varies by vehicle, traffic & route. Contact us for exact quote.
        </p>

        {/* Desktop / Tablet Table */}
        <div className="table-responsive shadow-sm d-none d-md-block fare-table-wrapper rounded-2">
          <table className="table table-hover align-middle fare-table ">
            <thead className="table-dark">
              <tr>
                <th>Route</th>
                <th>Distance (km)</th>
                <th>Approx. Fare</th>
                <th>Major Stops</th>
                <th>Highlights (Tourist / Religious)</th>
              </tr>
            </thead>
            <tbody>
              {ROUTES.map((r, idx) => (
                <tr key={idx}>
                  <td style={{ minWidth: 240 }}>{r.route}</td>
                  <td>{r.distanceKm}</td>
                  <td>{r.approxFareINR}</td>
                  <td>{r.stops}</td>
                  <td>{r.highlights}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: stacked cards */}
        <div className="d-md-none">
          {ROUTES.map((r, idx) => (
            <div className="card mb-3 fare-card shadow-sm" key={idx}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <h5 className="card-title mb-1">{r.route}</h5>
                  <small className="text-muted">{r.distanceKm} km</small>
                </div>
                <p className="mb-1"><strong>Fare:</strong> {r.approxFareINR}</p>
                <p className="mb-1"><strong>Stops:</strong> {r.stops}</p>
                <p className="mb-0"><strong>Highlights:</strong> {r.highlights}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-3">
          <a href="/contact" className="btn btn-warning btn-lg">Request Exact Fare</a>
        </div>
      </div>
    </section>
  );
}
