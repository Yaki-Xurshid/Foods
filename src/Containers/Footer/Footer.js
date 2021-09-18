import React from "react";
import FooterWrapper from "./FooterWrapper";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="bg-black">
        <div className="row container">
          <div className="food col-3">
            <img src="food.jpg" alt="" />
            <p>www.company name.com</p>
            <p>companyname@gmail.com</p>
            <p>Phone: +7 485-118-03-25</p>
          </div>
          <table className="col-7">
            <thead>
              <tr>
                <th>Home</th>
                <th>Menu</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Landingpage</td>
                <td>Landingpage</td>
                <td>Landingpage</td>
              </tr>
              <tr>
                <td>Documentation</td>
                <td>Documentation</td>
                <td>Documentation</td>
              </tr>
              <tr>
                <td>Referral Program</td>
                <td>Referral Program</td>
                <td>Referral Program</td>
              </tr>
              <tr>
                <td>UI & UX Design</td>
                <td>UI & UX Design</td>
                <td>Landingpage</td>
              </tr>
              <tr>
                <td>Web Design</td>
                <td>Web Design</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
