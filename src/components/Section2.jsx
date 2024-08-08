import React from 'react'

export default function Section2() {
  const items = [
    "Capacité d'apprentissage",
    "Collaboration",
    "Responsabilité",
    "Prise de décision",
    "Gestion du temps",
  ];

  return (
    <>
      <div className="flex flex-col space-y-4 bg-w">
        <div className="flex pt-10">
          <h1 className="uppercase text-center w-full text-2xl font-bold text-gray-900">
            présentation
          </h1>
        </div>
        <div className="flex flex-col items-center  justify-between p-10 sm:flex-row">
          <div className="left w-full sm:w-1/2 ">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 font-bold"
              >
                <span className="bg-y rounded-full w-8 h-8 flex items-center justify-center font-bold text-w my-1">
                  {index + 1}
                </span>
                <p className="text-gray-800 font-medium text-2xl ">{item}</p>
              </div>
            ))}
          </div>
          <div className="right w-full sm:w-1/2 my-10 sm:my-0">
            <h1 className="text-2xl font-bold text-g">Triforce !</h1>
            <p className="mb-10 font-semibold text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              magnam ea culpa quam error, maxime porro architecto sit aspernatur
              repellat sint eveniet cupiditate quisquam tempore similique minima
              ab quidem ratione.magnam ea culpa quam error, maxime porro
              architecto sit aspernaturrepellat sint eveniet cupiditate quisquam
              tempore similique minima ab quidem ratione.
            </p>
            <p className="mb-10 font-semibold text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              magnam ea culpa quam error, maxime porro architecto sit aspernatur
              repellat sint eveniet cupiditate quisquam tempore similique minima
              ab quidem ratione.magnam ea culpa quam error, maxime porro
              architecto sit aspernaturrepellat sint eveniet cupiditate quisquam
              tempore similique minima ab quidem ratione.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
