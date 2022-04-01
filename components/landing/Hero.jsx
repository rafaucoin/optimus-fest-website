import Image from "next/image";
import { Box, Flex, Heading, HStack } from "@chakra-ui/react";
import { HeroLogo } from "../shared/Logo";
function Hero() {
  return (
    <Flex
      flexDirection={{ base: "column-reverse", md: "row" }}
      width="100%"
      height="90vh"
      justifyContent={{ base: "", md: "space-between" }}
    >
      <Box
        display="flex"
        width={{ base: "100%", md: "80%" }}
        height={{ base: "100vh", md: "95vh" }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 813 876"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M487.989 494.488C459.266 516.965 396.831 564.59 399.945 573.156C402.635 580.557 456.612 563.391 502.8 545.06C520.826 537.906 537.666 530.575 549.808 524.457L487.989 494.488Z"
            fill="black"
          />
          <path
            d="M399.945 573.156C396.831 564.59 459.266 516.965 487.989 494.488C504.849 482.625 535.755 450.874 544.188 423.312C552.74 395.363 527.328 239.752 527.328 234.133C527.328 228.513 502.917 112.759 486.116 86.1608C463.637 50.5727 431.791 7.49213 341.873 7.47604e-10C313.773 -0.000114322 270.688 13.1114 236.969 46.8266C225.729 58.0648 219.744 61.811 208.504 73.0493C198.416 83.1361 148.554 148.043 146.686 172.322C144.813 196.671 137.684 325.912 133.938 370.866C130.941 406.829 166.408 450.783 184.517 468.265L208.869 494.488C235.095 523.832 293.167 587.766 315.647 608.744C343.746 634.967 223.856 561.918 193.883 560.045C163.91 558.172 118.951 547.709 75.8658 553.877C54.8932 563.111 39.5397 570.144 38.4001 571.283C35.4028 574.28 -6.55885 592.511 -27.165 601.252C-38.4048 606.871 -61.2589 620.732 -62.7575 631.221C-64.6308 644.333 -113.336 846.623 -100.223 855.988H-21.5452C-12.1787 852.867 10.3007 841.753 25.287 822.273L25.7757 821.638C40.086 803.039 56.0952 782.232 73.8032 744.334C74.5629 742.708 76.8453 742.824 77.2719 744.567C83.711 770.875 73.5519 815.2 66.4994 827.893C59.2449 840.949 45.7645 857.53 24 858L145.178 855.988C122 835.572 101.467 746.102 88.9789 691.159C95.2231 689.286 109.96 696.404 118.951 739.859C127.943 783.314 140.182 801.67 145.178 805.416C148.924 808.538 156.792 812.908 158.291 805.416C160.164 796.05 137.684 708.017 152.671 691.159C164.66 677.673 162.056 694.905 160.164 709.89L160.136 710.113C158.254 725.005 156.585 738.218 190.136 784.812C223.856 831.639 315.647 848.496 384.958 855.988H570.414C531.45 855.988 456.768 776.071 424.297 736.112C437.411 734.239 470.38 739.109 497.356 773.574C531.075 816.654 606.006 820.4 613.5 820.4C619.494 820.4 624.739 815.405 626.613 812.908C640.1 736.487 698.422 669.931 725.897 646.206C730.268 644.957 731.891 653.698 703.417 698.651C667.825 754.843 692.178 822.273 690.305 807.289C688.806 795.301 714.657 764.833 727.77 751.097C719.028 784.188 704.167 851.493 714.657 855.988H812.068C798.955 817.279 783.969 741.732 780.222 719.255C777.339 701.955 770.231 661.19 761.489 642.46C755.87 633.094 738.635 612.116 714.657 603.125C684.685 591.887 577.907 531.949 549.808 524.457C537.666 530.575 520.826 537.906 502.8 545.06C489.121 577.527 454.27 647.704 424.297 668.682C386.832 694.905 362.479 713.636 330.633 719.255C298.787 724.874 242.589 698.651 201.376 655.571C224.273 662.778 295.315 697.439 338.126 683.667C377.559 668.713 470.248 605.267 502.8 545.06C456.612 563.391 402.635 580.557 399.945 573.156Z"
            fill="#0D0D0D"
          />
          <path
            d="M88.9789 691.159C101.467 746.102 122 835.572 145.178 855.988C166 875.017 274.843 887.037 384.958 855.988C315.647 848.496 223.856 831.639 190.136 784.812C156.585 738.218 158.254 725.005 160.136 710.113L160.164 709.89C162.056 694.905 164.66 677.673 152.671 691.159C137.684 708.017 160.164 796.05 158.291 805.416C156.792 812.908 148.924 808.538 145.178 805.416C140.182 801.67 127.943 783.314 118.951 739.859C109.96 696.404 95.2231 689.286 88.9789 691.159Z"
            fill="#020202"
          />
          <path
            d="M66.4994 827.893C73.5519 815.2 83.711 770.875 77.2719 744.567C76.8453 742.824 74.5629 742.708 73.8032 744.334C56.0952 782.232 40.086 803.039 25.7757 821.638L25.287 822.273C10.3007 841.753 -12.1787 852.867 -21.5452 855.988C-4.62579 858.406 17.5 858.14 24 858C45.7645 857.53 59.2449 840.949 66.4994 827.893Z"
            fill="#020202"
          />
          <path
            d="M424.297 668.682C454.27 647.704 489.121 577.527 502.8 545.06C470.248 605.267 377.559 668.713 338.126 683.667C295.315 697.439 224.273 662.778 201.376 655.571C242.589 698.651 298.787 724.874 330.633 719.255C362.479 713.636 386.832 694.905 424.297 668.682Z"
            fill="#020202"
          />
          <path
            d="M714.657 855.988C704.167 851.493 719.028 784.188 727.77 751.097C714.657 764.833 688.806 795.301 690.305 807.289C692.178 822.273 667.825 754.843 703.417 698.651C731.891 653.698 730.268 644.957 725.897 646.206C698.422 669.931 640.1 736.487 626.613 812.908C624.739 815.405 619.494 820.4 613.5 820.4C606.006 820.4 531.075 816.654 497.356 773.574C470.38 739.109 437.411 734.239 424.297 736.112C456.768 776.071 531.45 855.988 570.414 855.988H714.657Z"
            fill="#020202"
          />
          <path
            d="M208.869 494.488C209.494 496.361 209.619 500.107 205.123 500.107C201.212 500.107 123.839 532.753 75.8658 553.877C118.951 547.709 163.91 558.172 193.883 560.045C223.856 561.918 343.746 634.967 315.647 608.744C293.167 587.766 235.095 523.832 208.869 494.488Z"
            fill="#020202"
          />
          <path
            d="M296.914 176.068L276.308 136.733L203.25 187.306L296.914 176.068Z"
            fill="#C4C4C4"
          />
          <path
            d="M276.308 136.733L296.914 176.068H392.452L401.819 151.718L375.592 136.733H276.308Z"
            fill="#C6C6C6"
          />
          <path
            d="M401.819 151.718L392.452 176.068L443.031 179.814L401.819 151.718Z"
            fill="#49484E"
          />
          <path
            d="M276.308 136.733H375.592L323.14 123.622H276.308V136.733Z"
            fill="#48474C"
          />
          <path
            d="M392.452 176.068H296.914L334.38 222.894H351.24L392.452 176.068Z"
            fill="#202020"
          />
          <path
            d="M443.031 179.814L392.452 176.068L351.24 222.894L354.986 333.405L366.226 350.262L384.959 337.151L368.099 230.386L403.692 206.036L465.51 215.402L482.37 187.306L443.031 179.814Z"
            fill="#161616"
          />
          <path
            d="M296.914 176.068L203.25 187.306L193.883 228.513H210.743L220.109 211.656H283.801L311.901 230.386H321.267L302.534 337.151L321.267 350.262L332.507 333.405L334.38 222.894L296.914 176.068Z"
            fill="#131313"
          />
          <path
            d="M203.25 187.306L276.308 136.733L210.743 146.099L203.25 187.306Z"
            fill="#C4C4C4"
          />
          <path
            d="M354.986 333.405L351.24 222.894H334.38L332.507 333.405H354.986Z"
            fill="#C6C6C6"
          />
          <path
            d="M366.226 350.262L354.986 333.405H332.507L321.267 350.262L332.507 363.374H354.986L366.226 350.262Z"
            fill="#131311"
          />
          <path
            d="M384.959 337.151L366.226 350.262L362.479 380.231L401.819 382.104L384.959 337.151Z"
            fill="#C6C6C6"
          />
          <path
            d="M321.267 350.262L302.534 337.151L285.675 382.104L326.887 380.231L321.267 350.262Z"
            fill="#C6C6C6"
          />
          <path
            d="M332.507 363.374L321.267 350.262L326.887 380.231H362.479L366.226 350.262L354.986 363.374H332.507Z"
            fill="#282826"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M362.479 380.231H326.887L285.675 382.104L302.534 337.151L266.942 372.739L246.336 410.2H266.942L251.955 447.661L291.294 440.169H396.199L431.791 447.661L420.551 410.2H444.904L420.551 372.739L384.959 337.151L401.819 382.104L362.479 380.231ZM377.466 413.946L343.747 423.311L310.027 413.946L285.675 406.454V398.962L317.521 395.216L343.747 400.835L369.973 395.216L401.819 398.962V406.454L377.466 413.946Z"
            fill="#0C0E0D"
          />
          <path
            d="M377.466 413.946L369.973 395.216L343.747 400.835L317.521 395.216L310.027 413.946L343.747 423.311L377.466 413.946Z"
            fill="#8B8B8B"
          />
          <path
            d="M369.973 395.216L377.466 413.946L401.819 406.454V398.962L369.973 395.216Z"
            fill="#3F4042"
          />
          <path
            d="M310.027 413.946L317.521 395.216L285.675 398.962V406.454L310.027 413.946Z"
            fill="#3F4042"
          />
          <path
            d="M291.294 440.169L315.647 468.265H373.719L396.199 440.169H291.294Z"
            fill="#3B3C3E"
          />
          <path
            d="M396.199 440.169L373.719 468.265L431.791 447.661L396.199 440.169Z"
            fill="#121011"
          />
          <path
            d="M315.647 468.265L291.294 440.169L251.955 447.661L315.647 468.265Z"
            fill="#121011"
          />
          <path
            d="M373.719 468.265H315.647L311.901 500.107H377.466L373.719 468.265Z"
            fill="#191919"
          />
          <path
            d="M431.791 447.661L373.719 468.265L377.466 500.107L424.298 475.757L431.791 447.661Z"
            fill="#202020"
          />
          <path
            d="M315.647 468.265L251.955 447.661L265.068 475.757L311.901 500.107L315.647 468.265Z"
            fill="#202020"
          />
          <path
            d="M210.743 279.086L302.534 337.151L266.942 265.974L210.743 279.086Z"
            fill="#191A1E"
          />
          <path
            d="M302.534 337.151L280.055 245.371H231.349L210.743 279.086L266.942 265.974L302.534 337.151Z"
            fill="#1D1E22"
          />
          <path
            d="M384.959 337.151L476.75 279.086L420.551 265.974L384.959 337.151Z"
            fill="#191A1E"
          />
          <path
            d="M409.312 245.371L384.959 337.151L420.551 265.974L476.75 279.086L456.144 245.371H409.312Z"
            fill="#1D1E22"
          />
          <path
            d="M321.267 230.386H311.901L280.055 245.371L302.534 337.151L321.267 230.386Z"
            fill="#4D4C51"
          />
          <path
            d="M368.099 230.386L384.959 337.151L409.312 245.371L368.099 230.386Z"
            fill="#4D4C51"
          />
          <path
            d="M266.942 372.739L302.534 337.151L210.743 279.086L266.942 372.739Z"
            fill="#232429"
          />
          <path
            d="M384.959 337.151L420.551 372.739L476.75 279.086L384.959 337.151Z"
            fill="#232429"
          />
          <path
            d="M266.942 372.739L210.743 279.086L246.336 410.2L266.942 372.739Z"
            fill="#0E0C0D"
          />
          <path
            d="M476.75 279.086L420.551 372.739L444.904 410.2L476.75 279.086Z"
            fill="#0E0C0D"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M283.801 71.1762C315.849 64.7714 333.857 63.8655 366.226 78.6684C408.09 101.492 430.955 116.666 471.13 146.099C485.893 157.334 489.14 164.081 495.483 176.068L543.778 372.938C544.051 374.052 544.229 375.198 544.307 376.342C546.047 401.99 546.312 414.463 543.03 435.731C542.578 438.656 541.461 441.446 539.666 443.799C532.781 452.822 523.881 461.642 516.089 468.265C533.765 424.089 548.122 394.669 516.089 391.47C501.646 402.765 499 429.56 491.736 440.169C472.5 468.265 455.253 483.405 424.298 516.964C406.624 541.143 398.1 557.302 384.959 590.014C358.5 591.367 343.772 592.859 317.521 595.633C271.865 531.977 245.321 497.35 193.883 440.169C201.577 447.755 207.412 453.455 212.937 458.379C216.764 461.789 221.926 457.677 219.828 453C194.733 397.054 182.534 362.776 169.531 309.055C168.157 251.337 174.869 209.971 186.39 136.733C163.066 168.797 156.159 190.27 147.051 230.386C146.994 191.033 151.309 168.147 165.396 133.494C168.034 127.004 172.45 121.366 178.179 117.335C205.554 98.0709 230.487 87.0273 283.801 71.1762ZM375.592 136.733L401.819 151.718L443.031 179.814L482.37 187.306L465.51 215.402L403.692 206.036L368.099 230.386L409.312 245.371H456.144L476.75 279.086L444.904 410.2H420.551L431.791 447.661L424.298 475.757L377.466 500.107H311.901L265.068 475.757L251.955 447.661L266.942 410.2H246.336L210.743 279.086L231.349 245.371H280.055L311.901 230.386L283.801 211.656H220.109L210.743 228.513H193.883L203.25 187.306L210.743 146.099L276.308 136.733V123.622H323.14L375.592 136.733Z"
            fill="#020202"
          />
        </svg>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        width={{ base: "100%", md: "100%" }}
        height={{ base: "30vh", md: "90vh" }}
        justifyContent="flex-start"
        alignItems="center"
        pr={{ base: 5, sm: 5 }}
        pt={{ base: 10, md: 20 }}
        pl={{ base: 5, md: 18, lg: 20 }}
      >
        <Box
          display="flex"
          width="100%"
          justifyContent="flex-start"
          height={{ base: "100%", md: "22%" }}
          alignSelf="flex-start"
          pr={{ base: 5, sm: 0 }}
          pl={{ base: 5, sm: 0 }}
        >
          <HeroLogo />
        </Box>
        <Heading
          variant="title"
          mt={{ base: 0, sm: 8 }}
          fontSize={{ base: 15, md: 24 }}
          letterSpacing={{ base: 2, md: 2 }}
          textTransform="uppercase"
          display="flex"
          alignSelf={{ base: "center", md: "flex-start" }}
        >
          May 12-15, 2022 * Algeriaventure, Dely Brahim
        </Heading>
      </Box>
    </Flex>
  );
}

export default Hero;