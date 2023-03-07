import React, { useEffect, useRef, useState } from "react";

import { UploadIcon } from "../../../assets/icon/inputIcon";
import CustomButton from "../../../customComponents/button/customButton";
import UnderLineText from '../../../customComponents/under-line-text/underLineText';
import CustomCard from '../../../customComponents/card/CustomCard';

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
            .map(file => {
                if (file.type.includes("image")) {
                    console.log("image");
                    file.preview = URL.createObjectURL(file);
                    return file;
                }
                console.log("not image");
                return null;
            })
            .filter(elem => elem !== null);

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
        setIsFile(true)
        setfiles('');
    }
    return (
        <>
            <section>
                <UnderLineText text='Upload Profile Photo' subText='when an unknown printer took a galley of type and scrambled it to make a type specimen book.' />
                {isFile &&
                    <CustomCard>
                        <div style={{ margin: '10px' }}
                            onClick={() => {
                                $input.current.click();

                            }}
                            onDrop={e => {
                                e.preventDefault();
                                e.persist();
                                setfiles(e.dataTransfer.files);
                                setIsFile(false);
                                setover(false);
                            }}
                            onDragOver={e => {
                                e.preventDefault();
                                setover(true);
                            }}
                            onDragLeave={e => {
                                e.preventDefault();
                                setover(false);
                            }}

                        >
                            <div className={over ? "upload-container over" : "upload-container"}>

                                <UploadIcon />
                                <h3 className="SemiBold">Drag and drop file to upload</h3>
                                <input
                                    style={{ display: "none" }}
                                    type="file"
                                    accept="image/*"
                                    ref={$input}
                                    onChange={e => {
                                        setfiles(e.target.files);
                                        setIsFile(false);
                                    }}
                                    multiple={maxFiles > 1}
                                />
                                {/* <p className="Medium" style={{ color: ThemeColors.deactive }} >or</p> */}
                                <CustomButton title="Choose file" width="65%" />
                            </div>
                        </div>
                    </CustomCard>
                }
                {!isFile && files.map(file => (
                    <>
                        <div className="blob-container">
                            <img key={file.name + "file"} src={file.preview} alt="your file" width={"60%"} />
                        </div>
                        <div className="blob-buttons">
                            <CustomButton title="Save" width="20%" />
                            <CustomButton title="Reset" width="20%" func={reset} />
                        </div>
                    </>
                ))}
            </section>


        </>
    );
}

export { Upload };

