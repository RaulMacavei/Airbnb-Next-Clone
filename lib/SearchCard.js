import fsPromises from "fs/promises";
import path from "path";

export async function getSearchData() {
  const filePath = path.join(process.cwd(), "/json/SearchCards.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return objectData;
}
