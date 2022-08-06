import { ContentItem } from ".";
import { foundations, NGOS, collections } from "./data";

export const ContentWhoWeHelp = ({
  chosenStep,
  itemsPerPage,
  paginationStartNumber,
}) => {
  const paginationEndNumber = paginationStartNumber + itemsPerPage;
  let selectedArray;

  switch (chosenStep) {
    case "1":
      selectedArray = foundations;
      break;
    case "2":
      selectedArray = NGOS;
      break;
    case "3":
      selectedArray = collections;
      break;
    default:
      selectedArray = foundations;
      break;
  }

  return selectedArray.items
    .slice(paginationStartNumber, paginationEndNumber)
    .map((item) => (
      <ContentItem
        key={item.id}
        title={item.header}
        description={item.description}
        items={item.items}
      />
    ));
};
