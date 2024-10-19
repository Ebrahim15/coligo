import { Badge, Tooltip } from "@mui/material";
import React from "react";

type navIconProps = {
    Icon: any,
    title: string
}

const NavIcon = ({ Icon, title } : navIconProps) => {
  return (
    <Tooltip title={title}>
      <Badge badgeContent={4} color="primary">
        {Icon}
      </Badge>
    </Tooltip>
  );
};

export default NavIcon;
