import React, { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Button,
  DialogActions,
} from "@material-ui/core";
import googleLogo from '../../assets/google.png';

export default function ResponsePopUp() {
  const matches = useMediaQuery("(max-width:985px)");
  const [opened, setOpen] = useState(matches);
  const [close, setClose] = useState(false);
  if (matches !== opened && !close) {
    setOpen(matches);
  }
  return (
    <Dialog open={opened && !close} onClose={() => setOpen(false)}>
      <DialogTitle id="mobile-dialog">
        {"¿Te gustaría descargar nuestra app de la playstore?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText style={{display: 'flex', justifyContent: 'center'}} id="mobile-dialog-description">
          <a href="https://play.google.com/store?hl=en"><img src={googleLogo} alt="PlayStore" /></a>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setClose(true)} color="primary">
          No, gracias.
        </Button>
      </DialogActions>
    </Dialog>
  );
}
