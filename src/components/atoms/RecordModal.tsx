import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";
import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const RecordModal: NextPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [textValue, setTextValue] = useState<string>("");
  const [studyValue, setStudyValue] = useState<number>();

  const onTextChange = (e: any) => setTextValue(e.target.value);
  const onStudyChange = (e: any) => setStudyValue(e.target.value);
  const handleSubmit = () => console.log(textValue, studyValue)
  const handleReset = () => {
    setTextValue("");
    setStudyValue("");
  }

  return (
    <div>
      <Button onClick={handleOpen}>記録・投稿</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormControl>
            <TextField
              onChange={onTextChange}
              value={textValue}
              label={"学習日"} //optional
            />
            <FormLabel id="study-content">
              学習コンテンツ（複数選択不可）
            </FormLabel>
            <RadioGroup
              aria-labelledby="study-content"
              defaultValue="N予備校"
              name="study-content"
            >
              <FormControlLabel
                value="N予備校"
                control={<Radio />}
                label="N予備校"
              />
              <FormControlLabel
                value="ドットインストール"
                control={<Radio />}
                label="ドットインストール"
              />
              <FormControlLabel
                value="POSSE課題"
                control={<Radio />}
                label="POSSE課題"
              />
            </RadioGroup>

            <FormLabel id="study-language">学習言語（複数選択不可）</FormLabel>
            <RadioGroup
              aria-labelledby="study-language"
              defaultValue="HTML"
              name="study-language"
            >
              <FormControlLabel value="HTML" control={<Radio />} label="HTML" />
              <FormControlLabel value="CSS" control={<Radio />} label="CSS" />
              <FormControlLabel
                value="JavaScript"
                control={<Radio />}
                label="JavaScript"
              />
              <FormControlLabel value="PHP" control={<Radio />} label="PHP" />
              <FormControlLabel
                value="Laravel"
                control={<Radio />}
                label="Laravel"
              />
              <FormControlLabel value="SQL" control={<Radio />} label="SQL" />
            </RadioGroup>
            <TextField
              onChange={onStudyChange}
              value={studyValue}
              label={"学習時間"} //optional
            />
            <Button
              onClick={handleSubmit}
              variant="contained"
              endIcon={<SendIcon />}
            >
              Send
            </Button>
            <Button onClick={handleReset}>Reset</Button>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
};

export default RecordModal;
