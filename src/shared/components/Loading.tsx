const Loading = ({ className }: { className?: string }) => (
  <div className="bg-dark-1 w-full h-screen">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <circle cx="84" cy="50" r="10" fill="#0051a2">
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="0.5681818181818182s"
        calcMode="spline"
        keyTimes="0;1"
        values="10;0"
        keySplines="0 0.5 0.5 1"
        begin="0s"
      ></animate>
      <animate
        attributeName="fill"
        repeatCount="indefinite"
        dur="2.272727272727273s"
        calcMode="discrete"
        keyTimes="0;0.25;0.5;0.75;1"
        values="#0051a2;#89bff8;#408ee0;#1b75be;#0051a2"
        begin="0s"
      ></animate>
    </circle>
    <circle cx="16" cy="50" r="10" fill="#4b5563">
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="2.272727272727273s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="0;0;10;10;10"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="0s"
      ></animate>
      <animate
        attributeName="cx"
        repeatCount="indefinite"
        dur="2.272727272727273s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="16;16;16;50;84"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="0s"
      ></animate>
    </circle>
    <circle cx="50" cy="50" r="10" fill="#6b7280">
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="2.272727272727273s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="0;0;10;10;10"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-0.5681818181818182s"
      ></animate>
      <animate
        attributeName="cx"
        repeatCount="indefinite"
        dur="2.272727272727273s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="16;16;16;50;84"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-0.5681818181818182s"
      ></animate>
    </circle>
    <circle cx="84" cy="50" r="10" fill="#9ca3af">
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="2.272727272727273s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="0;0;10;10;10"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-1.1363636363636365s"
      ></animate>
      <animate
        attributeName="cx"
        repeatCount="indefinite"
        dur="2.272727272727273s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="16;16;16;50;84"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-1.1363636363636365s"
      ></animate>
    </circle>
    <circle cx="16" cy="50" r="10" fill="#d1d5db">
      <animate
        attributeName="r"
        repeatCount="indefinite"
        dur="2.272727272727273s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="0;0;10;10;10"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-1.7045454545454546s"
      ></animate>
      <animate
        attributeName="cx"
        repeatCount="indefinite"
        dur="2.272727272727273s"
        calcMode="spline"
        keyTimes="0;0.25;0.5;0.75;1"
        values="16;16;16;50;84"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        begin="-1.7045454545454546s"
      ></animate>
    </circle>
  </svg>
  </div>
)

export default Loading
