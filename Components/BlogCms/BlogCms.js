import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { FcCancel } from "react-icons/fc";
import { AiOutlineCloudUpload } from "react-icons/ai";
import blogcss from "./BlogCms.module.css";
import { useState } from "react";
import Image from "next/image";

export default function BlogCms() {
  const [imageUrl, setImageUrl] = useState(false);
  const [blogInfo, setBlogInfo] = useState({});
  const [imageFile, setImageFile] = useState(false);
  const {
    uploadBox,
    whiteColorStyle,
    fileContainer,
    imageUploadBox,
    textAboutUpload,
    imageContianer,
    cancelIcon,
  } = blogcss;
  //////
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    const newValue = { ...blogInfo };
    newValue[name] = value;
    setBlogInfo(newValue);
  };
  const handleOnFile = (e) => {
    const field = e.target.name;
    const value = e.target.files[0];
    setImageUrl([URL.createObjectURL(e.target.files[0])]);
    const newValue = { ...blogInfo };
    newValue[field] = value;
    setBlogInfo(newValue);
    setImageFile(value);
  };
  const handleCancelFile = () => {
    setImageUrl(false);
    setImageFile("");
  };
  console.log(blogInfo);
  return (
    <Box sx={{ width: "97%", m: "auto", my: 2 }}>
      <Box className={blogcss.whiteColorStyle}>
        <Typography
          style={{
            fontSize: "1.7rem",
            fontWeight: "700",
            color: "#728FB4",
            textAlign: "center",
          }}
        >
          Write Your Blog And Post It ...
        </Typography>
      </Box>
      <Box className={blogcss.whiteColorStyle}>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ width: "90%", m: "auto", my: 2 }}>
              <TextField
                sx={{ my: 2 }}
                required
                id="outlined-basic"
                label="Title"
                name="title"
                variant="outlined"
                onChange={handleOnChange}
              />
              <TextField
                sx={{ my: 2 }}
                required
                id="outlined-basic"
                label="Meta Description"
                name="meta-description"
                variant="outlined"
                onChange={handleOnChange}
              />
            </FormControl>
            <FormControl fullWidth sx={{ width: "90%", m: "auto", my: 2 }}>
              <InputLabel id={`demo-simple-select-label`}>Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={blogInfo.category ? blogInfo.category : ""}
                name="category"
                label="Category"
                onChange={handleOnChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <Box
                sx={{
                  width: "60%",
                  m: "auto",
                  my: 2,
                  textAlign: "center",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      color: "#728FB4",
                    }}
                  >
                    Choose Your Image file
                  </Typography>
                  <div className={uploadBox}>
                    {imageUrl ? (
                      <div className={imageContianer}>
                        <Image
                          layout="responsive"
                          width={300}
                          height={250}
                          src={imageUrl[0]}
                          alt=""
                        />
                        <span className={cancelIcon} onClick={handleCancelFile}>
                          <FcCancel />
                        </span>
                      </div>
                    ) : (
                      <div className={imageUploadBox}>
                        <div className={textAboutUpload}>
                          <AiOutlineCloudUpload
                            style={{
                              fontSize: "4rem",
                              marginTop: "5px",
                              color: "#008AD9",
                            }}
                          />
                          <p>Click to choose your image file</p>
                        </div>
                        <input
                          onChange={handleOnFile}
                          name="photo_url"
                          type="file"
                          accept="image/*"
                        />
                      </div>
                    )}

                    {imageFile && (
                      <div
                        style={{
                          marginTop: "10px",
                          textAlign: "center",
                          fontSize: "1.2rem",
                        }}
                      >
                        <small>{imageFile.name}</small>
                      </div>
                    )}
                  </div>
                </Box>
                <TextField
                  sx={{ width: "100%", my: 2 }}
                  label="Image Alt Name"
                  id="outlined-size-small"
                  size="small"
                  name="image_alt"
                  onChange={handleOnChange}
                />
              </Box>
            </FormControl>
          </Grid>
        </Grid>
        <Box>
          <FormControl fullWidth sx={{ my: 3 }}>
            <TextField
              id="outlined-multiline-static"
              name="main_content"
              label="Write down Your Conten in here ..."
              multiline
              onChange={handleOnChange}
              rows={4}
            />
          </FormControl>
          <Box sx={{ width: "70%", m: "auto" }}>
            <Button
              disableElevation
              sx={{ width: "100%", p: 1.5, mb: 5 }}
              variant="contained"
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
