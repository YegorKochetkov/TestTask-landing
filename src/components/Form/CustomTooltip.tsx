import React from "react";
import { styled } from "@mui/material/styles";
import { Tooltip } from "@mui/material";
import { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

export const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
		fontSize: "16px",
		lineHeight: "26px",
    color: "#ffffffde",
    backgroundColor: "#000000de",
		padding: "3px 16px;",
		marginLeft: "10%",
		width: "fit-content",
		textAlign: "center",
  },
}));
