import { Formik } from "formik";
import React, { useEffect } from "react";
import { CourseIcon } from "../../assets/icon/inputIcon";
import img from "../../assets/images/Group33631.png";
import CustomButton from "../../customComponents/button/customButton";
import CustomCard from "../../customComponents/card/CustomCard";
import Dropdown from "../../customComponents/dropdown/dropdown";
import CardHeading from "../../customComponents/Header/cardheader";
import StudentDetail from "../../services/StudentService";
import { ThemeColors } from "../../theme/theme";
export default function SelectCourse() {
  const onclick = () => {};
  const options = ["Class12", "Class11", "Class10"];
  const divCenter = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  };

  useEffect(()=>{
    getCourseByInstitute();
  },[])

  
  const getCourseByInstitute = async()=>{
    const res = await StudentDetail?.getCourseByInstitute();
     console.log("data check for course", res);
 
   }
 
  
  return (
    <section>
      <div className="outerflex">
        <div className="left-flex">
          <div className="container" style={divCenter}>
            <CustomCard>
              <div
                className="card px-3 py-3"
                style={{
                  textAlign: "start",
                  width: "100%",
                  maxHeight: "507px",
                  borderRadius: "20px",
                  border: "1px solid #D9E3EE",
                }}
              >
                <div className="card-body">
                  <CardHeading text="Select Course" />
                  <p
                    className="mt-2"
                    style={{
                      color: " #465567",
                      fontWeight: "400",
                      fontSize: "calc(6.40px + 1vmin)",
                    }}
                  >
                    Choose your course and sub-course
                  </p>
                  <Formik
                    initialValues={{ Course: "", SubCourse: "" }}
                    onSubmit={(values) => {}}
                  >
                    {(props) => {
                      const {
                        isValid,
                        values,
                        handleChange,
                        handleSubmit,
                        setFieldValue,
                      } = props;
                      return (
                        <form onSubmit={handleSubmit}>
                          <Dropdown
                            name="Course"
                            placeholder="Select Course"
                            label="Course"
                            option={options}
                            lefticon={<CourseIcon />}
                          />
                          <Dropdown
                            name="SubCourse"
                            placeholder="Select Sub-Course"
                            label="Sub Course"
                            option={options}
                            lefticon={<CourseIcon />}
                          />
                          <div className="mt-3">
                            {" "}
                            <CustomButton
                              title="Continue"
                              onClick={onclick}
                              background={
                                values?.Course && values.SubCourse
                                  ? ThemeColors?.primary
                                  : ThemeColors?.disable
                              }
                            />
                          </div>
                        </form>
                      );
                    }}
                  </Formik>
                </div>
              </div>
            </CustomCard>
          </div>
        </div>
        <img src={img} alt="" className="right-flex" />
      </div>
    </section>
  );
}
