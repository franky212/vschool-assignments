function ClickIt() {
  return (document.getElementById("click").addEventListener("click", function() {
    document.getElementById("click").innerText = "kill me";
  }));
}

export default ClickIt;
