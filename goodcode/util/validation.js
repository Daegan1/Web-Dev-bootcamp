const { post } = require("../routes/auth");

function postIsValid(title, content) {
  return title && content && title.trim() !== "" && content.trim() !== "";
}
module.exports = {
  postIsValid: postIsValid,
};
