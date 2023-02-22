import Veggie from "../components/Veggie"
import Popular from "../components/Popular";
import { motion } from 'framer-motion';
import styled from 'styled-components';

import React from 'react'

function Home() {
  return (
    <motion.div
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
    >
        <Quote>
            <h4>"People who love to eat are always the best people."  /Julia Child/ </h4>
        </Quote>
      <Veggie />
      <Popular />
    </motion.div>
  )
}

const Quote = styled.div`
text-align: center;
font-size: 0.1rem;
`;

export default Home;