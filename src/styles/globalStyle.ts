//global style
import { css } from "@emotion/react";

import { reset } from "./reset";

export const globalStyle = () => css`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html,
  body,
  #__next {
    height: 100%;
  }

  html {
    font-size: 1rem;
    background: linear-gradient(to left bottom, #7200ff, #f9009d);
  }

  body {
  }

  #__next {
    font-size: 1.6rem;
    font-weight: 400;
    font-family: "NanumSquareNeo-Variable", Pretendard, -apple-system,
      BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
      "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    letter-spacing: -0.04em;
  }

  br.mobile-only {
    display: none;
  }

  @media screen and (max-width: 767px) {
    html {
      font-size: 9px;
    }
    br.mobile-only {
      display: block;
    }

    br.desktop-only {
      display: none;
    }
  }
`;
