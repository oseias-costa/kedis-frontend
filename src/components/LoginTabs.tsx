import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import * as S from "../styles/Login";
import Logo from "/logo-kedis.svg"
import Login from '../pages/Login';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function LoginTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: '#181B1E', width: 350 }}>
    <S.Img src={Logo} alt="Logo Kedis" />
      <AppBar id="body-Tab" position="static" sx={{borderTopLeftRadius: "10px", borderTopRightRadius: "10px"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          sx={{ bgcolor: '#181B1E', borderTopLeftRadius: "10px", borderTopRightRadius: "10px"}}
          >
          <Tab label="Entrar" sx={style.tab} {...a11yProps(0)} />
          <Tab label="Registrar" sx={style.tab} {...a11yProps(1)} />
        </Tabs>
      </AppBar>
     
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        style={{borderColor: "red", borderWidth: "1px" }}
        >
        <TabPanel value={value} index={0} dir={theme.direction}>
            <Login />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            <Login />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}

const style = {
    tab: {
        fontFamily: "var(--font-secondary)",
        textTransform: "capitalize",
        fontSize: "18px",
        fontWeight: 300,
        color: '#F2F2F0'
    }
}