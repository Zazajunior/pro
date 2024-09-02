import React from 'react'
import { FaRegLightbulb } from "react-icons/fa6";
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { IoIosArrowDown } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { RiMenu5Fill } from "react-icons/ri";
import { RiMenu2Fill } from "react-icons/ri";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const Component2 = ({name}) => {
  return (
    <div>Hello,{name}<FaRegLightbulb className='text-5xl text-red-500 text-center' />
    <Button variant="contained" >Hello world</Button>
    <div>
      <Accordion className='bg-blue-500'>
        <AccordionSummary
          expandIcon={<IoIosArrowDown/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<IoIosArrowDown/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<IoIosArrowDown/>}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Accordion Actions
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
    </div>
    <div>
    <ToggleButtonGroup>
      <ToggleButton value="left" aria-label="left aligned">
        <CiMenuBurger />
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        <CiMenuFries />
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        <RiMenu5Fill />
      </ToggleButton>
      <ToggleButton value="justify" aria-label="justified">
        <RiMenu2Fill />
      </ToggleButton>
    </ToggleButtonGroup>
    </div>
    </div>
  )
}

export default Component2