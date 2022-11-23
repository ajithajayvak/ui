const Salutation = [
  {
    label: "Select Title",
    value: "",
  },
  {
    label: "Mr.",
    value: "Mr",
  },
  {
    label: "Mrs.",
    value: "Mrs",
  },
  {
    label: "Ms.",
    value: "Ms",
  },
  {
    label: "Miss.",
    value: "Miss",
  },
  {
    label: "Dr.",
    value: "Dr",
  },
  {
    label: "Rev.",
    value: "Rev",
  },
  {
    label: "Dame.",
    value: "Dame",
  },
  {
    label: "Lady.",
    value: "Lady",
  },
  {
    label: "Sir.",
    value: "Sir",
  },
  {
    label: "Lord.",
    value: "Lord",
  },
];
export const DobDay = [{ label: "Day", value: "" }];
const startDay = 1;
const endDay = 31;
for (var i = startDay; i <= endDay; i++) {
  var objDobDay = {};
  objDobDay["label"] = i;
  objDobDay["value"] = i;
  DobDay.push(objDobDay);
}

export const DobMonth = [
  { label: "Month", value: "" },
  { label: "January", value: "January" },
  { label: "February", value: "February" },
  { label: "March", value: "March" },
  { label: "April", value: "April" },
  { label: "May", value: "May" },
  { label: "June", value: "June" },
  { label: "July", value: "July" },
  { label: "August", value: "August" },
  { label: "September", value: "September" },
  { label: "October", value: "October" },
  { label: "November", value: "November" },
  { label: "December", value: "December" },
];
export const DobYear = [{ label: "Year", value: "" }];
const startYear = 1989;
const endYear = 1910;
for (var k = startYear; k >= endYear; k--) {
  var objDob = {};
  objDob["label"] = k;
  objDob["value"] = k;
  DobYear.push(objDob);
}
export { Salutation };
