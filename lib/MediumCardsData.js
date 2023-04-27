import fsPromises from "fs/promises";
import path from "path";

export async function getCardsData() {
  const filePath = path.join(process.cwd(), "/json/MediumCards.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return objectData;
}
