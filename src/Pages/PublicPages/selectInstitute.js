import React from "react";
import { InstituteIcon } from "../../assets/icon/inputIcon";
import img from "../../assets/images/Group33631.png";
import CustomButton from "../../customComponents/button/customButton";
import CustomCard from "../../customComponents/card/CustomCard";
import Dropdown from "../../customComponents/dropdown/dropdown";
import CardHeading from "../../customComponents/Header/cardheader";
const onclick = () => {};
const options = ["Class12", "Class11", "Class10"];

const SelectInstitute = () => {
  const divCenter = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "90vh",
  };
  return (
    <section>
      <div className="outerflex">
        <div className="left-flex">
          <div className="container" style={divCenter}>
            <CustomCard>
            <div  className="card"  style={{ textAlign: "start", width: "100%", maxHeight: "507px", borderRadius:'20px',border: '1px solid #D9E3EE'}}
        >
          <div className="card-body">
            <CardHeading text="Select Institute" />
            <p
            className="mt-2"
              style={{
                color: " #465567",
                fontWeight: "400",
                fontSize: 'calc(6.40px + 1vmin)',
              }}
            >
              Choose your institute
            </p>
                <Dropdown
                  // name="class"
                  placeholder="Select Institute"
                  label="Institute"
                  option={options}
                  lefticon={<InstituteIcon />}
                />
                 <div  className="mt-3">  <CustomButton title="Continue" onClick={onclick} /></div>
              
             </div>
             </div>
            </CustomCard>
          </div>
        </div>
        <img src={img} alt="" className="right-flex" />
      </div>
    </section>
  );
};

export default SelectInstitute;
