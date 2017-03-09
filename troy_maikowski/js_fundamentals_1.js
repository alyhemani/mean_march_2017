var newNinja = {
  name: "Troy",
  profession: "Coder",
  favorite_language: "JavaScript",
  dojo: "Dallas"
}

for (var key in newNinja) {
  console.log(key, ":", newNinja[key]);
}
