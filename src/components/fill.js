import * as React from "react";
import { Box } from "@theme-ui/components";

//https://codepen.io/inescodes/pen/KKzqOpy
const Fill = () => (
  <Box
    sx={{
      height: "100%",
      width: "100%",
      backgroundColor: "rgb(255, 243, 217)",
      backgroundImage: `radial-gradient(
                          circle,
                          rgba(48, 67, 39, 1) 20%,
                          rgba(48, 67, 39, 0) 21%
                        ),
                        radial-gradient(
                          circle,
                          rgba(207, 122, 55, 1) 20%,
                          rgba(207, 122, 55, 0) 21%
                        ),
                        linear-gradient(
                          -45deg,
                          rgb(236, 246, 237, 1) 20%,
                          rgb(236, 246, 237, 0) 21%
                        ),
                        linear-gradient(
                          -45deg,
                          rgb(236, 246, 237, 0) 79%,
                          rgb(236, 246, 237, 1) 80%
                        ),
                        linear-gradient(45deg, rgba(90, 181, 211, 0) 80%, rgba(90, 181, 211, 1) 81%),
                        linear-gradient(45deg, rgba(90, 181, 211, 1) 20%, rgba(90, 181, 211, 0) 21%),
                        linear-gradient(-45deg, rgba(207, 122, 55, 1) 25%, transparent 26%),
                        linear-gradient(
                          -45deg,
                          rgba(207, 122, 55, 0) 74%,
                          rgba(207, 122, 55, 1) 75%
                        ),
                        linear-gradient(
                          45deg,
                          rgba(237, 201, 112, 0) 74%,
                          rgba(237, 201, 112, 1) 75%
                        ),
                        linear-gradient(
                          45deg,
                          rgba(237, 201, 112, 1) 25%,
                          rgba(237, 201, 112, 0) 26%
                        ),
                        linear-gradient(
                          rgb(236, 246, 237, 0) 38%,
                          rgb(236, 246, 237, 1) 39% 60%,
                          rgb(236, 246, 237, 0) 61%
                        ),
                        linear-gradient(
                          to right,
                          rgba(237, 201, 112, 0) 35%,
                          rgba(237, 201, 112, 1) 36% 40%,
                          rgb(236, 246, 237, 1) 36% 60%,
                          rgba(237, 201, 112, 1) 61% 65%,
                          rgba(237, 201, 112, 0) 66%
                        ),
                        linear-gradient(
                          rgba(237, 201, 112, 0) 34%,
                          rgba(237, 201, 112, 1) 35% 39%,
                          rgb(236, 246, 237, 1) 40% 60%,
                          rgba(237, 201, 112, 1) 61% 65%,
                          rgba(237, 201, 112, 0) 66%
                        ),
                        linear-gradient(
                          to right,
                          rgba(48, 67, 39, 0) 35%,
                          rgba(48, 67, 39, 1) 36% 65%,
                          rgba(48, 67, 39, 0) 66%
                        ),
                        linear-gradient(
                          to right,
                          rgba(48, 67, 39, 0) 35%,
                          rgba(48, 67, 39, 1) 36% 40%,
                          rgb(236, 246, 237, 1) 36% 60%,
                          rgba(48, 67, 39, 1) 61% 65%,
                          rgba(48, 67, 39, 0) 66%
                        ),
                        linear-gradient(
                          rgba(48, 67, 39, 0) 34%,
                          rgba(48, 67, 39, 1) 35% 65%,
                          rgba(48, 67, 39, 0) 66%
                        ),
                        linear-gradient(
                          rgba(48, 67, 39, 0) 60%,
                          rgba(48, 67, 39, 1) 61% 65%,
                          rgba(48, 67, 39, 0) 66%
                        ),
                        linear-gradient(
                          to right,
                          rgba(90, 181, 211, 0) 0%,
                          rgba(90, 181, 211, 1) 31% 69%,
                          rgba(90, 181, 211, 0) 70%
                        )`,
      backgroundPosition: `30px 85px, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0,
                          0 0, 0 0, 0 0, -3.5px 0, 3.5px 0, 0 -3.5px, 0 3.5px, 0 0`,
      backgroundSize: `62px 170px, 62px 170px, 62px 170px, 62px 170px, 62px 170px,
                      62px 170px, 62px 170px, 62px 170px, 62px 170px, 62px 170px, 62px 170px,
                      62px 170px, 62px 170px, 62px 170px, 62px 170px, 62px 170px, 62px 170px,
                      1px 170px`,
    }}
  ></Box>
);

export default Fill;
