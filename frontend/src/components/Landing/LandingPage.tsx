import { Box } from "@chakra-ui/react";
import LandingPageHeader from "./LandingPageHeader";
import LandingCardViews from "./LandingCardViews";

const LandingPage = () => {
  return (
    <Box p={10}>

      <Box textAlign="left">
        <LandingPageHeader></LandingPageHeader>
      </Box>

      <Box textAlign="center">
        <LandingCardViews></LandingCardViews>
      </Box>
    </Box>
  );
};

export default LandingPage;
