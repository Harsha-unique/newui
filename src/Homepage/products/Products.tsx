import React from "react";

type Product = {
  icon: string;
  title: string;
  description: string;
};

const products: Product[] = [
  {
    icon: "./images/consulting-latest.jpg",
    title: "Enterprise Software",
    description:
      "We offer comprehensive enterprise software solutions, including ERP, CRM, SCM, and HCM systems from SAP, Microsoft Dynamics, and Oracle.",
  },
  {
    icon: "./images/consulting-latest.jpg",
    title: "Technology Infrastructure",
    description:
      "We specialize in database management with Oracle, MySQL, and PostgreSQL. Our cloud expertise includes AWS, Azure, and GCP.",
  },
  {
    icon: "./images/consulting-latest.jpg",
    title: "Enterprise Software",
    description:
      "We offer comprehensive enterprise software solutions, including ERP, CRM, SCM, and HCM systems from SAP, Microsoft Dynamics, and Oracle.",
  },
  {
    icon: "./images/consulting-latest.jpg",
    title: "Technology Infrastructure",
    description:
      "We specialize in database management with Oracle, MySQL, and PostgreSQL. Our cloud expertise includes AWS, Azure, and GCP.",
  },
  {
    icon: "./images/consulting-latest.jpg",
    title: "Enterprise Software",
    description:
      "We offer comprehensive enterprise software solutions, including ERP, CRM, SCM, and HCM systems from SAP, Microsoft Dynamics, and Oracle.",
  },
  {
    icon: "./images/consulting-latest.jpg",
    title: "Technology Infrastructure",
    description:
      "We specialize in database management with Oracle, MySQL, and PostgreSQL. Our cloud expertise includes AWS, Azure, and GCP.",
  },
];

const Products: React.FC = () => {
  return (
    <section className="products-section bg-light">
      <div className="container">
        <div className="text-center mb-4">
          <h4 className="fw-bold text-success">Products</h4>
        </div>

        <div className="row g-4">
          {products.map((product, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div
                className="product-card"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div
                  className="product-image"
                  style={{ backgroundImage: `url(${product.icon})` }}
                ></div>
                <div className="product-overlay">
                  <p>{product.description}</p>
                </div>
                <div className="product-heading">
                  <h6>{product.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
