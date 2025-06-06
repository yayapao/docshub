import React from 'react'

type Props = {
  onMouseEnter?: (event: React.MouseEvent<SVGGElement, MouseEvent>) => void
  onMouseLeave?: (event: React.MouseEvent<SVGGElement, MouseEvent>) => void
  onClick?: (event: React.MouseEvent<SVGGElement, MouseEvent>) => void
  className?: string
}

const Planet: React.FC<Props> = (props) => {
  const { onMouseEnter, onMouseLeave, onClick, className } = props
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 216 216"
      height="256px"
      id="planet"
      version="1.1"
      viewBox="0 0 512 512"
      width="256px"
      transform="translate(150 0)"
    >
      <g onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
        <path
          d="M477.322,132.487h-70.021c-36.232-39.089-88.01-63.563-145.512-63.563  c-109.562,0-198.378,88.816-198.378,198.377c0,23.45,4.081,45.945,11.551,66.827H62.884c-4.63,0-8.419,3.789-8.419,8.419  c0,4.631,3.789,8.42,8.419,8.42H81.88c1.831,3.93,3.78,7.792,5.855,11.576H33.417c-10.129,0-18.417,8.287-18.417,18.417  s8.288,18.417,18.417,18.417h80.368c36.329,40.682,89.17,66.301,148.004,66.301c109.561,0,198.377-88.816,198.377-198.377  c0-24.607-4.492-48.161-12.682-69.904c9.91-0.255,17.943-8.423,17.943-18.393v0c0-10.129-8.287-18.417-18.416-18.417h-17.967  c-2.461-3.848-5.055-7.601-7.768-11.262h56.045c4.629,0,8.418-3.789,8.418-8.419C485.74,136.276,481.951,132.487,477.322,132.487z"
          fill="#598889"
        />
        <path
          d="M477.322,132.487H363.555c-28.303-21.398-63.551-34.096-101.766-34.096  c-93.288,0-168.911,75.624-168.911,168.911c0,23.74,4.906,46.33,13.746,66.827h-43.74c-4.63,0-8.419,3.789-8.419,8.419  c0,4.631,3.789,8.42,8.419,8.42h52.143c2.265,3.963,4.687,7.822,7.255,11.576H33.417c-10.129,0-18.417,8.287-18.417,18.417  s8.288,18.417,18.417,18.417h123.085c28.875,23.049,65.468,36.834,105.287,36.834c93.285,0,168.91-75.623,168.91-168.91  c0-24.924-5.402-48.583-15.092-69.88h31.404c10.129,0,18.416-8.288,18.416-18.417v0c0-10.129-8.287-18.417-18.416-18.417h-54.297  c-3.186-3.904-6.545-7.66-10.061-11.262h94.668c4.629,0,8.418-3.789,8.418-8.419C485.74,136.276,481.951,132.487,477.322,132.487z"
          fill="#466C6F"
        />
        <circle cx="160.177" cy="156.138" fill="#F4F4F4" r="101.753" />
        <path
          d="M186.512,254.425c52.181-13.982,83.96-66.082,73.423-118.313L63.77,188.674  C80.761,239.176,134.333,268.406,186.512,254.425z"
          fill="#E0E0E0"
        />
        <path
          d="M137.079,82.605c9.881,0,17.891-8.01,17.891-17.891c0-3.708-1.128-7.151-3.059-10.007  c-6.003,0.496-12.045,1.531-18.069,3.146c-5.053,1.354-9.914,3.066-14.564,5.101c-0.057,0.58-0.089,1.167-0.089,1.761  C119.188,74.595,127.198,82.605,137.079,82.605z"
          fill="#E2D9D9"
        />
        <circle cx="171.282" cy="73.66" fill="#E2D9D9" r="6.841" />
        <ellipse
          cx="137.079"
          cy="209.946"
          fill="#D3CDCD"
          rx="19.996"
          ry="14.733"
        />
        <ellipse
          cx="92.878"
          cy="144.143"
          fill="#E2D9D9"
          rx="17.891"
          ry="13.183"
          transform="matrix(0.9659 -0.2588 0.2588 0.9659 -34.1414 28.9493)"
        />
        <path
          d="M127.084,252.371c0.992-1.44,1.575-3.184,1.575-5.065c0-4.94-4.005-8.946-8.946-8.946  c-4.223,0-7.753,2.931-8.692,6.866C116.152,248.058,121.525,250.454,127.084,252.371z"
          fill="#D3CDCD"
        />
        <circle cx="207.063" cy="206.262" fill="#D3CDCD" r="8.945" />
        <circle cx="82.88" cy="177.847" fill="#E2D9D9" r="8.946" />
        <ellipse
          cx="224.954"
          cy="134.173"
          fill="#E2D9D9"
          rx="25.784"
          ry="17.891"
          transform="matrix(0.9659 -0.2588 0.2588 0.9659 -27.0613 62.7942)"
        />
        <ellipse
          cx="181.806"
          cy="167.85"
          fill="#D3CDCD"
          rx="21.574"
          ry="15.786"
        />
        <path
          d="M249.686,167.85c-10.462,0-18.943,8.481-18.943,18.943c0,10.242,8.134,18.564,18.292,18.91  c5.883-10.544,9.903-22.133,11.753-34.236C257.666,169.201,253.837,167.85,249.686,167.85z"
          fill="#D3CDCD"
        />
        <path
          d="M197.066,234.151c-5.231,0-9.472,4.241-9.472,9.472c0,3.909,2.369,7.263,5.749,8.71  c4.342-1.492,8.527-3.251,12.537-5.262c0.419-1.069,0.657-2.23,0.657-3.449C206.537,238.392,202.296,234.151,197.066,234.151z"
          fill="#D3CDCD"
        />
        <path
          d="M82.775,330.062L82.775,330.062c0-3.693,3.021-6.715,6.714-6.715h95.601c3.693,0,6.714,3.021,6.714,6.715  l0,0c0,3.693-3.021,6.715-6.714,6.715H89.489C85.796,336.776,82.775,333.755,82.775,330.062z"
          fill="#5AA096"
        />
        <path
          d="M332.193,217.65L332.193,217.65c0-5.583,4.568-10.149,10.15-10.149h144.508  c5.582,0,10.148,4.566,10.148,10.149l0,0c0,5.582-4.566,10.149-10.148,10.149H342.344  C336.762,227.799,332.193,223.231,332.193,217.65z"
          fill="#5AA096"
        />
        <circle cx="348.25" cy="315.438" fill="#B8E3EB" r="54.198" />
        <path
          d="M402.424,316.736c0.08-3.162-0.109-6.284-0.564-9.335c-0.055-0.002-0.111-0.008-0.164-0.01  c-33.297-1.093-66.293-10.137-95.541-26.082c-3.439,4.233-6.264,9.018-8.32,14.242c13.064,8.526,30.045,11.225,45.91,13.35  c19.27,2.581,38.539,5.162,57.809,7.742C401.834,316.681,402.127,316.711,402.424,316.736z"
          fill="#71B7D3"
        />
        <path
          d="M352.762,331.21c-19.322-6.088-38.727-13.161-58.709-15.559c0.02,7.021,1.4,13.815,3.938,20.078  c11.438-1.835,23.533-0.509,34.924,2.153c16.279,3.804,31.916,10.139,48.324,13.342c2.217,0.433,4.506,0.784,6.807,1.008  c2.535-2.737,4.789-5.751,6.73-8.994C380.697,339.481,366.658,335.587,352.762,331.21z"
          fill="#71B7D3"
        />
        <path
          d="M356.766,261.912c-14.434-2.296-28.432,1.345-39.537,9.101c8.193,4.851,18.221,7.408,27.66,9.556  c8.752,1.991,17.504,3.981,26.256,5.973c8.375,1.905,16.832,3.8,25.385,4.283C388.918,275.927,374.549,264.741,356.766,261.912z"
          fill="#71B7D3"
        />
        <path
          d="M339.736,368.964c8.814,1.402,17.467,0.579,25.4-2.029c-8.943-1.356-17.855-5.584-26.217-9.459  c-10.053-4.656-21.65-8.855-32.168-7.197C314.85,359.93,326.316,366.829,339.736,368.964z"
          fill="#71B7D3"
        />
        <path
          d="M397.4,338.274c1.568-3.383,2.807-6.969,3.666-10.729c-9.207,1.154-18.799-1.626-27.17-5.724  c-28.729-14.063-52.838-8.688-78.68-17.56c-0.184,0.879-0.35,1.765-0.492,2.66c-0.203,1.28-0.344,2.556-0.455,3.828  c8.637-0.003,17.314,2.036,25.779,4.074C346.273,321.14,372.713,327.543,397.4,338.274z"
          fill="#71B7D3"
        />
        <circle cx="92.878" cy="266.775" fill="#66B2B2" r="8.419" />
        <circle cx="149.09" cy="288.876" fill="#66B2B2" r="17.891" />
        <circle cx="419.403" cy="77.459" fill="#66B2B2" r="20.131" />
        <circle cx="387.842" cy="425.655" fill="#66B2B2" r="20.131" />
        <circle cx="423.332" cy="258.356" fill="#66B2B2" r="8.42" />
        <circle cx="306.516" cy="399.378" fill="#66B2B2" r="8.42" />
        <circle cx="293.887" cy="73.134" fill="#66B2B2" r="8.42" />
        <circle cx="306.516" cy="240.465" fill="#66B2B2" r="8.42" />
        <path
          d="M278.35,140.636L51.23,201.493c-5.048,1.353-10.285-1.671-11.637-6.719l-0.303-1.13  c-1.353-5.048,1.671-10.285,6.719-11.638l227.12-60.856c5.047-1.353,10.285,1.671,11.637,6.719l0.303,1.13  C286.422,134.047,283.398,139.284,278.35,140.636z"
          fill="#52C9D5"
        />
        <path
          d="M51.23,201.493l227.119-60.856c4.93-1.321,7.916-6.344,6.795-11.279L39.706,195.122  C41.204,199.957,46.302,202.813,51.23,201.493z"
          fill="#49BAC0"
        />
        <circle cx="230.216" cy="379.909" fill="#FF7143" r="28.941" />
        <path
          d="M220.67,352.587c-0.125,0.044-0.245,0.094-0.368,0.14l19.086,54.624c0.125-0.042,0.25-0.077,0.375-0.121  c15.088-5.271,23.048-21.777,17.774-36.867C252.265,355.273,235.759,347.315,220.67,352.587z"
          fill="#E5603C"
        />
        <polygon
          fill="#FFD326"
          points="354.197,46.321 359.391,56.842 371,58.529 362.6,66.719 364.582,78.283 354.197,72.823   343.813,78.283 345.795,66.719 337.395,58.529 349.004,56.842 "
        />
        <polygon
          fill="#FFD326"
          points="439.197,412.321 444.391,422.843 456,424.529 447.6,432.719 449.582,444.282 439.197,438.823   428.813,444.282 430.795,432.719 422.395,424.529 434.004,422.843 "
        />
        <polygon
          fill="#FFD326"
          points="479.197,238.321 484.391,248.842 496,250.529 487.6,258.719 489.582,270.282 479.197,264.823   468.813,270.282 470.795,258.719 462.395,250.529 474.004,248.842 "
        />
        <polygon
          fill="#FFD326"
          points="35.197,291.321 40.39,301.843 52,303.529 43.599,311.719 45.582,323.282 35.197,317.823   24.812,323.282 26.795,311.719 18.394,303.529 30.005,301.843 "
        />
      </g>
    </svg>
  )
}

export default Planet
