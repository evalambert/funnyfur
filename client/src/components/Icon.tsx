export interface IconProps {
  name: string;
  size: "small" | "large";
  fill: "brown" | "beige" | "white";
}

export const Icon = ({ name, size, fill }: IconProps) => {
  let width;
  let height;

  const colorMap = {
    brown: "#642B13",
    beige: "#B29588",
    white: "#EDF6F6",
  };

  const fillColor = colorMap[fill];

  switch (size) {
    case "small":
      width = "";
      height = "24";
      break;
    case "large":
      width = "";
      height = "28";
      break;
  }
  const icons: { [key: string]: React.ReactNode } = {
    close: (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.3736 14.1392C11.3736 14.1392 11.4002 14.1013 11.4154 14.0747C11.4382 14.0367 11.461 14.0026 11.4876 13.9646L11.8673 13.422L12.4559 13.9836C12.5205 14.0443 12.5699 14.0899 12.6154 14.1392L22.0637 23.5767C22.1207 23.6336 22.17 23.6868 22.227 23.7361C22.489 23.9714 22.8688 24.0587 23.2296 23.96C23.4308 23.9069 23.7878 23.7437 23.9397 23.2769C24.0802 22.8406 23.9777 22.4838 23.6055 22.112L14.1155 12.6327C14.1155 12.6327 14.0775 12.6061 14.0509 12.591C14.0091 12.5644 13.9636 12.534 13.918 12.5037L13.318 12.0787L14.0053 11.4981C14.0661 11.4487 14.0965 11.4222 14.1269 11.3956L23.5789 1.9505C23.6359 1.89358 23.6853 1.84424 23.727 1.79491C23.9777 1.5141 24.0574 1.14601 23.9549 0.789306C23.8524 0.44019 23.5751 0.166969 23.2182 0.0645106L23.0169 0.0075893H22.8118C22.4435 0.0948684 22.1549 0.364295 21.7903 0.72859C19.7092 2.8157 17.6244 4.89901 15.5433 6.97853L12.6002 9.92325C12.5471 9.98017 12.4521 10.0902 12.2699 10.2154L11.761 10.5722L11.4496 10.0371C11.4268 9.99914 11.4078 9.9574 11.385 9.91945L11.3622 9.87392L7.61407 6.12851C5.81783 4.3336 4.02159 2.53868 2.22916 0.739975C1.89877 0.409832 1.58738 0.0948685 1.19243 0H1.01395C0.964581 0.0189737 0.911414 0.0379473 0.858248 0.056921C0.698751 0.113842 0.546848 0.166969 0.429124 0.235274C0.258235 0.333937 0.136715 0.508495 0.00380125 0.857612V1.30919C0.110132 1.62035 0.34937 1.8746 0.672161 2.19716C2.76461 4.28047 4.85326 6.36758 6.94191 8.45469L9.87361 11.3842C9.90399 11.4146 9.93817 11.4411 9.97235 11.4677L10.5306 11.9421L10.0369 12.4619C9.98753 12.5151 9.94576 12.5606 9.90019 12.6023L8.09636 14.4048C5.61657 16.8828 3.13677 19.3646 0.649376 21.8387C0.345573 22.1385 0.106331 22.3966 0 22.7115V23.1441C0.0227852 23.1897 0.0417743 23.239 0.0607621 23.2883C0.163296 23.5729 0.33798 23.7627 0.603808 23.8879C0.945586 24.0511 1.50003 24.0131 1.88738 23.6185C4.04818 21.4441 6.21657 19.2773 8.38877 17.1105L11.3736 14.1278V14.1392Z"
          fill={fillColor}
        />
      </svg>
    ),
    comment: (
      <svg
        width={width}
        height={height}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28 13.0618L27.9492 12.6866C27.914 12.4208 27.8788 12.155 27.8397 11.8892C27.3119 8.5553 25.7597 5.72556 23.2223 3.48209C21.1149 1.62165 18.6557 0.496007 15.9111 0.140335C11.97 -0.371676 8.41608 0.601534 5.33911 3.03261C2.40289 5.35425 0.651329 8.40678 0.139152 12.1042C-0.306559 15.3326 0.319 18.3929 2.00801 21.1953C2.12139 21.3829 2.12921 21.5041 2.04711 21.7073C1.57794 22.8564 1.11659 24.0133 0.655238 25.1664L0.16652 26.3897C-0.14626 27.1714 0.00622046 27.6013 0.733433 27.9883L1.23388 28.0039L5.38603 26.3389C5.71836 26.206 6.05069 26.077 6.37911 25.9363C6.51986 25.8738 6.60978 25.8816 6.7388 25.9637C8.06421 26.7884 9.51081 27.3707 11.0395 27.6873C11.4227 27.7655 11.8137 27.8202 12.1929 27.871C12.3806 27.8945 12.5643 27.9218 12.7481 27.9492C12.8028 27.957 12.8576 27.9687 12.9084 27.9844L13.0257 28.0078H14.9297L15.309 27.957C15.5787 27.9218 15.8446 27.8867 16.1105 27.8437C19.4416 27.3199 22.2683 25.7683 24.5125 23.2356C26.3305 21.1797 27.4605 18.7252 27.8671 15.9384C27.8983 15.7156 27.9257 15.4889 27.9531 15.2623L27.9922 14.93V13.0696L28 13.0618ZM2.85643 25.1312L3.20048 24.2713C3.51717 23.474 3.83777 22.6727 4.16619 21.8793C4.35386 21.422 4.31867 21.0234 4.04499 20.6208C3.04409 19.1395 2.41462 17.5135 2.17613 15.7938C1.67959 12.2215 2.58665 9.02431 4.87385 6.28838C6.66452 4.14653 8.94781 2.7942 11.6494 2.27828C15.438 1.55521 18.8473 2.45025 21.7913 4.93605C23.9104 6.72613 25.2319 8.98132 25.7245 11.6352C26.5417 16.0635 25.2671 19.8664 21.9399 22.9385C20.2079 24.5371 18.1005 25.5181 15.6765 25.8464C12.8028 26.2373 10.1559 25.6862 7.80225 24.201C7.35654 23.9195 6.96166 23.7827 6.57068 23.7827C6.27745 23.7827 5.98422 23.8609 5.66753 24.0133C5.03024 24.3221 4.35386 24.5801 3.69702 24.8302C3.41552 24.9397 3.13402 25.0452 2.85252 25.1585C2.85252 25.1585 2.86033 25.139 2.86424 25.1312H2.85643Z"
          fill={fillColor}
        />
      </svg>
    ),
    home: (
      <svg
        width={width}
        height={height}
        viewBox="0 0 31 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.72141 17.1789C5.72141 16.3761 5.90441 15.6269 6.26079 14.9526C6.62681 14.2783 7.1084 13.7324 7.72484 13.3257C8.33165 12.919 9.00588 12.7263 9.72828 12.7263C10.4507 12.7263 11.1249 12.9297 11.7317 13.3257C12.0592 13.5398 12.3385 13.7966 12.589 14.0856C12.8394 13.7966 13.1283 13.5398 13.4462 13.3257C14.053 12.919 14.7272 12.7263 15.4496 12.7263C16.172 12.7263 16.8463 12.9297 17.4531 13.3257C17.7805 13.5398 18.0599 13.7966 18.3103 14.0856C18.3392 14.0535 18.3681 14.0214 18.397 13.9893C18.1369 13.711 17.9058 13.3899 17.7131 13.0367C17.3471 12.3624 17.1737 11.6132 17.1737 10.8104C17.1737 10.0076 17.3567 9.25841 17.7131 8.5841C17.9058 8.23089 18.1369 7.90979 18.397 7.6315C18.1369 7.35321 17.9058 7.03211 17.7131 6.6789C17.3471 6.00459 17.1737 5.25535 17.1737 4.4526C17.1737 3.64985 17.3567 2.90061 17.7131 2.2263C18.0791 1.55199 18.5607 1.00612 19.1772 0.599388C19.784 0.192661 20.4582 0 21.1806 0C21.903 0 22.5772 0.203364 23.184 0.599388C23.7909 1.00612 24.2821 1.54128 24.6481 2.2263C25.0141 2.90061 25.1875 3.64985 25.1875 4.4526C25.1875 5.25535 25.0045 6.00459 24.6481 6.6789C24.4555 7.04281 24.2243 7.35321 23.9642 7.6315C23.9931 7.66361 24.022 7.69572 24.0509 7.72783C24.3013 7.43884 24.5903 7.18196 24.9082 6.96789C25.515 6.56116 26.1892 6.3685 26.9116 6.3685C27.634 6.3685 28.3082 6.57187 28.915 6.96789C29.5218 7.37462 30.0131 7.90979 30.3791 8.5948C30.7451 9.26911 30.9185 10.0183 30.9185 10.8211C30.9185 11.6239 30.7355 12.3731 30.3791 13.0474C30.0131 13.7217 29.5315 14.2676 28.915 14.6743C28.3082 15.081 27.634 15.2737 26.9116 15.2737C26.1892 15.2737 25.515 15.0703 24.9082 14.6743C24.5903 14.4602 24.3013 14.2034 24.0509 13.9144C24.022 13.9465 23.9931 13.9786 23.9642 14.0107C24.2243 14.289 24.4555 14.6101 24.6481 14.9633C25.0141 15.6376 25.1875 16.3869 25.1875 17.1896C25.1875 17.9924 25.0045 18.7416 24.6481 19.4159C24.4555 19.7798 24.2243 20.0902 23.9642 20.3685C24.2243 20.6468 24.4555 20.9679 24.6481 21.3211C25.0141 21.9954 25.1875 22.7446 25.1875 23.5474C25.1875 24.3502 25.0045 25.0994 24.6481 25.7737C24.2821 26.448 23.8005 26.9939 23.184 27.4006C22.5772 27.8073 21.903 28 21.1806 28C20.4582 28 19.784 27.7966 19.1772 27.4006C18.5704 26.9939 18.0791 26.4587 17.7131 25.7737C17.3471 25.0994 17.1737 24.3502 17.1737 23.5474C17.1737 22.7446 17.3567 21.9954 17.7131 21.3211C17.9058 20.9679 18.1369 20.6468 18.397 20.3685C18.3681 20.3364 18.3392 20.3043 18.3103 20.2722C18.0599 20.5612 17.7709 20.818 17.4531 21.0321C16.8463 21.4388 16.172 21.6315 15.4496 21.6315C14.7272 21.6315 14.053 21.4281 13.4462 21.0321C13.1283 20.818 12.8394 20.5612 12.589 20.2722C12.5601 20.3043 12.5312 20.3364 12.5023 20.3685C12.7623 20.6468 12.9935 20.9679 13.1861 21.3211C13.5521 21.9954 13.7255 22.7446 13.7255 23.5474C13.7255 24.3502 13.5425 25.0994 13.1861 25.7737C12.8201 26.448 12.3385 26.9939 11.7221 27.4006C11.1153 27.8073 10.441 28 9.71865 28C8.99625 28 8.32202 27.7966 7.71521 27.4006C7.1084 26.9939 6.61717 26.4587 6.25116 25.7737C5.88515 25.0994 5.71177 24.3502 5.71177 23.5474C5.71177 22.7446 5.89478 21.9954 6.25116 21.3211C6.4438 20.9679 6.67496 20.6468 6.93503 20.3685C6.67496 20.0902 6.4438 19.7691 6.25116 19.4159C5.88515 18.7416 5.71177 17.9924 5.71177 17.1896L5.72141 17.1789Z"
          fill={fillColor}
        />
        <path
          d="M0.539317 8.59495C0.905329 7.92064 1.38692 7.37477 2.00337 6.96804C2.61018 6.56131 3.28441 6.36865 4.0068 6.36865C4.72919 6.36865 5.40343 6.57202 6.01024 6.96804C6.61705 7.37477 7.10827 7.90994 7.47429 8.59495C7.8403 9.26926 8.01367 10.0185 8.01367 10.8213C8.01367 11.624 7.83067 12.3732 7.47429 13.0476C7.10827 13.7219 6.62668 14.2677 6.01024 14.6745C5.40343 15.0812 4.72919 15.2739 4.0068 15.2739C3.28441 15.2739 2.61018 15.0705 2.00337 14.6745C1.39656 14.2677 0.905329 13.7326 0.539317 13.0476C0.173305 12.3732 -6.67572e-05 11.624 -6.67572e-05 10.8213C-6.67572e-05 10.0185 0.182937 9.26926 0.539317 8.59495Z"
          fill={fillColor}
        />
      </svg>
    ),
    like: (
      <svg
        width={width}
        height={height}
        viewBox="0 0 32 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.4601 2.83243C27.3537 0.605487 24.7098 -0.297098 21.5975 0.158412C19.663 0.440997 17.9907 1.39841 16.4818 3.07705C16.34 3.23732 16.2024 3.40181 16.0648 3.57052L15.9918 3.65909L15.9101 3.55787C15.7639 3.38073 15.6221 3.2078 15.4716 3.03909C12.9353 0.276508 9.88309 -0.604989 6.40101 0.424127C3.29723 1.33937 1.25097 3.51991 0.322415 6.89406C0.214943 7.27787 0.15047 7.67433 0.0902855 8.06236C0.0601935 8.2395 0.030092 8.42086 0 8.59801V10.4116L0.0300952 10.5803C0.0515895 10.7111 0.0773931 10.8418 0.0945886 10.9726C0.339624 12.6512 1.01023 14.2539 2.14513 15.8693C3.28003 17.4847 4.71155 19.0115 6.7965 20.8167C8.76108 22.5164 10.7815 24.2245 12.7332 25.8737L14.6032 27.4553C15.0374 27.8222 15.5146 28.0078 15.9961 28.0078C16.4775 28.0078 16.9676 27.818 17.4147 27.4426L19.3019 25.8441C21.2235 24.2161 23.2138 22.5375 25.1483 20.863C26.9796 19.2814 28.351 17.8601 29.4644 16.4007C31.2613 14.0346 32.091 11.6685 31.9921 9.16739C31.8932 6.62835 31.0421 4.4942 29.4644 2.82399L29.4601 2.83243ZM29.7782 10.1543C29.6535 11.9722 28.8883 13.6888 27.3665 15.5572C25.8834 17.3792 24.1209 18.9313 22.4401 20.3696C20.9398 21.6518 19.4308 22.9171 17.9219 24.1866L16.0176 25.7893C16.0176 25.7893 16.0004 25.8062 15.9875 25.8104L14.2335 24.3342C12.759 23.0942 11.2931 21.8584 9.83149 20.6184C8.2968 19.3152 6.67614 17.8896 5.25322 16.3079C4.17421 15.1059 3.00491 13.6339 2.51055 11.8077C1.71096 8.8595 2.2784 6.3078 4.19569 4.22426C5.38218 2.93365 7.14899 2.17025 8.93732 2.17025C8.97171 2.17025 9.00613 2.17025 9.04052 2.17025C10.8761 2.19977 12.5828 3.03066 13.8509 4.50263C14.2163 4.92862 14.5344 5.38835 14.801 5.78481C15.1019 6.23188 15.5361 6.48916 15.9961 6.48916H16.0133C16.4732 6.48495 16.8988 6.21923 17.1868 5.76794C17.9262 4.59964 18.7516 3.74345 19.6974 3.14032C22.4444 1.40263 26.0812 2.04372 28.1575 4.63338C29.3956 6.18127 29.9244 7.98644 29.7782 10.1543Z"
          fill={fillColor}
        />
      </svg>
    ),
    liked: (
      <svg
        width={width}
        height={height}
        viewBox="0 0 33 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.461426 9.90824C0.461426 9.35251 0.461426 8.79255 0.461426 8.23682C0.546269 7.7617 0.614137 7.28234 0.720191 6.81146C1.47105 3.39652 4.04182 0.626385 7.62644 0.0961147C9.38694 -0.162657 11.0541 0.0961147 12.611 0.978484C14.0448 1.79298 15.1181 2.9723 15.9877 4.35525C16.0938 4.52493 16.1998 4.69462 16.3059 4.86855C16.6495 4.36373 16.9465 3.88012 17.2901 3.43045C18.7112 1.57239 20.5056 0.312465 22.894 0.053693C24.7181 -0.145689 26.4319 0.206411 27.9888 1.17362C30.4959 2.7305 31.7601 5.07217 32.1037 7.9526C32.4176 10.5912 31.6922 12.9668 30.2287 15.1473C28.8839 17.1496 27.1998 18.8507 25.4053 20.4373C22.6861 22.8426 19.9245 25.2012 17.1798 27.5768C16.5265 28.1411 16.132 28.1411 15.4744 27.5768C13.0776 25.5109 10.6723 23.445 8.28397 21.3663C6.49378 19.8094 4.75874 18.1847 3.27823 16.3181C2.22617 14.9946 1.34804 13.565 0.885642 11.9233C0.698987 11.2615 0.609901 10.5785 0.474152 9.90399L0.461426 9.90824Z"
          fill={fillColor}
        />
      </svg>
    ),
    post: (
      <svg
        width={width}
        height={height}
        viewBox="0 0 29 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.9416 0.104473C22.8175 0.0851263 22.6933 0.0580403 22.5692 0.0309551L22.4179 0H6.78493C6.65691 0.0270851 6.52891 0.0541691 6.40089 0.0773849C6.10608 0.135424 5.83066 0.189598 5.563 0.274723C2.89414 1.13371 1.24938 2.95615 0.675266 5.68787L0.56665 6.20249V21.7958C0.593804 21.9235 0.620961 22.0512 0.648115 22.1788C0.706302 22.4574 0.76449 22.7476 0.842073 23.0262C1.58687 25.6651 3.92599 27.6423 6.66855 27.948C6.96724 27.9828 7.26594 27.9983 7.56076 27.9983C12.2584 27.9983 16.9522 28.0021 21.6498 27.9983C25.0441 27.9983 27.7983 25.7773 28.5004 22.4729C28.5857 22.0705 28.6284 21.6681 28.6284 21.2773C28.6362 16.6148 28.6439 11.6505 28.6284 6.72485C28.6207 3.53268 26.1225 0.626827 22.9416 0.10834V0.104473ZM26.6384 21.0993C26.6345 23.8388 24.47 25.994 21.7158 26.0056C20.7887 26.0095 19.8654 26.0095 18.9383 26.0095C18.209 26.0095 17.4836 26.0095 16.7543 26.0095H12.4252C10.796 26.0095 9.1706 26.0095 7.54136 26.0095C5.12853 26.0056 3.16568 24.423 2.65751 22.0782C2.59545 21.7881 2.56441 21.4592 2.56053 21.1032C2.55665 16.371 2.55277 11.6427 2.56053 6.91058C2.56441 4.15563 4.73285 1.99656 7.49869 1.99269C12.2312 1.98496 16.9677 1.98496 21.7003 1.99269C24.4661 1.99656 26.6345 4.1595 26.6384 6.91058C26.6462 11.7936 26.6462 16.5684 26.6384 21.1032V21.0993Z"
          fill={fillColor}
        />
        <path
          d="M20.3037 14.9896C20.4317 14.9896 20.5791 14.9896 20.7188 14.9664C21.1377 14.9044 21.4946 14.5059 21.5179 14.0764C21.5334 13.7746 21.4442 13.5154 21.2657 13.3219C21.0679 13.1168 20.7808 13.0046 20.4317 13.0046C19.4852 13.0046 18.5426 13.0046 17.5961 13.0046H16.1259C16.0522 13.0046 15.9746 13.0007 15.897 12.9969L15.5983 12.9814V10.6676C15.5983 9.83953 15.5983 9.01536 15.5983 8.18733C15.5983 7.74623 15.4509 7.44442 15.1289 7.24322C14.8031 7.04202 14.4695 7.02654 14.1359 7.2084C13.779 7.39799 13.6083 7.6998 13.6083 8.12929V13.0046H8.91065C8.7904 13.0046 8.66626 13.0046 8.54601 13.0201C8.25895 13.051 8.00293 13.2097 7.84388 13.4535C7.68096 13.6972 7.63828 13.9952 7.72363 14.2737C7.86715 14.7458 8.22404 14.9896 8.78651 14.9896C9.80673 14.9896 10.8231 14.9896 11.8433 14.9896H13.6122V19.6792C13.6122 19.7991 13.6122 19.9229 13.6277 20.0429C13.6587 20.3215 13.8178 20.5768 14.0583 20.7355C14.2988 20.8941 14.5936 20.9444 14.8651 20.8632C15.35 20.7239 15.5983 20.364 15.6022 19.7914C15.6022 18.7699 15.6022 17.7484 15.6022 16.7308V14.9896H17.0918C18.1663 14.9896 19.2369 14.9896 20.3115 14.9896H20.3037Z"
          fill={fillColor}
        />
      </svg>
    ),
    search: (
      <svg
        width={width}
        height={height}
        viewBox="0 0 29 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28.6932 27.2136C28.8256 26.7758 28.6888 26.3124 28.3092 25.9383C26.6759 24.3358 25.0382 22.6907 23.458 21.1009C22.8179 20.4548 22.1779 19.8129 21.5334 19.171C21.4849 19.12 21.4363 19.069 21.3877 19.018L21.1097 18.7162L21.3259 18.4611C25.7489 13.2496 24.2525 6.7543 20.602 3.29412C16.2982 -0.786686 9.77407 -1.114 5.08623 2.52472C0.698548 5.92964 -0.533002 11.8553 2.16405 16.6078C3.57217 19.0945 5.66007 20.8331 8.37037 21.7725C12.0606 23.052 15.6714 22.6057 19.1012 20.4463L19.3881 20.2635L19.6927 20.595C19.7368 20.646 19.781 20.6928 19.8251 20.7396L22.1249 23.0435C23.4801 24.3995 24.8352 25.7556 26.1859 27.1116L26.3139 27.2391C26.6229 27.5537 26.9143 27.8512 27.2939 28H27.775C27.8059 27.9872 27.8368 27.9745 27.8721 27.9702C28.2694 27.8852 28.574 27.6047 28.6932 27.2178V27.2136ZM12.3961 20.1912H12.3828C9.91091 20.1912 7.58464 19.2645 5.8278 17.5769C4.06655 15.8851 3.09544 13.6449 3.09544 11.2602C3.09544 8.87122 4.06656 6.61827 5.83664 4.91369C7.59348 3.22185 9.91533 2.29518 12.374 2.29518H12.4005C17.5165 2.30793 21.6791 6.32922 21.6791 11.2517C21.6791 16.1742 17.5121 20.187 12.3917 20.1912H12.3961Z"
          fill={fill}
        />
      </svg>
    ),
    send: (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_116_259)">
          <path
            d="M0 22.5602C0.140486 21.9757 0.285747 21.3544 0.439191 20.7358C0.979313 18.563 1.52285 16.3915 2.06433 14.2194C2.18777 13.7236 2.28461 13.637 2.78177 13.5817C5.65492 13.2605 8.52807 12.94 11.4012 12.6181C11.7763 12.5758 12.0191 12.3248 12.0116 11.99C12.0041 11.6646 11.7668 11.4307 11.3992 11.3898C8.48375 11.0652 5.56831 10.7412 2.65219 10.4166C2.35076 10.3832 2.183 10.2502 2.11002 9.95898C1.43283 7.25011 0.75358 4.54192 0.0852466 1.83099C-0.0456922 1.30109 0.0170493 0.793684 0.426915 0.383125C0.842237 -0.0328907 1.42737 -0.116776 2.005 0.164205C3.55649 0.918489 5.10662 1.67686 6.65674 2.43456C12.0784 5.08478 17.5001 7.735 22.9204 10.3873C23.8922 10.8626 24.266 11.8979 23.8002 12.8043C23.597 13.2005 23.2689 13.4535 22.8741 13.6458C18.9704 15.5506 15.0702 17.4609 11.168 19.3684C8.12162 20.8579 5.07456 22.3474 2.02614 23.8328C1.21937 24.2263 0.371675 23.903 0.108434 23.1064C0.0559218 22.9468 0.0409184 22.775 0 22.5602Z"
            fill={fillColor}
          />
        </g>
        <defs>
          <clipPath id="clip0_116_259">
            <rect width={width} height={height} fill={fillColor} />
          </clipPath>
        </defs>
      </svg>
    ),
    settings: (
      <svg
        width={width}
        height={height}
        viewBox="0 0 29 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
          <path
            d="M10.1077 0C10.7105 0.0332795 11.1793 0.276537 11.5537 0.722641C12.1807 1.46905 12.9755 1.93497 13.9576 2.0665C15.3196 2.25033 16.4526 1.80977 17.3644 0.815349C18.1156 -0.00158478 18.7418 -0.156097 19.7811 0.244842C21.1771 0.782861 22.4545 1.51897 23.6164 2.45001C24.379 3.06172 24.5702 3.71621 24.2491 4.63299C23.4728 6.85162 24.8639 9.15346 27.2153 9.54251C28.0755 9.68434 28.6016 10.1938 28.771 11.0512C29.0946 12.6914 29.0672 14.3316 28.7428 15.9678C28.5984 16.6944 27.9867 17.2491 27.2371 17.3608C25.1811 17.6667 23.8488 19.2173 23.9311 21.2545C23.9465 21.6404 24.0594 22.0342 24.1885 22.4027C24.4911 23.2632 24.3104 23.97 23.5954 24.5476C22.469 25.458 21.2271 26.1775 19.8804 26.7235C19.0767 27.0491 18.2633 26.8336 17.7186 26.1609C16.0854 24.1403 13.212 24.1689 11.6344 26.2211C11.0696 26.9564 10.2893 27.1799 9.41781 26.8542C7.93953 26.3019 6.58874 25.5333 5.36545 24.5484C4.66988 23.9882 4.49558 23.2355 4.86112 22.3662C5.74551 20.2641 4.6255 17.9559 2.42018 17.341C2.27574 17.3006 2.12807 17.2649 1.9796 17.2467C0.832154 17.1041 0.28264 16.5661 0.130938 15.4496C-0.076441 13.9283 -0.0369018 12.4156 0.251977 10.9078C0.407713 10.0948 1.03227 9.51953 1.8747 9.42286C4.35357 9.13919 5.85848 6.75891 5.01605 4.4547C4.67391 3.51891 4.88452 2.81767 5.6866 2.20992C6.82436 1.34624 8.06864 0.66876 9.41378 0.173529C9.63649 0.0919149 9.87695 0.0570506 10.1085 0L10.1077 0ZM19.3333 13.5139C19.351 10.9426 17.1748 8.78025 14.5506 8.76282C11.8838 8.74539 9.67926 10.8721 9.66715 13.4742C9.65505 16.0819 11.8063 18.2308 14.4498 18.2538C17.1247 18.2768 19.3147 16.1509 19.3325 13.5139H19.3333Z"
            fill={fillColor}
          />
      </svg>
    ),
  };

  return icons[name] || null;
};
