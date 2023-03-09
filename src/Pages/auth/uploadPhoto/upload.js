import React, { useEffect, useRef, useState } from "react";
import { PostUploadIcon, PreUploadIcon } from "../../../assets/icon/inputIcon";
import CustomButton from "../../../customComponents/button/customButton";
import CustomCard from "../../../customComponents/card/CustomCard";
import CardHeading from "../../../customComponents/Header/cardheader";
import img from "../../../assets/images/Preprofile.svg";
import { ThemeColors } from "../../../theme/theme";
function removeItems(arr, item) {
  for (var i = 0; i < item; i++) {
    arr.pop();
  }
}

function useFiles({ initialState = [], maxFiles }) {
  const [state, setstate] = useState(initialState);
  function withBlobs(files) {
    const destructured = [...files];
    if (destructured.length > maxFiles) {
      const difference = destructured.length - maxFiles;
      removeItems(destructured, difference);
    }
    const blobs = destructured
      .map((file) => {
        if (file.type.includes("image")) {
          console.log("image");
          file.preview = URL.createObjectURL(file);
          return file;
        }
        console.log("not image");
        return null;
      })
      .filter((elem) => elem !== null);

    setstate(blobs);
  }
  return [state, withBlobs];
}

function Upload({ onDrop, maxFiles = 1 }) {
  const [isFile, setIsFile] = useState(true);
  const [over, setover] = useState(false);
  const [files, setfiles] = useFiles({ maxFiles });
  const $input = useRef(null);
  useEffect(() => {
    if (onDrop) {
      onDrop(files);
    }
  }, [files, onDrop]);
  const reset = () => {
    setIsFile(true);
    setfiles("");
  };
  return (
    <>
      <CustomCard>
        <div
          className="card"
          style={{ textAlign: "center", width: "480px", maxHeight: "507px" }}
        >
          <div className="card-body">
            <CardHeading text="Upload Profile Photo" />
            <p
              style={{
                color: " #465567",
                fontWeight: "400",
                fontSize: "16px",
              }}
            >
              Have a favorite selfie? Upload it now
            </p>

            <div
              style={{ margin: "10px" }}
              onClick={() => {
                $input.current.click();
              }}
              onDrop={(e) => {
                e.preventDefault();
                e.persist();
                setfiles(e.dataTransfer.files);
                setIsFile(false);
                setover(false);
              }}
              onDragOver={(e) => {
                e.preventDefault();
                setover(true);
              }}
              onDragLeave={(e) => {
                e.preventDefault();
                setover(false);
              }}
            >
              <div>
                {!isFile ? (
                  files.map((file) => (
                    <>
                      <div>
                        <img
                          key={file.name + "file"}
                          src={file.preview}
                          alt="your file"
                          width={"60%"}
                        />
                      </div>
                      <div
                        style={{
                          position: "relative",
                          marginTop: "-8%",
                          zIndex: 1,
                        }}
                      >
                        <PostUploadIcon />
                      </div>
                    </>
                  ))
                ) : (
                  <>
                    <div>
                      <img src={img} />
                    </div>
                    <div
                      style={{
                        position: "relative",
                        marginTop: "-8%",
                        zIndex: 1,
                      }}
                    >
                      <PreUploadIcon />
                    </div>
                  </>
                )}

                <input
                  style={{ display: "none" }}
                  type="file"
                  accept="image/*"
                  ref={$input}
                  onChange={(e) => {
                    setfiles(e.target.files);
                    setIsFile(false);
                  }}
                  multiple={maxFiles > 1}
                />
              </div>
            </div>
            <div>
              <CustomButton
                title="Continue"
                background={
                  isFile ? ThemeColors?.disable : ThemeColors?.primary
                }
              />
            </div>
          </div>
        </div>
      </CustomCard>
    </>
  );
}

export { Upload };
