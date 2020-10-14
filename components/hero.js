import { Box, Image } from "@chakra-ui/core";

const Hero = ({ ...props }) => (
  <>
    <Box>
      <Image {...props} />
    </Box>
  </>
);

export default Hero;
