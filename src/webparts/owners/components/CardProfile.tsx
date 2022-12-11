import * as React from "react";
import { Avatar, Box, Card, Stack, Typography } from "@mui/material";
import { ICardProfileProps } from "./ICardProfileProps";

const CardProfile: React.FC<ICardProfileProps> = (props) => {
  return (
    <>
      <Card>
        <Box sx={{ p: 2, display: "flex" }}>
          <Avatar variant="rounded" src={props.image} style={{ margin: 4 }} />
          <Stack spacing={0.5}>
            <Typography fontWeight={700}>{props.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {props.email}
            </Typography>
          </Stack>
        </Box>
      </Card>
    </>
  );
};

export default CardProfile;
