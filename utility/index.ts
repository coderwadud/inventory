
export const DataCreate = (
  data: any,
  dbCollection: string,
  massage: (message: string) => void
) => {
  if (!data || Object.keys(data).length === 0) {
    massage("Creation Unsuccessful");
    return;
  }
  const currentData = JSON.parse(localStorage.getItem(dbCollection) || "[]");
  const newItem = { ...data, id: Date.now().toString() };
  const updatedData = [...currentData, newItem];
  localStorage.setItem(dbCollection, JSON.stringify(updatedData));
  massage("Created successfully!");
};

export const updatedData = (
  data: any,
  dbCollection: string,
  massage: (message: string) => void,
  id?: string
) => {
  const currentData = JSON.parse(localStorage.getItem(dbCollection) || "[]");
  const updatedData = currentData.map((item: any) =>
    item.id === id ? { ...item, ...data } : item
  );
  localStorage.setItem(dbCollection, JSON.stringify(updatedData));
  massage("Updated successfully!");
};
