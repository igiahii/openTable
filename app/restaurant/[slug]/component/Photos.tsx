"use client"
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { CardType } from "../page";
import { useState } from "react";
import { useMediaQuery } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';



function Photos({ restaurant }: { restaurant: CardType }) {
  const isMobile = useMediaQuery('(max-width: 640px)');
  const [open, setOpen] = useState(false);
  const [imgData, setImgData] = useState("")
  const handleOpen = (img : string) => {
    if (isMobile) return null
    setOpen(true)
    setImgData(img)
  }
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: 24,
  };
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
        {restaurant.images.length} Photos
      </h1>
      <div className="flex flex-wrap sm:justify-start justify-center">
        {restaurant.images.map((image) => (
          <img
            className="sm:w-56 w-auto sm:h-44 h-72 rounded mr-1 mb-1 transition transform hover:scale-105"
            src={image}
            key={uuidv4()}
            onClick={() => handleOpen(image)}
            alt={restaurant.slug}
          />
        ))}

      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <img
            className="min-w-full h-full"
            src={imgData}
            alt={restaurant.slug}
          />
        </Box>
      </Modal>

    </div>
  );
}

export default Photos;
