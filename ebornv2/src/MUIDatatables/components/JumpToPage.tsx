import React from 'react';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';
import { getPageValue } from '../utils.js';
import clsx from 'clsx';
import { MUIDataTableJumpToPage } from 'mui-datatables';

const useStyles = makeStyles({ name: 'MUIDataTableJumpToPage' })((theme) => ({
  root: {
    color: theme.palette.text.primary,
  },
  caption: {
    flexShrink: 0,
  },
  // eslint-disable-next-line no-irregular-whitespace
  /*  Styles applied to the Select component root element */
  selectRoot: {
    marginRight: 32,
    marginLeft: 8,
  },
  select: {
    paddingTop: 6,
    paddingBottom: 7,
    paddingLeft: 8,
    paddingRight: 24,
    textAlign: 'right',
    textAlignLast: 'right',
    fontSize: theme.typography.pxToRem(14),
  },
  /* Styles applied to Select component icon class */
  selectIcon: {},
  /* Styles applied to InputBase component */
  input: {
    color: 'inhert',
    fontSize: 'inhert',
    flexShrink: 0,
  },
}));

interface JumpToPageProps extends MUIDataTableJumpToPage {

  changePage: (page: number) => void;
}

function JumpToPage(props: JumpToPageProps) {
  const { classes } = useStyles();

  const handlePageChange = (event: any) => {
    props.changePage(parseInt(event.target.value, 10));
  };

  const { count, textLabels, rowsPerPage, page } = props;

  const textLabel = textLabels.pagination?.jumpToPage;

  const pages = [];
  const lastPage = Math.min(1000, getPageValue(count, rowsPerPage, 1000000));

  for (let ii = 0; ii <= lastPage; ii++) {
    pages.push(ii);
  }
  const MenuItemComponent = MenuItem;

  const myStyle = {
    display: 'flex',
    minHeight: '52px',
    alignItems: 'center',
  };

  return (
    <Toolbar style={myStyle} className={classes.root}>
      <Typography color="inherit" variant="body2" className={classes.caption}>
        {textLabel}
      </Typography>
      <Select
        classes={{ select: classes.select, icon: classes.selectIcon }}
        input={<InputBase className={clsx(classes.input, classes.selectRoot)} />}
        value={getPageValue(count, rowsPerPage, page)}
        onChange={handlePageChange}
        style={{ marginRight: 0 }}
      >
        {pages.map((pageVal) => (
          <MenuItemComponent className={classes.menuItem} key={pageVal} value={pageVal}>
            {pageVal + 1}
          </MenuItemComponent>
        ))}
      </Select>
    </Toolbar>
  );
}



export default JumpToPage;