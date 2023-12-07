"use client";
export default function CloudCardBig({ children, runAnimate = false }: any) {
  return (
    <div
      className={`bg-[url('/img/cloud.png')] bg-cover
        h-[400px] w-[440px] p-10 pt-20 pb-20
        absolute left-[160px] transform -translate-x-1/2 top-[40%] -translate-y-1/2
        ${runAnimate ? "animate-fadein" : ""}`}
    >
      {children}
    </div>
  );
}
