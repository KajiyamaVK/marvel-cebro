import Image from "next/image";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import { Dispatch, SetStateAction } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { ICharacters } from "@/interfaces";
import { useCharacters } from "@/contexts/charactersContext";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

interface DialogCharacterInfoProps {
  open: boolean;
  data: ICharacters | null;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <IoCloseSharp />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function DialogCharacterInfo({
  open,
  data,
}: DialogCharacterInfoProps) {
  const handleClose = () => {
    setCharacterData({} as ICharacters);
  };

  const { setCharacterData } = useCharacters();

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{
          "& .MuiDialog-paper": {
            background: "var(--gray-800)",
            color: "var(--white)",
            border: "1px solid var(--gray-700)",
            width: "40rem",
            height: "rem",
          },
        }}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {data?.name}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          {data?.description ? (
            <p>{data.description}</p>
          ) : (
            <Image
              src="/accessDenied.gif"
              alt="Access denied"
              width={500}
              height={500}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Fechar registro
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
