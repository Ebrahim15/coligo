import { Search } from "@mui/icons-material";
import { alpha, Box, InputBase, styled } from "@mui/material";
import React from "react";


const SearchBarElm = styled('div')(({ theme }) => ({
    position: 'relative',
    // borderRadius: theme.shape.borderRadius,
    borderRadius: '25rem',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    borderRadius: '25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'black',
    width: '100%',
    border: 'solid',
    borderRadius: '25rem',
    borderColor: "#D6DCDA",
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        // width: '12ch',
        width: '100%',
        '&:focus': {
          width: '100%',
        },
      },
    },
  }));


  type searchProps = {
    display: Object,
    color: string
  }
const SearchBar = ({display, color}:searchProps) => {
  return (
    <Box sx={{ flexGrow: 1, display:display, width: 'fit-content' , marginBlock:{xs:1, sm:"auto"}}}>
      <SearchBarElm>
        <SearchIconWrapper>
          <Search sx={{ color: color }} />
        </SearchIconWrapper>
        <StyledInputBase
          // color={"primary"}
          sx={{color: color}}
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </SearchBarElm>
    </Box>
  );
};

export default SearchBar;
