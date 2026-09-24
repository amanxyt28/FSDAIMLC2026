import ICard from "./ICard";
import aman from "../image/aman.jpg";

function ICardGallery() {
  return (
    <div>
      <ICard
        pic={aman}
        rollno="0024"
        Name="Aman"
        Branch="AIML"
      />
    </div>
  );
}

export default ICardGallery;