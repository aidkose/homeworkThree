function btnListeners() {
  $(".btn.view").click(function () {
    console.log("view btn clicked");
    alert("This is the view button.");
  });
  $(".btn.edit").click(function () {
    console.log("edit btn clicked");
    alert("This is the edit button.");
  });
  $(".btn.del").click(function () {
    console.log("delete btn clicked");
    alert("This is the delete button.");
  });
}

$(document).ready(function () {
  btnListeners();
});
