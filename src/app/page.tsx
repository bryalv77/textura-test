"use client";

import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Grid from "../../components/Grid";
import Dialog from "../../components/Dialog";
import CheckList from "../../components/CheckList";
import avatar from "../../public/avatar.png";

export default function Page() {
  const [showDialog, setShowDialog] = React.useState(true);
  return (
    <>
      <Header
        label="Organization Name > Collection Name > Garment Name"
        avatar={avatar}
      />
      <Navbar />
      <Grid />
      <Dialog
        visible={showDialog}
        setVisible={() => setShowDialog(!showDialog)}
        title="Copy to..."
      >
        <CheckList />
      </Dialog>
    </>
  );
}
