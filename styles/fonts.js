import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {font-family: "VCR"; src: url("//db.onlinewebfonts.com/t/2545d122b16126676225a5b52283ae23.eot"); src: url("//db.onlinewebfonts.com/t/2545d122b16126676225a5b52283ae23.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/2545d122b16126676225a5b52283ae23.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/2545d122b16126676225a5b52283ae23.woff") format("woff"), url("//db.onlinewebfonts.com/t/2545d122b16126676225a5b52283ae23.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/2545d122b16126676225a5b52283ae23.svg#VCR OSD Mono") ;}
      @font-face {font-family: "Game"; src: url("//db.onlinewebfonts.com/t/8a52253d132e85c0523315fd730395c5.eot"); src: url("//db.onlinewebfonts.com/t/8a52253d132e85c0523315fd730395c5.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/8a52253d132e85c0523315fd730395c5.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/8a52253d132e85c0523315fd730395c5.woff") format("woff"), url("//db.onlinewebfonts.com/t/8a52253d132e85c0523315fd730395c5.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/8a52253d132e85c0523315fd730395c5.svg#Game Of Squids") format("svg"); }
      @font-face {font-family: "Play"; src: url("//db.onlinewebfonts.com/t/061f91cdeafd714e1686851b55e88d82.eot"); src: url("//db.onlinewebfonts.com/t/061f91cdeafd714e1686851b55e88d82.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/061f91cdeafd714e1686851b55e88d82.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/061f91cdeafd714e1686851b55e88d82.woff") format("woff"), url("//db.onlinewebfonts.com/t/061f91cdeafd714e1686851b55e88d82.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/061f91cdeafd714e1686851b55e88d82.svg#Play") format("svg"); }
      body {
        overflow-x: hidden !important;
        background-color: #0d0d0d !important;

      }
      `}
  />
);

export default Fonts;
