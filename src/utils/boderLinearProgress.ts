import { LinearProgress, linearProgressClasses } from "@mui/material";
import styled from "styled-components";

export const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 10,
    borderRadius: 5,
    padding: 1,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "#26282B",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: '#fff',
    },
  }));