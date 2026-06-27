import React from 'react';

const EcommerceComparison = () => {
  const comparisonData = [
    {
      feature: "Scalability",
      traditional: "Limited",
      tgays: "High"
    },
    {
      feature: "Mobile Optimization",
      traditional: "Basic",
      tgays: "Advanced"
    },
    {
      feature: "Inventory Management",
      traditional: "Manual",
      tgays: "Automated"
    },
    {
      feature: "Order Processing",
      traditional: "Time-Consuming",
      tgays: "Streamlined"
    },
    {
      feature: "Customer Experience",
      traditional: "Generic",
      tgays: "Personalized"
    },
    {
      feature: "Analytics",
      traditional: "Limited",
      tgays: "Real-Time"
    },
    {
      feature: "Security",
      traditional: "Standard",
      tgays: "Enterprise-Grade"
    },
    {
      feature: "Integration Support",
      traditional: "Minimal",
      tgays: "Extensive"
    }
  ];

  return (
    <section className="comparison-section pt100 pb100 bg-white position-relative">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center mb-5">
            <span className="badge mb-3 text-uppercase" style={{ background: "rgba(0, 131, 255, 0.1)", color: "#0083FF", fontWeight: "700", padding: "8px 16px", letterSpacing: "1px", borderRadius: "30px" }}>
              The TGAYS Advantage
            </span>
            <h2 className="heading-title mb-4">
              Traditional Ecommerce vs <span className="c-primary">TGAYS E-Commerce System</span>
            </h2>
            <p className="text-muted" style={{ fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto" }}>
              See why our custom ecommerce development solutions outperform traditional storefront setups in every crucial business metric.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="table-responsive rounded-4 shadow-sm border" style={{ background: "#fff", overflow: "hidden" }}>
              <table className="table mb-0 comparison-table">
                <thead>
                  <tr>
                    <th className="py-4 px-4 text-dark" style={{ width: "34%", fontSize: "1.1rem", borderBottom: "2px solid #eaeaea" }}>Capability</th>
                    <th className="py-4 px-4 text-muted" style={{ width: "33%", fontSize: "1.1rem", borderBottom: "2px solid #eaeaea", background: "#fff5f5" }}>Traditional Store</th>
                    <th className="py-4 px-4 text-white position-relative" style={{ width: "33%", fontSize: "1.1rem", borderBottom: "2px solid #0056b3", background: "linear-gradient(135deg, #0083FF 0%, #0056b3 100%)" }}>
                      TGAYS E-Commerce
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} style={{ borderBottom: index === comparisonData.length - 1 ? "none" : "1px solid #eaeaea" }}>
                      <td className="py-4 px-4 fw-bold text-dark" style={{ fontSize: "0.95rem" }}>{row.feature}</td>
                      <td className="py-4 px-4 text-muted position-relative" style={{ fontSize: "0.95rem", background: "#fffafa" }}>
                        <ion-icon name="close-circle" style={{ color: "#ff5e3a", marginRight: "8px", verticalAlign: "middle", fontSize: "1.1rem" }}></ion-icon>
                        {row.traditional}
                      </td>
                      <td className="py-4 px-4 fw-bold" style={{ fontSize: "0.95rem", color: "#0083FF", background: "#f4f9ff" }}>
                        <ion-icon name="checkmark-circle" style={{ color: "#0083FF", marginRight: "8px", verticalAlign: "middle", fontSize: "1.1rem" }}></ion-icon>
                        {row.tgays}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .comparison-table td, .comparison-table th {
          vertical-align: middle;
        }
        .comparison-table tr:hover td {
          background-color: #fafafa;
        }
        .comparison-table tr:hover td:nth-child(2) {
          background-color: #fff0f0;
        }
        .comparison-table tr:hover td:nth-child(3) {
          background-color: #ebf5ff;
        }
      `}} />
    </section>
  );
};

export default EcommerceComparison;
