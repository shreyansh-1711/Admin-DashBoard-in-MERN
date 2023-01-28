const {  styled } = require("@mui/system");
const {Box } = require("@mui/material")

const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alighItems: "center",
});

export default FlexBetween;