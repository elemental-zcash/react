import { Box, styled } from 'elemental-react';


// const DetailsBase = styled(Box)`
//   & > summary {
//     list-style: none;
//   }
//   & > summary::-webkit-details-marker {
//     display: none;
//   }
// `;

const Details = (props: any) => (
  <Box as="details" {...props} />
);

Details.displayName = 'Details'

export default Details;
