export const renderHomePage = (req, res) => {
  const user = "Ujwal Bholan";
  res.render("pages/home", { user });
};
