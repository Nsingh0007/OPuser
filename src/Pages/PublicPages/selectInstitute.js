import React from "react";
import { InstituteIcon } from "../../assets/icon/inputIcon";
import img from "../../assets/images/Group33631.png";
import CustomButton from "../../customComponents/button/customButton";
import CustomCard from "../../customComponents/card/CustomCard";
import Dropdown from "../../customComponents/dropdown/dropdown";
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
              <form>
                <Dropdown
                  // name="class"
                  placeholder="Select Institute"
                  label="Institute"
                  option={options}
                  lefticon={<InstituteIcon />}
                />

                <CustomButton title="Continue" onClick={onclick} />
              </form>
            </CustomCard>
          </div>
        </div>
        <img src={img} alt="" className="right-flex" />
      </div>
    </section>
  );
};

export default SelectInstitute;
