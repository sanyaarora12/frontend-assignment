import React from "react";
import BasicCard from "../BasicCard";

const data = [
  {
    name: "React Js 1",
    videoUrl:
      "https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=1&ab_channel=Codevolution",
  },
  {
    name: "React Js 2",
    videoUrl:
      "https://www.youtube.com/watch?v=9hb_0TZ_MVI&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=2&ab_channel=Codevolution",
  },
  {
    name: "React Js 3",
    videoUrl:
      "https://www.youtube.com/watch?v=9VIiLJL0H4Y&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=3&ab_channel=Codevolution",
  },
];

export default function Home() {
  const [cardsData, setCardsData] = React.useState(data);
  const handleDeleteCard = (cardId) => {
    setCardsData(cardsData.filter((card) => card.name !== cardId));
  };
  return (
    <div>
      <div className="container">
        {cardsData.map((card) => (
          <BasicCard
            key={card.name}
            name={card.name}
            videoUrl={card.videoUrl}
            onDeleteCard={handleDeleteCard}
          />
        ))}
      </div>
      {/* <BasicCard /> */}
      {/* <Routers /> */}
    </div>
  );
}
