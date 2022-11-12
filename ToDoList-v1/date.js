// Two ways to do Modules vvv

//#1

exports.getDate = function(){
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  return today.toLocaleDateString("en-US", options);
};

//#2

module.exports.getDay = getDay;

function getDay(){
  let today = new Date();
  let options = {
    weekday: "long",
  };
  return today.toLocaleDateString("en-US", options);
}
