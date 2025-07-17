

const Address = () => {
  const locations = [
    {
      title: "USA Office",
      address: `Soarswell Solutions LLC  
25722 Kingsland Blvd, STE 204A, Katy, TX 77494, U.S.A.`,
      phone: "+44 7360 143428",
    },
    {
      title: "UK Office",
      address: `Soarswell Solutions Limited Office 317 Boundary House, Cricket Field Road, Uxbridge, England, UB81QG, U.K.`,
      phone: "+44 7360 143429",
    },
    {
      title: "Dubai Office",
      address: `Soarswell Consulting - FZCO Dubai Silicon Oasis, DDP, Building A1, Dubai,U.A.E`,
      phone: "+91 98765 43210",
    },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #e0f7fa, #ffffff)",
        marginBottom:"140px",
      }}
    >
      <div className="container py-3">
        <div className="row">
          {locations.map((loc, index) => (
            <div
              className="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-delay={index * 200}
              key={index}
            >
              <div className="d-flex align-items-start p-4 bg-white shadow-sm rounded h-100">
                <i
                  className="bi bi-geo-alt-fill me-3"
                  style={{
                    fontSize: "2rem",
                    color: "#198754",
                  }}
                ></i>
                <div>
                  <h5 style={{ color: "#198754", fontWeight: "600" }}>
                    {loc.title}
                  </h5>
                  <p className="mb-1" style={{ fontSize: "13px" }}>
                    {loc.address}
                  </p>
                  <p className="mb-0" style={{ fontSize: "13px" }}>
                    {loc.phone}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Address;
